const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const sortKey = a => a.nombre.replace(/^(the|los|las|el|la)\s+/i, '').toLowerCase();
const artistas = [...ARTISTAS].sort((a, b) => sortKey(a).localeCompare(sortKey(b), 'es'));
const paises = [...new Set(artistas.map(a => a.pais))].sort((a, b) => a.localeCompare(b, 'es'));
const pad = n => String(n).padStart(2, '0');
const bandera = a => (typeof BANDERAS !== 'undefined' && BANDERAS[a.pais]) ? `<img class="flag" src="${BANDERAS[a.pais]}" alt="Bandera de ${esc(a.pais)}" title="${esc(a.pais)}">` : '';

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

const state = { q: '', pais: '', letra: '' };
const inicial = a => a.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '').charAt(0).toUpperCase();
const LETRAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
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
        <div class="flex flex-wrap items-center gap-1.5 pt-1" role="group" aria-label="Filtrar por letra">
          <span class="kicker text-muted mr-2"><i class="fa-solid fa-arrow-down-a-z mr-1"></i>Abecedario</span>
          <button class="letra letra-todas" data-letra="" aria-pressed="${!state.letra}">Todas</button>
          ${LETRAS.map(l => { const hay = artistas.some(a => inicial(a) === l);
            return `<button class="letra" data-letra="${l}" aria-pressed="${state.letra === l}" ${hay ? '' : 'disabled'} aria-label="Artistas con ${l}">${l}</button>`; }).join('')}
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
        </div>
      </div>

      ${historias.length ? `<div class="grid gap-4">
        <div class="flex items-end justify-between gap-4 border-b-4 border-ink pb-2">
          <h2 class="font-display font-black text-3xl sm:text-4xl leading-none">Historias</h2>
          <a href="#historias" class="kicker text-red no-underline hover:underline">Ver todas <i class="fa-solid fa-arrow-right ml-1"></i></a>
        </div>
        <div class="story-grid">${historias.slice(0, 3).map(storyCard).join('')}</div>
      </div>` : ''}

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
  document.querySelectorAll('.letra').forEach(b => b.addEventListener('click', () => {
    state.letra = state.letra === b.dataset.letra ? '' : b.dataset.letra;
    document.querySelectorAll('.letra').forEach(c => c.setAttribute('aria-pressed', c.dataset.letra === state.letra));
    renderResults();
  }));
  renderResults();
}

function renderResults() {
  let list = state.q.trim() ? fuse.search(state.q.trim()).map(r => r.item) : artistas;
  if (state.pais) list = list.filter(a => a.pais === state.pais);
  if (state.letra) list = list.filter(a => inicial(a) === state.letra);
  $('#count').textContent = list.length === 1 ? '1 artista' : `${list.length} artistas`;
  $('#results').innerHTML = list.length ? list.map(a => {
    const r = resumen(a), i = artistas.indexOf(a) + 1;
    return `<a class="toc-row" href="#${a.id}">
      <span class="toc-num">${pad(i)}</span>
      <span class="min-w-0 grid gap-1">
        <span class="toc-name">${esc(a.nombre)}${bandera(a)}</span>
        <span class="text-muted text-[.98rem]">${esc(a.bajada || a.genero)}</span>
      </span>
      <span class="kicker text-muted text-right">${esc(a.pais)}<br><span class="text-ink">${r.n} temas</span></span>
    </a>`;
  }).join('') : `
    <div class="py-10 grid gap-2 justify-items-center text-center">
      <i class="fa-solid fa-compact-disc text-4xl text-muted" aria-hidden="true"></i>
      <p class="text-lg">No hay ningún artista que coincida${state.q ? ` con “${esc(state.q)}”` : ''}${state.letra ? ` que empiece con ${state.letra}` : ''}${state.pais ? ` en ${esc(state.pais)}` : ''}.</p>
      <p class="text-muted">Probá con otra palabra o elegí “Todas”.</p>
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
      <h1 class="hero-name">${esc(a.nombre)}${bandera(a)}</h1>
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
    ${spotifyLink(a, c)}
    <button class="fav" aria-pressed="${on}" aria-label="${on ? 'Quitar de' : 'Guardar en'} favoritos: ${esc(c.titulo)}"><i class="${on ? 'fa-solid' : 'fa-regular'} fa-heart"></i></button>
    <span class="bar" aria-hidden="true"></span>
  </li>`;
}
/* Enlace a Spotify: exacto si la canción tiene "spotify" en data.js; si no, búsqueda por artista y título */
function spotifyUrl(a, c) {
  if (c.spotify) return c.spotify;
  const q = `${a.spotifyNombre || a.nombre} ${c.titulo}`.replace(/[’‘]/g, "'").replace(/[“”]/g, '');
  return 'https://open.spotify.com/search/' + encodeURIComponent(q);
}
function spotifyLink(a, c) {
  const exacto = !!c.spotify;
  return `<a class="sp-link" href="${esc(spotifyUrl(a, c))}" target="_blank" rel="noopener" aria-label="${exacto ? 'Escuchar' : 'Buscar'} ${esc(c.titulo)} en Spotify"><i class="fa-brands fa-spotify"></i>${exacto ? 'Escuchar en Spotify' : 'Buscar en Spotify'}</a>`;
}
function songRows(a) { return a.canciones.map((c, i) => songRow(a, c, i, i + 1)).join(''); }

