const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const sortKey = a => a.nombre.replace(/^(the|los|las|el|la)\s+/i, '').toLowerCase();
const artistas = [...ARTISTAS].sort((a, b) => sortKey(a).localeCompare(sortKey(b), 'es'));
const paises = [...new Set(artistas.map(a => a.pais))].sort((a, b) => a.localeCompare(b, 'es'));
const pad = n => String(n).padStart(2, '0');

const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} }
};
const heroKey = id => 'cancionero:hero:' + id;
const heroOf = a => store.get(heroKey(a.id)) || a.hero || '';

const resumen = a => {
  const anios = a.canciones.map(c => c.anio).filter(Number.isFinite);
  return { n: a.canciones.length, desde: Math.min(...anios), hasta: Math.max(...anios), discos: new Set(a.canciones.filter(c => Number.isFinite(c.anio)).map(c => c.disco.split(' · ')[0])).size };
};

const fuse = new Fuse(artistas, {
  keys: [{ name: 'nombre', weight: 3 }, { name: 'pais', weight: 2 }, { name: 'ciudad', weight: 1 }, { name: 'integrantes', weight: 1 }, { name: 'genero', weight: .5 }],
  threshold: 0.38, ignoreLocation: true
});

const state = { q: '', pais: '' };
let swiper = null;

const CARTA = [
  'Mi melomanía empezó a los 15 o 16 años, la primera vez que escuché «A Hard Day’s Night» de The Beatles. En ese instante quedé atrapado: no hubo vuelta atrás ni forma de escapar del deseo constante de seguir descubriendo joyas ocultas.',
  'Creo firmemente que la música es subjetiva y habla distinto a cada persona, pero estoy seguro de que estas listas le sacarán más de una sonrisa a la gran mayoría. Una de esas sonrisas que vienen acompañadas de un: «¿dónde estuvo esto todo este tiempo?». Eso mismo sentí yo con cada hallazgo.',
  'Hoy quiero compartir con ustedes años de bucear en las entrañas del rock para armar una lista casi infinita de tesoros. Ha sido un viaje largo e increíble, y lo mejor es que la búsqueda nunca termina.',
  'Espero que lo disfruten tanto como yo. ¡Bienvenidos!'
];
const FIRMA = 'Exequiel Fernández Montini';

function cartaHTML() {
  return `<section class="carta grid gap-4">
    <div class="flex items-end justify-between gap-4 border-b-4 border-ink pb-2">
      <h2 class="font-display font-black text-3xl sm:text-4xl leading-none">Carta del editor</h2>
      <span class="kicker text-red">Bienvenida</span>
    </div>
    <div class="article carta-body">${CARTA.map(p => `<p>${esc(p)}</p>`).join('')}</div>
    <div class="firma">
      <span class="firma-line" aria-hidden="true"></span>
      <span class="firma-name">${esc(FIRMA)}</span>
      <span class="kicker text-muted">Editor de Moonshiner</span>
    </div>
  </section>`;
}

