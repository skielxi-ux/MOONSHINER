/* ================================================================
   MOONSHINER — historias de canciones y artistas
   Para sumar una historia, agregá un objeto al principio de este arreglo
   (las más nuevas van primero).

   id:       nombre corto, en minúsculas y con guiones (aparece en la dirección)
   titulo:   título de la historia
   bajada:   una o dos líneas que resumen la historia
   artista:  id del artista en data.js (ej. 'david-bowie'); su foto se usa de portada
   etiqueta: texto de la etiqueta roja si no querés que diga el nombre del artista (opcional)
   cancion:  título exacto de la canción, como figura en data.js (opcional)
   cancionArtista, cancionDisco, cancionAnio: datos de la canción si no está en data.js (opcional)
   imagen:   ruta a otra foto en img/ si no querés usar la del artista (opcional)
   fecha:    fecha de publicación, AAAA-MM-DD
   cuerpo:   la historia, un texto por párrafo
   ================================================================ */
const HISTORIAS = [
  {
    id: 'eye-in-the-sky-alan-parsons-project',
    titulo: 'El ojo que todo lo ve',
    bajada: 'Las cámaras escondidas en los techos de los casinos, un disco sobre la vigilancia y un productor que no creía en la canción. Así nació el mayor éxito de The Alan Parsons Project.',
    artista: 'the-alan-parsons-project',
    cancion: 'Eye in the Sky',
    imagen: '',
    fecha: '2026-10-13',
    cuerpo: [
      'Eric Woolfson, el compositor y letrista de The Alan Parsons Project, era un habitué de los casinos. Le gustaba jugar, pero había algo que lo fascinaba todavía más que las mesas: las cámaras escondidas en los techos que vigilaban a cada jugador. En la jerga de los casinos, ese sistema de vigilancia desde arriba se llama “eye in the sky”, el ojo en el cielo.',
      'El dúo ya había hecho un disco entero sobre el juego, The Turn of a Friendly Card, en 1980. Para el siguiente, Woolfson llevó esa idea un paso más allá: la sensación de estar siempre observado. La canción nació de sus reflexiones sobre la vigilancia y la religión, ese otro ojo que, para muchos, también lo ve todo desde arriba. Alan Parsons resumió el tema del disco en una frase: “Siempre hay una cámara mirándote”.',
      'Pero “Eye in the Sky” no es una canción sobre espionaje. Es una canción de amor terminada: alguien que le dice a su pareja que ya no lo engaña, que puede leer sus mentiras, que la conoce tan bien como esas cámaras conocen a los jugadores. La vigilancia se vuelve una metáfora de lo que pasa cuando dos personas ya se vieron por dentro.',
      'La grabaron a fines de 1981 en los estudios Abbey Road de Londres, los mismos donde Parsons había trabajado como ingeniero en discos de The Beatles y Pink Floyd. Como siempre, Woolfson grabó la voz guía para que Parsons eligiera después al cantante ideal entre los muchos invitados del proyecto. Esta vez la elección fue el propio Woolfson: su voz suave y algo melancólica era justo lo que la canción necesitaba.',
      'Parsons no estaba convencido. Según contó Woolfson, el productor no creía que la canción fuera a ser un éxito, y hasta habría apostado en contra con el guitarrista Ian Bairnson.',
      'Se equivocó. El simple salió en mayo de 1982 y llegó al tercer puesto en Estados Unidos, el más alto de toda la carrera del grupo, y al primero en Canadá y en España. En el disco, la canción llega precedida por “Sirius”, un instrumental que entra sin pausa y que tuvo su propia vida: los Chicago Bulls lo usaron para presentar a sus jugadores en la época de Michael Jordan y se volvió la música de entrada de equipos de todo el mundo.'
    ]
  },
  {
    id: 'sweet-child-o-mine-guns-n-roses',
    titulo: 'Un ejercicio de circo que se volvió himno',
    bajada: 'Slash calentaba los dedos haciéndole caras al baterista. Axl escuchaba desde arriba. En una hora tenían el riff más famoso de los ochenta, y al otro día, la letra.',
    artista: 'guns-n-roses',
    cancion: 'Sweet Child O’ Mine',
    imagen: '',
    fecha: '2026-10-13',
    cuerpo: [
      'En 1986, Guns N’ Roses vivía todo junto en una casa del Sunset Strip, en Los Ángeles. Eran cinco músicos sin plata y con fama de peligrosos, y pasaban los días ensayando en el living. Una de esas tardes, mientras el baterista Steven Adler y Slash calentaban, Slash empezó a tocar una melodía rápida y saltarina, casi de circo, solo para hacerle caras a Adler y hacerlo reír. Era un ejercicio para soltar los dedos, nada más.',
      'Izzy Stradlin, el otro guitarrista, lo frenó y le pidió que la tocara de nuevo. Izzy le puso acordes por debajo, Duff McKagan armó una línea de bajo y Adler buscó un ritmo. Slash lo contó así años después: en menos de una hora, su ejercicio de guitarra “se había convertido en otra cosa”.',
      'Axl Rose estaba arriba, en su cuarto, escuchando cómo la canción tomaba forma a través del piso. Bajó con una idea y para la tarde siguiente ya tenía la letra terminada. Era para su novia, Erin Everly, hija de Don Everly, de los Everly Brothers. Axl dijo que quería escribir algo sincero, con la emoción directa de las canciones de Lynyrd Skynyrd: una canción de amor, sin ironía, en medio de un disco lleno de calles, drogas y peleas.',
      'En la sesión siguiente, en Burbank, sumaron el puente y el solo de guitarra. Faltaba el final. Mientras grababan las maquetas, el productor Spencer Proffer les propuso un cierre más lento y largo. Axl escuchaba la grabación una y otra vez y empezó a murmurar para sí mismo, sin saber cómo seguir: “¿Adónde vamos ahora?”. Proffer le dijo que cantara exactamente eso. Esa duda quedó como el final de la canción.',
      'La canción salió en Appetite for Destruction, en 1987, y como simple en Estados Unidos en junio de 1988. El video, filmado en un salón de ensayo con la banda rodeada de su equipo técnico y de sus novias, entre ellas Erin Everly, empezó a pasar sin parar en MTV. “Sweet Child O’ Mine” llegó al número uno en Estados Unidos: fue el único de la banda en toda su carrera.',
      'A Slash nunca terminó de convencerlo del todo. En 1990 dijo que el éxito le daba un poco de náuseas: “Me gusta, pero odio lo que representa”. Para él había empezado como una broma, un juego de dedos para hacer reír a un amigo. Para el resto del mundo, es uno de los riffs más reconocibles de la historia del rock.'
    ]
  },
  {
    id: 'he-aint-heavy-the-hollies',
    titulo: 'No pesa, es mi hermano',
    bajada: 'Una frase que nació en Escocia, pasó por un hogar de niños en Nebraska y terminó convertida en canción por dos compositores que se vieron apenas tres veces, uno de ellos enfermo. The Hollies la llevaron al mundo con un pianista desconocido llamado Elton John.',
    artista: 'the-hollies',
    cancion: 'He Ain’t Heavy, He’s My Brother',
    imagen: '',
    fecha: '2026-10-12',
    cuerpo: [
      'La frase es mucho más vieja que la canción. En 1884, James Wells, un pastor de la Iglesia Libre de Escocia, contó en un libro la historia de una nena que cargaba en brazos a un chico más grande que ella. Alguien le preguntó si no estaba cansada, y ella contestó: “No, no pesa; es mi hermano”.',
      'La anécdota viajó de boca en boca y de libro en libro. En 1924 la revista del club Kiwanis tituló una columna con las palabras exactas que después usaría la canción: “He Ain’t Heavy, He’s My Brother”. Y en los años cuarenta se volvió el lema de Boys Town, el famoso hogar para chicos sin familia fundado en Nebraska por el padre Edward Flanagan. Según el propio hogar, todo empezó con un chico que subía una escalera cargando a otro que tenía polio y usaba aparatos ortopédicos en las piernas.',
      'A fines de los sesenta, el compositor Johnny Mercer presentó en un club nocturno de California a dos colegas: Bobby Scott, pianista y compositor de jazz, y Bob Russell, un letrista veterano. Russell estaba enfermo de linfoma y no le quedaba mucho tiempo. Se vieron solamente tres veces, pero alcanzó para escribir juntos una balada sobre cargar con el otro sin quejarse, sobre un camino largo que se hace más liviano cuando se comparte. Russell murió poco después.',
      'La primera versión la grabó el cantante Kelly Gordon a comienzos de 1969, pero pasó casi inadvertida. La maqueta de Scott y Russell llegó entonces a manos de Tony Hicks, el guitarrista de The Hollies. Le pareció hermosa, pero demasiado lenta. La banda decidió acelerarla un poco y sumarle una orquesta.',
      'La grabaron en junio de 1969 en los estudios EMI de Abbey Road, en Londres, con Allan Clarke en la voz principal. Para el piano contrataron a un músico de sesión de veintidós años que todavía no era famoso: se llamaba Elton John y cobró doce libras por tocar.',
      'El simple salió en septiembre de 1969 y llegó al tercer puesto en Inglaterra y al séptimo en Estados Unidos. Era, además, una especie de renacimiento: Graham Nash acababa de irse de la banda y muchos pensaban que The Hollies no iban a sobrevivir sin él.',
      'Casi veinte años después, en 1988, la canción apareció en una publicidad de cerveza en la televisión británica, se reeditó y llegó por primera vez al número uno en Inglaterra. Y en 2012 un grupo de músicos reunidos como The Justice Collective grabó una nueva versión a beneficio de las familias de las víctimas de la tragedia de Hillsborough, el estadio de Sheffield donde murieron 97 hinchas de Liverpool. Volvió a ser número uno: más de un siglo después, la frase de aquella nena escocesa seguía diciendo lo mismo.'
    ]
  },
  {
    id: 'diamonds-and-rust-joan-baez',
    titulo: 'Diamantes y óxido',
    bajada: 'Una noche de 1974, diez años después de separarse, Bob Dylan llamó por teléfono a Joan Baez. De esa llamada nació una de las canciones de amor más lúcidas del folk.',
    artista: 'joan-baez',
    etiqueta: 'Joan Baez · Bob Dylan',
    cancion: 'Diamonds & Rust',
    imagen: 'img/bob-dylan.jpg',
    fecha: '2026-10-12',
    cuerpo: [
      'A comienzos de los sesenta, Joan Baez era la reina del folk: tenía una voz cristalina, discos exitosos y una portada en la revista Time. Bob Dylan era un chico de Minnesota que tocaba en los cafés del Greenwich Village. Ella lo escuchó, se fascinó con sus canciones y empezó a subirlo al escenario en sus propios conciertos. Así lo presentó ante un público enorme. Durante un par de años fueron pareja y la imagen de la canción de protesta: cantaron juntos en Newport y en la Marcha sobre Washington de 1963.',
      'La relación terminó mal. En la gira de Dylan por Inglaterra en 1965 él ya era una estrella mucho más grande que ella, y la dejó al costado: ni siquiera la invitó a cantar. Se separaron y cada uno siguió su camino. Baez se casó con el activista David Harris y siguió cantando, muchas veces canciones de Dylan.',
      'En noviembre de 1974, casi diez años después, sonó el teléfono. Era Dylan, desde una cabina en algún lugar del Medio Oeste. No llamaba para nada en especial: quería leerle la letra de una canción que acababa de terminar, “Lily, Rosemary and the Jack of Hearts”. Baez estaba escribiendo otra cosa en ese momento, pero después de colgar la canción cambió de rumbo y pasó a ser sobre él.',
      'La letra arranca justamente con esa llamada inesperada de un viejo amor, y desde ahí vuelve diez años atrás: a un hotel barato del Greenwich Village a mediados de los sesenta, a un invierno en Nueva York, a un joven que había irrumpido en la escena como si ya fuera una leyenda. Baez lo retrata con cariño y sin piedad a la vez: con admiración por su talento y con la claridad de quien sabe que esa historia no tenía futuro.',
      'El título lo dice todo. Los recuerdos traen diamantes y óxido: lo hermoso y lo que se gastó con el tiempo, mezclados. Baez no niega lo que sintió ni se queda en el resentimiento. La canción termina con una despedida madura: si él le está ofreciendo volver a aquello, ella ya pagó por eso una vez.',
      'Baez la grabó en enero de 1975 y salió en abril, como canción principal de su disco Diamonds & Rust, que fue disco de oro. Fue su último gran éxito en la radio estadounidense.',
      'Ese mismo año, los dos volvieron a girar juntos en la Rolling Thunder Revue. En un ensayo, Dylan le preguntó por la canción. Ella le contestó que era sobre su exmarido, David Harris, y que la había escrito mientras él estaba preso. No era cierto. Años después, en un documental, Dylan fue sencillo: “Me encanta esa canción”.',
      'Con el tiempo, “Diamonds & Rust” tuvo una vida inesperada: la banda de heavy metal Judas Priest grabó una versión potente que se volvió un clásico de sus conciertos. Cuando se la mostraron, Baez respondió: “¡Me encanta!”.'
    ]
  },
  {
    id: 'girl-from-the-north-country-bob-dylan',
    titulo: 'Una canción de invierno para una chica del norte',
    bajada: 'Londres, diciembre de 1962. Un Dylan de veintiún años aprende una vieja balada inglesa, viaja a Italia detrás de un amor que ya se había ido y vuelve con una de sus canciones más tiernas.',
    artista: 'bob-dylan',
    cancion: 'Girl from the North Country',
    imagen: '',
    fecha: '2026-10-12',
    cuerpo: [
      'En diciembre de 1962, Bob Dylan tenía veintiún años y un solo disco editado. Creía que el segundo ya estaba terminado cuando viajó por primera vez a Inglaterra. Londres lo recibió con frío y con algo que no esperaba: una tradición de canciones folk mucho más antigua que la que había aprendido en Estados Unidos.',
      'Su guía en ese mundo fue Martin Carthy, un joven cantante de la escena folk londinense. En los clubes y en su casa, Carthy le enseñó baladas tradicionales inglesas, entre ellas su arreglo de “Scarborough Fair”, una canción de siglos en la que alguien le pide a un viajero que salude de su parte a un viejo amor. Esa melodía y esa idea se le quedaron a Dylan en la cabeza.',
      'Desde Londres, Dylan siguió viaje a Italia. Iba detrás de Suze Rotolo, su novia, que estaba estudiando allí y cuya ausencia lo tenía a mal traer. Lo que no sabía es que ella ya había vuelto a Nueva York. Solo, en otro país y lejos de la chica que quería, terminó de escribir la canción.',
      'Cuando regresó a Londres, entró al club Troubadour y le dijo a Carthy: “Mirá, acá está ‘Scarborough Fair’”. La melodía venía de la balada inglesa, pero la letra era toda suya: un hombre que le pide a quien vaya hacia el norte, donde el viento sopla fuerte en la frontera, que busque a una chica que vivía allí, que se fije si lleva un abrigo para el frío y si su pelo todavía cae largo sobre el pecho.',
      'El “norte” de la canción es el de su infancia: Hibbing, un pueblo minero de Minnesota cerca de la frontera con Canadá, con inviernos interminables. Por eso, durante décadas, varias mujeres se preguntaron si la canción era para ellas. Echo Helstrom, su novia de la adolescencia en Hibbing, estaba segura: “No puede ser nadie más”, dijo. Bonnie Beecher, otra novia de sus años en Minnesota, también tiene argumentos: en 1978, en un concierto en Oakland, Dylan le dedicó la canción a “una chica del norte” que estaba en el público, y era ella. Y está Suze Rotolo, la ausencia que la provocó. Un biógrafo sugirió que quizás Dylan dejó que cada una creyera que era la elegida.',
      'La grabó el 24 de abril de 1963 en Nueva York, solo con su guitarra y su armónica, y salió un mes después como segunda canción de The Freewheelin’ Bob Dylan. Keith Richards lo resumió así: “Bob la hizo bien a la primera”.',
      'Seis años después, en febrero de 1969, Dylan la volvió a grabar en Nashville, esta vez a dúo con Johnny Cash, con una voz más suave y un aire country. Esa versión abrió el disco Nashville Skyline y le dio a la canción una segunda vida. Desde entonces la cantaron Joe Cocker, Rod Stewart, Neil Young y muchos más, y en 2017 le dio nombre a un musical que se presentó en Londres y en Broadway.'
    ]
  },
  {
    id: 'let-it-be-the-beatles',
    titulo: 'La madre que volvió en un sueño',
    bajada: 'Mary McCartney murió cuando Paul tenía catorce años. Más de una década después, se le apareció en sueños con un consejo de tres palabras. Así nació “Let It Be”.',
    artista: 'the-beatles',
    cancion: 'Let It Be',
    imagen: '',
    fecha: '2026-10-12',
    cuerpo: [
      'Mary Patricia McCartney era enfermera y partera en Liverpool. Murió de cáncer en 1956, cuando su hijo Paul tenía apenas catorce años. Más de diez años después, cuando The Beatles eran la banda más famosa del mundo pero empezaban a desarmarse por dentro, ella volvió a aparecer, esta vez en un sueño.',
      'Paul lo contó muchas veces: en el sueño su madre estaba tranquila, lo miraba y le decía que todo iba a estar bien, que lo dejara ser. “Fue hermoso volver a verla”, recordó. “Me sentí muy bendecido por haber tenido ese sueño.” Al despertar tenía la frase que se convertiría en el estribillo: let it be, dejalo ser.',
      'Por eso la “Mother Mary” de la canción no es, en su origen, la Virgen María, aunque muchos la escucharon como un himno religioso, casi un góspel. McCartney nunca quiso cerrar esa puerta: dijo que cada uno puede interpretarla como quiera.',
      'La primera vez que la tocó en un estudio fue en septiembre de 1968, entre toma y toma de “Piggies”, durante las sesiones del Álbum Blanco. Todavía no tenía la letra definitiva: en esa prueba cantaba “Brother Malcolm” en vez de “Mother Mary”. Malcolm era Mal Evans, el asistente de la banda, que años después aseguró que la idea se le había ocurrido a Paul en una meditación en la India en la que lo había visto a él.',
      'En enero de 1969 The Beatles se encerraron a ensayar frente a las cámaras, primero en los estudios de cine de Twickenham y después en su propio estudio de Apple, en Londres. El clima era tenso y la película que filmaban terminaría mostrando a una banda cansada. En medio de ese ambiente, Paul sentado al piano tocaba una canción que hablaba justamente de encontrar calma en los momentos difíciles.',
      'La versión definitiva se grabó el 31 de enero de 1969, con Paul en el piano, George en guitarra, Ringo en batería y Billy Preston en el órgano Hammond. Pero la canción tuvo dos vidas. George grabó dos solos de guitarra distintos: uno suave, que quedó en el simple producido por George Martin, y otro más filoso, que Phil Spector eligió para el disco, con más orquesta y otra mezcla. Por eso hay dos “Let It Be” y cada fan tiene su preferida.',
      'El simple salió el 6 de marzo de 1970 y llegó al número uno en Estados Unidos. Fue el último simple de The Beatles antes de que McCartney anunciara que dejaba la banda, en abril de ese año. Cuando el disco Let It Be llegó a las disquerías, en mayo, The Beatles ya no existían.',
      'La canción que había nacido de un sueño para consolar a Paul terminó sonando como una despedida. Medio siglo después sigue siendo eso para millones de personas: alguien que, en la hora más oscura, te dice que todo va a estar bien.'
    ]
  },
  {
    id: 'heroes-david-bowie',
    titulo: 'Dos amantes junto al Muro',
    bajada: 'Berlín, 1977. Un estudio a quinientos metros del Muro, una guitarra que aullaba y un beso que Bowie vio desde la ventana. Así nació “Heroes”.',
    artista: 'david-bowie',
    cancion: '“Heroes”',
    imagen: '',
    fecha: '2026-10-12',
    cuerpo: [
      'En el verano de 1977, David Bowie vivía en Berlín Occidental. Había llegado escapando de los excesos de Los Ángeles y buscando otra forma de hacer música. Junto a Brian Eno y al productor Tony Visconti se encerró en los estudios Hansa, un antiguo salón de conciertos que durante la guerra había sido sala de baile de oficiales de la Gestapo. Desde sus ventanas se veía el Muro, a unos quinientos metros.',
      'La canción empezó sin letra. Bowie se sentó al piano y la banda, con Carlos Alomar en guitarra, George Murray en bajo y Dennis Davis en batería, armó una base que crecía y crecía durante casi ocho minutos. Eno, que estaba convencido de que esa secuencia de acordes sonaba “grandiosa y heroica”, ya tenía en la cabeza una palabra para el disco: héroes.',
      'Después llegó Robert Fripp, el guitarrista de King Crimson, invitado por Eno. Bowie casi no le dio indicaciones. Fripp grabó tres tomas usando la realimentación del amplificador: marcó con cinta distintos puntos del piso del estudio y, según dónde se parara, la guitarra sostenía una nota diferente. Visconti mezcló las tres tomas y de ahí salió ese lamento eléctrico, casi como una sirena, que atraviesa toda la canción.',
      'La letra apareció al final. Bowie se quedó solo en el estudio y escribió la historia de dos amantes que se encuentran junto al Muro, bajo las torres de vigilancia, y que por un día pueden ser héroes. La imagen la había visto con sus propios ojos: desde la ventana de Hansa observó a una pareja besándose junto a la pared. Durante años habló de “una pareja joven”. Recién en 2003 contó que eran Tony Visconti, que en ese momento estaba casado, y la cantante Antonia Maass. No lo había dicho antes para protegerlo. Maass, por su parte, sostuvo más tarde que la canción ya estaba terminada antes de ese beso.',
      'Para la voz, Visconti inventó un sistema con tres micrófonos: uno cerca de Bowie, otro a unos seis metros y otro a unos quince. Los dos lejanos solo se abrían cuando Bowie cantaba más fuerte. Por eso la voz empieza contenida y, a medida que la canción avanza, suena cada vez más grande, como si llenara todo el salón. Bowie grabó tres tomas en unas dos horas.',
      'Las comillas del título no son un detalle. Bowie las puso a propósito para darle a la palabra un toque de ironía: los héroes de la canción no son invencibles, son dos personas comunes que, apenas por un día, le ganan a todo lo que las separa. Él decía que la canción trataba de “enfrentar la realidad y plantarse ante ella”.',
      '“Heroes” salió como simple en septiembre de 1977 y al principio no fue un gran éxito. Con los años se convirtió en un himno. El 6 de junio de 1987 Bowie la cantó frente al Reichstag, en Berlín Occidental, pegado al Muro, y del otro lado miles de jóvenes de Berlín Oriental se juntaron para escucharlo. Él lo recordaba como una de las presentaciones más emocionantes de su vida. Dos años después, el Muro cayó.',
      'Cuando Bowie murió, en enero de 2016, el Ministerio de Relaciones Exteriores de Alemania lo despidió agradeciéndole por haber ayudado a derribar el Muro.'
    ]
  }
];