/* ---------- historias ---------- */
const historias = (typeof HISTORIAS !== 'undefined' ? HISTORIAS : []).slice().sort((x, y) => String(y.fecha).localeCompare(String(x.fecha)));
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
function fechaLarga(f) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(f || '');
  return m ? `${+m[3]} de ${MESES[+m[2] - 1]} de ${m[1]}` : '';
}
const artistaDe = h => artistas.find(a => a.id === h.artista);
const storyKey = id => 'moonshiner:historia-foto:' + id;
const fotoPropia = h => store.get(storyKey(h.id)) || h._foto || '';
const imagenDe = h => fotoPropia(h) || h.imagen || (artistaDe(h) ? heroOf(artistaDe(h)) : '');

function storyCard(h) {
  const a = artistaDe(h), img = imagenDe(h);
  return `<a class="story-card" href="#historia-${esc(h.id)}">
    <span class="cover">${img ? `<img src="${esc(img)}" alt="" style="object-position:${esc(fotoPropia(h) ? 'center' : ((a && a.heroPos) || 'center'))}">` : ''}
      <span class="cover-top tag">${esc(h.etiqueta || (a ? a.nombre : 'Historia'))}</span></span>
    <span class="kicker text-muted">${h.cancion ? '“' + esc(h.cancion) + '”' : ''}${h.cancion && h.fecha ? ' · ' : ''}${esc(fechaLarga(h.fecha))}${h.ejemplo ? ' <span class="tag-ghost">Ejemplo</span>' : ''}</span>
    <h3>${esc(h.titulo)}</h3>
    ${h.bajada ? `<p>${esc(h.bajada)}</p>` : ''}
  </a>`;
}

function renderHistorias() {
  $('#stats').textContent = '';
  $('#view').innerHTML = `
    <section class="view-enter grid gap-8">
      <div class="songs-head border-b-4 border-ink pb-2">
        <h1 class="songs-title">Historias</h1>
        <span class="kicker text-muted">${historias.length} ${historias.length === 1 ? 'historia' : 'historias'}</span>
      </div>
      <p class="standfirst max-w-3xl">Lo que hay detrás de las canciones: cómo nacieron, quién las inspiró y qué pasó después.</p>
      ${historias.length ? `<div class="story-grid">${historias.map(storyCard).join('')}</div>` : `
        <div class="story-empty">
          <i class="fa-solid fa-feather-pointed text-4xl text-red" aria-hidden="true"></i>
          <p class="text-lg">Todavía no hay historias publicadas.</p>
          <p class="text-muted">Muy pronto, las historias detrás de las canciones y los artistas de este libro.</p>
        </div>`}
    </section>`;
}