/* ---------- vista: inicio ---------- */
function renderHome() {
  const total = artistas.reduce((s, a) => s + a.canciones.length, 0);
  $('#stats').textContent = `${artistas.length} ${artistas.length === 1 ? 'artista' : 'artistas'} · ${total} canciones`;

  $('#view').innerHTML = `
    <section class="view-enter grid gap-12">
      ${cartaHTML()}
      <div class="grid gap-3">
        <label for="q" class="kicker text-red">Buscar artista</label>
        <div class="search">
          <i class="fa-solid fa-magnifying-glass text-muted" aria-hidden="true"></i>
          <input id="q" type="search" autocomplete="off" placeholder="Artista, integrante o país…" value="${esc(state.q)}">
          <button id="q-clear" class="text-muted hover:text-red" aria-label="Borrar búsqueda" ${state.q ? '' : 'hidden'}><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="flex flex-wrap items-center gap-2 pt-1" role="group" aria-label="Filtrar por nacionalidad">
          <span class="kicker text-muted mr-1"><i class="fa-solid fa-earth-americas mr-1"></i>Nacionalidad</span>
          <button class="chip" data-pais="" aria-pressed="${!state.pais}">Todas</button>
          ${paises.map(p => `<button class="chip" data-pais="${esc(p)}" aria-pressed="${state.pais === p}">${esc(p)}</button>`).join('')}
        </div>
      </div>

      <div class="grid gap-4">
        <div class="flex items-end justify-between gap-4 border-b-4 border-ink pb-2">
          <h2 class="font-display font-black text-3xl sm:text-4xl leading-none">En portada</h2>
          <div class="flex gap-2">
            <button class="nav-btn js-prev" aria-label="Anterior"><i class="fa-solid fa-arrow-left"></i></button>
            <button class="nav-btn js-next" aria-label="Siguiente"><i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        <div class="swiper w-full">
          <div class="swiper-wrapper" id="carousel"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="grid gap-1">
        <div class="flex items-end justify-between gap-4 border-b-4 border-ink pb-2">
          <h2 class="font-display font-black text-3xl sm:text-4xl leading-none">En este número</h2>
          <span id="count" class="kicker text-muted"></span>
        </div>
        <div id="results"></div>
      </div>
    </section>`;

  $('#carousel').innerHTML = artistas.map(a => {
    const r = resumen(a), img = heroOf(a);
    return `<div class="swiper-slide">
      <a href="#${a.id}" class="cover">
        ${img ? `<img src="${esc(img)}" alt="" style="object-position:${esc(a.heroPos || 'center')}">` : ''}
        <span class="cover-top tag">${esc(a.pais)}</span>
        <span class="cover-body">
          <span class="cover-name">${esc(a.nombre)}</span>
          <span class="kicker" style="opacity:.85">${esc(a.anios)} · ${r.n} canciones</span>
        </span>
      </a>
    </div>`;
  }).join('');

  if (swiper) swiper.destroy(true, true);
  swiper = new Swiper('.swiper', {
    slidesPerView: 1.15, spaceBetween: 20, grabCursor: true,
    navigation: { prevEl: '.js-prev', nextEl: '.js-next' },
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: { 600: { slidesPerView: 2 }, 960: { slidesPerView: 3 } },
    a11y: { prevSlideMessage: 'Anterior', nextSlideMessage: 'Siguiente' }
  });

  const q = $('#q');
  q.addEventListener('input', () => { state.q = q.value; $('#q-clear').hidden = !q.value; renderResults(); });
  $('#q-clear').addEventListener('click', () => { state.q = ''; q.value = ''; $('#q-clear').hidden = true; q.focus(); renderResults(); });
  document.querySelectorAll('.chip').forEach(b => b.addEventListener('click', () => {
    state.pais = b.dataset.pais;
    document.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', c === b));
    renderResults();
  }));
  renderResults();
}

function renderResults() {
  let list = state.q.trim() ? fuse.search(state.q.trim()).map(r => r.item) : artistas;
  if (state.pais) list = list.filter(a => a.pais === state.pais);
  $('#count').textContent = list.length === 1 ? '1 artista' : `${list.length} artistas`;
  $('#results').innerHTML = list.length ? list.map(a => {
    const r = resumen(a), i = artistas.indexOf(a) + 1;
    return `<a class="toc-row" href="#${a.id}">
      <span class="toc-num">${pad(i)}</span>
      <span class="min-w-0 grid gap-1">
        <span class="toc-name">${esc(a.nombre)}</span>
        <span class="text-muted text-[.98rem]">${esc(a.bajada || a.genero)}</span>
      </span>
      <span class="kicker text-muted text-right">${esc(a.pais)}<br><span class="text-ink">${r.n} temas</span></span>
    </a>`;
  }).join('') : `
    <div class="py-10 grid gap-2 justify-items-center text-center">
      <i class="fa-solid fa-compact-disc text-4xl text-muted" aria-hidden="true"></i>
      <p class="text-lg">No hay ningún artista que coincida con “${esc(state.q)}”${state.pais ? ` en ${esc(state.pais)}` : ''}.</p>
      <p class="text-muted">Probá con otra palabra o elegí la nacionalidad “Todas”.</p>
    </div>`;
}

/* ---------- vista: artista ---------- */
function heroHTML(a, { tools = true } = {}) {
  const img = heroOf(a);
  return `<div class="hero">
    ${img ? `<img src="${esc(img)}" alt="Foto de ${esc(a.nombre)}" style="object-position:${esc(a.heroPos || 'center')}">` : (tools ? `<div class="hero-hint"><span><i class="fa-regular fa-image text-3xl block mb-2"></i>Espacio para la foto de portada</span></div>` : '')}
    ${tools ? `<div class="hero-tools">
      <label class="tool-btn" for="hero-file"><i class="fa-solid fa-upload"></i>${img ? 'Cambiar foto' : 'Subir foto'}</label>
      <input id="hero-file" type="file" accept="image/*" class="sr-only">
      ${img && store.get(heroKey(a.id)) ? `<button class="tool-btn" id="hero-remove"><i class="fa-solid fa-trash-can"></i>Quitar</button>` : ''}
    </div>` : ''}
    <div class="hero-text">
      <span><span class="tag">${esc(a.pais)}</span></span>
      <h1 class="hero-name">${esc(a.nombre)}</h1>
      <span class="kicker" style="opacity:.85">${esc(a.ciudad)} · ${esc(a.anios)}</span>
    </div>
  </div>`;
}

function songRow(a, c, i, n) {
  const on = isFav(a, c);
  return `<li class="song" data-artist="${a.id}" data-i="${i}">
    <span class="num">${pad(n)}</span>
    <button class="play" aria-pressed="false" aria-label="Escuchar un fragmento de ${esc(c.titulo)}"><i class="fa-solid fa-play"></i></button>
    <span class="title">${esc(c.titulo)}</span>
    <span class="meta">${esc(c.disco)}<span class="md:hidden"> · <span class="year">${c.anio ?? '—'}</span></span></span>
    <span class="meta yearcol hidden md:block"><span class="year">${c.anio ?? '—'}</span></span>
    <button class="fav" aria-pressed="${on}" aria-label="${on ? 'Quitar de' : 'Guardar en'} favoritos: ${esc(c.titulo)}"><i class="${on ? 'fa-solid' : 'fa-regular'} fa-heart"></i></button>
    <span class="bar" aria-hidden="true"></span>
  </li>`;
}
function songRows(a) { return a.canciones.map((c, i) => songRow(a, c, i, i + 1)).join(''); }