function renderHistoria(h) {
  const a = artistaDe(h), img = imagenDe(h);
  const ci = a && h.cancion ? a.canciones.findIndex(c => c.titulo.toLowerCase() === String(h.cancion).toLowerCase()) : -1;
  $('#stats').textContent = '';
  $('#view').innerHTML = `
    <article class="view-enter grid gap-8">
      <a href="#historias" class="kicker inline-flex items-center gap-2 w-fit hover:text-red no-underline"><i class="fa-solid fa-arrow-left"></i>Todas las historias</a>
      <header class="grid gap-4 max-w-4xl">
        <span class="kicker"><span class="tag">Historias</span>${h.etiqueta ? ` <span class="text-red ml-1">${esc(h.etiqueta)}</span>` : a ? ` <a href="#${a.id}" class="text-red no-underline hover:underline ml-1">${esc(a.nombre)}</a>` : ''}${h.ejemplo ? ' <span class="tag-ghost ml-1">Ejemplo</span>' : ''}</span>
        <h1 class="story-title">${esc(h.titulo)}</h1>
        ${h.bajada ? `<p class="standfirst">${esc(h.bajada)}</p>` : ''}
        ${h.fecha ? `<span class="kicker text-muted">${esc(fechaLarga(h.fecha))} · por ${esc(FIRMA)}</span>` : ''}
      </header>
      <div class="grid gap-2">
        <div class="story-hero">
          ${img ? `<img src="${esc(img)}" alt="${a ? 'Foto de ' + esc(a.nombre) : ''}" style="object-position:${esc(fotoPropia(h) ? 'center' : ((a && a.heroPos) || 'center'))}">` : `<div class="hero-hint"><span><i class="fa-regular fa-image text-3xl block mb-2"></i>Espacio para la foto de la historia</span></div>`}
          <div class="hero-tools">
            <label class="tool-btn" for="story-file"><i class="fa-solid fa-upload"></i>${fotoPropia(h) ? 'Cambiar foto' : (img ? 'Cambiar foto' : 'Subir foto')}</label>
            <input id="story-file" type="file" accept="image/*" class="sr-only">
            ${fotoPropia(h) ? `<button class="tool-btn" id="story-remove"><i class="fa-solid fa-trash-can"></i>Quitar</button>` : ''}
          </div>
        </div>
        <p id="story-msg" class="kicker text-muted" hidden></p>
      </div>
      <div class="article">${(h.cuerpo || []).map(p => `<p>${esc(p)}</p>`).join('')}</div>
      ${ci >= 0 ? `<section class="grid gap-2 max-w-4xl">
        <div class="songs-head border-b-4 border-ink pb-2"><h2 class="font-display font-black text-2xl leading-none">La canción</h2></div>
        <ol class="list-none p-0 m-0">${songRow(a, a.canciones[ci], ci, ci + 1)}</ol>
      </section>` : h.cancion ? `<section class="grid gap-2 max-w-4xl">
        <div class="songs-head border-b-4 border-ink pb-2"><h2 class="font-display font-black text-2xl leading-none">La canción</h2></div>
        <div class="grid gap-1 py-2">
          <span class="font-hand font-bold text-2xl leading-tight">${esc(h.cancion)}</span>
          <span class="kicker text-muted">${esc(h.cancionArtista || (a ? a.nombre : ''))}${h.cancionDisco ? ' · ' + esc(h.cancionDisco) : ''}${h.cancionAnio ? ' · <span class="text-ink">' + h.cancionAnio + '</span>' : ''}</span>
          <a class="sp-link" href="${esc('https://open.spotify.com/search/' + encodeURIComponent((h.cancionArtista || (a ? a.nombre : '')) + ' ' + h.cancion))}" target="_blank" rel="noopener"><i class="fa-brands fa-spotify"></i>Buscar en Spotify</a>
        </div>
      </section>` : ''}
      ${a ? `<a href="#${a.id}" class="fav-link w-fit"><i class="fa-solid fa-record-vinyl"></i>Ver las esenciales de ${esc(a.nombre)}</a>` : ''}
    </article>`;
  wireSongs($('#view'));
  const file = $('#story-file');
  file.addEventListener('change', () => file.files[0] && leerFoto(file.files[0], $('#story-msg'), data => {
    const saved = store.set(storyKey(h.id), data);
    if (!saved) h._foto = data;
    renderHistoria(h); buildBook();
    const m = $('#story-msg'); m.hidden = false;
    m.textContent = saved ? 'Foto guardada en este navegador.' : 'Foto cargada solo por esta sesión: este navegador no permite guardarla.';
  }));
  const rm = $('#story-remove');
  if (rm) rm.addEventListener('click', () => { store.del(storyKey(h.id)); delete h._foto; renderHistoria(h); buildBook(); });
}

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