/* ---------- favoritos (se guardan en este navegador) ---------- */
const FAV_KEY = 'moonshiner:favoritos';
const favKey = (a, c) => a.id + '|' + c.titulo;
let favs = new Set();
try { favs = new Set(JSON.parse(store.get(FAV_KEY) || '[]')); } catch (e) {}
const isFav = (a, c) => favs.has(favKey(a, c));
function saveFavs() { store.set(FAV_KEY, JSON.stringify([...favs])); updateFavCount(); }
function updateFavCount() { const el = $('#fav-count'); if (el) el.textContent = `(${favs.size})`; }
function toggleFav(a, c, btn) {
  const k = favKey(a, c);
  favs.has(k) ? favs.delete(k) : favs.add(k);
  saveFavs();
  const on = favs.has(k);
  btn.setAttribute('aria-pressed', on);
  btn.setAttribute('aria-label', `${on ? 'Quitar de' : 'Guardar en'} favoritos: ${c.titulo}`);
  btn.innerHTML = `<i class="${on ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
  btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop');
  return on;
}

function wireSongs(root, onFavChange) {
  root.querySelectorAll('.song[data-artist]').forEach(row => {
    const a = artistas.find(x => x.id === row.dataset.artist);
    const c = a.canciones[+row.dataset.i];
    row.querySelector('.play').addEventListener('click', e => togglePlay(a, c, row, e.currentTarget));
    row.querySelector('.fav').addEventListener('click', e => { toggleFav(a, c, e.currentTarget); if (onFavChange) onFavChange(); });
  });
}

function renderFavs() {
  $('#stats').textContent = '';
  const grupos = artistas.map(a => ({ a, items: a.canciones.map((c, i) => ({ c, i })).filter(({ c }) => isFav(a, c)) })).filter(g => g.items.length);
  $('#view').innerHTML = `
    <section class="view-enter grid gap-6">
      <a href="#" class="kicker inline-flex items-center gap-2 w-fit hover:text-red no-underline"><i class="fa-solid fa-arrow-left"></i>Volver al sumario</a>
      <div class="songs-head border-b-4 border-ink pb-2">
        <h1 class="songs-title"><i class="fa-solid fa-heart text-red mr-2" style="font-size:.8em"></i>Mis favoritos</h1>
        <span class="kicker text-muted">${favs.size} ${favs.size === 1 ? 'canción' : 'canciones'} · se guardan en este navegador</span>
      </div>
      ${grupos.length ? grupos.map(g => `
        <div class="fav-group">
          <a href="#${g.a.id}" class="kicker text-red no-underline hover:underline" style="font-size:1rem">${esc(g.a.nombre)} <i class="fa-solid fa-arrow-right ml-1"></i></a>
          <ol class="list-none p-0 m-0 mt-1">${g.items.map(({ c, i }, n) => songRow(g.a, c, i, n + 1)).join('')}</ol>
        </div>`).join('') : `
        <div class="py-12 grid gap-3 justify-items-center text-center">
          <i class="fa-regular fa-heart text-5xl text-muted" aria-hidden="true"></i>
          <p class="text-lg">Todavía no guardaste ninguna canción.</p>
          <p class="text-muted">Entrá a un artista y tocá el corazón al lado de cada tema para sumarlo acá.</p>
          <a href="#" class="chip mt-2 no-underline">Ir al sumario</a>
        </div>`}
    </section>`;
  wireSongs($('#view'), () => { stopPlayer(); renderFavs(); });
}

function renderArtist(a) {
  const r = resumen(a);
  $('#stats').textContent = '';
  $('#view').innerHTML = `
    <article class="view-enter grid gap-10">
      <a href="#" class="kicker inline-flex items-center gap-2 w-fit hover:text-red no-underline"><i class="fa-solid fa-arrow-left"></i>Volver al sumario</a>
      <div class="grid gap-3">
        ${heroHTML(a)}
        <p id="hero-msg" class="kicker text-muted" hidden></p>
      </div>

      ${a.bajada ? `<p class="standfirst max-w-3xl">${esc(a.bajada)}</p>` : ''}

      <div class="grid gap-8 md:grid-cols-[minmax(0,1fr)_16rem]">
        <div class="article min-w-0">${a.descripcion.map(p => `<p>${esc(p)}</p>`).join('')}</div>
        <dl class="factbox h-fit">
          <dt>Origen</dt><dd>${esc(a.ciudad)}</dd>
          <dt>Nacionalidad</dt><dd>${esc(a.pais)}</dd>
          <dt>Género</dt><dd>${esc(a.genero)}</dd>
          <dt>Integrantes</dt><dd>${a.integrantes.map(esc).join('<br>')}</dd>
        </dl>
      </div>

      <section class="grid gap-3">
        <div class="songs-head border-b-4 border-ink pb-2">
          <h2 class="songs-title">Las ${r.n} esenciales</h2>
          <span class="kicker text-muted"><i class="fa-solid fa-record-vinyl text-red mr-1"></i>${r.discos} discos · ${r.desde}–${r.hasta}</span>
        </div>
        ${a.nota ? `<p class="text-muted italic">${esc(a.nota)}</p>` : ''}
        <p class="kicker text-muted"><i class="fa-solid fa-headphones text-red mr-1"></i>Tocá play para escuchar un fragmento de 30 segundos</p>
        <div class="song col-head hidden md:grid"><span class="text-right">N.º</span><span></span><span>Canción</span><span>Disco</span><span class="text-right">Año</span><span></span></div>
        <ol class="list-none p-0 m-0">${songRows(a)}</ol>
      </section>
    </article>`;

  wireSongs($('#view'));

  const file = $('#hero-file');
  file.addEventListener('change', () => file.files[0] && loadHero(a, file.files[0]));
  const rm = $('#hero-remove');
  if (rm) rm.addEventListener('click', () => { store.del(heroKey(a.id)); renderArtist(a); buildBook(); });
}

function loadHero(a, f) {
  const msg = $('#hero-msg');
  if (!f.type.startsWith('image/')) { msg.hidden = false; msg.textContent = 'Ese archivo no es una imagen. Elegí un JPG, PNG o WebP.'; return; }
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const max = 1800, s = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      const data = c.toDataURL('image/jpeg', 0.85);
      const saved = store.set(heroKey(a.id), data);
      if (!saved) a.hero = data;
      renderArtist(a); buildBook();
      const m = $('#hero-msg'); m.hidden = false;
      m.textContent = saved ? 'Foto guardada en este navegador.' : 'Foto cargada solo por esta sesión: este navegador no permite guardarla.';
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(f);
}

/* ---------- fragmentos de audio (vista previa de 30 s de iTunes) ---------- */
const player = new Audio();
player.preload = 'none';
let now = null;           // { row, btn, url }
let previewBlocked = false;
const previewCache = {};

const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/\(.*?\)|\[.*?\]/g, '').replace(/[’`]/g, "'").replace(/[^a-z0-9' ]/g, ' ').replace(/\s+/g, ' ').trim();

function jsonp(url) {
  return new Promise((resolve, reject) => {
    const cb = 'itcb_' + Math.random().toString(36).slice(2);
    const s = document.createElement('script');
    const done = () => { clearTimeout(t); try { delete window[cb]; } catch (e) {} s.remove(); };
    const t = setTimeout(() => { done(); reject(new Error('timeout')); }, 7000);
    window[cb] = data => { done(); resolve(data); };
    s.onerror = () => { done(); reject(new Error('blocked')); };
    s.src = url + '&callback=' + cb;
    document.head.appendChild(s);
  });
}

async function findPreview(a, c) {
  if (c.preview) return c.preview;
  const key = a.id + '|' + c.titulo;
  if (previewCache[key]) return previewCache[key];
  if (previewBlocked) throw new Error('blocked');
  const term = `${a.nombre} ${c.titulo.replace(/\(.*?\)/g, '')}`;
  let data;
  try { data = await jsonp('https://itunes.apple.com/search?media=music&entity=song&limit=15&term=' + encodeURIComponent(term)); }
  catch (e) { previewBlocked = true; throw e; }
  const res = (data.results || []).filter(r => r.previewUrl);
  const art = norm(a.nombre), tit = norm(c.titulo);
  const best = res.find(r => norm(r.artistName) === art && norm(r.trackName) === tit)
    || res.find(r => norm(r.artistName).includes(art) && norm(r.trackName).startsWith(tit))
    || res.find(r => norm(r.artistName).includes(art));
  if (!best) throw new Error('notfound');
  return (previewCache[key] = best.previewUrl);
}

function setBtn(btn, state) {
  const icon = { play: 'fa-play', pause: 'fa-pause', load: 'fa-circle-notch fa-spin', off: 'fa-arrow-up-right-from-square' }[state];
  btn.innerHTML = `<i class="fa-solid ${icon}"></i>`;
  btn.setAttribute('aria-pressed', state === 'pause' || state === 'load');
}

function stopPlayer() {
  player.pause();
  if (now) { setBtn(now.btn, 'play'); now.row.classList.remove('is-playing'); now.row.querySelector('.bar').style.width = '0'; }
  now = null;
}

function showFallback(a, c, row, btn) {
  setBtn(btn, 'off'); btn.setAttribute('aria-pressed', 'false');
  if (row.querySelector('.fallback')) return;
  const q = encodeURIComponent(`${a.nombre} ${c.titulo}`);
  const p = document.createElement('span');
  p.className = 'fallback';
  p.innerHTML = `No pude cargar el fragmento acá. Escuchala en <a href="https://open.spotify.com/search/${q}" target="_blank" rel="noopener"><i class="fa-brands fa-spotify"></i> Spotify</a> o <a href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener"><i class="fa-brands fa-youtube"></i> YouTube</a>.`;
  row.appendChild(p);
}

async function togglePlay(a, c, row, btn) {
  if (row.querySelector('.fallback')) { window.open(`https://open.spotify.com/search/${encodeURIComponent(a.nombre + ' ' + c.titulo)}`, '_blank', 'noopener'); return; }
  if (now && now.row === row) {
    if (player.paused) { player.play().catch(() => {}); setBtn(btn, 'pause'); } else { player.pause(); setBtn(btn, 'play'); }
    return;
  }
  stopPlayer();
  now = { row, btn };
  setBtn(btn, 'load');
  try {
    const url = await findPreview(a, c);
    if (!now || now.row !== row) return;          // el usuario eligió otra mientras cargaba
    player.src = url;
    await player.play();
    row.classList.add('is-playing');
    setBtn(btn, 'pause');
  } catch (e) {
    if (now && now.row === row) now = null;
    showFallback(a, c, row, btn);
  }
}

player.addEventListener('timeupdate', () => {
  if (now && player.duration) now.row.querySelector('.bar').style.width = (player.currentTime / player.duration * 100) + '%';
});
player.addEventListener('ended', stopPlayer);

/* ---------- libro para imprimir (A5) ---------- */
function buildBook() {
  const total = artistas.reduce((s, a) => s + a.canciones.length, 0);
  $('#libro').innerHTML = `
    <section class="book-page" style="min-height:175mm;display:flex;flex-direction:column;justify-content:space-between">
      <div class="kicker text-muted" style="display:flex;justify-content:space-between"><span>Edición n.º 1</span><span>Octubre 2026</span></div>
      <div style="display:grid;gap:.8rem">
        <hr class="rule-thick">
        <h1 class="masthead-title" style="font-size:3.6rem">MOON<span>SHINER</span></h1>
        <p class="kicker" style="font-size:1rem">Los recomendados esenciales de la historia del rock</p>
        <p class="kicker text-muted" style="font-size:.9rem">por Exequiel Fernández Montini</p>
        <hr class="rule-double">
      </div>
      <p class="kicker text-muted">${artistas.length} ${artistas.length === 1 ? 'artista' : 'artistas'} · ${total} canciones</p>
    </section>
    <section class="book-page">${cartaHTML()}</section>
    <section class="book-page">
      <h2 class="font-display" style="font-weight:900;font-size:2rem;line-height:1;border-bottom:4px solid var(--ink);padding-bottom:.4rem">En este número</h2>
      ${artistas.map((a, i) => `<div class="toc-row"><span class="toc-num" style="font-size:1.5rem">${pad(i + 1)}</span><span class="toc-name" style="font-size:1.25rem">${esc(a.nombre)}</span><span class="kicker text-muted">${esc(a.pais)}</span></div>`).join('')}
    </section>
    ${artistas.map(a => {
      const r = resumen(a);
      return `<section class="chapter">
        ${heroHTML(a, { tools: false })}
        ${a.bajada ? `<p class="standfirst" style="margin-top:.9rem;font-size:1.2rem">${esc(a.bajada)}</p>` : ''}
        <div class="article" style="margin-top:.7rem">${a.descripcion.map(p => `<p>${esc(p)}</p>`).join('')}</div>
        <p class="kicker text-muted" style="margin-top:.7rem">Integrantes: ${a.integrantes.map(esc).join(', ')} · ${esc(a.genero)}</p>
        <div class="songs-head" style="border-bottom:4px solid var(--ink);padding-bottom:.3rem;margin-top:1.2rem;break-after:avoid">
          <h2 class="songs-title">Las ${r.n} esenciales</h2>
          <span class="kicker text-muted">${r.discos} discos · ${r.desde}–${r.hasta}</span>
        </div>
        <ol style="list-style:none;padding:0;margin:0">
          ${a.canciones.map((c, i) => `<li class="song no-play"><span class="num">${pad(i + 1)}</span><span class="title">${esc(c.titulo)}</span><span class="meta">${esc(c.disco)}</span><span class="meta yearcol"><span class="year">${c.anio ?? '—'}</span></span></li>`).join('')}
        </ol>
      </section>`;
    }).join('')}`;
}

/* ---------- navegación ---------- */
function route() {
  stopPlayer();
  const id = decodeURIComponent(location.hash.slice(1));
  const a = artistas.find(x => x.id === id);
  if (id === 'favoritos') { renderFavs(); document.title = 'Mis favoritos · Moonshiner'; }
  else if (a) { renderArtist(a); document.title = a.nombre + ' · Moonshiner'; }
  else { renderHome(); document.title = 'Moonshiner'; }
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
updateFavCount();
buildBook();
route();