/* lee una foto elegida por el usuario, la achica y la devuelve como data URL */
function leerFoto(f, msg, done) {
  if (!f.type.startsWith('image/')) { msg.hidden = false; msg.textContent = 'Ese archivo no es una imagen. Elegí un JPG, PNG o WebP.'; return; }
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const max = 1800, s = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      done(c.toDataURL('image/jpeg', 0.85));
    };
    img.onerror = () => { msg.hidden = false; msg.textContent = 'No se pudo leer esa imagen. Probá con otro archivo.'; };
    img.src = reader.result;
  };
  reader.readAsDataURL(f);
}

function loadHero(a, f) {
  leerFoto(f, $('#hero-msg'), data => {
      const saved = store.set(heroKey(a.id), data);
      if (!saved) a.hero = data;
      renderArtist(a); buildBook();
      const m = $('#hero-msg'); m.hidden = false;
      m.textContent = saved ? 'Foto guardada en este navegador.' : 'Foto cargada solo por esta sesión: este navegador no permite guardarla.';
  });
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
  const q = encodeURIComponent(`${a.spotifyNombre || a.nombre} ${c.titulo}`);
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
      ${artistas.map((a, i) => `<div class="toc-row"><span class="toc-num" style="font-size:1.5rem">${pad(i + 1)}</span><span class="toc-name" style="font-size:1.25rem">${esc(a.nombre)}${bandera(a)}</span><span class="kicker text-muted">${esc(a.pais)}</span></div>`).join('')}
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
    }).join('')}
    ${historias.filter(h => !h.ejemplo).map(h => `<section class="chapter">
      <p class="kicker"><span class="tag">Historias</span> ${esc(h.etiqueta || (artistaDe(h) ? artistaDe(h).nombre : ''))}</p>
      <h2 class="story-title" style="font-size:2.4rem;margin-top:.6rem">${esc(h.titulo)}</h2>
      ${h.bajada ? `<p class="standfirst" style="margin-top:.6rem;font-size:1.15rem">${esc(h.bajada)}</p>` : ''}
      <div class="article" style="margin-top:.8rem">${(h.cuerpo || []).map(p => `<p>${esc(p)}</p>`).join('')}</div>
    </section>`).join('')}`;
}

/* ---------- navegación ---------- */
/* ---------- vista: opiniones (reviews guardadas en Supabase) ---------- */
const OPINIONES_API = 'https://khtkjswuwglfiucviqiu.supabase.co/rest/v1/reviews';
const OPINIONES_KEY = 'sb_publishable_8VwpRbKv5IbOpE2PIGWMIA_VtSEZtRN';
const OPINION_HECHA = 'moonshiner:opinion-enviada';
let swiperOpiniones = null;

const estrellasHTML = (n, size = '') => [1, 2, 3, 4, 5].map(i =>
  `<i class="${i <= Math.round(n) ? 'fa-solid' : 'fa-regular'} fa-star ${size}" aria-hidden="true"></i>`).join('');

async function cargarOpiniones() {
  const r = await fetch(`${OPINIONES_API}?select=id,nombre,estrellas,comentario,creado&order=creado.desc&limit=200`, { headers: { apikey: OPINIONES_KEY } });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  return r.json();
}

async function enviarOpinion(o) {
  const r = await fetch(OPINIONES_API, {
    method: 'POST',
    headers: { apikey: OPINIONES_KEY, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
    body: JSON.stringify(o)
  });
  if (!r.ok) throw new Error('HTTP ' + r.status);
}

function resumenOpiniones(lista) {
  const total = lista.length;
  const prom = total ? lista.reduce((s, o) => s + o.estrellas, 0) / total : 0;
  const dist = [5, 4, 3, 2, 1].map(n => ({ n, c: lista.filter(o => o.estrellas === n).length }));
  return `
    <div class="op-resumen">
      <div class="grid gap-1 justify-items-start">
        <span class="op-promedio">${total ? prom.toFixed(1).replace('.', ',') : '—'}</span>
        <span class="op-estrellas text-xl">${estrellasHTML(prom)}</span>
        <span class="kicker text-muted">${total === 1 ? '1 opinión' : `${total} opiniones`}</span>
      </div>
      <div class="grid gap-1.5 w-full">
        ${dist.map(d => `<div class="op-barra"><span class="kicker">${d.n} <i class="fa-solid fa-star text-red"></i></span>
          <span class="op-barra-fondo"><span style="width:${total ? (d.c / total * 100) : 0}%"></span></span>
          <span class="kicker text-muted text-right">${d.c}</span></div>`).join('')}
      </div>
    </div>`;
}

function tarjetaOpinion(o) {
  const fecha = new Date(o.creado).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
  return `<div class="swiper-slide"><figure class="op-card">
    <span class="op-estrellas">${estrellasHTML(o.estrellas)}<span class="sr-only">${o.estrellas} de 5 estrellas</span></span>
    ${o.comentario ? `<blockquote class="op-texto">“${esc(o.comentario)}”</blockquote>` : `<p class="op-texto text-muted italic">Sin comentario.</p>`}
    <figcaption class="op-firma"><span class="font-label font-bold uppercase tracking-wider">${esc(o.nombre)}</span><span class="text-muted">${fecha}</span></figcaption>
  </figure></div>`;
}

function renderOpiniones() {
  $('#stats').textContent = '';
  let nota = 0;
  const yaEnvio = store.get(OPINION_HECHA);
  $('#view').innerHTML = `
    <section class="view-enter grid gap-10">
      <a href="#" class="kicker inline-flex items-center gap-2 w-fit hover:text-red no-underline"><i class="fa-solid fa-arrow-left"></i>Volver al sumario</a>
      <div class="grid gap-3">
        <span class="kicker text-red">Correo de lectores</span>
        <h1 class="songs-title">Opiniones</h1>
        <p class="text-lg text-muted max-w-2xl">¿Qué te pareció Moonshiner? Dejá tu calificación y, si querés, unas palabras. Solo te pedimos tu nombre.</p>
      </div>

      <div id="op-resumen" class="border-y-4 border-ink py-6"><p class="text-muted"><i class="fa-solid fa-spinner fa-spin mr-2"></i>Cargando opiniones…</p></div>

      <div class="grid gap-4">
        <div class="flex items-end justify-between gap-4 border-b-4 border-ink pb-2">
          <h2 class="font-display font-black text-3xl sm:text-4xl leading-none">Lo que dicen los lectores</h2>
          <div class="flex gap-2">
            <button class="nav-btn js-op-prev" aria-label="Opinión anterior"><i class="fa-solid fa-arrow-left"></i></button>
            <button class="nav-btn js-op-next" aria-label="Opinión siguiente"><i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        <div class="swiper op-swiper w-full"><div class="swiper-wrapper" id="op-lista"></div></div>
      </div>

      <form id="op-form" class="op-form" novalidate>
        <h2 class="font-display font-black text-3xl leading-none">Dejá tu opinión</h2>
        ${yaEnvio ? `<p class="op-aviso"><i class="fa-solid fa-circle-check mr-2"></i>Ya dejaste una opinión desde este navegador. ¡Gracias! Podés dejar otra si querés.</p>` : ''}
        <label class="grid gap-1.5"><span class="kicker">Tu nombre</span>
          <input id="op-nombre" class="op-input" type="text" maxlength="60" autocomplete="name" required placeholder="Por ejemplo: Laura"></label>
        <div class="grid gap-1.5"><span class="kicker" id="op-cal-label">Tu calificación</span>
          <div class="op-elegir" role="radiogroup" aria-labelledby="op-cal-label">
            ${[1, 2, 3, 4, 5].map(n => `<button type="button" role="radio" aria-checked="false" data-n="${n}" aria-label="${n} ${n === 1 ? 'estrella' : 'estrellas'}"><i class="fa-regular fa-star"></i></button>`).join('')}
          </div></div>
        <label class="grid gap-1.5"><span class="kicker">Tu comentario <span class="text-muted normal-case tracking-normal font-body">(opcional)</span></span>
          <textarea id="op-comentario" class="op-input" rows="4" maxlength="600" placeholder="Contanos qué te pareció…"></textarea></label>
        <input type="text" id="op-web" style="display:none" tabindex="-1" autocomplete="off" aria-hidden="true">
        <div class="flex flex-wrap items-center gap-4">
          <button type="submit" class="op-enviar"><i class="fa-solid fa-paper-plane mr-2"></i>Publicar opinión</button>
          <span id="op-msg" class="text-muted" role="status"></span>
        </div>
      </form>
    </section>`;

  const pintar = lista => {
    $('#op-resumen').innerHTML = resumenOpiniones(lista);
    $('#op-lista').innerHTML = lista.length ? lista.map(tarjetaOpinion).join('')
      : `<div class="swiper-slide"><div class="op-card items-center justify-center text-center"><i class="fa-regular fa-comment text-4xl text-muted"></i><p class="text-lg">Todavía no hay opiniones.</p><p class="text-muted">¡Sé el primero en dejar la tuya!</p></div></div>`;
    if (swiperOpiniones) swiperOpiniones.destroy(true, true);
    swiperOpiniones = new Swiper('.op-swiper', {
      slidesPerView: 1.1, spaceBetween: 20, grabCursor: true,
      navigation: { prevEl: '.js-op-prev', nextEl: '.js-op-next' },
      breakpoints: { 600: { slidesPerView: 2 }, 960: { slidesPerView: 3 } },
      a11y: { prevSlideMessage: 'Opinión anterior', nextSlideMessage: 'Opinión siguiente' }
    });
  };
  const recargar = () => cargarOpiniones().then(pintar).catch(() => {
    $('#op-resumen').innerHTML = `<p class="text-muted"><i class="fa-solid fa-triangle-exclamation text-red mr-2"></i>No se pudieron cargar las opiniones. Revisá tu conexión e intentá de nuevo.</p>`;
    $('#op-lista').innerHTML = '';
  });
  recargar();

  const botones = [...document.querySelectorAll('.op-elegir button')];
  const marcar = (n, fijo) => botones.forEach(b => {
    const on = +b.dataset.n <= n;
    b.querySelector('i').className = (on ? 'fa-solid' : 'fa-regular') + ' fa-star';
    if (fijo) b.setAttribute('aria-checked', +b.dataset.n === n);
  });
  botones.forEach(b => {
    b.addEventListener('click', () => { nota = +b.dataset.n; marcar(nota, true); });
    b.addEventListener('mouseenter', () => marcar(+b.dataset.n));
    b.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault(); nota = Math.min(5, Math.max(1, (nota || 0) + (e.key === 'ArrowRight' ? 1 : -1)));
        marcar(nota, true); botones[nota - 1].focus();
      }
    });
  });
  $('.op-elegir').addEventListener('mouseleave', () => marcar(nota));

  $('#op-form').addEventListener('submit', async e => {
    e.preventDefault();
    const msg = $('#op-msg'), btn = $('.op-enviar');
    const nombre = $('#op-nombre').value.trim(), comentario = $('#op-comentario').value.trim();
    if ($('#op-web').value) return;
    if (!nombre) { msg.textContent = 'Escribí tu nombre.'; $('#op-nombre').focus(); return; }
    if (!nota) { msg.textContent = 'Elegí de 1 a 5 estrellas.'; botones[0].focus(); return; }
    btn.disabled = true; msg.textContent = 'Publicando…';
    try {
      await enviarOpinion({ nombre, estrellas: nota, comentario });
      store.set(OPINION_HECHA, '1');
      $('#op-form').reset(); nota = 0; marcar(0, true);
      msg.innerHTML = '<span class="text-ink"><i class="fa-solid fa-circle-check text-red mr-1"></i>¡Gracias! Tu opinión ya está publicada.</span>';
      recargar();
    } catch (err) {
      msg.textContent = 'No se pudo publicar. Probá de nuevo en un momento.';
    } finally { btn.disabled = false; }
  });
}

function route() {
  stopPlayer();
  const id = decodeURIComponent(location.hash.slice(1));
  const a = artistas.find(x => x.id === id);
  const h = id.startsWith('historia-') ? historias.find(x => 'historia-' + x.id === id) : null;
  const tab = id === 'opiniones' ? 'opiniones' : id === 'favoritos' ? 'favoritos' : (id === 'historias' || h) ? 'historias' : a ? '' : 'sumario';
  document.querySelectorAll('.tabs a').forEach(t => t.dataset.tab === tab ? t.setAttribute('aria-current', 'page') : t.removeAttribute('aria-current'));
  if (id === 'historias') { renderHistorias(); document.title = 'Historias · Moonshiner'; }
  else if (h) { renderHistoria(h); document.title = h.titulo + ' · Moonshiner'; }
  else if (id === 'opiniones') { renderOpiniones(); document.title = 'Opiniones · Moonshiner'; }
  else if (id === 'favoritos') { renderFavs(); document.title = 'Mis favoritos · Moonshiner'; }
  else if (a) { renderArtist(a); document.title = a.nombre + ' · Moonshiner'; }
  else { renderHome(); document.title = 'Moonshiner'; }
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
updateFavCount();
buildBook();
route();
