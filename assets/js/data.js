/* ================================================================
   MOONSHINER — datos de los artistas
   Para sumar un artista, agregá un objeto a este arreglo.
   hero: ruta de la foto de portada dentro de la carpeta img/.
   heroPos: qué parte de la foto se ve en el banner (ej. 'center 30%').
   ================================================================ */
const ARTISTAS = [
  {
    "id": "the-beatles",
    "nombre": "The Beatles",
    "pais": "Reino Unido",
    "ciudad": "Liverpool, Inglaterra",
    "anios": "1960 – 1970",
    "genero": "Rock, pop, psicodelia",
    "integrantes": [
      "John Lennon",
      "Paul McCartney",
      "George Harrison",
      "Ringo Starr"
    ],
    "hero": "img/the-beatles.jpg",
    "heroPos": "center 52%",
    "bajada": "De los sótanos de Liverpool a reinventar la canción pop en siete años de discos.",
    "descripcion": [
      "Se formaron en Liverpool en 1960 y en 1962, con la llegada de Ringo Starr a la batería, quedó la formación definitiva: John Lennon, Paul McCartney, George Harrison y Ringo. Venían de tocar noches enteras en el Cavern Club y en los bares de Hamburgo, y en muy pocos años se convirtieron en el grupo más influyente de la música popular.",
      "En apenas siete años de discos pasaron del beat directo de “Love Me Do” a la experimentación de estudio de Revolver y Sgt. Pepper’s, con cintas al revés, orquestas y sitar. En 1966 dejaron de dar conciertos para dedicarse al estudio, y se separaron en 1970, después de grabar Abbey Road y publicar Let It Be. En los noventa, la serie Anthology sumó dos canciones nuevas a partir de grabaciones caseras de Lennon."
    ],
    "nota": "La lista va en orden cronológico: escuchala de arriba hacia abajo para seguir cómo cambia el sonido.",
    "canciones": [
      {
        "titulo": "I Saw Her Standing There",
        "disco": "Please Please Me",
        "anio": 1963
      },
      {
        "titulo": "Anna (Go to Him)",
        "disco": "Please Please Me",
        "anio": 1963
      },
      {
        "titulo": "Chains",
        "disco": "Please Please Me",
        "anio": 1963
      },
      {
        "titulo": "Ask Me Why",
        "disco": "Please Please Me",
        "anio": 1963
      },
      {
        "titulo": "Please Please Me",
        "disco": "Please Please Me",
        "anio": 1963
      },
      {
        "titulo": "Love Me Do",
        "disco": "Please Please Me",
        "anio": 1963
      },
      {
        "titulo": "Baby It’s You",
        "disco": "Please Please Me",
        "anio": 1963
      },
      {
        "titulo": "Twist and Shout",
        "disco": "Please Please Me",
        "anio": 1963
      },
      {
        "titulo": "She Loves You",
        "disco": "Simple (fuera de álbum)",
        "anio": 1963
      },
      {
        "titulo": "I Want to Hold Your Hand",
        "disco": "Simple (fuera de álbum)",
        "anio": 1963
      },
      {
        "titulo": "A Hard Day’s Night",
        "disco": "A Hard Day’s Night",
        "anio": 1964
      },
      {
        "titulo": "I Should Have Known Better",
        "disco": "A Hard Day’s Night",
        "anio": 1964
      },
      {
        "titulo": "If I Fell",
        "disco": "A Hard Day’s Night",
        "anio": 1964
      },
      {
        "titulo": "And I Love Her",
        "disco": "A Hard Day’s Night",
        "anio": 1964
      },
      {
        "titulo": "Tell Me Why",
        "disco": "A Hard Day’s Night",
        "anio": 1964
      },
      {
        "titulo": "Can’t Buy Me Love",
        "disco": "A Hard Day’s Night",
        "anio": 1964
      },
      {
        "titulo": "Any Time at All",
        "disco": "A Hard Day’s Night",
        "anio": 1964
      },
      {
        "titulo": "I’ll Cry Instead",
        "disco": "A Hard Day’s Night",
        "anio": 1964
      },
      {
        "titulo": "I’ll Be Back",
        "disco": "A Hard Day’s Night",
        "anio": 1964
      },
      {
        "titulo": "No Reply",
        "disco": "Beatles for Sale",
        "anio": 1964
      },
      {
        "titulo": "Rock and Roll Music",
        "disco": "Beatles for Sale",
        "anio": 1964
      },
      {
        "titulo": "I’ll Follow the Sun",
        "disco": "Beatles for Sale",
        "anio": 1964
      },
      {
        "titulo": "Kansas City / Hey-Hey-Hey-Hey!",
        "disco": "Beatles for Sale",
        "anio": 1964
      },
      {
        "titulo": "Eight Days a Week",
        "disco": "Beatles for Sale",
        "anio": 1964
      },
      {
        "titulo": "Help!",
        "disco": "Help!",
        "anio": 1965
      },
      {
        "titulo": "You’ve Got to Hide Your Love Away",
        "disco": "Help!",
        "anio": 1965
      },
      {
        "titulo": "I Need You",
        "disco": "Help!",
        "anio": 1965
      },
      {
        "titulo": "You’re Going to Lose That Girl",
        "disco": "Help!",
        "anio": 1965
      },
      {
        "titulo": "Ticket to Ride",
        "disco": "Help!",
        "anio": 1965
      },
      {
        "titulo": "I’ve Just Seen a Face",
        "disco": "Help!",
        "anio": 1965
      },
      {
        "titulo": "Yesterday",
        "disco": "Help!",
        "anio": 1965
      },
      {
        "titulo": "Dizzy Miss Lizzy",
        "disco": "Help!",
        "anio": 1965
      },
      {
        "titulo": "Drive My Car",
        "disco": "Rubber Soul",
        "anio": 1965
      },
      {
        "titulo": "Nowhere Man",
        "disco": "Rubber Soul",
        "anio": 1965
      },
      {
        "titulo": "The Word",
        "disco": "Rubber Soul",
        "anio": 1965
      },
      {
        "titulo": "Michelle",
        "disco": "Rubber Soul",
        "anio": 1965
      },
      {
        "titulo": "I’m Looking Through You",
        "disco": "Rubber Soul",
        "anio": 1965
      },
      {
        "titulo": "In My Life",
        "disco": "Rubber Soul",
        "anio": 1965
      },
      {
        "titulo": "Taxman",
        "disco": "Revolver",
        "anio": 1966
      },
      {
        "titulo": "Eleanor Rigby",
        "disco": "Revolver",
        "anio": 1966
      },
      {
        "titulo": "Here, There and Everywhere",
        "disco": "Revolver",
        "anio": 1966
      },
      {
        "titulo": "Yellow Submarine",
        "disco": "Revolver",
        "anio": 1966
      },
      {
        "titulo": "For No One",
        "disco": "Revolver",
        "anio": 1966
      },
      {
        "titulo": "Got to Get You into My Life",
        "disco": "Revolver",
        "anio": 1966
      },
      {
        "titulo": "Sgt. Pepper’s Lonely Hearts Club Band",
        "disco": "Sgt. Pepper’s Lonely Hearts Club Band",
        "anio": 1967
      },
      {
        "titulo": "With a Little Help from My Friends",
        "disco": "Sgt. Pepper’s Lonely Hearts Club Band",
        "anio": 1967
      },
      {
        "titulo": "Lucy in the Sky with Diamonds",
        "disco": "Sgt. Pepper’s Lonely Hearts Club Band",
        "anio": 1967
      },
      {
        "titulo": "A Day in the Life",
        "disco": "Sgt. Pepper’s Lonely Hearts Club Band",
        "anio": 1967
      },
      {
        "titulo": "The Fool on the Hill",
        "disco": "Magical Mystery Tour",
        "anio": 1967
      },
      {
        "titulo": "I Am the Walrus",
        "disco": "Magical Mystery Tour",
        "anio": 1967
      },
      {
        "titulo": "Strawberry Fields Forever",
        "disco": "Magical Mystery Tour",
        "anio": 1967
      },
      {
        "titulo": "Penny Lane",
        "disco": "Magical Mystery Tour",
        "anio": 1967
      },
      {
        "titulo": "All You Need Is Love",
        "disco": "Magical Mystery Tour",
        "anio": 1967
      },
      {
        "titulo": "Hey Jude",
        "disco": "Simple (fuera de álbum)",
        "anio": 1968
      },
      {
        "titulo": "Revolution",
        "disco": "Simple (fuera de álbum)",
        "anio": 1968
      },
      {
        "titulo": "Back in the U.S.S.R.",
        "disco": "The Beatles (Álbum Blanco)",
        "anio": 1968
      },
      {
        "titulo": "Ob-La-Di, Ob-La-Da",
        "disco": "The Beatles (Álbum Blanco)",
        "anio": 1968
      },
      {
        "titulo": "While My Guitar Gently Weeps",
        "disco": "The Beatles (Álbum Blanco)",
        "anio": 1968
      },
      {
        "titulo": "Happiness Is a Warm Gun",
        "disco": "The Beatles (Álbum Blanco)",
        "anio": 1968
      },
      {
        "titulo": "Blackbird",
        "disco": "The Beatles (Álbum Blanco)",
        "anio": 1968
      },
      {
        "titulo": "Sexy Sadie",
        "disco": "The Beatles (Álbum Blanco)",
        "anio": 1968
      },
      {
        "titulo": "Helter Skelter",
        "disco": "The Beatles (Álbum Blanco)",
        "anio": 1968
      },
      {
        "titulo": "All Together Now",
        "disco": "Yellow Submarine",
        "anio": 1969
      },
      {
        "titulo": "Hey Bulldog",
        "disco": "Yellow Submarine",
        "anio": 1969
      },
      {
        "titulo": "Come Together",
        "disco": "Abbey Road",
        "anio": 1969
      },
      {
        "titulo": "Something",
        "disco": "Abbey Road",
        "anio": 1969
      },
      {
        "titulo": "Oh! Darling",
        "disco": "Abbey Road",
        "anio": 1969
      },
      {
        "titulo": "Octopus’s Garden",
        "disco": "Abbey Road",
        "anio": 1969
      },
      {
        "titulo": "I Want You (She’s So Heavy)",
        "disco": "Abbey Road",
        "anio": 1969
      },
      {
        "titulo": "Here Comes the Sun",
        "disco": "Abbey Road",
        "anio": 1969
      },
      {
        "titulo": "Because",
        "disco": "Abbey Road",
        "anio": 1969
      },
      {
        "titulo": "You Never Give Me Your Money",
        "disco": "Abbey Road",
        "anio": 1969
      },
      {
        "titulo": "She Came In Through the Bathroom Window",
        "disco": "Abbey Road",
        "anio": 1969
      },
      {
        "titulo": "Golden Slumbers",
        "disco": "Abbey Road",
        "anio": 1969
      },
      {
        "titulo": "Carry That Weight",
        "disco": "Abbey Road",
        "anio": 1969
      },
      {
        "titulo": "The End",
        "disco": "Abbey Road",
        "anio": 1969
      },
      {
        "titulo": "Across the Universe",
        "disco": "Let It Be",
        "anio": 1970
      },
      {
        "titulo": "I Me Mine",
        "disco": "Let It Be",
        "anio": 1970
      },
      {
        "titulo": "Let It Be",
        "disco": "Let It Be",
        "anio": 1970
      },
      {
        "titulo": "I’ve Got a Feeling",
        "disco": "Let It Be",
        "anio": 1970
      },
      {
        "titulo": "The Long and Winding Road",
        "disco": "Let It Be",
        "anio": 1970
      },
      {
        "titulo": "For You Blue",
        "disco": "Let It Be",
        "anio": 1970
      },
      {
        "titulo": "Get Back",
        "disco": "Let It Be",
        "anio": 1970
      },
      {
        "titulo": "Free as a Bird",
        "disco": "Anthology 1",
        "anio": 1995
      },
      {
        "titulo": "Real Love",
        "disco": "Anthology 2",
        "anio": 1996
      }
    ]
  },
  {
    "id": "the-alan-parsons-project",
    "nombre": "The Alan Parsons Project",
    "pais": "Reino Unido",
    "ciudad": "Londres, Inglaterra",
    "anios": "1975 – 1990",
    "genero": "Rock progresivo, soft rock",
    "integrantes": [
      "Alan Parsons",
      "Eric Woolfson"
    ],
    "hero": "img/the-alan-parsons-project.jpg",
    "heroPos": "center 28%",
    "bajada": "Un ingeniero de Abbey Road y un compositor escocés que usaron el estudio de grabación como un instrumento más.",
    "descripcion": [
      "El proyecto nació en Londres en 1975, cuando Alan Parsons se asoció con el compositor y tecladista escocés Eric Woolfson. Parsons venía de trabajar como ingeniero de sonido en Abbey Road, en discos como Abbey Road y Let It Be de The Beatles y The Dark Side of the Moon de Pink Floyd. Más que una banda, era un dúo que pensaba cada disco como una obra conceptual y convocaba a distintos cantantes según lo que pidiera cada canción.",
      "Debutaron en 1976 con Tales of Mystery and Imagination, inspirado en los relatos de Edgar Allan Poe, y en los años siguientes mezclaron rock progresivo con canciones pop de producción impecable. Eye in the Sky, de 1982, fue su mayor éxito. Un núcleo estable de músicos, con Ian Bairnson en guitarra, David Paton en bajo y Stuart Elliott en batería, les dio un sonido reconocible disco tras disco hasta que el dúo se separó a comienzos de los noventa."
    ],
    "nota": "La lista va en orden cronológico, desde I Robot hasta Gaudi.",
    "canciones": [
      {
        "titulo": "Don’t Let It Show",
        "disco": "I Robot",
        "anio": 1977
      },
      {
        "titulo": "Games People Play",
        "disco": "The Turn of a Friendly Card",
        "anio": 1980
      },
      {
        "titulo": "Time",
        "disco": "The Turn of a Friendly Card",
        "anio": 1980
      },
      {
        "titulo": "Sirius",
        "disco": "Eye in the Sky",
        "anio": 1982
      },
      {
        "titulo": "Eye in the Sky",
        "disco": "Eye in the Sky",
        "anio": 1982
      },
      {
        "titulo": "Silence and I",
        "disco": "Eye in the Sky",
        "anio": 1982
      },
      {
        "titulo": "Psychobabble",
        "disco": "Eye in the Sky",
        "anio": 1982
      },
      {
        "titulo": "Old and Wise",
        "disco": "Eye in the Sky",
        "anio": 1982
      },
      {
        "titulo": "Prime Time",
        "disco": "Ammonia Avenue",
        "anio": 1984
      },
      {
        "titulo": "Since the Last Goodbye",
        "disco": "Ammonia Avenue",
        "anio": 1984
      },
      {
        "titulo": "Don’t Answer Me",
        "disco": "Ammonia Avenue",
        "anio": 1984
      },
      {
        "titulo": "You Don’t Believe",
        "disco": "Ammonia Avenue",
        "anio": 1984
      },
      {
        "titulo": "Ammonia Avenue",
        "disco": "Ammonia Avenue",
        "anio": 1984
      },
      {
        "titulo": "Days Are Numbers (The Traveller)",
        "disco": "Vulture Culture",
        "anio": 1985
      },
      {
        "titulo": "Sooner or Later",
        "disco": "Vulture Culture",
        "anio": 1985
      },
      {
        "titulo": "Limelight",
        "disco": "Stereotomy",
        "anio": 1985
      },
      {
        "titulo": "Standing on Higher Ground",
        "disco": "Gaudi",
        "anio": 1987
      }
    ]
  },
  {
    "id": "the-byrds",
    "nombre": "The Byrds",
    "pais": "Estados Unidos",
    "ciudad": "Los Ángeles, California",
    "anios": "1964 – 1973",
    "genero": "Folk rock, rock psicodélico, country rock",
    "integrantes": [
      "Roger McGuinn",
      "Gene Clark",
      "David Crosby",
      "Chris Hillman",
      "Michael Clarke"
    ],
    "hero": "img/the-byrds.jpg",
    "heroPos": "center 24%",
    "bajada": "La guitarra de doce cuerdas que unió a Bob Dylan con The Beatles e inventó el folk rock.",
    "descripcion": [
      "Se formaron en Los Ángeles en 1964 con Roger McGuinn, Gene Clark, David Crosby, Chris Hillman y Michael Clarke. Venían de la escena folk, pero después de ver a The Beatles en el cine decidieron electrificar ese repertorio. El sonido brillante de la Rickenbacker de doce cuerdas de McGuinn y las armonías vocales en tres voces se volvieron su marca.",
      "En 1965 su versión de “Mr. Tambourine Man”, de Bob Dylan, llegó al número uno y abrió el camino del folk rock. Con “Eight Miles High” se metieron en la psicodelia y en 1968, con la llegada de Gram Parsons, grabaron Sweetheart of the Rodeo, uno de los discos fundacionales del country rock. La formación cambió muchas veces, siempre alrededor de McGuinn, hasta la separación en 1973."
    ],
    "nota": "La lista va en orden cronológico. “It’s All Over Now, Baby Blue” es la toma de 1965, que quedó inédita y hoy aparece como tema extra de Turn! Turn! Turn!",
    "canciones": [
      {
        "titulo": "Mr. Tambourine Man",
        "disco": "Mr. Tambourine Man",
        "anio": 1965
      },
      {
        "titulo": "I’ll Feel a Whole Lot Better",
        "disco": "Mr. Tambourine Man",
        "anio": 1965
      },
      {
        "titulo": "Chimes of Freedom",
        "disco": "Mr. Tambourine Man",
        "anio": 1965
      },
      {
        "titulo": "Turn! Turn! Turn! (To Everything There Is a Season)",
        "disco": "Turn! Turn! Turn!",
        "anio": 1965
      },
      {
        "titulo": "Set You Free This Time",
        "disco": "Turn! Turn! Turn!",
        "anio": 1965
      },
      {
        "titulo": "It’s All Over Now, Baby Blue",
        "disco": "Turn! Turn! Turn! (toma inédita de 1965)",
        "anio": 1965
      },
      {
        "titulo": "Eight Miles High",
        "disco": "Fifth Dimension",
        "anio": 1966
      },
      {
        "titulo": "My Back Pages",
        "disco": "Younger Than Yesterday",
        "anio": 1967
      },
      {
        "titulo": "Wasn’t Born to Follow",
        "disco": "The Notorious Byrd Brothers",
        "anio": 1968
      },
      {
        "titulo": "You Ain’t Goin’ Nowhere",
        "disco": "Sweetheart of the Rodeo",
        "anio": 1968
      },
      {
        "titulo": "Hickory Wind",
        "disco": "Sweetheart of the Rodeo",
        "anio": 1968
      },
      {
        "titulo": "Lay Lady Lay",
        "disco": "Simple (fuera de álbum)",
        "anio": 1969
      },
      {
        "titulo": "Ballad of Easy Rider",
        "disco": "Ballad of Easy Rider",
        "anio": 1969
      }
    ]
  },
  {
    "id": "the-eagles",
    "nombre": "The Eagles",
    "spotifyNombre": "Eagles",
    "pais": "Estados Unidos",
    "ciudad": "Los Ángeles, California",
    "anios": "Desde 1971",
    "genero": "Country rock, soft rock",
    "integrantes": [
      "Glenn Frey",
      "Don Henley",
      "Bernie Leadon",
      "Randy Meisner",
      "Don Felder",
      "Joe Walsh",
      "Timothy B. Schmit"
    ],
    "hero": "img/the-eagles.jpg",
    "heroPos": "center 30%",
    "bajada": "Armonías de country, guitarras de rock y la cara oscura del sueño californiano.",
    "descripcion": [
      "Se formaron en Los Ángeles en 1971, cuando Glenn Frey, Don Henley, Bernie Leadon y Randy Meisner coincidieron como banda de apoyo de Linda Ronstadt. Desde el primer disco combinaron las armonías vocales del country con el pulso del rock, y canciones como “Take It Easy” definieron el sonido de la costa oeste en los setenta.",
      "Con la llegada de Don Felder y luego de Joe Walsh, las guitarras ganaron peso y el grupo llegó a su punto más alto con Hotel California en 1976, un retrato desencantado de la vida en California. Timothy B. Schmit reemplazó a Meisner en 1977 y la banda se separó en 1980, después de The Long Run. Volvieron a reunirse en 1994 y en 2007 publicaron Long Road Out of Eden, su último disco de estudio."
    ],
    "nota": "La lista va en orden cronológico, desde el primer disco hasta el regreso de 2007.",
    "canciones": [
      {
        "titulo": "Take It Easy",
        "disco": "Eagles",
        "anio": 1972
      },
      {
        "titulo": "Doolin-Dalton",
        "disco": "Desperado",
        "anio": 1973
      },
      {
        "titulo": "Tequila Sunrise",
        "disco": "Desperado",
        "anio": 1973
      },
      {
        "titulo": "Desperado",
        "disco": "Desperado",
        "anio": 1973
      },
      {
        "titulo": "Already Gone",
        "disco": "On the Border",
        "anio": 1974
      },
      {
        "titulo": "You Never Cry Like a Lover",
        "disco": "On the Border",
        "anio": 1974
      },
      {
        "titulo": "Ol’ 55",
        "disco": "On the Border",
        "anio": 1974
      },
      {
        "titulo": "The Best of My Love",
        "disco": "On the Border",
        "anio": 1974
      },
      {
        "titulo": "Take It to the Limit",
        "disco": "One of These Nights",
        "anio": 1975
      },
      {
        "titulo": "After the Thrill Is Gone",
        "disco": "One of These Nights",
        "anio": 1975
      },
      {
        "titulo": "Hotel California",
        "disco": "Hotel California",
        "anio": 1976
      },
      {
        "titulo": "New Kid in Town",
        "disco": "Hotel California",
        "anio": 1976
      },
      {
        "titulo": "Wasted Time",
        "disco": "Hotel California",
        "anio": 1976
      },
      {
        "titulo": "The Last Resort",
        "disco": "Hotel California",
        "anio": 1976
      },
      {
        "titulo": "The Long Run",
        "disco": "The Long Run",
        "anio": 1979
      },
      {
        "titulo": "In the City",
        "disco": "The Long Run",
        "anio": 1979
      },
      {
        "titulo": "The Sad Cafe",
        "disco": "The Long Run",
        "anio": 1979
      },
      {
        "titulo": "You Are Not Alone",
        "disco": "Long Road Out of Eden",
        "anio": 2007
      }
    ]
  },
  {
    "id": "the-hollies",
    "nombre": "The Hollies",
    "pais": "Reino Unido",
    "ciudad": "Mánchester, Inglaterra",
    "anios": "Desde 1962",
    "genero": "Pop rock, beat, soft rock",
    "integrantes": [
      "Allan Clarke",
      "Graham Nash",
      "Tony Hicks",
      "Bobby Elliott",
      "Eric Haydock",
      "Bernie Calvert",
      "Terry Sylvester"
    ],
    "hero": "img/the-hollies.jpg",
    "heroPos": "center 30%",
    "bajada": "Tres voces en armonía que sobrevivieron a la invasión británica y a casi todos los cambios de moda.",
    "descripcion": [
      "Nacieron en Mánchester en 1962 alrededor de dos amigos de la escuela, Allan Clarke y Graham Nash, a los que se sumaron el guitarrista Tony Hicks y, al año siguiente, el baterista Bobby Elliott. Las armonías en tres voces de Clarke, Nash y Hicks los convirtieron en uno de los grupos más exitosos de la ola beat británica, con una seguidilla de simples en los primeros puestos.",
      "En 1968 Nash se fue para formar Crosby, Stills & Nash y Terry Sylvester ocupó su lugar. Lejos de apagarse, la banda encontró una segunda etapa de éxitos con “He Ain’t Heavy, He’s My Brother”, el rock más crudo de “Long Cool Woman (in a Black Dress)” y la balada “The Air That I Breathe”. En 2010 ingresaron al Salón de la Fama del Rock and Roll."
    ],
    "nota": "La lista va en orden cronológico. Varios de sus grandes éxitos salieron como simples y en Inglaterra no formaron parte de ningún disco.",
    "canciones": [
      {
        "titulo": "Just One Look",
        "disco": "Simple (fuera de álbum)",
        "anio": 1964
      },
      {
        "titulo": "Sorry Suzanne",
        "disco": "Simple (fuera de álbum)",
        "anio": 1969
      },
      {
        "titulo": "Blowin’ in the Wind",
        "disco": "Hollies Sing Dylan",
        "anio": 1969
      },
      {
        "titulo": "He Ain’t Heavy, He’s My Brother",
        "disco": "Simple (fuera de álbum)",
        "anio": 1969
      },
      {
        "titulo": "Gasoline Alley Bred",
        "disco": "Simple (fuera de álbum)",
        "anio": 1970
      },
      {
        "titulo": "Long Cool Woman (in a Black Dress)",
        "disco": "Distant Light",
        "anio": 1971
      },
      {
        "titulo": "Indian Girl",
        "disco": "Lado B del simple “The Baby”",
        "anio": 1972
      },
      {
        "titulo": "Magic Woman Touch",
        "disco": "Romany",
        "anio": 1972
      },
      {
        "titulo": "Jesus Was a Crossmaker",
        "disco": "Romany",
        "anio": 1972
      },
      {
        "titulo": "The Air That I Breathe",
        "disco": "Hollies",
        "anio": 1974
      },
      {
        "titulo": "The Day That Curly Billy Shot Down Crazy Sam McGee",
        "disco": "Hollies",
        "anio": 1974
      },
      {
        "titulo": "4th of July, Asbury Park (Sandy)",
        "disco": "Another Night",
        "anio": 1975
      },
      {
        "titulo": "Lonely Hobo Lullaby",
        "disco": "Another Night",
        "anio": 1975
      },
      {
        "titulo": "I’m Down",
        "disco": "Another Night",
        "anio": 1975
      },
      {
        "titulo": "Give Me Time",
        "disco": "Another Night",
        "anio": 1975
      },
      {
        "titulo": "Son of a Rotten Gambler",
        "disco": "Another Night",
        "anio": 1975
      },
      {
        "titulo": "Write On",
        "disco": "Write On",
        "anio": 1976
      },
      {
        "titulo": "Writing on the Wall",
        "disco": "A Crazy Steal",
        "anio": 1978
      }
    ]
  },
  {
    "id": "the-wallflowers",
    "nombre": "The Wallflowers",
    "pais": "Estados Unidos",
    "ciudad": "Los Ángeles, California",
    "anios": "Desde 1989",
    "genero": "Rock alternativo, roots rock",
    "integrantes": [
      "Jakob Dylan",
      "Rami Jaffee",
      "Greg Richling",
      "Michael Ward",
      "Mario Calire"
    ],
    "hero": "img/the-wallflowers.jpg",
    "heroPos": "center 26%",
    "bajada": "Rock de raíz americana con la voz de Jakob Dylan y un disco que definió la radio de los noventa.",
    "descripcion": [
      "Jakob Dylan, hijo de Bob Dylan, formó la banda en Los Ángeles en 1989 junto al tecladista Rami Jaffee. Después de un primer disco que pasó casi inadvertido, en 1996 publicaron Bringing Down the Horse, producido por T Bone Burnett, y todo cambió: “One Headlight” y “6th Avenue Heartache” sonaron en todas las radios y la primera ganó dos premios Grammy.",
      "Su música toma el rock clásico estadounidense, con órgano Hammond, guitarras con aire de Tom Petty y letras que cuentan historias. Siguieron con Breach, Red Letter Days y Rebel, Sweetheart, con una formación que fue cambiando alrededor de Dylan, que es el único integrante que se mantuvo desde el principio."
    ],
    "nota": "La lista va en orden cronológico, de Bringing Down the Horse a Rebel, Sweetheart.",
    "canciones": [
      {
        "titulo": "One Headlight",
        "disco": "Bringing Down the Horse",
        "anio": 1996
      },
      {
        "titulo": "6th Avenue Heartache",
        "disco": "Bringing Down the Horse",
        "anio": 1996
      },
      {
        "titulo": "The Difference",
        "disco": "Bringing Down the Horse",
        "anio": 1996
      },
      {
        "titulo": "Invisible City",
        "disco": "Bringing Down the Horse",
        "anio": 1996
      },
      {
        "titulo": "Josephine",
        "disco": "Bringing Down the Horse",
        "anio": 1996
      },
      {
        "titulo": "I Wish I Felt Nothing",
        "disco": "Bringing Down the Horse",
        "anio": 1996
      },
      {
        "titulo": "Sleepwalker",
        "disco": "Breach",
        "anio": 2000
      },
      {
        "titulo": "How Good It Can Get",
        "disco": "Red Letter Days",
        "anio": 2002
      },
      {
        "titulo": "Everything I Need",
        "disco": "Red Letter Days",
        "anio": 2002
      },
      {
        "titulo": "The Beautiful Side of Somewhere",
        "disco": "Rebel, Sweetheart",
        "anio": 2005
      },
      {
        "titulo": "We’re Already There",
        "disco": "Rebel, Sweetheart",
        "anio": 2005
      },
      {
        "titulo": "From the Bottom of My Heart",
        "disco": "Rebel, Sweetheart",
        "anio": 2005
      },
      {
        "titulo": "How Far You’ve Come",
        "disco": "Rebel, Sweetheart",
        "anio": 2005
      }
    ]
  },
  {
    "id": "the-who",
    "nombre": "The Who",
    "pais": "Reino Unido",
    "ciudad": "Londres, Inglaterra",
    "anios": "Desde 1964",
    "genero": "Rock, hard rock, ópera rock",
    "integrantes": [
      "Roger Daltrey",
      "Pete Townshend",
      "John Entwistle",
      "Keith Moon"
    ],
    "hero": "img/the-who.jpg",
    "heroPos": "center 36%",
    "bajada": "Guitarras rotas sobre el escenario, óperas rock y algunos de los himnos más ruidosos de la historia.",
    "descripcion": [
      "Se formaron en Londres en 1964 con Roger Daltrey en la voz, Pete Townshend en guitarra, John Entwistle en bajo y Keith Moon en batería. Fueron la banda de los mods y se hicieron famosos por la potencia de sus shows, en los que Townshend destrozaba su guitarra y Moon su batería. “My Generation” se convirtió en el himno de una juventud que no quería parecerse a sus padres.",
      "Townshend llevó el rock a otro formato con las óperas rock Tommy y Quadrophenia, y en Who’s Next sumó sintetizadores a un sonido de estadio que marcó a generaciones de bandas. Moon murió en 1978 y Entwistle en 2002, pero Daltrey y Townshend mantuvieron vivo el nombre del grupo."
    ],
    "nota": "Una selección corta y contundente, en orden cronológico.",
    "canciones": [
      {
        "titulo": "My Generation",
        "disco": "My Generation",
        "anio": 1965
      },
      {
        "titulo": "Baba O’Riley",
        "disco": "Who’s Next",
        "anio": 1971
      },
      {
        "titulo": "Getting in Tune",
        "disco": "Who’s Next",
        "anio": 1971
      },
      {
        "titulo": "Behind Blue Eyes",
        "disco": "Who’s Next",
        "anio": 1971
      },
      {
        "titulo": "Won’t Get Fooled Again",
        "disco": "Who’s Next",
        "anio": 1971
      },
      {
        "titulo": "Love, Reign o’er Me",
        "disco": "Quadrophenia",
        "anio": 1973
      },
      {
        "titulo": "Squeeze Box",
        "disco": "The Who by Numbers",
        "anio": 1975
      }
    ]
  },
  {
    "id": "the-white-buffalo",
    "nombre": "The White Buffalo",
    "pais": "Estados Unidos",
    "ciudad": "Los Ángeles, California",
    "anios": "Desde 2002",
    "genero": "Americana, country alternativo, roots rock",
    "integrantes": [
      "Jake Smith (voz y guitarra)",
      "Matt Lynott (batería)",
      "Christopher Hoffee (bajo)"
    ],
    "hero": "img/the-white-buffalo.jpg",
    "heroPos": "center 22%",
    "bajada": "Una voz de barítono enorme y canciones que parecen sacadas de una película del oeste.",
    "descripcion": [
      "The White Buffalo es el nombre artístico de Jake Smith, un cantautor nacido en Oregón y radicado en California. Aunque el nombre suena a banda, es su proyecto personal: en vivo lo acompañan un baterista y un bajista, y todo gira alrededor de su voz grave y su guitarra acústica.",
      "Sus canciones mezclan country, folk y rock con historias de forajidos, amores rotos y redención. Se hizo conocido gracias a la serie Sons of Anarchy, que usó varios de sus temas, entre ellos “Wish It Was True” y “Come Join the Murder”, la canción del final de la serie, que fue nominada al Emmy."
    ],
    "nota": "La lista va en orden cronológico, desde Once Upon a Time in the West hasta Year of the Dark Horse.",
    "canciones": [
      {
        "titulo": "One Lone Night",
        "disco": "Once Upon a Time in the West",
        "anio": 2012
      },
      {
        "titulo": "Wish It Was True",
        "disco": "Once Upon a Time in the West",
        "anio": 2012
      },
      {
        "titulo": "Don’t You Want It",
        "disco": "Shadows, Greys & Evil Ways",
        "anio": 2013
      },
      {
        "titulo": "Where Is Your Savior",
        "disco": "Love and the Death of Damnation",
        "anio": 2015
      },
      {
        "titulo": "The Observatory",
        "disco": "Darkest Darks, Lightest Lights",
        "anio": 2017
      },
      {
        "titulo": "If I Lost My Eyes",
        "disco": "Darkest Darks, Lightest Lights",
        "anio": 2017
      },
      {
        "titulo": "Kingdom for a Fool",
        "disco": "Year of the Dark Horse",
        "anio": 2022
      }
    ]
  },
  {
    "id": "tom-waits",
    "nombre": "Tom Waits",
    "pais": "Estados Unidos",
    "ciudad": "Pomona, California",
    "anios": "Desde 1973",
    "genero": "Cantautor, blues, jazz, rock experimental",
    "integrantes": [
      "Tom Waits (solista)",
      "Kathleen Brennan (coautora desde los ochenta)"
    ],
    "hero": "img/tom-waits.jpg",
    "heroPos": "center 30%",
    "bajada": "El poeta de los bares a la hora del cierre, con una voz que suena a whisky, grava y madrugada.",
    "descripcion": [
      "Tom Waits empezó en los años setenta en Los Ángeles como un cantautor de piano y madrugada, con baladas influidas por el jazz y la generación beat. Sus primeros discos retratan bares vacíos, camareras, viajantes y noches que no terminan; los Eagles grabaron su “Ol’ ’55” y Rod Stewart convirtió “Downtown Train” en un éxito.",
      "En los ochenta, junto a su esposa y coautora Kathleen Brennan, se reinventó por completo con Swordfishtrombones y Rain Dogs: percusiones con objetos, instrumentos raros, cabaret, blues y marchas desarmadas. También hizo carrera como actor y ganó dos premios Grammy, pero su voz rasposa sigue siendo su marca más reconocible."
    ],
    "nota": "La lista va en orden cronológico, del piano bar de los setenta a las rarezas de Orphans.",
    "canciones": [
      {
        "titulo": "Ol’ ’55",
        "disco": "Closing Time",
        "anio": 1973
      },
      {
        "titulo": "I Hope That I Don’t Fall in Love with You",
        "disco": "Closing Time",
        "anio": 1973
      },
      {
        "titulo": "Closing Time",
        "disco": "Closing Time",
        "anio": 1973
      },
      {
        "titulo": "San Diego Serenade",
        "disco": "The Heart of Saturday Night",
        "anio": 1974
      },
      {
        "titulo": "The Ghosts of Saturday Night",
        "disco": "The Heart of Saturday Night",
        "anio": 1974
      },
      {
        "titulo": "Christmas Card from a Hooker in Minneapolis",
        "disco": "Blue Valentine",
        "anio": 1978
      },
      {
        "titulo": "Downtown Train",
        "disco": "Rain Dogs",
        "anio": 1985
      },
      {
        "titulo": "Cold Cold Ground",
        "disco": "Franks Wild Years",
        "anio": 1987
      },
      {
        "titulo": "Long Way Home",
        "disco": "Orphans: Brawlers, Bawlers & Bastards",
        "anio": 2006
      },
      {
        "titulo": "You Can Never Hold Back Spring",
        "disco": "Orphans: Brawlers, Bawlers & Bastards",
        "anio": 2006
      }
    ]
  },
  {
    "id": "the-avett-brothers",
    "nombre": "The Avett Brothers",
    "pais": "Estados Unidos",
    "ciudad": "Concord, Carolina del Norte",
    "anios": "Desde 2000",
    "genero": "Folk rock, americana, bluegrass",
    "integrantes": [
      "Scott Avett",
      "Seth Avett",
      "Bob Crawford",
      "Joe Kwon"
    ],
    "hero": "img/the-avett-brothers.jpg",
    "heroPos": "center 32%",
    "bajada": "Dos hermanos de Carolina del Norte, un banjo, una guitarra y armonías de sangre.",
    "descripcion": [
      "Los hermanos Scott y Seth Avett crecieron en Concord, Carolina del Norte, y armaron la banda a comienzos de los dos mil junto al contrabajista Bob Crawford; más tarde se sumó el chelista Joe Kwon. Empezaron con la energía del punk aplicada al bluegrass y al folk, con banjo, guitarra acústica y voces que se cruzan como solo pueden hacerlo dos hermanos.",
      "Con el tiempo sus canciones se volvieron más íntimas y cuidadas. A partir de I and Love and You, de 2009, trabajaron con el productor Rick Rubin y llegaron a un público mucho más amplio, sin perder la honestidad de letras que hablan de amor, culpa, familia y despedidas."
    ],
    "nota": "La lista va en orden cronológico, de Emotionalism a True Sadness.",
    "canciones": [
      {
        "titulo": "The Ballad of Love and Hate",
        "disco": "Emotionalism",
        "anio": 2007
      },
      {
        "titulo": "Ill with Want",
        "disco": "I and Love and You",
        "anio": 2009
      },
      {
        "titulo": "Morning Song",
        "disco": "The Carpenter",
        "anio": 2012
      },
      {
        "titulo": "No Hard Feelings",
        "disco": "True Sadness",
        "anio": 2016
      }
    ]
  },
  {
    "id": "alice-cooper",
    "nombre": "Alice Cooper",
    "pais": "Estados Unidos",
    "ciudad": "Phoenix, Arizona",
    "anios": "Desde 1969",
    "genero": "Hard rock, shock rock",
    "integrantes": [
      "Alice Cooper (Vincent Furnier)",
      "Glen Buxton",
      "Michael Bruce",
      "Dennis Dunaway",
      "Neal Smith"
    ],
    "hero": "img/alice-cooper.jpg",
    "heroPos": "center 18%",
    "bajada": "El padre del shock rock: serpientes, guillotinas y, detrás del maquillaje, algunas de las baladas más tiernas del rock.",
    "descripcion": [
      "Alice Cooper fue primero el nombre de una banda, formada en Phoenix por Vincent Furnier y sus compañeros de secundaria. A comienzos de los setenta convirtieron el concierto de rock en una obra de terror teatral, con serpientes vivas, guillotinas y sangre falsa, y lograron éxitos como “I’m Eighteen” y “School’s Out”. Desde 1975 Furnier siguió como solista y adoptó el nombre como propio.",
      "Debajo del personaje siempre hubo un compositor capaz de escribir baladas delicadas. Canciones como “Only Women Bleed”, “You and Me” o “How You Gonna See Me Now” mostraron un lado sensible que sorprendió a sus seguidores, y a fines de los ochenta volvió a los primeros puestos con Trash."
    ],
    "nota": "Una selección inclinada hacia su lado más melódico, en orden cronológico.",
    "canciones": [
      {
        "titulo": "I’m Eighteen",
        "disco": "Love It to Death",
        "anio": 1971
      },
      {
        "titulo": "Hello Hooray",
        "disco": "Billion Dollar Babies",
        "anio": 1973
      },
      {
        "titulo": "Only Women Bleed",
        "disco": "Welcome to My Nightmare",
        "anio": 1975
      },
      {
        "titulo": "I Never Cry",
        "disco": "Alice Cooper Goes to Hell",
        "anio": 1976
      },
      {
        "titulo": "You and Me",
        "disco": "Lace and Whiskey",
        "anio": 1977
      },
      {
        "titulo": "How You Gonna See Me Now",
        "disco": "From the Inside",
        "anio": 1978
      },
      {
        "titulo": "Only My Heart Talkin’",
        "disco": "Trash",
        "anio": 1989
      },
      {
        "titulo": "Killed by Love",
        "disco": "Along Came a Spider",
        "anio": 2008
      },
      {
        "titulo": "Something to Remember Me By",
        "disco": "Welcome 2 My Nightmare",
        "anio": 2011
      }
    ]
  },
  {
    "id": "air-supply",
    "nombre": "Air Supply",
    "pais": "Australia",
    "ciudad": "Melbourne",
    "anios": "Desde 1975",
    "genero": "Soft rock, pop",
    "integrantes": [
      "Russell Hitchcock",
      "Graham Russell"
    ],
    "hero": "img/air-supply.jpg",
    "heroPos": "center 24%",
    "bajada": "Dos voces, baladas enormes y el sonido romántico que dominó la radio a comienzos de los ochenta.",
    "descripcion": [
      "Russell Hitchcock y Graham Russell, este último nacido en Inglaterra, se conocieron en 1975 en Sídney, durante los ensayos del musical Jesus Christ Superstar, y ese mismo año formaron el dúo en Melbourne. La voz aguda y cristalina de Hitchcock y las canciones de Russell fueron desde el principio la fórmula del grupo.",
      "Entre 1980 y 1983 encadenaron éxitos en Estados Unidos con “Lost in Love”, “All Out of Love” y “Even the Nights Are Better”. “Making Love Out of Nothing at All”, escrita por Jim Steinman, llevó su estilo romántico a su versión más grandiosa."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Lost in Love",
        "disco": "Lost in Love",
        "anio": 1980
      },
      {
        "titulo": "All Out of Love",
        "disco": "Lost in Love",
        "anio": 1980
      },
      {
        "titulo": "Even the Nights Are Better",
        "disco": "Now and Forever",
        "anio": 1982
      },
      {
        "titulo": "Making Love Out of Nothing at All",
        "disco": "Greatest Hits",
        "anio": 1983
      },
      {
        "titulo": "Goodbye",
        "disco": "The Vanishing Race",
        "anio": 1993
      }
    ]
  },
  {
    "id": "america",
    "nombre": "America",
    "pais": "Estados Unidos",
    "ciudad": "Formados en Londres, Inglaterra",
    "anios": "Desde 1970",
    "genero": "Folk rock, soft rock",
    "integrantes": [
      "Dewey Bunnell",
      "Gerry Beckley",
      "Dan Peek"
    ],
    "hero": "img/america.jpg",
    "heroPos": "center 26%",
    "bajada": "Tres hijos de militares estadounidenses en Inglaterra, guitarras acústicas y armonías que suenan a ruta abierta.",
    "descripcion": [
      "Dewey Bunnell, Gerry Beckley y Dan Peek se conocieron en Londres, donde vivían porque sus padres eran militares de la Fuerza Aérea de Estados Unidos destinados en Inglaterra. Eligieron el nombre America para dejar claro de dónde venían, y en 1972 “A Horse with No Name” llegó al número uno y les valió el Grammy al mejor artista nuevo.",
      "Su sonido de guitarras acústicas y voces en armonía los emparentó con Crosby, Stills & Nash y Neil Young. Desde Holiday, en 1974, trabajaron con George Martin, el productor de The Beatles, que les dio arreglos orquestales más ricos en discos como Hearts. Peek dejó el grupo en 1977 y Bunnell y Beckley siguieron como dúo."
    ],
    "nota": "La lista va en orden cronológico. Algunas versiones que aparecen acreditadas junto a George Martin provienen de remezclas que él hizo para el recopilatorio History, de 1975.",
    "canciones": [
      {
        "titulo": "Sandman",
        "disco": "America",
        "anio": 1971
      },
      {
        "titulo": "A Horse with No Name",
        "disco": "America",
        "anio": 1971
      },
      {
        "titulo": "I Need You",
        "disco": "America",
        "anio": 1971
      },
      {
        "titulo": "Don’t Cross the River",
        "disco": "Homecoming",
        "anio": 1972
      },
      {
        "titulo": "Till the Sun Comes Up Again",
        "disco": "Homecoming",
        "anio": 1972
      },
      {
        "titulo": "Saturn Nights",
        "disco": "Homecoming",
        "anio": 1972
      },
      {
        "titulo": "Lonely People",
        "disco": "Holiday",
        "anio": 1974
      },
      {
        "titulo": "Glad to See You",
        "disco": "Holiday",
        "anio": 1974
      },
      {
        "titulo": "Sister Golden Hair",
        "disco": "Hearts",
        "anio": 1975
      },
      {
        "titulo": "Can’t You See",
        "disco": "Hideaway",
        "anio": 1976
      },
      {
        "titulo": "All My Life",
        "disco": "Silent Letter",
        "anio": 1979
      },
      {
        "titulo": "Someday Woman",
        "disco": "Your Move",
        "anio": 1983
      }
    ]
  },
  {
    "id": "april-wine",
    "nombre": "April Wine",
    "pais": "Canadá",
    "ciudad": "Halifax, Nueva Escocia",
    "anios": "1969 – 1985 · desde 1992",
    "genero": "Hard rock, rock melódico",
    "integrantes": [
      "Myles Goodwyn",
      "Brian Greenway",
      "Gary Moffet",
      "Steve Lang",
      "Jerry Mercer"
    ],
    "hero": "img/april-wine.jpg",
    "heroPos": "center 22%",
    "bajada": "Tres guitarras al frente y las baladas de Myles Goodwyn: el gran nombre del rock canadiense.",
    "descripcion": [
      "April Wine nació en 1969 en Nueva Escocia, en la costa atlántica de Canadá, y pronto se mudó a Montreal. Con Myles Goodwyn como cantante, compositor y líder, se convirtió en una de las bandas más populares de su país durante los setenta, con una mezcla de hard rock directo y baladas melódicas.",
      "A fines de esa década armaron una formación con tres guitarristas, Goodwyn, Brian Greenway y Gary Moffet, y salieron con fuerza al mercado internacional con Harder… Faster y The Nature of the Beast, que incluía “Just Between You and Me”. En Power Play grabaron su versión de “Tell Me Why”, de The Beatles."
    ],
    "nota": "La lista va en orden cronológico. No encontré en qué disco salió “Somebody Like You”, por eso figura al final como pendiente.",
    "canciones": [
      {
        "titulo": "I Wouldn’t Want to Lose Your Love",
        "disco": "Stand Back",
        "anio": 1975
      },
      {
        "titulo": "Lovin’ You",
        "disco": "Forever for Now",
        "anio": 1977
      },
      {
        "titulo": "Come Away",
        "disco": "Forever for Now",
        "anio": 1977
      },
      {
        "titulo": "Just Between You and Me",
        "disco": "The Nature of the Beast",
        "anio": 1981
      },
      {
        "titulo": "Tell Me Why",
        "disco": "Power Play",
        "anio": 1982
      },
      {
        "titulo": "Can’t Take Another Nite",
        "disco": "Attitude",
        "anio": 1993
      },
      {
        "titulo": "Voice in My Heart",
        "disco": "Attitude",
        "anio": 1993
      },
      {
        "titulo": "Somebody Like You",
        "disco": "Disco por confirmar",
        "anio": null
      }
    ]
  },
  {
    "id": "audioslave",
    "nombre": "Audioslave",
    "pais": "Estados Unidos",
    "ciudad": "Los Ángeles, California",
    "anios": "2001 – 2007",
    "genero": "Hard rock, rock alternativo",
    "integrantes": [
      "Chris Cornell",
      "Tom Morello",
      "Tim Commerford",
      "Brad Wilk"
    ],
    "hero": "img/audioslave.jpg",
    "heroPos": "center 30%",
    "bajada": "La voz de Soundgarden sobre los riffs de Rage Against the Machine.",
    "descripcion": [
      "Audioslave nació en Los Ángeles en 2001, cuando Tom Morello, Tim Commerford y Brad Wilk, la base instrumental de Rage Against the Machine, se quedaron sin cantante y convocaron a Chris Cornell, la voz de Soundgarden. La combinación de los riffs y efectos de guitarra de Morello con el registro enorme de Cornell dio un hard rock más melódico que el de sus bandas anteriores.",
      "Su primer disco, de 2002, incluyó “Like a Stone” y “Show Me How to Live”, y en 2005 se convirtieron en la primera banda de rock estadounidense en dar un concierto al aire libre en Cuba. Publicaron tres discos antes de que Cornell dejara el grupo en 2007."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Show Me How to Live",
        "disco": "Audioslave",
        "anio": 2002
      },
      {
        "titulo": "Like a Stone",
        "disco": "Audioslave",
        "anio": 2002
      },
      {
        "titulo": "I Am the Highway",
        "disco": "Audioslave",
        "anio": 2002
      },
      {
        "titulo": "Be Yourself",
        "disco": "Out of Exile",
        "anio": 2005
      },
      {
        "titulo": "Doesn’t Remind Me",
        "disco": "Out of Exile",
        "anio": 2005
      }
    ]
  },
  {
    "id": "backstreet-boys",
    "nombre": "Backstreet Boys",
    "pais": "Estados Unidos",
    "ciudad": "Orlando, Florida",
    "anios": "Desde 1993",
    "genero": "Pop, R&B",
    "integrantes": [
      "Nick Carter",
      "Howie Dorough",
      "Brian Littrell",
      "AJ McLean",
      "Kevin Richardson"
    ],
    "hero": "img/backstreet-boys.jpg",
    "heroPos": "center 42%",
    "bajada": "Cinco voces, coreografías y los estribillos que definieron el pop de fines de los noventa.",
    "descripcion": [
      "Se formaron en Orlando en 1993 con Nick Carter, Howie Dorough, Brian Littrell, AJ McLean y Kevin Richardson, primos de Kentucky los dos últimos. Antes de conquistar Estados Unidos triunfaron en Europa y Canadá con baladas y canciones bailables producidas en buena parte en Suecia, por el equipo de Max Martin.",
      "Con Millennium, de 1999, y canciones como “I Want It That Way”, se convirtieron en uno de los grupos vocales más vendidos de la historia. Más allá de la etiqueta de boy band, sus armonías a cinco voces son el centro de cada canción."
    ],
    "nota": "La lista va en orden cronológico, de su primer disco a los grandes éxitos de 2001.",
    "canciones": [
      {
        "titulo": "I’ll Never Break Your Heart",
        "disco": "Backstreet Boys",
        "anio": 1996
      },
      {
        "titulo": "Quit Playing Games (with My Heart)",
        "disco": "Backstreet Boys",
        "anio": 1996
      },
      {
        "titulo": "Everybody (Backstreet’s Back)",
        "disco": "Backstreet’s Back",
        "anio": 1997
      },
      {
        "titulo": "As Long as You Love Me",
        "disco": "Backstreet’s Back",
        "anio": 1997
      },
      {
        "titulo": "10,000 Promises",
        "disco": "Backstreet’s Back",
        "anio": 1997
      },
      {
        "titulo": "Larger Than Life",
        "disco": "Millennium",
        "anio": 1999
      },
      {
        "titulo": "I Want It That Way",
        "disco": "Millennium",
        "anio": 1999
      },
      {
        "titulo": "Show Me the Meaning of Being Lonely",
        "disco": "Millennium",
        "anio": 1999
      },
      {
        "titulo": "Don’t Wanna Lose You Now",
        "disco": "Millennium",
        "anio": 1999
      },
      {
        "titulo": "Shape of My Heart",
        "disco": "Black & Blue",
        "anio": 2000
      },
      {
        "titulo": "How Did I Fall in Love with You",
        "disco": "Black & Blue",
        "anio": 2000
      },
      {
        "titulo": "Drowning",
        "disco": "The Hits: Chapter One",
        "anio": 2001
      }
    ]
  },
  {
    "id": "band-of-horses",
    "nombre": "Band of Horses",
    "pais": "Estados Unidos",
    "ciudad": "Seattle, Washington",
    "anios": "Desde 2004",
    "genero": "Indie rock, americana",
    "integrantes": [
      "Ben Bridwell",
      "Creighton Barrett",
      "Ryan Monroe",
      "Tyler Ramsey",
      "Bill Reynolds"
    ],
    "hero": "img/band-of-horses.jpg",
    "heroPos": "center 25%",
    "bajada": "Guitarras con eco, una voz alta y quebrada, y el sur de Estados Unidos en cada canción.",
    "descripcion": [
      "Ben Bridwell formó Band of Horses en Seattle en 2004. Su primer disco, Everything All the Time, llegó en 2006 con “The Funeral”, una canción de guitarras amplias y voz aguda que se volvió su tarjeta de presentación y sonó en películas, series y publicidades.",
      "Poco después Bridwell volvió a su Carolina del Sur natal y la banda se fue acercando al rock sureño y al country, sin perder el aire melancólico del indie. Infinite Arms, de 2010, fue nominado al Grammy como mejor disco de música alternativa."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "The Funeral",
        "disco": "Everything All the Time",
        "anio": 2006
      },
      {
        "titulo": "No One’s Gonna Love You",
        "disco": "Cease to Begin",
        "anio": 2007
      },
      {
        "titulo": "Laredo",
        "disco": "Infinite Arms",
        "anio": 2010
      },
      {
        "titulo": "Blue Beard",
        "disco": "Infinite Arms",
        "anio": 2010
      },
      {
        "titulo": "Slow Cruel Hands of Time",
        "disco": "Mirage Rock",
        "anio": 2012
      },
      {
        "titulo": "Country Teen",
        "disco": "Things Are Great",
        "anio": 2022
      }
    ]
  },
  {
    "id": "bee-gees",
    "nombre": "Bee Gees",
    "pais": "Reino Unido",
    "ciudad": "Isla de Man, Mánchester y Brisbane",
    "anios": "1958 – 2003",
    "genero": "Pop, soft rock, disco",
    "integrantes": [
      "Barry Gibb",
      "Robin Gibb",
      "Maurice Gibb"
    ],
    "hero": "img/bee-gees.jpg",
    "heroPos": "center 22%",
    "bajada": "Tres hermanos, un falsete inconfundible y dos vidas en la cima: las baladas de los sesenta y la fiebre disco.",
    "descripcion": [
      "Barry, Robin y Maurice Gibb nacieron en la Isla de Man, crecieron en Mánchester y empezaron a cantar profesionalmente en Australia, adonde se mudó su familia a fines de los cincuenta. En 1967 volvieron a Inglaterra y encadenaron baladas como “To Love Somebody”, “Massachusetts” y “Words”, con armonías de hermanos que muchos comparaban con The Beatles.",
      "A mediados de los setenta se reinventaron con el falsete de Barry y ritmos bailables, y la banda sonora de Saturday Night Fever los convirtió en el sonido de la música disco. Además escribieron éxitos para muchos otros artistas. En la foto aparece también Andy Gibb, el hermano menor, que hizo carrera como solista."
    ],
    "nota": "La lista va en orden cronológico, de las baladas de los sesenta a Still Waters.",
    "canciones": [
      {
        "titulo": "To Love Somebody",
        "disco": "Bee Gees’ 1st",
        "anio": 1967
      },
      {
        "titulo": "Massachusetts",
        "disco": "Horizontal",
        "anio": 1968
      },
      {
        "titulo": "Words",
        "disco": "Simple (fuera de álbum)",
        "anio": 1968
      },
      {
        "titulo": "I Started a Joke",
        "disco": "Idea",
        "anio": 1968
      },
      {
        "titulo": "Don’t Forget to Remember",
        "disco": "Cucumber Castle",
        "anio": 1970
      },
      {
        "titulo": "How Can You Mend a Broken Heart",
        "disco": "Trafalgar",
        "anio": 1971
      },
      {
        "titulo": "Run to Me",
        "disco": "To Whom It May Concern",
        "anio": 1972
      },
      {
        "titulo": "Stayin’ Alive",
        "disco": "Saturday Night Fever",
        "anio": 1977
      },
      {
        "titulo": "How Deep Is Your Love",
        "disco": "Saturday Night Fever",
        "anio": 1977
      },
      {
        "titulo": "Night Fever",
        "disco": "Saturday Night Fever",
        "anio": 1977
      },
      {
        "titulo": "More Than a Woman",
        "disco": "Saturday Night Fever",
        "anio": 1977
      },
      {
        "titulo": "Tragedy",
        "disco": "Spirits Having Flown",
        "anio": 1979
      },
      {
        "titulo": "Too Much Heaven",
        "disco": "Spirits Having Flown",
        "anio": 1979
      },
      {
        "titulo": "Love You Inside Out",
        "disco": "Spirits Having Flown",
        "anio": 1979
      },
      {
        "titulo": "Alone",
        "disco": "Still Waters",
        "anio": 1997
      }
    ]
  },
  {
    "id": "bryan-adams",
    "nombre": "Bryan Adams",
    "pais": "Canadá",
    "ciudad": "Kingston, Ontario",
    "anios": "Desde 1978",
    "genero": "Rock, pop rock, baladas",
    "integrantes": [
      "Bryan Adams (solista)",
      "Keith Scott (guitarra)",
      "Jim Vallance (coautor)"
    ],
    "hero": "img/bryan-adams.jpg",
    "heroPos": "center 22%",
    "bajada": "Voz rasposa, guitarras de rock de radio y las baladas que sonaron en todos los casamientos de los noventa.",
    "descripcion": [
      "Bryan Adams nació en Kingston, Ontario, y empezó su carrera en Vancouver a fines de los setenta. Junto al compositor Jim Vallance escribió un rock directo y melódico que explotó en 1984 con Reckless, el disco de “Summer of ’69”, “Heaven” y “Run to You”, y que lo convirtió en una estrella internacional.",
      "En 1991 “(Everything I Do) I Do It for You”, de la película Robin Hood, se volvió una de las canciones más exitosas de la década y pasó semanas y semanas en el primer puesto británico. Desde entonces alternó rock y baladas románticas, y también desarrolló una carrera reconocida como fotógrafo."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Straight from the Heart",
        "disco": "Cuts Like a Knife",
        "anio": 1983
      },
      {
        "titulo": "Heaven",
        "disco": "Reckless",
        "anio": 1984
      },
      {
        "titulo": "Somebody",
        "disco": "Reckless",
        "anio": 1984
      },
      {
        "titulo": "Summer of ’69",
        "disco": "Reckless",
        "anio": 1984
      },
      {
        "titulo": "It’s Only Love",
        "disco": "Reckless",
        "anio": 1984
      },
      {
        "titulo": "Do I Have to Say the Words?",
        "disco": "Waking Up the Neighbours",
        "anio": 1991
      },
      {
        "titulo": "Thought I’d Died and Gone to Heaven",
        "disco": "Waking Up the Neighbours",
        "anio": 1991
      },
      {
        "titulo": "Can’t Stop This Thing We Started",
        "disco": "Waking Up the Neighbours",
        "anio": 1991
      },
      {
        "titulo": "(Everything I Do) I Do It for You",
        "disco": "Waking Up the Neighbours",
        "anio": 1991
      },
      {
        "titulo": "Depend on Me",
        "disco": "Waking Up the Neighbours",
        "anio": 1991
      },
      {
        "titulo": "Let’s Make a Night to Remember",
        "disco": "18 til I Die",
        "anio": 1996
      },
      {
        "titulo": "I Think About You",
        "disco": "18 til I Die",
        "anio": 1996
      },
      {
        "titulo": "Have You Ever Really Loved a Woman?",
        "disco": "18 til I Die",
        "anio": 1996
      },
      {
        "titulo": "Broken Wings",
        "disco": "11",
        "anio": 2008
      },
      {
        "titulo": "Mysterious Ways",
        "disco": "11",
        "anio": 2008
      }
    ]
  },
  {
    "id": "bruno-mars",
    "nombre": "Bruno Mars",
    "pais": "Estados Unidos",
    "ciudad": "Honolulu, Hawái",
    "anios": "Desde 2010",
    "genero": "Pop, R&B, funk, soul",
    "integrantes": [
      "Bruno Mars (solista)",
      "Anderson .Paak (en Silk Sonic)"
    ],
    "hero": "img/bruno-mars.jpg",
    "heroPos": "center 18%",
    "bajada": "Un showman de la vieja escuela que mezcla funk, soul, pop y R&B con la precisión de un relojero.",
    "descripcion": [
      "Bruno Mars, cuyo nombre real es Peter Gene Hernandez, creció en Honolulu en una familia de músicos y de chico ya imitaba a Elvis y a Michael Jackson sobre el escenario. Antes de su debut trabajó como compositor y productor para otros artistas, y en 2010 Doo-Wops & Hooligans lo lanzó con baladas como “Just the Way You Are” y “Talking to the Moon”.",
      "Con Unorthodox Jukebox y 24K Magic miró hacia el funk, el soul y el R&B de los setenta y los ochenta, y ganó una larga lista de premios Grammy. En 2021 formó Silk Sonic con Anderson .Paak, y en 2026 volvió como solista con The Romantic."
    ],
    "nota": "La lista va en orden cronológico, de su primer disco a The Romantic.",
    "canciones": [
      {
        "titulo": "Just the Way You Are",
        "disco": "Doo-Wops & Hooligans",
        "anio": 2010
      },
      {
        "titulo": "The Lazy Song",
        "disco": "Doo-Wops & Hooligans",
        "anio": 2010
      },
      {
        "titulo": "Talking to the Moon",
        "disco": "Doo-Wops & Hooligans",
        "anio": 2010
      },
      {
        "titulo": "Count on Me",
        "disco": "Doo-Wops & Hooligans",
        "anio": 2010
      },
      {
        "titulo": "Locked Out of Heaven",
        "disco": "Unorthodox Jukebox",
        "anio": 2012
      },
      {
        "titulo": "Treasure",
        "disco": "Unorthodox Jukebox",
        "anio": 2012
      },
      {
        "titulo": "When I Was Your Man",
        "disco": "Unorthodox Jukebox",
        "anio": 2012
      },
      {
        "titulo": "If I Knew",
        "disco": "Unorthodox Jukebox",
        "anio": 2012
      },
      {
        "titulo": "24K Magic",
        "disco": "24K Magic",
        "anio": 2016
      },
      {
        "titulo": "That’s What I Like",
        "disco": "24K Magic",
        "anio": 2016
      },
      {
        "titulo": "Too Good to Say Goodbye",
        "disco": "24K Magic",
        "anio": 2016
      },
      {
        "titulo": "Leave the Door Open",
        "disco": "An Evening with Silk Sonic",
        "anio": 2021
      },
      {
        "titulo": "Risk It All",
        "disco": "The Romantic",
        "anio": 2026
      },
      {
        "titulo": "Nothing Left",
        "disco": "The Romantic",
        "anio": 2026
      },
      {
        "titulo": "Lo Arriesgo Todo",
        "disco": "Simple (versión en español de “Risk It All”)",
        "anio": 2026
      }
    ]
  },
  {
    "id": "billy-joel",
    "nombre": "Billy Joel",
    "pais": "Estados Unidos",
    "ciudad": "Nueva York",
    "anios": "Desde 1971",
    "genero": "Pop rock, cantautor",
    "integrantes": [
      "Billy Joel (solista, piano y voz)"
    ],
    "hero": "img/billy-joel.jpg",
    "heroPos": "center 58%",
    "bajada": "El hombre del piano: historias de Nueva York contadas con melodías que se quedan para siempre.",
    "descripcion": [
      "Billy Joel nació en el Bronx y creció en Long Island, donde aprendió piano clásico de chico antes de pasarse al rock. Después de un comienzo difícil, en 1973 “Piano Man”, inspirada en sus noches tocando en un bar de Los Ángeles, le dio su primer éxito y el apodo que lo acompañó toda su carrera.",
      "The Stranger, de 1977, lo convirtió en una estrella con canciones como “Just the Way You Are” y “She’s Always a Woman”. Durante los ochenta pasó del doo-wop de An Innocent Man al repaso histórico de “We Didn’t Start the Fire”, y después de River of Dreams, en 1993, prácticamente dejó de publicar canciones pop nuevas para dedicarse a los conciertos."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Piano Man",
        "disco": "Piano Man",
        "anio": 1973
      },
      {
        "titulo": "Just the Way You Are",
        "disco": "The Stranger",
        "anio": 1977
      },
      {
        "titulo": "She’s Always a Woman",
        "disco": "The Stranger",
        "anio": 1977
      },
      {
        "titulo": "Honesty",
        "disco": "52nd Street",
        "anio": 1978
      },
      {
        "titulo": "Uptown Girl",
        "disco": "An Innocent Man",
        "anio": 1983
      },
      {
        "titulo": "A Matter of Trust",
        "disco": "The Bridge",
        "anio": 1986
      },
      {
        "titulo": "We Didn’t Start the Fire",
        "disco": "Storm Front",
        "anio": 1989
      },
      {
        "titulo": "The River of Dreams",
        "disco": "River of Dreams",
        "anio": 1993
      }
    ]
  },
  {
    "id": "blur",
    "nombre": "Blur",
    "pais": "Reino Unido",
    "ciudad": "Londres, Inglaterra",
    "anios": "Desde 1988",
    "genero": "Britpop, rock alternativo",
    "integrantes": [
      "Damon Albarn",
      "Graham Coxon",
      "Alex James",
      "Dave Rowntree"
    ],
    "hero": "img/blur.jpg",
    "heroPos": "center 15%",
    "bajada": "Ironía inglesa, guitarras punzantes y la banda que encendió el britpop de los noventa.",
    "descripcion": [
      "Damon Albarn, Graham Coxon, Alex James y Dave Rowntree formaron Blur en Londres a fines de los ochenta. Con Parklife, en 1994, retrataron la vida cotidiana inglesa con humor e ironía y se pusieron al frente del britpop; al año siguiente su rivalidad con Oasis, cuando “Country House” y “Roll With It” salieron el mismo día, llegó a los noticieros.",
      "Cansados de esa etiqueta, en 1997 giraron hacia el rock alternativo estadounidense con el disco Blur, que incluía “Song 2” y “Beetlebum”, y en 1999 publicaron 13, más oscuro y experimental. Albarn también creó Gorillaz, y la banda volvió a reunirse varias veces en las décadas siguientes."
    ],
    "nota": "La lista va en orden cronológico, de Parklife a 13.",
    "canciones": [
      {
        "titulo": "End of a Century",
        "disco": "Parklife",
        "anio": 1994
      },
      {
        "titulo": "To the End",
        "disco": "Parklife",
        "anio": 1994
      },
      {
        "titulo": "Country House",
        "disco": "The Great Escape",
        "anio": 1995
      },
      {
        "titulo": "Charmless Man",
        "disco": "The Great Escape",
        "anio": 1995
      },
      {
        "titulo": "The Universal",
        "disco": "The Great Escape",
        "anio": 1995
      },
      {
        "titulo": "Beetlebum",
        "disco": "Blur",
        "anio": 1997
      },
      {
        "titulo": "Song 2",
        "disco": "Blur",
        "anio": 1997
      },
      {
        "titulo": "Tender",
        "disco": "13",
        "anio": 1999
      }
    ]
  },
  {
    "id": "bob-dylan",
    "nombre": "Bob Dylan",
    "pais": "Estados Unidos",
    "ciudad": "Duluth, Minnesota",
    "anios": "Desde 1962",
    "genero": "Folk, folk rock, rock, country",
    "integrantes": [
      "Bob Dylan (solista, guitarra, armónica y voz)"
    ],
    "hero": "img/bob-dylan.jpg",
    "heroPos": "center 24%",
    "bajada": "El poeta que le dio palabras al rock, cambió de piel en cada década y terminó con un Nobel de Literatura.",
    "descripcion": [
      "Robert Zimmerman nació en Duluth, creció en el norte de Minnesota y en 1961 llegó a Nueva York para tocar en los cafés del Greenwich Village. Allí se convirtió en Bob Dylan y, con canciones como “Blowin’ in the Wind” y “The Times They Are a-Changin’”, en la voz de la canción de protesta de su generación.",
      "En 1965 se electrificó con Bringing It All Back Home y Highway 61 Revisited, y “Like a Rolling Stone” cambió lo que una canción de rock podía decir. Después pasó por el country de Nashville Skyline, la confesión de Blood on the Tracks, la etapa religiosa de fines de los setenta y muchas reinvenciones más. En 2016 recibió el Premio Nobel de Literatura."
    ],
    "nota": "La lista va en orden cronológico. “Moonshiner”, que le da nombre a este libro, es una toma de 1963 que se publicó recién en 1991. Varias de estas canciones aparecen también en las páginas de The Byrds y The Hollies, y su hijo Jakob lidera The Wallflowers.",
    "canciones": [
      {
        "titulo": "House of the Risin’ Sun",
        "disco": "Bob Dylan",
        "anio": 1962
      },
      {
        "titulo": "Blowin’ in the Wind",
        "disco": "The Freewheelin’ Bob Dylan",
        "anio": 1963
      },
      {
        "titulo": "Girl from the North Country",
        "disco": "The Freewheelin’ Bob Dylan",
        "anio": 1963
      },
      {
        "titulo": "Don’t Think Twice, It’s All Right",
        "disco": "The Freewheelin’ Bob Dylan",
        "anio": 1963
      },
      {
        "titulo": "I Shall Be Free",
        "disco": "The Freewheelin’ Bob Dylan",
        "anio": 1963
      },
      {
        "titulo": "Moonshiner",
        "disco": "The Bootleg Series Vol. 1–3 (toma de 1963)",
        "anio": 1963
      },
      {
        "titulo": "The Times They Are a-Changin’",
        "disco": "The Times They Are a-Changin’",
        "anio": 1964
      },
      {
        "titulo": "Chimes of Freedom",
        "disco": "Another Side of Bob Dylan",
        "anio": 1964
      },
      {
        "titulo": "My Back Pages",
        "disco": "Another Side of Bob Dylan",
        "anio": 1964
      },
      {
        "titulo": "It Ain’t Me Babe",
        "disco": "Another Side of Bob Dylan",
        "anio": 1964
      },
      {
        "titulo": "Subterranean Homesick Blues",
        "disco": "Bringing It All Back Home",
        "anio": 1965
      },
      {
        "titulo": "She Belongs to Me",
        "disco": "Bringing It All Back Home",
        "anio": 1965
      },
      {
        "titulo": "Love Minus Zero / No Limit",
        "disco": "Bringing It All Back Home",
        "anio": 1965
      },
      {
        "titulo": "Mr. Tambourine Man",
        "disco": "Bringing It All Back Home",
        "anio": 1965
      },
      {
        "titulo": "It’s Alright, Ma (I’m Only Bleeding)",
        "disco": "Bringing It All Back Home",
        "anio": 1965
      },
      {
        "titulo": "It’s All Over Now, Baby Blue",
        "disco": "Bringing It All Back Home",
        "anio": 1965
      },
      {
        "titulo": "Like a Rolling Stone",
        "disco": "Highway 61 Revisited",
        "anio": 1965
      },
      {
        "titulo": "Tombstone Blues",
        "disco": "Highway 61 Revisited",
        "anio": 1965
      },
      {
        "titulo": "It Takes a Lot to Laugh, It Takes a Train to Cry",
        "disco": "Highway 61 Revisited",
        "anio": 1965
      },
      {
        "titulo": "From a Buick 6",
        "disco": "Highway 61 Revisited",
        "anio": 1965
      },
      {
        "titulo": "Ballad of a Thin Man",
        "disco": "Highway 61 Revisited",
        "anio": 1965
      },
      {
        "titulo": "Queen Jane Approximately",
        "disco": "Highway 61 Revisited",
        "anio": 1965
      },
      {
        "titulo": "Highway 61 Revisited",
        "disco": "Highway 61 Revisited",
        "anio": 1965
      },
      {
        "titulo": "Just Like Tom Thumb’s Blues",
        "disco": "Highway 61 Revisited",
        "anio": 1965
      },
      {
        "titulo": "Desolation Row",
        "disco": "Highway 61 Revisited",
        "anio": 1965
      },
      {
        "titulo": "Pledging My Time",
        "disco": "Blonde on Blonde",
        "anio": 1966
      },
      {
        "titulo": "Visions of Johanna",
        "disco": "Blonde on Blonde",
        "anio": 1966
      },
      {
        "titulo": "One of Us Must Know (Sooner or Later)",
        "disco": "Blonde on Blonde",
        "anio": 1966
      },
      {
        "titulo": "I Want You",
        "disco": "Blonde on Blonde",
        "anio": 1966
      },
      {
        "titulo": "Stuck Inside of Mobile with the Memphis Blues Again",
        "disco": "Blonde on Blonde",
        "anio": 1966
      },
      {
        "titulo": "Just Like a Woman",
        "disco": "Blonde on Blonde",
        "anio": 1966
      },
      {
        "titulo": "Absolutely Sweet Marie",
        "disco": "Blonde on Blonde",
        "anio": 1966
      },
      {
        "titulo": "Sad-Eyed Lady of the Lowlands",
        "disco": "Blonde on Blonde",
        "anio": 1966
      },
      {
        "titulo": "All Along the Watchtower",
        "disco": "John Wesley Harding",
        "anio": 1967
      },
      {
        "titulo": "To Be Alone with You",
        "disco": "Nashville Skyline",
        "anio": 1969
      },
      {
        "titulo": "Lay, Lady, Lay",
        "disco": "Nashville Skyline",
        "anio": 1969
      },
      {
        "titulo": "Tonight I’ll Be Staying Here with You",
        "disco": "Nashville Skyline",
        "anio": 1969
      },
      {
        "titulo": "All the Tired Horses",
        "disco": "Self Portrait",
        "anio": 1970
      },
      {
        "titulo": "Early Mornin’ Rain",
        "disco": "Self Portrait",
        "anio": 1970
      },
      {
        "titulo": "Let It Be Me",
        "disco": "Self Portrait",
        "anio": 1970
      },
      {
        "titulo": "Blue Moon",
        "disco": "Self Portrait",
        "anio": 1970
      },
      {
        "titulo": "The Man in Me",
        "disco": "New Morning",
        "anio": 1970
      },
      {
        "titulo": "Main Title Theme (Billy)",
        "disco": "Pat Garrett & Billy the Kid",
        "anio": 1973
      },
      {
        "titulo": "Knockin’ on Heaven’s Door",
        "disco": "Pat Garrett & Billy the Kid",
        "anio": 1973
      },
      {
        "titulo": "Final Theme",
        "disco": "Pat Garrett & Billy the Kid",
        "anio": 1973
      },
      {
        "titulo": "Mr. Bojangles",
        "disco": "Dylan",
        "anio": 1973
      },
      {
        "titulo": "On a Night Like This",
        "disco": "Planet Waves",
        "anio": 1974
      },
      {
        "titulo": "Going, Going, Gone",
        "disco": "Planet Waves",
        "anio": 1974
      },
      {
        "titulo": "Tough Mama",
        "disco": "Planet Waves",
        "anio": 1974
      },
      {
        "titulo": "Hazel",
        "disco": "Planet Waves",
        "anio": 1974
      },
      {
        "titulo": "Forever Young",
        "disco": "Planet Waves",
        "anio": 1974
      },
      {
        "titulo": "Tangled Up in Blue",
        "disco": "Blood on the Tracks",
        "anio": 1975
      },
      {
        "titulo": "Simple Twist of Fate",
        "disco": "Blood on the Tracks",
        "anio": 1975
      },
      {
        "titulo": "You’re a Big Girl Now",
        "disco": "Blood on the Tracks",
        "anio": 1975
      },
      {
        "titulo": "Meet Me in the Morning",
        "disco": "Blood on the Tracks",
        "anio": 1975
      },
      {
        "titulo": "Shelter from the Storm",
        "disco": "Blood on the Tracks",
        "anio": 1975
      },
      {
        "titulo": "Buckets of Rain",
        "disco": "Blood on the Tracks",
        "anio": 1975
      },
      {
        "titulo": "Hurricane",
        "disco": "Desire",
        "anio": 1976
      },
      {
        "titulo": "Isis",
        "disco": "Desire",
        "anio": 1976
      },
      {
        "titulo": "Changing of the Guards",
        "disco": "Street-Legal",
        "anio": 1978
      },
      {
        "titulo": "Baby, Stop Crying",
        "disco": "Street-Legal",
        "anio": 1978
      },
      {
        "titulo": "True Love Tends to Forget",
        "disco": "Street-Legal",
        "anio": 1978
      },
      {
        "titulo": "Precious Angel",
        "disco": "Slow Train Coming",
        "anio": 1979
      },
      {
        "titulo": "Slow Train",
        "disco": "Slow Train Coming",
        "anio": 1979
      },
      {
        "titulo": "License to Kill",
        "disco": "Infidels",
        "anio": 1983
      },
      {
        "titulo": "Tight Connection to My Heart (Has Anybody Seen My Love)",
        "disco": "Empire Burlesque",
        "anio": 1985
      },
      {
        "titulo": "I’ll Remember You",
        "disco": "Empire Burlesque",
        "anio": 1985
      },
      {
        "titulo": "Emotionally Yours",
        "disco": "Empire Burlesque",
        "anio": 1985
      },
      {
        "titulo": "They Killed Him",
        "disco": "Knocked Out Loaded",
        "anio": 1986
      },
      {
        "titulo": "Brownsville Girl",
        "disco": "Knocked Out Loaded",
        "anio": 1986
      },
      {
        "titulo": "Let’s Stick Together",
        "disco": "Down in the Groove",
        "anio": 1988
      },
      {
        "titulo": "Where Teardrops Fall",
        "disco": "Oh Mercy",
        "anio": 1989
      },
      {
        "titulo": "Most of the Time",
        "disco": "Oh Mercy",
        "anio": 1989
      },
      {
        "titulo": "Shooting Star",
        "disco": "Oh Mercy",
        "anio": 1989
      },
      {
        "titulo": "Under the Red Sky",
        "disco": "Under the Red Sky",
        "anio": 1990
      }
    ]
  },
  {
    "id": "bob-seger",
    "nombre": "Bob Seger",
    "pais": "Estados Unidos",
    "ciudad": "Detroit, Míchigan",
    "anios": "1966 – 2019",
    "genero": "Heartland rock, rock clásico",
    "integrantes": [
      "Bob Seger (voz, guitarra y piano)",
      "The Silver Bullet Band"
    ],
    "hero": "img/bob-seger.jpg",
    "heroPos": "center 22%",
    "bajada": "La voz ronca del rock de Detroit: nostalgia, rutas y noches de juventud.",
    "descripcion": [
      "Bob Seger creció en Ann Arbor, cerca de Detroit, y pasó más de diez años tocando en bares y radios del Medio Oeste antes de que el resto de Estados Unidos lo conociera. Con su Silver Bullet Band desarrolló un rock directo, de raíz soul y voz rasposa, que habla de trabajadores, autos y amores que quedaron atrás.",
      "El salto llegó en 1976 con Live Bullet y Night Moves, y siguió con Stranger in Town y Against the Wind. “Old Time Rock & Roll” se volvió eterna gracias a la escena de Tom Cruise en Risky Business. Se despidió de las giras en 2019."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Night Moves",
        "disco": "Night Moves",
        "anio": 1976
      },
      {
        "titulo": "Mainstreet",
        "disco": "Night Moves",
        "anio": 1976
      },
      {
        "titulo": "Still the Same",
        "disco": "Stranger in Town",
        "anio": 1978
      },
      {
        "titulo": "Old Time Rock & Roll",
        "disco": "Stranger in Town",
        "anio": 1978
      },
      {
        "titulo": "Against the Wind",
        "disco": "Against the Wind",
        "anio": 1980
      },
      {
        "titulo": "Like a Rock",
        "disco": "Like a Rock",
        "anio": 1986
      }
    ]
  },
  {
    "id": "bruce-springsteen",
    "nombre": "Bruce Springsteen",
    "pais": "Estados Unidos",
    "ciudad": "Long Branch, Nueva Jersey",
    "anios": "Desde 1973",
    "genero": "Rock, heartland rock, folk",
    "integrantes": [
      "Bruce Springsteen",
      "Clarence Clemons",
      "Steven Van Zandt",
      "Max Weinberg",
      "Roy Bittan",
      "Garry Tallent",
      "Danny Federici",
      "Nils Lofgren",
      "Patti Scialfa"
    ],
    "hero": "img/bruce-springsteen.jpg",
    "heroPos": "center 25%",
    "bajada": "The Boss: medio siglo de canciones sobre rutas, fábricas, sueños rotos y la promesa de algo mejor.",
    "descripcion": [
      "Bruce Springsteen nació en Nueva Jersey y se hizo músico en los bares de Asbury Park. Junto a la E Street Band, con el saxo de Clarence Clemons como sello, pasó de los primeros discos llenos de personajes callejeros a la épica de Born to Run, en 1975, que lo convirtió en la gran esperanza del rock estadounidense.",
      "Alternó discos de estadio como Born in the U.S.A. con obras despojadas como Nebraska y The Ghost of Tom Joad, siempre con la clase trabajadora en el centro de sus historias. Ganó un Oscar por “Streets of Philadelphia” y con las cajas Tracks y Tracks II abrió su archivo de canciones inéditas, que son casi una segunda discografía."
    ],
    "nota": "La lista va en orden cronológico. Las tomas inéditas de las cajas Tracks (1998) y Tracks II (2025) figuran agrupadas en el año de publicación. “4th of July, Asbury Park (Sandy)” también aparece en la página de The Hollies, que la versionaron en 1975.",
    "canciones": [
      {
        "titulo": "Growin’ Up",
        "disco": "Greetings from Asbury Park, N.J.",
        "anio": 1973
      },
      {
        "titulo": "Mary Queen of Arkansas",
        "disco": "Greetings from Asbury Park, N.J.",
        "anio": 1973
      },
      {
        "titulo": "Spirit in the Night",
        "disco": "Greetings from Asbury Park, N.J.",
        "anio": 1973
      },
      {
        "titulo": "It’s Hard to Be a Saint in the City",
        "disco": "Greetings from Asbury Park, N.J.",
        "anio": 1973
      },
      {
        "titulo": "The E Street Shuffle",
        "disco": "The Wild, the Innocent & the E Street Shuffle",
        "anio": 1973
      },
      {
        "titulo": "4th of July, Asbury Park (Sandy)",
        "disco": "The Wild, the Innocent & the E Street Shuffle",
        "anio": 1973
      },
      {
        "titulo": "Kitty’s Back",
        "disco": "The Wild, the Innocent & the E Street Shuffle",
        "anio": 1973
      },
      {
        "titulo": "Wild Billy’s Circus Story",
        "disco": "The Wild, the Innocent & the E Street Shuffle",
        "anio": 1973
      },
      {
        "titulo": "Incident on 57th Street",
        "disco": "The Wild, the Innocent & the E Street Shuffle",
        "anio": 1973
      },
      {
        "titulo": "New York City Serenade",
        "disco": "The Wild, the Innocent & the E Street Shuffle",
        "anio": 1973
      },
      {
        "titulo": "Thunder Road",
        "disco": "Born to Run",
        "anio": 1975
      },
      {
        "titulo": "Tenth Avenue Freeze-Out",
        "disco": "Born to Run",
        "anio": 1975
      },
      {
        "titulo": "Backstreets",
        "disco": "Born to Run",
        "anio": 1975
      },
      {
        "titulo": "Born to Run",
        "disco": "Born to Run",
        "anio": 1975
      },
      {
        "titulo": "She’s the One",
        "disco": "Born to Run",
        "anio": 1975
      },
      {
        "titulo": "Jungleland",
        "disco": "Born to Run",
        "anio": 1975
      },
      {
        "titulo": "Badlands",
        "disco": "Darkness on the Edge of Town",
        "anio": 1978
      },
      {
        "titulo": "Something in the Night",
        "disco": "Darkness on the Edge of Town",
        "anio": 1978
      },
      {
        "titulo": "Racing in the Street",
        "disco": "Darkness on the Edge of Town",
        "anio": 1978
      },
      {
        "titulo": "The Promised Land",
        "disco": "Darkness on the Edge of Town",
        "anio": 1978
      },
      {
        "titulo": "Factory",
        "disco": "Darkness on the Edge of Town",
        "anio": 1978
      },
      {
        "titulo": "Streets of Fire",
        "disco": "Darkness on the Edge of Town",
        "anio": 1978
      },
      {
        "titulo": "Darkness on the Edge of Town",
        "disco": "Darkness on the Edge of Town",
        "anio": 1978
      },
      {
        "titulo": "The Ties That Bind",
        "disco": "The River",
        "anio": 1980
      },
      {
        "titulo": "Independence Day",
        "disco": "The River",
        "anio": 1980
      },
      {
        "titulo": "Hungry Heart",
        "disco": "The River",
        "anio": 1980
      },
      {
        "titulo": "Out in the Street",
        "disco": "The River",
        "anio": 1980
      },
      {
        "titulo": "The River",
        "disco": "The River",
        "anio": 1980
      },
      {
        "titulo": "Point Blank",
        "disco": "The River",
        "anio": 1980
      },
      {
        "titulo": "Fade Away",
        "disco": "The River",
        "anio": 1980
      },
      {
        "titulo": "Nebraska",
        "disco": "Nebraska",
        "anio": 1982
      },
      {
        "titulo": "Atlantic City",
        "disco": "Nebraska",
        "anio": 1982
      },
      {
        "titulo": "Mansion on the Hill",
        "disco": "Nebraska",
        "anio": 1982
      },
      {
        "titulo": "Born in the U.S.A.",
        "disco": "Born in the U.S.A.",
        "anio": 1984
      },
      {
        "titulo": "Cover Me",
        "disco": "Born in the U.S.A.",
        "anio": 1984
      },
      {
        "titulo": "I’m on Fire",
        "disco": "Born in the U.S.A.",
        "anio": 1984
      },
      {
        "titulo": "No Surrender",
        "disco": "Born in the U.S.A.",
        "anio": 1984
      },
      {
        "titulo": "Bobby Jean",
        "disco": "Born in the U.S.A.",
        "anio": 1984
      },
      {
        "titulo": "I’m Goin’ Down",
        "disco": "Born in the U.S.A.",
        "anio": 1984
      },
      {
        "titulo": "Glory Days",
        "disco": "Born in the U.S.A.",
        "anio": 1984
      },
      {
        "titulo": "Dancing in the Dark",
        "disco": "Born in the U.S.A.",
        "anio": 1984
      },
      {
        "titulo": "My Hometown",
        "disco": "Born in the U.S.A.",
        "anio": 1984
      },
      {
        "titulo": "Tougher Than the Rest",
        "disco": "Tunnel of Love",
        "anio": 1987
      },
      {
        "titulo": "Tunnel of Love",
        "disco": "Tunnel of Love",
        "anio": 1987
      },
      {
        "titulo": "Brilliant Disguise",
        "disco": "Tunnel of Love",
        "anio": 1987
      },
      {
        "titulo": "One Step Up",
        "disco": "Tunnel of Love",
        "anio": 1987
      },
      {
        "titulo": "Valentine’s Day",
        "disco": "Tunnel of Love",
        "anio": 1987
      },
      {
        "titulo": "Viva Las Vegas",
        "disco": "The Last Temptation of Elvis (compilado)",
        "anio": 1990
      },
      {
        "titulo": "Human Touch",
        "disco": "Human Touch",
        "anio": 1992
      },
      {
        "titulo": "Soul Driver",
        "disco": "Human Touch",
        "anio": 1992
      },
      {
        "titulo": "Roll of the Dice",
        "disco": "Human Touch",
        "anio": 1992
      },
      {
        "titulo": "Real World",
        "disco": "Human Touch",
        "anio": 1992
      },
      {
        "titulo": "I Wish I Were Blind",
        "disco": "Human Touch",
        "anio": 1992
      },
      {
        "titulo": "Better Days",
        "disco": "Lucky Town",
        "anio": 1992
      },
      {
        "titulo": "Lucky Town",
        "disco": "Lucky Town",
        "anio": 1992
      },
      {
        "titulo": "If I Should Fall Behind",
        "disco": "Lucky Town",
        "anio": 1992
      },
      {
        "titulo": "Leap of Faith",
        "disco": "Lucky Town",
        "anio": 1992
      },
      {
        "titulo": "Living Proof",
        "disco": "Lucky Town",
        "anio": 1992
      },
      {
        "titulo": "My Beautiful Reward",
        "disco": "Lucky Town",
        "anio": 1992
      },
      {
        "titulo": "Streets of Philadelphia",
        "disco": "Philadelphia (banda sonora)",
        "anio": 1994
      },
      {
        "titulo": "Secret Garden",
        "disco": "Greatest Hits",
        "anio": 1995
      },
      {
        "titulo": "Blood Brothers",
        "disco": "Greatest Hits",
        "anio": 1995
      },
      {
        "titulo": "This Hard Land",
        "disco": "Greatest Hits",
        "anio": 1995
      },
      {
        "titulo": "The Ghost of Tom Joad",
        "disco": "The Ghost of Tom Joad",
        "anio": 1995
      },
      {
        "titulo": "Linda Let Me Be the One",
        "disco": "Tracks · toma de 1975",
        "anio": 1998
      },
      {
        "titulo": "Loose Ends",
        "disco": "Tracks · toma de 1979",
        "anio": 1998
      },
      {
        "titulo": "Take ’Em as They Come",
        "disco": "Tracks · toma de 1980",
        "anio": 1998
      },
      {
        "titulo": "My Love Will Not Let You Down",
        "disco": "Tracks · toma de 1982",
        "anio": 1998
      },
      {
        "titulo": "Janey Don’t You Lose Heart",
        "disco": "Tracks · lado B de 1985",
        "anio": 1998
      },
      {
        "titulo": "The Wish",
        "disco": "Tracks · toma de 1987",
        "anio": 1998
      },
      {
        "titulo": "Sad Eyes",
        "disco": "Tracks · tomas de 1990",
        "anio": 1998
      },
      {
        "titulo": "My Lover Man",
        "disco": "Tracks · tomas de 1990",
        "anio": 1998
      },
      {
        "titulo": "Over the Rise",
        "disco": "Tracks · tomas de 1990",
        "anio": 1998
      },
      {
        "titulo": "Happy",
        "disco": "Tracks · toma de 1992",
        "anio": 1998
      },
      {
        "titulo": "Gave It a Name",
        "disco": "Tracks · toma de 1998",
        "anio": 1998
      },
      {
        "titulo": "Lonesome Day",
        "disco": "The Rising",
        "anio": 2002
      },
      {
        "titulo": "Into the Fire",
        "disco": "The Rising",
        "anio": 2002
      },
      {
        "titulo": "Waitin’ on a Sunny Day",
        "disco": "The Rising",
        "anio": 2002
      },
      {
        "titulo": "Empty Sky",
        "disco": "The Rising",
        "anio": 2002
      },
      {
        "titulo": "Mary’s Place",
        "disco": "The Rising",
        "anio": 2002
      },
      {
        "titulo": "You’re Missing",
        "disco": "The Rising",
        "anio": 2002
      },
      {
        "titulo": "The Rising",
        "disco": "The Rising",
        "anio": 2002
      },
      {
        "titulo": "My City of Ruins",
        "disco": "The Rising",
        "anio": 2002
      },
      {
        "titulo": "Devils & Dust",
        "disco": "Devils & Dust",
        "anio": 2005
      },
      {
        "titulo": "Long Time Comin’",
        "disco": "Devils & Dust",
        "anio": 2005
      },
      {
        "titulo": "Bring ’Em Home",
        "disco": "We Shall Overcome: The Seeger Sessions (American Land Edition)",
        "anio": 2006
      },
      {
        "titulo": "Radio Nowhere",
        "disco": "Magic",
        "anio": 2007
      },
      {
        "titulo": "You’ll Be Comin’ Down",
        "disco": "Magic",
        "anio": 2007
      },
      {
        "titulo": "Girls in Their Summer Clothes",
        "disco": "Magic",
        "anio": 2007
      },
      {
        "titulo": "Magic",
        "disco": "Magic",
        "anio": 2007
      },
      {
        "titulo": "Long Walk Home",
        "disco": "Magic",
        "anio": 2007
      },
      {
        "titulo": "Outlaw Pete",
        "disco": "Working on a Dream",
        "anio": 2009
      },
      {
        "titulo": "Working on a Dream",
        "disco": "Working on a Dream",
        "anio": 2009
      },
      {
        "titulo": "This Life",
        "disco": "Working on a Dream",
        "anio": 2009
      },
      {
        "titulo": "Tomorrow Never Knows",
        "disco": "Working on a Dream",
        "anio": 2009
      },
      {
        "titulo": "The Last Carnival",
        "disco": "Working on a Dream",
        "anio": 2009
      },
      {
        "titulo": "The Wrestler",
        "disco": "Working on a Dream",
        "anio": 2009
      },
      {
        "titulo": "Gotta Get That Feeling",
        "disco": "The Promise",
        "anio": 2010
      },
      {
        "titulo": "Someday (We’ll Be Together)",
        "disco": "The Promise",
        "anio": 2010
      },
      {
        "titulo": "One Way Street",
        "disco": "The Promise",
        "anio": 2010
      },
      {
        "titulo": "Fire",
        "disco": "The Promise",
        "anio": 2010
      },
      {
        "titulo": "It’s a Shame",
        "disco": "The Promise",
        "anio": 2010
      },
      {
        "titulo": "The Little Things (My Baby Does)",
        "disco": "The Promise",
        "anio": 2010
      },
      {
        "titulo": "The Promise",
        "disco": "The Promise",
        "anio": 2010
      },
      {
        "titulo": "We Take Care of Our Own",
        "disco": "Wrecking Ball",
        "anio": 2012
      },
      {
        "titulo": "Shackled and Drawn",
        "disco": "Wrecking Ball",
        "anio": 2012
      },
      {
        "titulo": "This Depression",
        "disco": "Wrecking Ball",
        "anio": 2012
      },
      {
        "titulo": "Wrecking Ball",
        "disco": "Wrecking Ball",
        "anio": 2012
      },
      {
        "titulo": "You’ve Got It",
        "disco": "Wrecking Ball",
        "anio": 2012
      },
      {
        "titulo": "Rocky Ground",
        "disco": "Wrecking Ball",
        "anio": 2012
      },
      {
        "titulo": "Land of Hope and Dreams",
        "disco": "Wrecking Ball",
        "anio": 2012
      },
      {
        "titulo": "We Are Alive",
        "disco": "Wrecking Ball",
        "anio": 2012
      },
      {
        "titulo": "American Skin (41 Shots)",
        "disco": "High Hopes",
        "anio": 2014
      },
      {
        "titulo": "Just Like Fire Would",
        "disco": "High Hopes",
        "anio": 2014
      },
      {
        "titulo": "The Wall",
        "disco": "High Hopes",
        "anio": 2014
      },
      {
        "titulo": "Dream Baby Dream",
        "disco": "High Hopes",
        "anio": 2014
      },
      {
        "titulo": "Hello Sunshine",
        "disco": "Western Stars",
        "anio": 2019
      },
      {
        "titulo": "Moonlight Motel",
        "disco": "Western Stars",
        "anio": 2019
      },
      {
        "titulo": "Letter to You",
        "disco": "Letter to You",
        "anio": 2020
      },
      {
        "titulo": "Ghosts",
        "disco": "Letter to You",
        "anio": 2020
      },
      {
        "titulo": "Song for Orphans",
        "disco": "Letter to You",
        "anio": 2020
      },
      {
        "titulo": "I’ll See You in My Dreams",
        "disco": "Letter to You",
        "anio": 2020
      },
      {
        "titulo": "Nightshift",
        "disco": "Only the Strong Survive",
        "anio": 2022
      },
      {
        "titulo": "Do I Love You (Indeed I Do)",
        "disco": "Only the Strong Survive",
        "anio": 2022
      },
      {
        "titulo": "Don’t Play That Song",
        "disco": "Only the Strong Survive",
        "anio": 2022
      },
      {
        "titulo": "What Becomes of the Brokenhearted",
        "disco": "Only the Strong Survive",
        "anio": 2022
      },
      {
        "titulo": "A Prayer by the River",
        "disco": "Tracks II · Faithless",
        "anio": 2025
      },
      {
        "titulo": "My Master’s Hand (Theme)",
        "disco": "Tracks II · Faithless",
        "anio": 2025
      },
      {
        "titulo": "Poor Side of Town",
        "disco": "Tracks II · Somewhere North of Nashville",
        "anio": 2025
      },
      {
        "titulo": "Somewhere North of Nashville",
        "disco": "Tracks II · Somewhere North of Nashville",
        "anio": 2025
      },
      {
        "titulo": "Inyo",
        "disco": "Tracks II · Inyo",
        "anio": 2025
      },
      {
        "titulo": "Adelita",
        "disco": "Tracks II · Inyo",
        "anio": 2025
      },
      {
        "titulo": "I’ll Stand by You",
        "disco": "Tracks II · Twilight Hours",
        "anio": 2025
      },
      {
        "titulo": "Sunliner",
        "disco": "Tracks II · Twilight Hours",
        "anio": 2025
      },
      {
        "titulo": "Another You",
        "disco": "Tracks II · Twilight Hours",
        "anio": 2025
      },
      {
        "titulo": "I’m Not Sleeping",
        "disco": "Tracks II · Perfect World",
        "anio": 2025
      },
      {
        "titulo": "Blind Man",
        "disco": "Tracks II · Perfect World",
        "anio": 2025
      },
      {
        "titulo": "Rain in the River",
        "disco": "Tracks II · Perfect World",
        "anio": 2025
      },
      {
        "titulo": "If I Could Only Be Your Lover",
        "disco": "Tracks II · Perfect World",
        "anio": 2025
      },
      {
        "titulo": "You Lifted Me Up",
        "disco": "Tracks II · Perfect World",
        "anio": 2025
      },
      {
        "titulo": "Perfect World",
        "disco": "Tracks II · Perfect World",
        "anio": 2025
      },
      {
        "titulo": "A Rainy Night in Soho",
        "disco": "Simple · tributo 20th Century Paddy",
        "anio": 2026
      }
    ]
  },
  {
    "id": "calexico",
    "nombre": "Calexico",
    "pais": "Estados Unidos",
    "ciudad": "Tucson, Arizona",
    "anios": "Desde 1996",
    "genero": "Americana, indie rock, música de frontera",
    "integrantes": [
      "Joey Burns",
      "John Convertino",
      "Jacob Valenzuela",
      "Martin Wenk",
      "Paul Niehaus",
      "Sergio Mendoza"
    ],
    "hero": "img/calexico.jpg",
    "heroPos": "center 30%",
    "bajada": "Trompetas mariachi, guitarras del desierto y canciones que suenan a la frontera entre Arizona y México.",
    "descripcion": [
      "Joey Burns y John Convertino se conocieron tocando en la banda Giant Sand y en 1996 formaron Calexico en Tucson, Arizona. El nombre viene de una ciudad de California pegada a la frontera mexicana, y esa frontera atraviesa toda su música: rock alternativo, folk, cumbia, mariachi y aires de spaghetti western conviven en el mismo disco.",
      "Con los años la banda creció hasta convertirse en un grupo grande con trompetas, acordeón, pedal steel y vibráfono. Canciones como “Minas de Cobre”, con sus vientos de película del oeste, o el pop más íntimo de Garden Ruin, muestran las dos caras de un grupo que también colaboró con Iron & Wine y que canta tanto en inglés como en español."
    ],
    "nota": "La lista va en orden cronológico, de The Black Light a Carried to Dust.",
    "canciones": [
      {
        "titulo": "Gypsy’s Curse",
        "disco": "The Black Light",
        "anio": 1998
      },
      {
        "titulo": "Minas de Cobre (For Better Metal)",
        "disco": "The Black Light",
        "anio": 1998
      },
      {
        "titulo": "Cruel",
        "disco": "Garden Ruin",
        "anio": 2006
      },
      {
        "titulo": "Yours and Mine",
        "disco": "Garden Ruin",
        "anio": 2006
      },
      {
        "titulo": "Panic Open String",
        "disco": "Garden Ruin",
        "anio": 2006
      },
      {
        "titulo": "Roka (Danza de la Muerte)",
        "disco": "Garden Ruin",
        "anio": 2006
      },
      {
        "titulo": "All Systems Red",
        "disco": "Garden Ruin",
        "anio": 2006
      },
      {
        "titulo": "Two Silver Trees",
        "disco": "Carried to Dust",
        "anio": 2008
      }
    ]
  },
  {
    "id": "creedence-clearwater-revival",
    "nombre": "Creedence Clearwater Revival",
    "pais": "Estados Unidos",
    "ciudad": "El Cerrito, California",
    "anios": "1967 – 1972",
    "genero": "Rock, swamp rock, roots rock",
    "integrantes": [
      "John Fogerty",
      "Tom Fogerty",
      "Stu Cook",
      "Doug Clifford"
    ],
    "hero": "img/creedence-clearwater-revival.jpg",
    "heroPos": "center 30%",
    "bajada": "Cuatro chicos de California que sonaban a pantano de Luisiana y llenaron la radio de clásicos en apenas cuatro años.",
    "descripcion": [
      "John Fogerty, su hermano Tom, Stu Cook y Doug Clifford tocaban juntos desde la secundaria en El Cerrito, cerca de San Francisco. En 1967 adoptaron el nombre Creedence Clearwater Revival y, mientras su ciudad se llenaba de psicodelia, eligieron un rock directo y terroso, inspirado en el blues, el rockabilly y el sonido del sur de Estados Unidos.",
      "Entre 1969 y 1970 publicaron cinco discos y una seguidilla de simples imbatibles: “Proud Mary”, “Bad Moon Rising”, “Green River”, “Fortunate Son”, “Who’ll Stop the Rain”. La voz rasposa y las canciones de John Fogerty los convirtieron en una de las bandas más populares del mundo, hasta que las tensiones internas los separaron en 1972."
    ],
    "nota": "La lista va en orden cronológico, de Bayou Country a Mardi Gras.",
    "canciones": [
      {
        "titulo": "Proud Mary",
        "disco": "Bayou Country",
        "anio": 1969
      },
      {
        "titulo": "Green River",
        "disco": "Green River",
        "anio": 1969
      },
      {
        "titulo": "Bad Moon Rising",
        "disco": "Green River",
        "anio": 1969
      },
      {
        "titulo": "Lodi",
        "disco": "Green River",
        "anio": 1969
      },
      {
        "titulo": "Down on the Corner",
        "disco": "Willy and the Poor Boys",
        "anio": 1969
      },
      {
        "titulo": "It Came Out of the Sky",
        "disco": "Willy and the Poor Boys",
        "anio": 1969
      },
      {
        "titulo": "Fortunate Son",
        "disco": "Willy and the Poor Boys",
        "anio": 1969
      },
      {
        "titulo": "The Midnight Special",
        "disco": "Willy and the Poor Boys",
        "anio": 1969
      },
      {
        "titulo": "Travelin’ Band",
        "disco": "Cosmo’s Factory",
        "anio": 1970
      },
      {
        "titulo": "Up Around the Bend",
        "disco": "Cosmo’s Factory",
        "anio": 1970
      },
      {
        "titulo": "Who’ll Stop the Rain",
        "disco": "Cosmo’s Factory",
        "anio": 1970
      },
      {
        "titulo": "Long As I Can See the Light",
        "disco": "Cosmo’s Factory",
        "anio": 1970
      },
      {
        "titulo": "Have You Ever Seen the Rain",
        "disco": "Pendulum",
        "anio": 1970
      },
      {
        "titulo": "Someday Never Comes",
        "disco": "Mardi Gras",
        "anio": 1972
      }
    ]
  },
  {
    "id": "crosby-stills-nash-young",
    "nombre": "Crosby, Stills, Nash & Young",
    "pais": "Estados Unidos",
    "ciudad": "Los Ángeles, California",
    "anios": "1968 – 2015",
    "genero": "Folk rock, rock, country rock",
    "integrantes": [
      "David Crosby",
      "Stephen Stills",
      "Graham Nash",
      "Neil Young"
    ],
    "hero": "img/crosby-stills-nash-young.jpg",
    "heroPos": "center 30%",
    "bajada": "Tres voces que se funden en una sola, y a veces una cuarta, la de Neil Young, que le pone filo a todo.",
    "descripcion": [
      "David Crosby venía de The Byrds, Stephen Stills de Buffalo Springfield y Graham Nash de The Hollies. En 1968 cantaron juntos por primera vez en Los Ángeles y descubrieron que sus voces sonaban como una sola. Su primer disco, de 1969, con “Suite: Judy Blue Eyes” y “Helplessly Hoping”, les valió el Grammy al mejor artista nuevo, y ese mismo verano tocaron en Woodstock.",
      "Con la llegada de Neil Young, excompañero de Stills, grabaron Déjà Vu en 1970, con “Our House”, de Nash, y “Helpless”, de Young. Desde entonces el grupo se separó y se reunió muchas veces, a veces como trío y a veces como cuarteto, y discos como Daylight Again, de 1982, siguieron sumando clásicos."
    ],
    "nota": "La lista va en orden cronológico e incluye canciones del trío y del cuarteto. “Do for the Others” es una toma de las sesiones del primer disco que se publicó como tema extra en la reedición de 2006.",
    "canciones": [
      {
        "titulo": "Suite: Judy Blue Eyes",
        "disco": "Crosby, Stills & Nash",
        "anio": 1969
      },
      {
        "titulo": "Helplessly Hoping",
        "disco": "Crosby, Stills & Nash",
        "anio": 1969
      },
      {
        "titulo": "Do for the Others",
        "disco": "Crosby, Stills & Nash · tema extra, reedición 2006",
        "anio": 1969
      },
      {
        "titulo": "Our House",
        "disco": "Déjà Vu",
        "anio": 1970
      },
      {
        "titulo": "Helpless",
        "disco": "Déjà Vu",
        "anio": 1970
      },
      {
        "titulo": "Wasted on the Way",
        "disco": "Daylight Again",
        "anio": 1982
      },
      {
        "titulo": "Southern Cross",
        "disco": "Daylight Again",
        "anio": 1982
      },
      {
        "titulo": "Delta",
        "disco": "Daylight Again",
        "anio": 1982
      },
      {
        "titulo": "Don’t Say Goodbye",
        "disco": "American Dream",
        "anio": 1988
      }
    ]
  },
  {
    "id": "cat-stevens",
    "nombre": "Cat Stevens",
    "pais": "Reino Unido",
    "ciudad": "Londres, Inglaterra",
    "anios": "Desde 1966",
    "genero": "Folk, cantautor, folk rock",
    "integrantes": [
      "Cat Stevens / Yusuf Islam (solista)"
    ],
    "hero": "img/cat-stevens.jpg",
    "heroPos": "center 30%",
    "bajada": "Una guitarra acústica, una voz cálida y canciones que hablan de padres, hijos y la búsqueda de un lugar en el mundo.",
    "descripcion": [
      "Steven Demetre Georgiou nació en Londres, hijo de un padre grecochipriota y una madre sueca, y a fines de los sesenta tuvo sus primeros éxitos pop como Cat Stevens. Una tuberculosis lo obligó a parar, y de esa pausa salió un compositor más íntimo y reflexivo.",
      "Entre 1970 y 1971 publicó Mona Bone Jakon, Tea for the Tillerman y Teaser and the Firecat, con “Wild World”, “Father and Son” y “Morning Has Broken”. Sus canciones también le dieron alma a la película Harold and Maude. En 1977 se convirtió al islam, adoptó el nombre Yusuf Islam y se alejó de la música por casi tres décadas, hasta volver a grabar en 2006."
    ],
    "nota": "La lista va en orden cronológico. “Don’t Be Shy” e “If You Want to Sing Out, Sing Out” se compusieron para la película Harold and Maude (1971), pero recién salieron en disco en el compilado Footsteps in the Dark, de 1984.",
    "canciones": [
      {
        "titulo": "Trouble",
        "disco": "Mona Bone Jakon",
        "anio": 1970
      },
      {
        "titulo": "Wild World",
        "disco": "Tea for the Tillerman",
        "anio": 1970
      },
      {
        "titulo": "Father and Son",
        "disco": "Tea for the Tillerman",
        "anio": 1970
      },
      {
        "titulo": "Don’t Be Shy",
        "disco": "Harold and Maude (película)",
        "anio": 1971
      },
      {
        "titulo": "If You Want to Sing Out, Sing Out",
        "disco": "Harold and Maude (película)",
        "anio": 1971
      },
      {
        "titulo": "Morning Has Broken",
        "disco": "Teaser and the Firecat",
        "anio": 1971
      }
    ]
  },
  {
    "id": "cracker",
    "nombre": "Cracker",
    "pais": "Estados Unidos",
    "ciudad": "Redlands, California",
    "anios": "Desde 1991",
    "genero": "Rock alternativo, americana, country rock",
    "integrantes": [
      "David Lowery",
      "Johnny Hickman",
      "Davey Faragher",
      "Frank Funaro",
      "Kenny Margolis"
    ],
    "hero": "img/cracker.jpg",
    "heroPos": "center 25%",
    "bajada": "Rock alternativo con botas de cowboy: ironía, guitarras sucias y canciones de la California rural.",
    "descripcion": [
      "David Lowery, que venía de la banda Camper Van Beethoven, formó Cracker en 1991 junto a su amigo de la infancia, el guitarrista Johnny Hickman, con quien había crecido en Redlands, California. Su primer disco, de 1992, y sobre todo Kerosene Hat, de 1993, con “Low” y “Get Off This”, los pusieron en la radio alternativa de los noventa.",
      "A diferencia de muchas bandas de esa época, Cracker siempre miró hacia el country, el folk y el rock sureño, con letras llenas de humor y personajes perdedores. En 2014 publicaron Berkeley to Bakersfield, un disco doble que divide sus dos almas: el rock de la ciudad y el country de la California agrícola."
    ],
    "nota": "La lista va en orden cronológico. “Where Have Those Days Gone” salió primero en Greenland (2006); acá figura la versión regrabada de Berkeley to Bakersfield.",
    "canciones": [
      {
        "titulo": "I See the Light",
        "disco": "Cracker",
        "anio": 1992
      },
      {
        "titulo": "Another Song About the Rain",
        "disco": "Cracker",
        "anio": 1992
      },
      {
        "titulo": "Get Off This",
        "disco": "Kerosene Hat",
        "anio": 1993
      },
      {
        "titulo": "Turn On, Tune In, Drop Out With Me",
        "disco": "Sunrise in the Land of Milk and Honey",
        "anio": 2009
      },
      {
        "titulo": "El Comandante",
        "disco": "Berkeley to Bakersfield · disco Berkeley",
        "anio": 2014
      },
      {
        "titulo": "Almond Grove",
        "disco": "Berkeley to Bakersfield · disco Bakersfield",
        "anio": 2014
      },
      {
        "titulo": "When You Come Down",
        "disco": "Berkeley to Bakersfield · disco Bakersfield",
        "anio": 2014
      },
      {
        "titulo": "Where Have Those Days Gone?",
        "disco": "Berkeley to Bakersfield · disco Bakersfield",
        "anio": 2014
      }
    ]
  },
  {
    "id": "chris-cornell",
    "nombre": "Chris Cornell",
    "pais": "Estados Unidos",
    "ciudad": "Seattle, Washington",
    "anios": "1984 – 2017",
    "genero": "Rock, grunge, cantautor",
    "integrantes": [
      "Chris Cornell (solista)"
    ],
    "hero": "img/chris-cornell.jpg",
    "heroPos": "center 30%",
    "bajada": "Una de las voces más poderosas del rock, también capaz de cantar casi en susurro con una guitarra acústica.",
    "descripcion": [
      "Chris Cornell nació en Seattle y fue la voz de Soundgarden, una de las bandas fundadoras del grunge, con un registro de cuatro octavas que pocos cantantes de rock podían igualar. También formó Temple of the Dog en homenaje a su amigo Andrew Wood y, más tarde, Audioslave con los músicos de Rage Against the Machine.",
      "En paralelo desarrolló una carrera solista más íntima. Higher Truth, de 2015, fue un disco mayormente acústico, y en sus últimos años compuso canciones para películas como “The Promise”. Murió en mayo de 2017, a los 52 años, y al año siguiente se publicó “When Bad Does Good”, una canción inédita."
    ],
    "nota": "La lista va en orden cronológico. Su etapa con Audioslave tiene su propia página en este libro.",
    "canciones": [
      {
        "titulo": "Higher Truth",
        "disco": "Higher Truth",
        "anio": 2015
      },
      {
        "titulo": "Bend in the Road",
        "disco": "Higher Truth · edición deluxe",
        "anio": 2015
      },
      {
        "titulo": "Misery Chain",
        "disco": "Higher Truth · edición deluxe",
        "anio": 2015
      },
      {
        "titulo": "The Promise",
        "disco": "Simple · película The Promise",
        "anio": 2017
      },
      {
        "titulo": "When Bad Does Good",
        "disco": "Chris Cornell (compilado)",
        "anio": 2018
      }
    ]
  },
  {
    "id": "dire-straits",
    "nombre": "Dire Straits",
    "pais": "Reino Unido",
    "ciudad": "Londres, Inglaterra",
    "anios": "1977 – 1995",
    "genero": "Rock, pub rock, rock clásico",
    "integrantes": [
      "Mark Knopfler",
      "John Illsley",
      "David Knopfler",
      "Pick Withers",
      "Alan Clark",
      "Guy Fletcher",
      "Terry Williams"
    ],
    "hero": "img/dire-straits.jpg",
    "heroPos": "center 25%",
    "bajada": "La guitarra sin púa de Mark Knopfler y canciones que cuentan historias como pequeñas películas.",
    "descripcion": [
      "Mark Knopfler, su hermano David, el bajista John Illsley y el baterista Pick Withers formaron Dire Straits en Londres en 1977, en plena explosión punk. Iban a contramano: canciones tranquilas, guitarras limpias y una voz casi hablada. “Sultans of Swing”, de su primer disco, se convirtió en un éxito mundial gracias al estilo de Knopfler, que toca con los dedos, sin púa.",
      "Con Making Movies y Love Over Gold las canciones se hicieron más largas y cinematográficas, como “Telegraph Road” o “Romeo and Juliet”. En 1985 Brothers in Arms, con “Money for Nothing” y “Walk of Life”, fue uno de los discos más vendidos de la década y uno de los primeros en salir con éxito en CD. Tras On Every Street, de 1991, la banda se disolvió y Knopfler siguió como solista."
    ],
    "nota": "La lista va en orden cronológico, recorriendo sus seis discos de estudio.",
    "canciones": [
      {
        "titulo": "Down to the Waterline",
        "disco": "Dire Straits",
        "anio": 1978
      },
      {
        "titulo": "Wild West End",
        "disco": "Dire Straits",
        "anio": 1978
      },
      {
        "titulo": "Sultans of Swing",
        "disco": "Dire Straits",
        "anio": 1978
      },
      {
        "titulo": "Six Blade Knife",
        "disco": "Dire Straits",
        "anio": 1978
      },
      {
        "titulo": "Once Upon a Time in the West",
        "disco": "Communiqué",
        "anio": 1979
      },
      {
        "titulo": "Lady Writer",
        "disco": "Communiqué",
        "anio": 1979
      },
      {
        "titulo": "Where Do You Think You’re Going?",
        "disco": "Communiqué",
        "anio": 1979
      },
      {
        "titulo": "Tunnel of Love",
        "disco": "Making Movies",
        "anio": 1980
      },
      {
        "titulo": "Romeo and Juliet",
        "disco": "Making Movies",
        "anio": 1980
      },
      {
        "titulo": "Skateaway",
        "disco": "Making Movies",
        "anio": 1980
      },
      {
        "titulo": "Expresso Love",
        "disco": "Making Movies",
        "anio": 1980
      },
      {
        "titulo": "Telegraph Road",
        "disco": "Love Over Gold",
        "anio": 1982
      },
      {
        "titulo": "Private Investigations",
        "disco": "Love Over Gold",
        "anio": 1982
      },
      {
        "titulo": "Love Over Gold",
        "disco": "Love Over Gold",
        "anio": 1982
      },
      {
        "titulo": "So Far Away",
        "disco": "Brothers in Arms",
        "anio": 1985
      },
      {
        "titulo": "Money for Nothing",
        "disco": "Brothers in Arms",
        "anio": 1985
      },
      {
        "titulo": "Walk of Life",
        "disco": "Brothers in Arms",
        "anio": 1985
      },
      {
        "titulo": "Brothers in Arms",
        "disco": "Brothers in Arms",
        "anio": 1985
      },
      {
        "titulo": "Calling Elvis",
        "disco": "On Every Street",
        "anio": 1991
      },
      {
        "titulo": "On Every Street",
        "disco": "On Every Street",
        "anio": 1991
      },
      {
        "titulo": "You and Your Friend",
        "disco": "On Every Street",
        "anio": 1991
      },
      {
        "titulo": "Heavy Fuel",
        "disco": "On Every Street",
        "anio": 1991
      },
      {
        "titulo": "Ticket to Heaven",
        "disco": "On Every Street",
        "anio": 1991
      }
    ]
  },
  {
    "id": "david-bowie",
    "nombre": "David Bowie",
    "pais": "Reino Unido",
    "ciudad": "Londres, Inglaterra",
    "anios": "1964 – 2016",
    "genero": "Rock, glam rock, art rock, pop",
    "integrantes": [
      "David Bowie (solista)",
      "Mick Ronson (guitarra, etapa Ziggy Stardust)"
    ],
    "hero": "img/david-bowie.jpg",
    "heroPos": "center 30%",
    "bajada": "El camaleón del rock: cada disco, un personaje nuevo y un sonido que nadie había escuchado antes.",
    "descripcion": [
      "David Robert Jones nació en Brixton, Londres, y tras varios intentos fallidos se volvió famoso en 1969 con “Space Oddity”, la historia del astronauta Major Tom. A comienzos de los setenta, con Hunky Dory y The Rise and Fall of Ziggy Stardust and the Spiders from Mars, se transformó en Ziggy Stardust, una estrella de rock llegada del espacio, y llevó el glam rock a su punto más alto.",
      "Después no dejó de cambiar: el soul de Young Americans, la frialdad de Station to Station, la trilogía de Berlín con “Heroes”, el pop de Let’s Dance. Siguió experimentando hasta el final y murió en enero de 2016, dos días después de publicar Blackstar."
    ],
    "nota": "La lista va en orden cronológico. Pin Ups es un disco de versiones: “Sorrow” y “Here Comes the Night” son canciones de otros artistas de los sesenta.",
    "canciones": [
      {
        "titulo": "Space Oddity",
        "disco": "David Bowie (Space Oddity)",
        "anio": 1969
      },
      {
        "titulo": "The Man Who Sold the World",
        "disco": "The Man Who Sold the World",
        "anio": 1970
      },
      {
        "titulo": "Changes",
        "disco": "Hunky Dory",
        "anio": 1971
      },
      {
        "titulo": "Oh! You Pretty Things",
        "disco": "Hunky Dory",
        "anio": 1971
      },
      {
        "titulo": "Eight Line Poem",
        "disco": "Hunky Dory",
        "anio": 1971
      },
      {
        "titulo": "Life on Mars?",
        "disco": "Hunky Dory",
        "anio": 1971
      },
      {
        "titulo": "Song for Bob Dylan",
        "disco": "Hunky Dory",
        "anio": 1971
      },
      {
        "titulo": "Andy Warhol",
        "disco": "Hunky Dory",
        "anio": 1971
      },
      {
        "titulo": "Queen Bitch",
        "disco": "Hunky Dory",
        "anio": 1971
      },
      {
        "titulo": "Five Years",
        "disco": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        "anio": 1972
      },
      {
        "titulo": "Soul Love",
        "disco": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        "anio": 1972
      },
      {
        "titulo": "Moonage Daydream",
        "disco": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        "anio": 1972
      },
      {
        "titulo": "Starman",
        "disco": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        "anio": 1972
      },
      {
        "titulo": "Lady Stardust",
        "disco": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        "anio": 1972
      },
      {
        "titulo": "Ziggy Stardust",
        "disco": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        "anio": 1972
      },
      {
        "titulo": "Suffragette City",
        "disco": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        "anio": 1972
      },
      {
        "titulo": "Rock ’n’ Roll Suicide",
        "disco": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        "anio": 1972
      },
      {
        "titulo": "Drive-In Saturday",
        "disco": "Aladdin Sane",
        "anio": 1973
      },
      {
        "titulo": "The Jean Genie",
        "disco": "Aladdin Sane",
        "anio": 1973
      },
      {
        "titulo": "The Prettiest Star",
        "disco": "Aladdin Sane",
        "anio": 1973
      },
      {
        "titulo": "Here Comes the Night",
        "disco": "Pin Ups",
        "anio": 1973
      },
      {
        "titulo": "Sorrow",
        "disco": "Pin Ups",
        "anio": 1973
      },
      {
        "titulo": "Rebel Rebel",
        "disco": "Diamond Dogs",
        "anio": 1974
      },
      {
        "titulo": "Rock ’n’ Roll with Me",
        "disco": "Diamond Dogs",
        "anio": 1974
      },
      {
        "titulo": "Young Americans",
        "disco": "Young Americans",
        "anio": 1975
      },
      {
        "titulo": "Fame",
        "disco": "Young Americans",
        "anio": 1975
      },
      {
        "titulo": "Golden Years",
        "disco": "Station to Station",
        "anio": 1976
      },
      {
        "titulo": "Sound and Vision",
        "disco": "Low",
        "anio": 1977
      },
      {
        "titulo": "“Heroes”",
        "disco": "“Heroes”",
        "anio": 1977
      },
      {
        "titulo": "Ashes to Ashes",
        "disco": "Scary Monsters (and Super Creeps)",
        "anio": 1980
      },
      {
        "titulo": "Modern Love",
        "disco": "Let’s Dance",
        "anio": 1983
      },
      {
        "titulo": "Let’s Dance",
        "disco": "Let’s Dance",
        "anio": 1983
      },
      {
        "titulo": "Blue Jean",
        "disco": "Tonight",
        "anio": 1984
      },
      {
        "titulo": "Tonight",
        "disco": "Tonight",
        "anio": 1984
      },
      {
        "titulo": "Thursday’s Child",
        "disco": "Hours",
        "anio": 1999
      },
      {
        "titulo": "Seven",
        "disco": "Hours",
        "anio": 1999
      },
      {
        "titulo": "Heathen (The Rays)",
        "disco": "Heathen",
        "anio": 2002
      },
      {
        "titulo": "Where Are We Now?",
        "disco": "The Next Day",
        "anio": 2013
      },
      {
        "titulo": "(5:15) The Angels Have Gone",
        "disco": "The Next Day",
        "anio": 2013
      }
    ]
  },
  {
    "id": "drew-holcomb-and-the-neighbors",
    "nombre": "Drew Holcomb & The Neighbors",
    "pais": "Estados Unidos",
    "ciudad": "Memphis y Nashville, Tennessee",
    "anios": "Desde 2005",
    "genero": "Americana, folk rock",
    "integrantes": [
      "Drew Holcomb",
      "Nathan Dugger",
      "Rich Brinsfield"
    ],
    "hero": "img/drew-holcomb-and-the-neighbors.jpg",
    "heroPos": "center 25%",
    "bajada": "Canciones de amor y de amistad con aire sureño, escritas para cantarse entre amigos.",
    "descripcion": [
      "Drew Holcomb creció en Memphis y armó su banda, The Neighbors, a mediados de los dos mil en Tennessee, entre Memphis y la escena del este de Nashville. Su música mezcla americana, folk y rock de raíz, con la influencia de cantautores como Bruce Springsteen y Tom Petty.",
      "Muchas de sus canciones más queridas hablan del matrimonio, la familia y la comunidad, como “What Would I Do Without You”, que se volvió un clásico de casamientos, o “Find Your People”, un himno a la amistad de su disco Strangers No More. Construyeron su público con giras constantes y sin el apoyo de una gran discográfica."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "What Would I Do Without You",
        "disco": "Good Light",
        "anio": 2013
      },
      {
        "titulo": "American Beauty",
        "disco": "Medicine",
        "anio": 2015
      },
      {
        "titulo": "Shine Like Lightning",
        "disco": "Medicine",
        "anio": 2015
      },
      {
        "titulo": "Find Your People",
        "disco": "Strangers No More",
        "anio": 2023
      }
    ]
  },
  {
    "id": "dean-martin",
    "nombre": "Dean Martin",
    "pais": "Estados Unidos",
    "ciudad": "Steubenville, Ohio",
    "anios": "1946 – 1985",
    "genero": "Pop tradicional, crooner, swing",
    "integrantes": [
      "Dean Martin (solista)"
    ],
    "hero": "img/dean-martin.jpg",
    "heroPos": "center 30%",
    "bajada": "El crooner más relajado de todos: una voz de terciopelo, un vaso en la mano y canciones que suenan a fiesta elegante.",
    "descripcion": [
      "Dino Paul Crocetti nació en Steubenville, Ohio, hijo de inmigrantes italianos, y trabajó como boxeador y crupier antes de dedicarse a cantar. A fines de los cuarenta formó un exitoso dúo cómico con Jerry Lewis, y en 1953 “That’s Amore” lo convirtió en una de las voces más populares de Estados Unidos.",
      "Junto a Frank Sinatra y Sammy Davis Jr. formó parte del Rat Pack, el grupo que dominó los escenarios de Las Vegas y películas como Ocean’s 11, donde cantó “Ain’t That a Kick in the Head”. En 1964 “Everybody Loves Somebody” desplazó a The Beatles del primer puesto en Estados Unidos, y durante años condujo su propio programa de televisión."
    ],
    "nota": "La lista va en orden cronológico. “That’s Amore” y “Ain’t That a Kick in the Head” salieron como simples.",
    "canciones": [
      {
        "titulo": "That’s Amore",
        "disco": "Simple · película The Caddy",
        "anio": 1953
      },
      {
        "titulo": "Ain’t That a Kick in the Head",
        "disco": "Simple · película Ocean’s 11",
        "anio": 1960
      },
      {
        "titulo": "Everybody Loves Somebody",
        "disco": "Everybody Loves Somebody",
        "anio": 1964
      },
      {
        "titulo": "The Door Is Still Open to My Heart",
        "disco": "The Door Is Still Open to My Heart",
        "anio": 1964
      }
    ]
  },
  {
    "id": "ed-sheeran",
    "nombre": "Ed Sheeran",
    "pais": "Reino Unido",
    "ciudad": "Framlingham, Inglaterra",
    "anios": "Desde 2005",
    "genero": "Pop, folk pop, cantautor",
    "integrantes": [
      "Ed Sheeran (solista)"
    ],
    "hero": "img/ed-sheeran.jpg",
    "heroPos": "center 25%",
    "bajada": "Un pelirrojo con una guitarra y un pedal de loops que llenó estadios él solo.",
    "descripcion": [
      "Ed Sheeran creció en Framlingham, un pueblo de Suffolk, y de adolescente se mudó a Londres para tocar en cualquier lugar que lo dejaran: pubs, bares y pequeños escenarios. Grabó varios EP por su cuenta hasta que en 2011 su primer disco, +, con “The A Team” y “Give Me Love”, lo convirtió en una figura del pop británico.",
      "Sus discos llevan como título símbolos matemáticos: +, x, ÷, = y -. Con x y ÷ llegaron canciones como “Thinking Out Loud”, “Photograph”, “Shape of You” y “Perfect”, que lo convirtieron en uno de los artistas más escuchados del mundo. En vivo suele presentarse solo, construyendo las canciones capa por capa con un pedal de loops."
    ],
    "nota": "La lista va en orden cronológico. “Perfect Symphony” es la versión de “Perfect” a dúo con el tenor italiano Andrea Bocelli.",
    "canciones": [
      {
        "titulo": "This",
        "disco": "+",
        "anio": 2011
      },
      {
        "titulo": "Give Me Love",
        "disco": "+",
        "anio": 2011
      },
      {
        "titulo": "Photograph",
        "disco": "x",
        "anio": 2014
      },
      {
        "titulo": "Thinking Out Loud",
        "disco": "x",
        "anio": 2014
      },
      {
        "titulo": "Dive",
        "disco": "÷",
        "anio": 2017
      },
      {
        "titulo": "Shape of You",
        "disco": "÷",
        "anio": 2017
      },
      {
        "titulo": "Perfect",
        "disco": "÷",
        "anio": 2017
      },
      {
        "titulo": "Happier",
        "disco": "÷",
        "anio": 2017
      },
      {
        "titulo": "Hearts Don’t Break Around Here",
        "disco": "÷",
        "anio": 2017
      },
      {
        "titulo": "Perfect Symphony",
        "disco": "Simple · con Andrea Bocelli",
        "anio": 2017
      },
      {
        "titulo": "Bad Habits",
        "disco": "=",
        "anio": 2021
      }
    ]
  },
  {
    "id": "electric-light-orchestra",
    "nombre": "Electric Light Orchestra",
    "pais": "Reino Unido",
    "ciudad": "Birmingham, Inglaterra",
    "anios": "1970 – 1986 · desde 2014",
    "genero": "Rock sinfónico, pop rock",
    "integrantes": [
      "Jeff Lynne",
      "Bev Bevan",
      "Richard Tandy",
      "Kelly Groucutt",
      "Mik Kaminski",
      "Hugh McDowell",
      "Melvyn Gale"
    ],
    "hero": "img/electric-light-orchestra.jpg",
    "heroPos": "center 22%",
    "bajada": "Violines, chelos y sintetizadores al servicio de canciones pop perfectas, con The Beatles siempre en el horizonte.",
    "descripcion": [
      "Electric Light Orchestra nació en Birmingham en 1970 con una idea ambiciosa: retomar el sonido orquestal de canciones de The Beatles como “I Am the Walrus” y convertirlo en una banda de rock con violines y chelos fijos. Con el tiempo Jeff Lynne quedó al frente como compositor, cantante y productor.",
      "Entre mediados y fines de los setenta encadenaron A New World Record, Out of the Blue y Discovery, con éxitos como “Telephone Line”, “Mr. Blue Sky” y “Don’t Bring Me Down”. Lynne siguió como productor de George Harrison, Tom Petty y Roy Orbison, formó los Traveling Wilburys y volvió a girar con el nombre de la banda desde 2014."
    ],
    "nota": "La lista va en orden cronológico. Varias de estas canciones aparecen en Spotify como “2012 Version”: son regrabaciones que Jeff Lynne hizo para el compilado Mr. Blue Sky: The Very Best of Electric Light Orchestra. Acá figuran en su disco original.",
    "canciones": [
      {
        "titulo": "Can’t Get It Out of My Head",
        "disco": "Eldorado",
        "anio": 1974
      },
      {
        "titulo": "Telephone Line",
        "disco": "A New World Record",
        "anio": 1976
      },
      {
        "titulo": "Rockaria!",
        "disco": "A New World Record",
        "anio": 1976
      },
      {
        "titulo": "Livin’ Thing",
        "disco": "A New World Record",
        "anio": 1976
      },
      {
        "titulo": "Turn to Stone",
        "disco": "Out of the Blue",
        "anio": 1977
      },
      {
        "titulo": "Mr. Blue Sky",
        "disco": "Out of the Blue",
        "anio": 1977
      },
      {
        "titulo": "Confusion",
        "disco": "Discovery",
        "anio": 1979
      },
      {
        "titulo": "Last Train to London",
        "disco": "Discovery",
        "anio": 1979
      },
      {
        "titulo": "Don’t Bring Me Down",
        "disco": "Discovery",
        "anio": 1979
      },
      {
        "titulo": "I’m Alive",
        "disco": "Xanadu (banda sonora)",
        "anio": 1980
      },
      {
        "titulo": "Don’t Walk Away",
        "disco": "Xanadu (banda sonora)",
        "anio": 1980
      },
      {
        "titulo": "Calling America",
        "disco": "Balance of Power",
        "anio": 1986
      }
    ]
  },
  {
    "id": "elton-john",
    "nombre": "Elton John",
    "pais": "Reino Unido",
    "ciudad": "Pinner, Middlesex, Inglaterra",
    "anios": "Desde 1964",
    "genero": "Pop rock, glam rock, cantautor",
    "integrantes": [
      "Elton John (voz y piano)",
      "Bernie Taupin (letrista)"
    ],
    "hero": "img/elton-john.jpg",
    "heroPos": "center 35%",
    "bajada": "Un piano, anteojos imposibles y más de medio siglo de canciones escritas a cuatro manos con Bernie Taupin.",
    "descripcion": [
      "Reginald Kenneth Dwight nació en las afueras de Londres y a los once años ya estudiaba piano en la Royal Academy of Music. En 1967 respondió un aviso de una discográfica y conoció a Bernie Taupin, un joven letrista: desde entonces Taupin escribe las letras y Elton les pone música, una sociedad que lleva más de cincuenta años.",
      "“Your Song”, de 1970, lo hizo conocido, y en los setenta encadenó discos como Madman Across the Water, Honky Château y Goodbye Yellow Brick Road, con trajes y anteojos cada vez más extravagantes. Siguió llenando estadios durante décadas, ganó un Oscar por la música de El rey león y en 2023 cerró su última gira mundial."
    ],
    "nota": "La lista va en orden cronológico, de Empty Sky a The Big Picture. “Runaway Train” es un dueto con Eric Clapton.",
    "canciones": [
      {
        "titulo": "Western Ford Gateway",
        "disco": "Empty Sky",
        "anio": 1969
      },
      {
        "titulo": "Your Song",
        "disco": "Elton John",
        "anio": 1970
      },
      {
        "titulo": "Border Song",
        "disco": "Elton John",
        "anio": 1970
      },
      {
        "titulo": "Ballad of a Well-Known Gun",
        "disco": "Tumbleweed Connection",
        "anio": 1970
      },
      {
        "titulo": "Country Comfort",
        "disco": "Tumbleweed Connection",
        "anio": 1970
      },
      {
        "titulo": "My Father’s Gun",
        "disco": "Tumbleweed Connection",
        "anio": 1970
      },
      {
        "titulo": "Tiny Dancer",
        "disco": "Madman Across the Water",
        "anio": 1971
      },
      {
        "titulo": "Levon",
        "disco": "Madman Across the Water",
        "anio": 1971
      },
      {
        "titulo": "Razor Face",
        "disco": "Madman Across the Water",
        "anio": 1971
      },
      {
        "titulo": "Indian Sunset",
        "disco": "Madman Across the Water",
        "anio": 1971
      },
      {
        "titulo": "Holiday Inn",
        "disco": "Madman Across the Water",
        "anio": 1971
      },
      {
        "titulo": "Rotten Peaches",
        "disco": "Madman Across the Water",
        "anio": 1971
      },
      {
        "titulo": "Honky Cat",
        "disco": "Honky Château",
        "anio": 1972
      },
      {
        "titulo": "Mona Lisas and Mad Hatters",
        "disco": "Honky Château",
        "anio": 1972
      },
      {
        "titulo": "Rocket Man (I Think It’s Going to Be a Long, Long Time)",
        "disco": "Honky Château",
        "anio": 1972
      },
      {
        "titulo": "Elderberry Wine",
        "disco": "Don’t Shoot Me I’m Only the Piano Player",
        "anio": 1973
      },
      {
        "titulo": "Crocodile Rock",
        "disco": "Don’t Shoot Me I’m Only the Piano Player",
        "anio": 1973
      },
      {
        "titulo": "High Flying Bird",
        "disco": "Don’t Shoot Me I’m Only the Piano Player",
        "anio": 1973
      },
      {
        "titulo": "Candle in the Wind",
        "disco": "Goodbye Yellow Brick Road",
        "anio": 1973
      },
      {
        "titulo": "Bennie and the Jets",
        "disco": "Goodbye Yellow Brick Road",
        "anio": 1973
      },
      {
        "titulo": "Goodbye Yellow Brick Road",
        "disco": "Goodbye Yellow Brick Road",
        "anio": 1973
      },
      {
        "titulo": "Sweet Painted Lady",
        "disco": "Goodbye Yellow Brick Road",
        "anio": 1973
      },
      {
        "titulo": "Don’t Let the Sun Go Down on Me",
        "disco": "Caribou",
        "anio": 1974
      },
      {
        "titulo": "Philadelphia Freedom",
        "disco": "Simple (fuera de álbum)",
        "anio": 1975
      },
      {
        "titulo": "Pinball Wizard",
        "disco": "Tommy (banda sonora)",
        "anio": 1975
      },
      {
        "titulo": "Don’t Go Breaking My Heart",
        "disco": "Simple · con Kiki Dee",
        "anio": 1976
      },
      {
        "titulo": "Sorry Seems to Be the Hardest Word",
        "disco": "Blue Moves",
        "anio": 1976
      },
      {
        "titulo": "Little Jeannie",
        "disco": "21 at 33",
        "anio": 1980
      },
      {
        "titulo": "I Guess That’s Why They Call It the Blues",
        "disco": "Too Low for Zero",
        "anio": 1983
      },
      {
        "titulo": "Sad Songs (Say So Much)",
        "disco": "Breaking Hearts",
        "anio": 1984
      },
      {
        "titulo": "Breaking Hearts (Ain’t What It Used to Be)",
        "disco": "Breaking Hearts",
        "anio": 1984
      },
      {
        "titulo": "Nikita",
        "disco": "Ice on Fire",
        "anio": 1985
      },
      {
        "titulo": "Club at the End of the Street",
        "disco": "Sleeping with the Past",
        "anio": 1989
      },
      {
        "titulo": "Sacrifice",
        "disco": "Sleeping with the Past",
        "anio": 1989
      },
      {
        "titulo": "Runaway Train",
        "disco": "The One",
        "anio": 1992
      },
      {
        "titulo": "Circle of Life",
        "disco": "The Lion King (banda sonora)",
        "anio": 1994
      },
      {
        "titulo": "Live Like Horses",
        "disco": "The Big Picture",
        "anio": 1997
      },
      {
        "titulo": "Something About the Way You Look Tonight",
        "disco": "The Big Picture",
        "anio": 1997
      }
    ]
  },
  {
    "id": "eric-clapton",
    "nombre": "Eric Clapton",
    "pais": "Reino Unido",
    "ciudad": "Ripley, Surrey, Inglaterra",
    "anios": "Desde 1963",
    "genero": "Blues, rock, blues rock",
    "integrantes": [
      "Eric Clapton (solista)"
    ],
    "hero": "img/eric-clapton.jpg",
    "heroPos": "center 25%",
    "bajada": "“Slowhand”: el guitarrista que hizo del blues su idioma y sobrevivió a casi todo para seguir tocándolo.",
    "descripcion": [
      "Eric Clapton creció en Ripley, un pueblo del sur de Inglaterra, criado por sus abuelos. A los diecisiete ya tocaba en The Yardbirds, y después pasó por John Mayall & the Bluesbreakers, Cream, Blind Faith y Derek and the Dominos, donde grabó “Layla”. En Londres aparecieron grafitis que decían “Clapton is God”.",
      "Su carrera solista empezó en 1970 y alternó blues, rock relajado y baladas como “Wonderful Tonight”. Después de años de adicciones, en 1991 perdió a su hijo Conor, de cuatro años, y escribió “Tears in Heaven”. Es el único artista que entró tres veces al Salón de la Fama del Rock and Roll."
    ],
    "nota": "La lista va en orden cronológico. “I Shot the Sheriff” es una versión de Bob Marley y “Knockin’ on Heaven’s Door”, de Bob Dylan.",
    "canciones": [
      {
        "titulo": "Easy Now",
        "disco": "Eric Clapton",
        "anio": 1970
      },
      {
        "titulo": "After Midnight",
        "disco": "Eric Clapton",
        "anio": 1970
      },
      {
        "titulo": "Let It Rain",
        "disco": "Eric Clapton",
        "anio": 1970
      },
      {
        "titulo": "Give Me Strength",
        "disco": "461 Ocean Boulevard",
        "anio": 1974
      },
      {
        "titulo": "Let It Grow",
        "disco": "461 Ocean Boulevard",
        "anio": 1974
      },
      {
        "titulo": "I Shot the Sheriff",
        "disco": "461 Ocean Boulevard",
        "anio": 1974
      },
      {
        "titulo": "Swing Low, Sweet Chariot",
        "disco": "There’s One in Every Crowd",
        "anio": 1975
      },
      {
        "titulo": "The Sky Is Crying",
        "disco": "There’s One in Every Crowd",
        "anio": 1975
      },
      {
        "titulo": "Knockin’ on Heaven’s Door",
        "disco": "Simple (fuera de álbum)",
        "anio": 1975
      },
      {
        "titulo": "Sign Language",
        "disco": "No Reason to Cry",
        "anio": 1976
      },
      {
        "titulo": "County Jail Blues",
        "disco": "No Reason to Cry",
        "anio": 1976
      },
      {
        "titulo": "Cocaine",
        "disco": "Slowhand",
        "anio": 1977
      },
      {
        "titulo": "Wonderful Tonight",
        "disco": "Slowhand",
        "anio": 1977
      },
      {
        "titulo": "Promises",
        "disco": "Backless",
        "anio": 1978
      },
      {
        "titulo": "Everybody Oughta Make a Change",
        "disco": "Money and Cigarettes",
        "anio": 1983
      },
      {
        "titulo": "I’ve Got a Rock ’n’ Roll Heart",
        "disco": "Money and Cigarettes",
        "anio": 1983
      },
      {
        "titulo": "Knock on Wood",
        "disco": "Behind the Sun",
        "anio": 1985
      },
      {
        "titulo": "Forever Man",
        "disco": "Behind the Sun",
        "anio": 1985
      },
      {
        "titulo": "Running on Faith",
        "disco": "Journeyman",
        "anio": 1989
      },
      {
        "titulo": "Bad Love",
        "disco": "Journeyman",
        "anio": 1989
      },
      {
        "titulo": "Tears in Heaven",
        "disco": "Rush (banda sonora)",
        "anio": 1992
      },
      {
        "titulo": "Riding with the King",
        "disco": "Riding with the King · con B.B. King",
        "anio": 2000
      },
      {
        "titulo": "Got You on My Mind",
        "disco": "Reptile",
        "anio": 2001
      },
      {
        "titulo": "When You Got a Good Friend",
        "disco": "Me and Mr. Johnson",
        "anio": 2004
      },
      {
        "titulo": "So Tired",
        "disco": "Back Home",
        "anio": 2005
      },
      {
        "titulo": "Diamonds Made from Rain",
        "disco": "Clapton",
        "anio": 2010
      }
    ]
  },
  {
    "id": "europe",
    "nombre": "Europe",
    "pais": "Suecia",
    "ciudad": "Upplands Väsby, Estocolmo",
    "anios": "1979 – 1992 · desde 2003",
    "genero": "Hard rock, glam metal",
    "integrantes": [
      "Joey Tempest",
      "John Norum",
      "Kee Marcello",
      "John Levén",
      "Mic Michaeli",
      "Ian Haugland"
    ],
    "hero": "img/europe.jpg",
    "heroPos": "center 25%",
    "bajada": "Un riff de teclado que todo el mundo puede tararear y la banda sueca que conquistó el planeta con él.",
    "descripcion": [
      "Europe se formó a fines de los setenta en Upplands Väsby, en las afueras de Estocolmo, alrededor del cantante Joey Tempest y el guitarrista John Norum. Ganaron un concurso de bandas en Suecia y grabaron dos discos de hard rock melódico antes de dar el gran salto.",
      "En 1986 publicaron The Final Countdown. La canción que le da nombre, con su riff de sintetizador, llegó al número uno en una veintena de países y se volvió un himno de estadios y competencias deportivas. Ese mismo disco incluía “Carrie”, una balada que fue éxito en Estados Unidos. La banda se separó en 1992 y volvió a reunirse en 2003."
    ],
    "nota": "La lista va en orden cronológico. “Open Your Heart” salió primero en Wings of Tomorrow (1984); acá figura la versión regrabada de 1988.",
    "canciones": [
      {
        "titulo": "The Final Countdown",
        "disco": "The Final Countdown",
        "anio": 1986
      },
      {
        "titulo": "Carrie",
        "disco": "The Final Countdown",
        "anio": 1986
      },
      {
        "titulo": "Open Your Heart",
        "disco": "Out of This World",
        "anio": 1988
      },
      {
        "titulo": "I’ll Cry for You",
        "disco": "Prisoners in Paradise",
        "anio": 1991
      }
    ]
  },
  {
    "id": "eurythmics",
    "nombre": "Eurythmics",
    "pais": "Reino Unido",
    "ciudad": "Londres, Inglaterra",
    "anios": "1980 – 1990 · reuniones posteriores",
    "genero": "Synth pop, new wave, pop rock",
    "integrantes": [
      "Annie Lennox",
      "Dave Stewart"
    ],
    "hero": "img/eurythmics.jpg",
    "heroPos": "center 30%",
    "bajada": "La voz de Annie Lennox, los sintetizadores de Dave Stewart y una de las imágenes más audaces de los años ochenta.",
    "descripcion": [
      "Annie Lennox, escocesa, y Dave Stewart, inglés, se conocieron en Londres a fines de los setenta y tocaron juntos en la banda The Tourists. Cuando se separaron como pareja decidieron seguir trabajando juntos, y en 1980 formaron Eurythmics.",
      "En 1983 “Sweet Dreams (Are Made of This)”, con su base de sintetizador y el pelo naranja y el traje de Lennox en el video, los llevó al número uno en Estados Unidos. Siguieron con éxitos que pasaban del pop electrónico al soul y al rock, como “There Must Be an Angel”, con Stevie Wonder en armónica, y “Miracle of Love”."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Sweet Dreams (Are Made of This)",
        "disco": "Sweet Dreams (Are Made of This)",
        "anio": 1983
      },
      {
        "titulo": "There Must Be an Angel (Playing with My Heart)",
        "disco": "Be Yourself Tonight",
        "anio": 1985
      },
      {
        "titulo": "Miracle of Love",
        "disco": "Revenge",
        "anio": 1986
      }
    ]
  },
  {
    "id": "elvis-presley",
    "nombre": "Elvis Presley",
    "pais": "Estados Unidos",
    "ciudad": "Tupelo, Misisipi · Memphis, Tennessee",
    "anios": "1954 – 1977",
    "genero": "Rock and roll, rockabilly, gospel, country",
    "integrantes": [
      "Elvis Presley (solista)",
      "Scotty Moore (guitarra)",
      "Bill Black (contrabajo)",
      "D. J. Fontana (batería)"
    ],
    "hero": "img/elvis-presley.jpg",
    "heroPos": "center 25%",
    "bajada": "El Rey: un chico de Memphis que mezcló el blues negro con el country blanco y le cambió el ritmo al mundo.",
    "descripcion": [
      "Elvis Aaron Presley nació en Tupelo, Misisipi, en una familia muy humilde, y a los trece años se mudó con sus padres a Memphis. Creció escuchando gospel en la iglesia, country en la radio y blues en los barrios negros de la ciudad. En 1954, en los estudios Sun, grabó “That’s All Right” con Scotty Moore y Bill Black, y esa mezcla de estilos se convirtió en el rock and roll.",
      "En 1956 “Heartbreak Hotel”, “Hound Dog” y “Don’t Be Cruel” lo hicieron la estrella más grande del planeta, con un movimiento de caderas que escandalizaba a la televisión. Después vinieron el servicio militar, una larga etapa de películas en Hollywood, el regreso triunfal del especial de 1968 y los grandes shows de Las Vegas. Murió en Graceland, su casa de Memphis, en agosto de 1977, a los 42 años."
    ],
    "nota": "La lista va en orden cronológico. Muchos de sus grandes éxitos salieron como simples y no formaron parte de ningún disco de estudio. “A Little Less Conversation” es de 1968, pero acá figura el remix de JXL que la volvió un éxito mundial en 2002.",
    "canciones": [
      {
        "titulo": "That’s All Right",
        "disco": "Simple · Sun Records",
        "anio": 1954
      },
      {
        "titulo": "Mystery Train",
        "disco": "Simple · Sun Records",
        "anio": 1955
      },
      {
        "titulo": "Heartbreak Hotel",
        "disco": "Simple",
        "anio": 1956
      },
      {
        "titulo": "I Was the One",
        "disco": "Simple",
        "anio": 1956
      },
      {
        "titulo": "Blue Suede Shoes",
        "disco": "Elvis Presley",
        "anio": 1956
      },
      {
        "titulo": "Tutti Frutti",
        "disco": "Elvis Presley",
        "anio": 1956
      },
      {
        "titulo": "Trying to Get to You",
        "disco": "Elvis Presley",
        "anio": 1956
      },
      {
        "titulo": "Blue Moon",
        "disco": "Elvis Presley",
        "anio": 1956
      },
      {
        "titulo": "Shake, Rattle and Roll",
        "disco": "Simple",
        "anio": 1956
      },
      {
        "titulo": "Lawdy, Miss Clawdy",
        "disco": "Simple",
        "anio": 1956
      },
      {
        "titulo": "Hound Dog",
        "disco": "Simple",
        "anio": 1956
      },
      {
        "titulo": "Don’t Be Cruel",
        "disco": "Simple",
        "anio": 1956
      },
      {
        "titulo": "Love Me",
        "disco": "Elvis",
        "anio": 1956
      },
      {
        "titulo": "So Glad You’re Mine",
        "disco": "Elvis",
        "anio": 1956
      },
      {
        "titulo": "Anyplace Is Paradise",
        "disco": "Elvis",
        "anio": 1956
      },
      {
        "titulo": "Santa Claus Is Back in Town",
        "disco": "Elvis’ Christmas Album",
        "anio": 1957
      },
      {
        "titulo": "Silent Night",
        "disco": "Elvis’ Christmas Album",
        "anio": 1957
      },
      {
        "titulo": "(There’ll Be) Peace in the Valley (For Me)",
        "disco": "Elvis’ Christmas Album",
        "anio": 1957
      },
      {
        "titulo": "Hard Headed Woman",
        "disco": "King Creole",
        "anio": 1958
      },
      {
        "titulo": "Trouble",
        "disco": "King Creole",
        "anio": 1958
      },
      {
        "titulo": "Don’t",
        "disco": "Simple",
        "anio": 1958
      },
      {
        "titulo": "(Now and Then There’s) A Fool Such as I",
        "disco": "Simple",
        "anio": 1959
      },
      {
        "titulo": "Fever",
        "disco": "Elvis Is Back!",
        "anio": 1960
      },
      {
        "titulo": "The Girl of My Best Friend",
        "disco": "Elvis Is Back!",
        "anio": 1960
      },
      {
        "titulo": "Such a Night",
        "disco": "Elvis Is Back!",
        "anio": 1960
      },
      {
        "titulo": "Reconsider Baby",
        "disco": "Elvis Is Back!",
        "anio": 1960
      },
      {
        "titulo": "It’s Now or Never",
        "disco": "Simple",
        "anio": 1960
      },
      {
        "titulo": "Are You Lonesome Tonight?",
        "disco": "Simple",
        "anio": 1960
      },
      {
        "titulo": "Give Me the Right",
        "disco": "Something for Everybody",
        "anio": 1961
      },
      {
        "titulo": "Can’t Help Falling in Love",
        "disco": "Blue Hawaii",
        "anio": 1961
      },
      {
        "titulo": "Kiss Me Quick",
        "disco": "Pot Luck",
        "anio": 1962
      },
      {
        "titulo": "Fountain of Love",
        "disco": "Pot Luck",
        "anio": 1962
      },
      {
        "titulo": "Suspicion",
        "disco": "Pot Luck",
        "anio": 1962
      },
      {
        "titulo": "Return to Sender",
        "disco": "Girls! Girls! Girls!",
        "anio": 1962
      },
      {
        "titulo": "Because of Love",
        "disco": "Girls! Girls! Girls!",
        "anio": 1962
      },
      {
        "titulo": "Viva Las Vegas",
        "disco": "Simple · película Viva Las Vegas",
        "anio": 1964
      },
      {
        "titulo": "Crying in the Chapel",
        "disco": "Simple",
        "anio": 1965
      },
      {
        "titulo": "If Every Day Was Like Christmas",
        "disco": "Simple",
        "anio": 1966
      },
      {
        "titulo": "You’ll Never Walk Alone",
        "disco": "Simple",
        "anio": 1968
      },
      {
        "titulo": "If I Can Dream",
        "disco": "Simple",
        "anio": 1968
      },
      {
        "titulo": "Long Black Limousine",
        "disco": "From Elvis in Memphis",
        "anio": 1969
      },
      {
        "titulo": "Gentle on My Mind",
        "disco": "From Elvis in Memphis",
        "anio": 1969
      },
      {
        "titulo": "In the Ghetto",
        "disco": "From Elvis in Memphis",
        "anio": 1969
      },
      {
        "titulo": "Suspicious Minds",
        "disco": "Simple",
        "anio": 1969
      },
      {
        "titulo": "Kentucky Rain",
        "disco": "Simple",
        "anio": 1970
      },
      {
        "titulo": "Snowbird",
        "disco": "Elvis Country",
        "anio": 1971
      },
      {
        "titulo": "Tomorrow Never Comes",
        "disco": "Elvis Country",
        "anio": 1971
      },
      {
        "titulo": "There Goes My Everything",
        "disco": "Elvis Country",
        "anio": 1971
      },
      {
        "titulo": "Love Letters",
        "disco": "Love Letters from Elvis",
        "anio": 1971
      },
      {
        "titulo": "When I’m Over You",
        "disco": "Love Letters from Elvis",
        "anio": 1971
      },
      {
        "titulo": "If I Were You",
        "disco": "Love Letters from Elvis",
        "anio": 1971
      },
      {
        "titulo": "Only Believe",
        "disco": "Love Letters from Elvis",
        "anio": 1971
      },
      {
        "titulo": "It’s Only Love",
        "disco": "Simple",
        "anio": 1971
      },
      {
        "titulo": "Help Me Make It Through the Night",
        "disco": "Elvis Now",
        "anio": 1972
      },
      {
        "titulo": "Early Mornin’ Rain",
        "disco": "Elvis Now",
        "anio": 1972
      },
      {
        "titulo": "He Is My Everything",
        "disco": "He Touched Me",
        "anio": 1972
      },
      {
        "titulo": "Amazing Grace",
        "disco": "He Touched Me",
        "anio": 1972
      },
      {
        "titulo": "Seeing Is Believing",
        "disco": "He Touched Me",
        "anio": 1972
      },
      {
        "titulo": "Burning Love",
        "disco": "Simple",
        "anio": 1972
      },
      {
        "titulo": "Separate Ways",
        "disco": "Simple",
        "anio": 1972
      },
      {
        "titulo": "Always on My Mind",
        "disco": "Simple",
        "anio": 1972
      },
      {
        "titulo": "For the Good Times",
        "disco": "Elvis: As Recorded at Madison Square Garden",
        "anio": 1972
      },
      {
        "titulo": "Raised on Rock",
        "disco": "Raised on Rock / For Ol’ Times Sake",
        "anio": 1973
      },
      {
        "titulo": "Loving Arms",
        "disco": "Good Times",
        "anio": 1974
      },
      {
        "titulo": "Promised Land",
        "disco": "Promised Land",
        "anio": 1975
      },
      {
        "titulo": "Help Me",
        "disco": "Promised Land",
        "anio": 1975
      },
      {
        "titulo": "Your Love’s Been a Long Time Coming",
        "disco": "Promised Land",
        "anio": 1975
      },
      {
        "titulo": "Thinking About You",
        "disco": "Promised Land",
        "anio": 1975
      },
      {
        "titulo": "T-R-O-U-B-L-E",
        "disco": "Today",
        "anio": 1975
      },
      {
        "titulo": "And I Love You So",
        "disco": "Today",
        "anio": 1975
      },
      {
        "titulo": "Pieces of My Life",
        "disco": "Today",
        "anio": 1975
      },
      {
        "titulo": "Green, Green Grass of Home",
        "disco": "Today",
        "anio": 1975
      },
      {
        "titulo": "Hurt",
        "disco": "From Elvis Presley Boulevard, Memphis, Tennessee",
        "anio": 1976
      },
      {
        "titulo": "I’ll Never Fall in Love Again",
        "disco": "From Elvis Presley Boulevard, Memphis, Tennessee",
        "anio": 1976
      },
      {
        "titulo": "Unchained Melody",
        "disco": "Moody Blue",
        "anio": 1977
      },
      {
        "titulo": "Pledging My Love",
        "disco": "Moody Blue",
        "anio": 1977
      },
      {
        "titulo": "Way Down",
        "disco": "Moody Blue",
        "anio": 1977
      },
      {
        "titulo": "A Little Less Conversation",
        "disco": "Simple · remix de JXL",
        "anio": 2002
      }
    ]
  },
  {
    "id": "fastball",
    "nombre": "Fastball",
    "pais": "Estados Unidos",
    "ciudad": "Austin, Texas",
    "anios": "Desde 1994",
    "genero": "Rock alternativo, power pop",
    "integrantes": [
      "Tony Scalzo",
      "Miles Zuniga",
      "Joey Shuffield"
    ],
    "hero": "img/fastball.jpg",
    "heroPos": "center 30%",
    "bajada": "Dos compositores, un baterista y una canción sobre una pareja que se fue de viaje y nunca volvió.",
    "descripcion": [
      "Fastball se formó en Austin, Texas, en 1994, con dos cantantes y compositores, Tony Scalzo y Miles Zuniga, y el baterista Joey Shuffield. Su estilo mezcla el power pop de los sesenta con guitarras de rock alternativo y melodías muy pegadizas.",
      "En 1998 “The Way”, de su segundo disco, All the Pain Money Can Buy, se convirtió en uno de los grandes éxitos del año. La canción se inspiró en la historia real de una pareja de ancianos de Texas que salió rumbo a un festival y desapareció durante días. Aquel disco también incluyó “Out of My Head”, otra balada que sonó mucho en la radio."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Are You Ready for the Fallout?",
        "disco": "Make Your Mama Proud",
        "anio": 1996
      },
      {
        "titulo": "The Way",
        "disco": "All the Pain Money Can Buy",
        "anio": 1998
      },
      {
        "titulo": "Out of My Head",
        "disco": "All the Pain Money Can Buy",
        "anio": 1998
      },
      {
        "titulo": "You’re an Ocean",
        "disco": "The Harsh Light of Day",
        "anio": 2000
      }
    ]
  },
  {
    "id": "father-john-misty",
    "nombre": "Father John Misty",
    "pais": "Estados Unidos",
    "ciudad": "Rockville, Maryland",
    "anios": "Desde 2012",
    "genero": "Folk rock, indie, cantautor",
    "integrantes": [
      "Josh Tillman (Father John Misty)"
    ],
    "hero": "img/father-john-misty.jpg",
    "heroPos": "center 25%",
    "bajada": "Baladas de voz aterciopelada con letras irónicas, románticas y bastante desencantadas del mundo moderno.",
    "descripcion": [
      "Father John Misty es el personaje que creó Josh Tillman, un cantautor criado en Maryland en una familia muy religiosa. Antes fue el baterista de Fleet Foxes y grabó varios discos con su propio nombre. En 2012, ya con el seudónimo, publicó Fear Fun y encontró su voz: canciones de folk y soft rock setentoso con letras llenas de humor negro.",
      "Con I Love You, Honeybear y Pure Comedy se volvió una de las figuras más comentadas del rock independiente. En 2018 publicó God’s Favorite Customer, un disco más íntimo escrito en una etapa personal difícil. “Real Love Baby”, en cambio, es una canción luminosa que salió como simple suelto en 2016."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Real Love Baby",
        "disco": "Simple (fuera de álbum)",
        "anio": 2016
      },
      {
        "titulo": "God’s Favorite Customer",
        "disco": "God’s Favorite Customer",
        "anio": 2018
      }
    ]
  },
  {
    "id": "franz-ferdinand",
    "nombre": "Franz Ferdinand",
    "pais": "Reino Unido",
    "ciudad": "Glasgow, Escocia",
    "anios": "Desde 2002",
    "genero": "Indie rock, post-punk revival, dance rock",
    "integrantes": [
      "Alex Kapranos",
      "Bob Hardy",
      "Nick McCarthy",
      "Paul Thomson",
      "Julian Corrie",
      "Dino Bardot",
      "Audrey Tait"
    ],
    "hero": "img/franz-ferdinand.jpg",
    "heroPos": "center 22%",
    "bajada": "Guitarras angulosas, ritmos para bailar y la elegancia de una banda de arte de Glasgow.",
    "descripcion": [
      "Alex Kapranos, Bob Hardy, Nick McCarthy y Paul Thomson formaron Franz Ferdinand en Glasgow en 2002. Tomaron el nombre del archiduque austrohúngaro cuyo asesinato desató la Primera Guerra Mundial, y desde el principio dijeron que querían hacer “música para que las chicas bailen”.",
      "Su primer disco, de 2004, con “Take Me Out” y su famoso cambio de ritmo a mitad de canción, los puso al frente del regreso del post-punk junto a bandas como The Strokes. Ganaron el Mercury Prize y siguieron con You Could Have It So Much Better y Tonight. Con los años la formación cambió, siempre con Kapranos y Hardy como núcleo."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Take Me Out",
        "disco": "Franz Ferdinand",
        "anio": 2004
      },
      {
        "titulo": "Do You Want To",
        "disco": "You Could Have It So Much Better",
        "anio": 2005
      },
      {
        "titulo": "Walk Away",
        "disco": "You Could Have It So Much Better",
        "anio": 2005
      },
      {
        "titulo": "No You Girls",
        "disco": "Tonight: Franz Ferdinand",
        "anio": 2009
      }
    ]
  },
  {
    "id": "frank-sinatra",
    "nombre": "Frank Sinatra",
    "pais": "Estados Unidos",
    "ciudad": "Hoboken, Nueva Jersey",
    "anios": "1935 – 1995",
    "genero": "Pop tradicional, jazz vocal, swing",
    "integrantes": [
      "Frank Sinatra (solista)"
    ],
    "hero": "img/frank-sinatra.jpg",
    "heroPos": "center 25%",
    "bajada": "La Voz: el cantante que convirtió cada canción en una historia contada al oído y definió lo que significa cantar con estilo.",
    "descripcion": [
      "Francis Albert Sinatra nació en Hoboken, Nueva Jersey, hijo de inmigrantes italianos. En los años cuarenta, como cantante de las orquestas de Harry James y Tommy Dorsey y después como solista, provocó una histeria entre las adolescentes que anticipó lo que vendría con Elvis y The Beatles.",
      "En los cincuenta, tras una caída en su carrera, renació con los discos de Capitol junto al arreglador Nelson Riddle: álbumes pensados como un todo, como Songs for Swingin’ Lovers! y Come Fly with Me. Ganó un Oscar como actor, lideró el Rat Pack junto a Dean Martin y Sammy Davis Jr. y dejó clásicos eternos como “My Way” y “New York, New York”."
    ],
    "nota": "La lista va en orden cronológico. “Fly Me to the Moon” es la versión con Count Basie y su orquesta, arreglada por Quincy Jones.",
    "canciones": [
      {
        "titulo": "I’ve Got You Under My Skin",
        "disco": "Songs for Swingin’ Lovers!",
        "anio": 1956
      },
      {
        "titulo": "Come Fly with Me",
        "disco": "Come Fly with Me",
        "anio": 1958
      },
      {
        "titulo": "Fly Me to the Moon",
        "disco": "It Might as Well Be Swing · con Count Basie",
        "anio": 1964
      },
      {
        "titulo": "Moon River",
        "disco": "Sinatra Sings Days of Wine and Roses, Moon River and Other Academy Award Winners",
        "anio": 1964
      },
      {
        "titulo": "Strangers in the Night",
        "disco": "Strangers in the Night",
        "anio": 1966
      },
      {
        "titulo": "That’s Life",
        "disco": "That’s Life",
        "anio": 1966
      },
      {
        "titulo": "My Way",
        "disco": "My Way",
        "anio": 1969
      },
      {
        "titulo": "Theme from New York, New York",
        "disco": "Trilogy: Past Present Future",
        "anio": 1980
      }
    ]
  },
  {
    "id": "foo-fighters",
    "nombre": "Foo Fighters",
    "pais": "Estados Unidos",
    "ciudad": "Seattle, Washington",
    "anios": "Desde 1994",
    "genero": "Rock alternativo, post-grunge, hard rock",
    "integrantes": [
      "Dave Grohl",
      "Nate Mendel",
      "Pat Smear",
      "Chris Shiflett",
      "Taylor Hawkins",
      "Rami Jaffee"
    ],
    "hero": "img/foo-fighters.jpg",
    "heroPos": "center 25%",
    "bajada": "El baterista de Nirvana tomó la guitarra, se puso adelante del micrófono y armó una de las grandes bandas de rock de estadio.",
    "descripcion": [
      "Después de la muerte de Kurt Cobain en 1994, Dave Grohl, el baterista de Nirvana, entró a un estudio de Seattle y grabó solo un disco entero, tocando casi todos los instrumentos. Lo publicó con el nombre Foo Fighters, tomado de la jerga de los pilotos de la Segunda Guerra para los objetos voladores no identificados, y enseguida armó una banda para salir de gira.",
      "Con los años se convirtieron en sinónimo de rock con estribillos enormes: “Learn to Fly”, “All My Life”, “Best of You”, “The Pretender”. Wasting Light, de 2011, lo grabaron en analógico en el garaje de Grohl. En 2022 murió Taylor Hawkins, su baterista durante más de veinte años, y la banda siguió adelante en su honor."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Learn to Fly",
        "disco": "There Is Nothing Left to Lose",
        "anio": 1999
      },
      {
        "titulo": "All My Life",
        "disco": "One by One",
        "anio": 2002
      },
      {
        "titulo": "Best of You",
        "disco": "In Your Honor",
        "anio": 2005
      },
      {
        "titulo": "The Pretender",
        "disco": "Echoes, Silence, Patience & Grace",
        "anio": 2007
      },
      {
        "titulo": "Walk",
        "disco": "Wasting Light",
        "anio": 2011
      }
    ]
  },
  {
    "id": "fleetwood-mac",
    "nombre": "Fleetwood Mac",
    "pais": "Reino Unido",
    "ciudad": "Londres, Inglaterra",
    "anios": "Desde 1967",
    "genero": "Blues rock, soft rock, pop rock",
    "integrantes": [
      "Mick Fleetwood",
      "John McVie",
      "Christine McVie",
      "Lindsey Buckingham",
      "Stevie Nicks",
      "Peter Green"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "Una banda de blues inglesa que se reinventó en California y grabó, en medio de sus propias rupturas, uno de los discos más vendidos de la historia.",
    "descripcion": [
      "Fleetwood Mac nació en Londres en 1967 como una banda de blues liderada por el guitarrista Peter Green, con Mick Fleetwood en batería y John McVie en bajo, que le dieron el nombre. De esa primera etapa es “Albatross”, un instrumental sereno que llegó al número uno en Inglaterra.",
      "A mediados de los setenta, ya con Christine McVie en teclados, sumaron a la pareja estadounidense Lindsey Buckingham y Stevie Nicks, y el sonido se volvió pop y californiano. En 1977 publicaron Rumours, grabado mientras los McVie se divorciaban y Buckingham y Nicks se separaban: canciones como “Go Your Own Way” y “The Chain” hablan de esas heridas, y el disco se convirtió en uno de los más vendidos de todos los tiempos."
    ],
    "nota": "La lista va en orden cronológico, desde la etapa blusera de Peter Green hasta Tango in the Night.",
    "canciones": [
      {
        "titulo": "Albatross",
        "disco": "Simple (fuera de álbum)",
        "anio": 1968
      },
      {
        "titulo": "Come a Little Bit Closer",
        "disco": "Heroes Are Hard to Find",
        "anio": 1974
      },
      {
        "titulo": "Over My Head",
        "disco": "Fleetwood Mac",
        "anio": 1975
      },
      {
        "titulo": "Go Your Own Way",
        "disco": "Rumours",
        "anio": 1977
      },
      {
        "titulo": "Songbird",
        "disco": "Rumours",
        "anio": 1977
      },
      {
        "titulo": "The Chain",
        "disco": "Rumours",
        "anio": 1977
      },
      {
        "titulo": "You Make Loving Fun",
        "disco": "Rumours",
        "anio": 1977
      },
      {
        "titulo": "Over & Over",
        "disco": "Tusk",
        "anio": 1979
      },
      {
        "titulo": "Gypsy",
        "disco": "Mirage",
        "anio": 1982
      },
      {
        "titulo": "Big Love",
        "disco": "Tango in the Night",
        "anio": 1987
      }
    ]
  },
  {
    "id": "guns-n-roses",
    "nombre": "Guns N’ Roses",
    "pais": "Estados Unidos",
    "ciudad": "Los Ángeles, California",
    "anios": "Desde 1985",
    "genero": "Hard rock, heavy metal",
    "integrantes": [
      "Axl Rose",
      "Slash",
      "Izzy Stradlin",
      "Duff McKagan",
      "Steven Adler",
      "Matt Sorum",
      "Dizzy Reed"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "La última gran banda peligrosa del rock: el chillido de Axl Rose, la galera de Slash y un debut que arrasó con todo.",
    "descripcion": [
      "Guns N’ Roses se formó en Los Ángeles en 1985, cuando Axl Rose y Izzy Stradlin juntaron sus bandas, y pronto se sumaron Slash, Duff McKagan y Steven Adler. Vivían entre los clubes del Sunset Strip y una sala de ensayo destartalada, y esa vida de excesos quedó retratada en su primer disco.",
      "Appetite for Destruction, de 1987, tardó un año en despegar, pero con “Sweet Child O’ Mine”, “Welcome to the Jungle” y “Paradise City” se convirtió en el debut más vendido de la historia en Estados Unidos. En 1991 publicaron el mismo día los dos volúmenes de Use Your Illusion, con baladas épicas como “November Rain” y “Estranged”. Tras años de peleas y cambios de formación, Axl, Slash y Duff volvieron a tocar juntos en 2016."
    ],
    "nota": "La lista va en orden cronológico. “Live and Let Die” es de Paul McCartney, “Knockin’ on Heaven’s Door” de Bob Dylan y “Sympathy for the Devil” de The Rolling Stones.",
    "canciones": [
      {
        "titulo": "Welcome to the Jungle",
        "disco": "Appetite for Destruction",
        "anio": 1987
      },
      {
        "titulo": "It’s So Easy",
        "disco": "Appetite for Destruction",
        "anio": 1987
      },
      {
        "titulo": "Nightrain",
        "disco": "Appetite for Destruction",
        "anio": 1987
      },
      {
        "titulo": "Mr. Brownstone",
        "disco": "Appetite for Destruction",
        "anio": 1987
      },
      {
        "titulo": "Paradise City",
        "disco": "Appetite for Destruction",
        "anio": 1987
      },
      {
        "titulo": "Sweet Child O’ Mine",
        "disco": "Appetite for Destruction",
        "anio": 1987
      },
      {
        "titulo": "Rocket Queen",
        "disco": "Appetite for Destruction",
        "anio": 1987
      },
      {
        "titulo": "Patience",
        "disco": "G N’ R Lies",
        "anio": 1988
      },
      {
        "titulo": "Live and Let Die",
        "disco": "Use Your Illusion I",
        "anio": 1991
      },
      {
        "titulo": "Don’t Cry (Original)",
        "disco": "Use Your Illusion I",
        "anio": 1991
      },
      {
        "titulo": "November Rain",
        "disco": "Use Your Illusion I",
        "anio": 1991
      },
      {
        "titulo": "Civil War",
        "disco": "Use Your Illusion II",
        "anio": 1991
      },
      {
        "titulo": "Yesterdays",
        "disco": "Use Your Illusion II",
        "anio": 1991
      },
      {
        "titulo": "Knockin’ on Heaven’s Door",
        "disco": "Use Your Illusion II",
        "anio": 1991
      },
      {
        "titulo": "Estranged",
        "disco": "Use Your Illusion II",
        "anio": 1991
      },
      {
        "titulo": "You Could Be Mine",
        "disco": "Use Your Illusion II",
        "anio": 1991
      },
      {
        "titulo": "Since I Don’t Have You",
        "disco": "“The Spaghetti Incident?”",
        "anio": 1993
      },
      {
        "titulo": "Hair of the Dog",
        "disco": "“The Spaghetti Incident?”",
        "anio": 1993
      },
      {
        "titulo": "You Can’t Put Your Arms Around a Memory",
        "disco": "“The Spaghetti Incident?”",
        "anio": 1993
      },
      {
        "titulo": "Sympathy for the Devil",
        "disco": "Interview with the Vampire (banda sonora)",
        "anio": 1994
      }
    ]
  },
  {
    "id": "golden-smog",
    "nombre": "Golden Smog",
    "pais": "Estados Unidos",
    "ciudad": "Mineápolis, Minnesota",
    "anios": "Desde 1989",
    "genero": "Alt-country, rock alternativo, americana",
    "integrantes": [
      "Gary Louris",
      "Kraig Johnson",
      "Dan Murphy",
      "Marc Perlman",
      "Jeff Tweedy",
      "Jody Stephens"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "Una superbanda de amigos de Mineápolis que se juntaba por diversión y terminó grabando algunas de las canciones más lindas del alt-country.",
    "descripcion": [
      "Golden Smog nació a fines de los ochenta en Mineápolis como un pasatiempo: músicos de bandas de la escena local, como The Jayhawks y Soul Asylum, que se juntaban a tocar canciones de otros en bares. Por cuestiones de contrato, al principio varios grababan con seudónimos. Con el tiempo se sumaron Jeff Tweedy, de Wilco, y Jody Stephens, el baterista de Big Star.",
      "Lejos de ser un proyecto menor, sus discos reúnen lo mejor de cada compositor: las melodías de Gary Louris, las canciones de Kraig Johnson y Dan Murphy, y algunas joyas de Tweedy. Down by the Old Mainstream y Weird Tales son clásicos del alt-country de los noventa, y siguen reuniéndose cada tanto para grabar y tocar."
    ],
    "nota": "La lista va en orden cronológico. “Strangers” es una canción de The Kinks y “Starman”, de David Bowie, que también está en este libro.",
    "canciones": [
      {
        "titulo": "V",
        "disco": "Down by the Old Mainstream",
        "anio": 1995
      },
      {
        "titulo": "Until You Came Along",
        "disco": "Weird Tales",
        "anio": 1998
      },
      {
        "titulo": "Jennifer Save Me",
        "disco": "Weird Tales",
        "anio": 1998
      },
      {
        "titulo": "You Make It Easy",
        "disco": "Another Fine Day",
        "anio": 2006
      },
      {
        "titulo": "Another Fine Day",
        "disco": "Another Fine Day",
        "anio": 2006
      },
      {
        "titulo": "Strangers",
        "disco": "Another Fine Day",
        "anio": 2006
      },
      {
        "titulo": "Starman",
        "disco": "Blood on the Slacks",
        "anio": 2007
      }
    ]
  },
  {
    "id": "warren-zevon",
    "nombre": "Warren Zevon",
    "pais": "Estados Unidos",
    "ciudad": "Chicago, Illinois · Los Ángeles, California",
    "anios": "1969 – 2003",
    "genero": "Rock, cantautor, rock californiano",
    "integrantes": [
      "Warren Zevon (solista, voz y piano)"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "El cantautor más filoso de California: humor negro, mercenarios, hombres lobo y algunas de las baladas más tristes del rock.",
    "descripcion": [
      "Warren Zevon nació en Chicago, hijo de un inmigrante ruso, estudió piano clásico de chico y terminó en Los Ángeles a fines de los sesenta, escribiendo canciones para otros y tocando con los Everly Brothers. Jackson Browne, amigo y admirador, le produjo el disco que lo presentó en 1976, del que Linda Ronstadt grabó varias canciones.",
      "En 1978 Excitable Boy, con “Werewolves of London” y “Lawyers, Guns and Money”, lo hizo conocido en todo el mundo. Sus letras mezclaban historias de mercenarios, criminales y fantasmas con un humor muy oscuro y momentos de enorme ternura. En 2002 le diagnosticaron un cáncer terminal y dedicó sus últimos meses a grabar The Wind, su despedida, rodeado de amigos. Murió en septiembre de 2003."
    ],
    "nota": "La lista va en orden cronológico. “Knockin’ on Heaven’s Door”, de Bob Dylan, es de su último disco, grabado cuando ya sabía que estaba enfermo.",
    "canciones": [
      {
        "titulo": "Frank and Jesse James",
        "disco": "Warren Zevon",
        "anio": 1976
      },
      {
        "titulo": "Hasten Down the Wind",
        "disco": "Warren Zevon",
        "anio": 1976
      },
      {
        "titulo": "Poor Poor Pitiful Me",
        "disco": "Warren Zevon",
        "anio": 1976
      },
      {
        "titulo": "The French Inhaler",
        "disco": "Warren Zevon",
        "anio": 1976
      },
      {
        "titulo": "Mohammed’s Radio",
        "disco": "Warren Zevon",
        "anio": 1976
      },
      {
        "titulo": "Desperados Under the Eaves",
        "disco": "Warren Zevon",
        "anio": 1976
      },
      {
        "titulo": "Johnny Strikes Up the Band",
        "disco": "Excitable Boy",
        "anio": 1978
      },
      {
        "titulo": "Roland the Headless Thompson Gunner",
        "disco": "Excitable Boy",
        "anio": 1978
      },
      {
        "titulo": "Excitable Boy",
        "disco": "Excitable Boy",
        "anio": 1978
      },
      {
        "titulo": "Werewolves of London",
        "disco": "Excitable Boy",
        "anio": 1978
      },
      {
        "titulo": "Accidentally Like a Martyr",
        "disco": "Excitable Boy",
        "anio": 1978
      },
      {
        "titulo": "Lawyers, Guns and Money",
        "disco": "Excitable Boy",
        "anio": 1978
      },
      {
        "titulo": "A Certain Girl",
        "disco": "Bad Luck Streak in Dancing School",
        "anio": 1980
      },
      {
        "titulo": "Wild Age",
        "disco": "Bad Luck Streak in Dancing School",
        "anio": 1980
      },
      {
        "titulo": "Never Too Late for Love",
        "disco": "The Envoy",
        "anio": 1982
      },
      {
        "titulo": "Splendid Isolation",
        "disco": "Transverse City",
        "anio": 1989
      },
      {
        "titulo": "Suzie Lightning",
        "disco": "Mr. Bad Example",
        "anio": 1991
      },
      {
        "titulo": "Model Citizen",
        "disco": "Mr. Bad Example",
        "anio": 1991
      },
      {
        "titulo": "Fistful of Rain",
        "disco": "Life’ll Kill Ya",
        "anio": 2000
      },
      {
        "titulo": "Knockin’ on Heaven’s Door",
        "disco": "The Wind",
        "anio": 2003
      }
    ]
  },
  {
    "id": "wet-wet-wet",
    "nombre": "Wet Wet Wet",
    "pais": "Reino Unido",
    "ciudad": "Clydebank, Escocia",
    "anios": "Desde 1982",
    "genero": "Pop, soft rock, soul pop",
    "integrantes": [
      "Marti Pellow",
      "Graeme Clark",
      "Tommy Cunningham",
      "Neil Mitchell",
      "Graeme Duffin"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "Cuatro amigos de un pueblo escocés, la voz de Marti Pellow y una canción que pasó quince semanas en el número uno.",
    "descripcion": [
      "Wet Wet Wet se formó en Clydebank, cerca de Glasgow, a comienzos de los ochenta, con amigos del colegio que admiraban el soul estadounidense. Con Marti Pellow como cantante, su primer disco, Popped In Souled Out, de 1987, los convirtió en una de las bandas más populares del Reino Unido gracias a “Sweet Little Mystery” y “Wishing I Was Lucky”.",
      "En 1994 grabaron una versión de “Love Is All Around”, de The Troggs, para la película Cuatro bodas y un funeral. Estuvo quince semanas en el número uno británico, y la banda misma la retiró de las disquerías para que dejara de sonar. Siguieron con éxitos de pop melódico durante los noventa y, después de varias separaciones, siguen tocando."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Sweet Little Mystery",
        "disco": "Popped In Souled Out",
        "anio": 1987
      },
      {
        "titulo": "Love Is All Around",
        "disco": "Simple · película Cuatro bodas y un funeral",
        "anio": 1994
      },
      {
        "titulo": "Somewhere Somehow",
        "disco": "Picture This",
        "anio": 1995
      }
    ]
  },
  {
    "id": "wilco",
    "nombre": "Wilco",
    "pais": "Estados Unidos",
    "ciudad": "Chicago, Illinois",
    "anios": "Desde 1994",
    "genero": "Rock alternativo, alt-country, art rock",
    "integrantes": [
      "Jeff Tweedy",
      "John Stirratt",
      "Glenn Kotche",
      "Nels Cline",
      "Pat Sansone",
      "Mikael Jorgensen",
      "Jay Bennett"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "De la música country alternativa a la experimentación: la banda de Jeff Tweedy nunca hizo dos discos iguales.",
    "descripcion": [
      "Jeff Tweedy formó Wilco en 1994, después de la separación de Uncle Tupelo, una de las bandas fundadoras del alt-country. Los primeros discos siguieron esa línea de rock con raíces country, pero pronto la banda empezó a buscar otros sonidos, con más arreglos, teclados y capas de ruido.",
      "En 1998 grabaron con Billy Bragg Mermaid Avenue, poniéndole música a letras inéditas de Woody Guthrie, de donde sale “California Stars”. En 2002 su discográfica rechazó Yankee Hotel Foxtrot por considerarlo poco comercial; la banda lo publicó gratis en internet, lo editó otro sello y terminó siendo uno de los discos más celebrados de la década. Tweedy también forma parte de Golden Smog, que está en este libro."
    ],
    "nota": "La lista va en orden cronológico. “California Stars” es una letra de Woody Guthrie con música de Wilco, del disco que grabaron junto a Billy Bragg.",
    "canciones": [
      {
        "titulo": "I Must Be High",
        "disco": "A.M.",
        "anio": 1995
      },
      {
        "titulo": "California Stars",
        "disco": "Mermaid Avenue · con Billy Bragg",
        "anio": 1998
      },
      {
        "titulo": "A Shot in the Arm",
        "disco": "Summerteeth",
        "anio": 1999
      },
      {
        "titulo": "Jesus, Etc.",
        "disco": "Yankee Hotel Foxtrot",
        "anio": 2002
      }
    ]
  },
  {
    "id": "green-day",
    "nombre": "Green Day",
    "pais": "Estados Unidos",
    "ciudad": "Berkeley, California",
    "anios": "Desde 1987",
    "genero": "Punk rock, pop punk, rock alternativo",
    "integrantes": [
      "Billie Joe Armstrong",
      "Mike Dirnt",
      "Tré Cool"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "Tres chicos del punk de Berkeley que llenaron estadios y terminaron escribiendo una ópera rock sobre su país.",
    "descripcion": [
      "Billie Joe Armstrong y Mike Dirnt se conocieron de chicos en Rodeo, cerca de Berkeley, y armaron la banda a fines de los ochenta en la escena punk del club 924 Gilman Street. Con Tré Cool en batería, su tercer disco, Dookie, de 1994, con “Basket Case” y “When I Come Around”, llevó el pop punk a millones de oyentes.",
      "Diez años después, cuando muchos los daban por terminados, publicaron American Idiot, una ópera rock que criticaba la política y los medios de Estados Unidos y que se volvió un fenómeno mundial con “Boulevard of Broken Dreams” y “Wake Me Up When September Ends”. Esa canción la escribió Billie Joe sobre la muerte de su padre, cuando él tenía diez años. El disco llegó incluso a Broadway como musical."
    ],
    "nota": "La lista va en orden cronológico, de Dookie a Saviors.",
    "canciones": [
      {
        "titulo": "Basket Case",
        "disco": "Dookie",
        "anio": 1994
      },
      {
        "titulo": "When I Come Around",
        "disco": "Dookie",
        "anio": 1994
      },
      {
        "titulo": "American Idiot",
        "disco": "American Idiot",
        "anio": 2004
      },
      {
        "titulo": "Jesus of Suburbia",
        "disco": "American Idiot",
        "anio": 2004
      },
      {
        "titulo": "Holiday",
        "disco": "American Idiot",
        "anio": 2004
      },
      {
        "titulo": "Boulevard of Broken Dreams",
        "disco": "American Idiot",
        "anio": 2004
      },
      {
        "titulo": "Wake Me Up When September Ends",
        "disco": "American Idiot",
        "anio": 2004
      },
      {
        "titulo": "21 Guns",
        "disco": "21st Century Breakdown",
        "anio": 2009
      },
      {
        "titulo": "Father to a Son",
        "disco": "Saviors",
        "anio": 2024
      }
    ]
  },
  {
    "id": "george-michael",
    "nombre": "George Michael",
    "pais": "Reino Unido",
    "ciudad": "Londres, Inglaterra",
    "anios": "1981 – 2016",
    "genero": "Pop, soul, R&B",
    "integrantes": [
      "George Michael (solista)",
      "Andrew Ridgeley (en Wham!)"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "Una de las grandes voces del pop: del ídolo adolescente de Wham! al compositor que peleó por ser tomado en serio.",
    "descripcion": [
      "Georgios Kyriacos Panayiotou nació en Londres, hijo de un inmigrante grecochipriota. Con su amigo del colegio Andrew Ridgeley formó Wham!, el dúo que dominó el pop británico a comienzos de los ochenta. “Careless Whisper”, que escribió a los diecisiete años, salió como simple a su nombre y anticipó la carrera solista.",
      "Faith, de 1987, lo convirtió en una superestrella mundial. Cansado de su imagen de ídolo, en 1990 publicó Listen Without Prejudice Vol. 1 y se negó a aparecer en los videos: en el de “Freedom! ’90” cantan las supermodelos de la época en su lugar. Murió el día de Navidad de 2016, a los 53 años."
    ],
    "nota": "La lista va en orden cronológico. “Careless Whisper” salió en el disco Make It Big de Wham!, pero como simple de George Michael solo. “Feeling Good” es de Symphonica, su disco en vivo con orquesta.",
    "canciones": [
      {
        "titulo": "Careless Whisper",
        "disco": "Make It Big · Wham!",
        "anio": 1984
      },
      {
        "titulo": "Faith",
        "disco": "Faith",
        "anio": 1987
      },
      {
        "titulo": "Praying for Time",
        "disco": "Listen Without Prejudice Vol. 1",
        "anio": 1990
      },
      {
        "titulo": "Freedom! ’90",
        "disco": "Listen Without Prejudice Vol. 1",
        "anio": 1990
      },
      {
        "titulo": "Feeling Good",
        "disco": "Symphonica",
        "anio": 2014
      }
    ]
  },
  {
    "id": "george-harrison",
    "nombre": "George Harrison",
    "pais": "Reino Unido",
    "ciudad": "Liverpool, Inglaterra",
    "anios": "1958 – 2001",
    "genero": "Rock, folk rock, música espiritual",
    "integrantes": [
      "George Harrison (solista)"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "“El Beatle silencioso”: guitarrista, compositor que tardó en ser escuchado y buscador espiritual que llevó la India al rock.",
    "descripcion": [
      "George Harrison fue el guitarrista más joven de The Beatles. Dentro de la banda le costó hacerse lugar como compositor al lado de Lennon y McCartney, pero firmó canciones como “Something” y “Here Comes the Sun”. Su interés por la India y el sitar de Ravi Shankar cambió el sonido de la banda y de toda una generación.",
      "Cuando el grupo se separó, tenía guardadas decenas de canciones: las publicó en All Things Must Pass, un disco triple de 1970 con “My Sweet Lord”. Organizó el Concierto para Bangladesh, produjo películas, formó los Traveling Wilburys con Bob Dylan, Tom Petty, Roy Orbison y Jeff Lynne, y volvió a los primeros puestos con Cloud Nine en 1987. Murió en 2001; su último disco, Brainwashed, lo terminaron su hijo Dhani y Jeff Lynne."
    ],
    "nota": "La lista va en orden cronológico, de Wonderwall Music a Brainwashed. “All Those Years Ago” es su homenaje a John Lennon, grabado poco después de su asesinato.",
    "canciones": [
      {
        "titulo": "Ski-ing",
        "disco": "Wonderwall Music",
        "anio": 1968
      },
      {
        "titulo": "My Sweet Lord",
        "disco": "All Things Must Pass",
        "anio": 1970
      },
      {
        "titulo": "If Not for You",
        "disco": "All Things Must Pass",
        "anio": 1970
      },
      {
        "titulo": "Run of the Mill",
        "disco": "All Things Must Pass",
        "anio": 1970
      },
      {
        "titulo": "Beware of Darkness",
        "disco": "All Things Must Pass",
        "anio": 1970
      },
      {
        "titulo": "All Things Must Pass",
        "disco": "All Things Must Pass",
        "anio": 1970
      },
      {
        "titulo": "Hear Me Lord",
        "disco": "All Things Must Pass",
        "anio": 1970
      },
      {
        "titulo": "Give Me Love (Give Me Peace on Earth)",
        "disco": "Living in the Material World",
        "anio": 1973
      },
      {
        "titulo": "The Light That Has Lighted the World",
        "disco": "Living in the Material World",
        "anio": 1973
      },
      {
        "titulo": "Don’t Let Me Wait Too Long",
        "disco": "Living in the Material World",
        "anio": 1973
      },
      {
        "titulo": "Who Can See It",
        "disco": "Living in the Material World",
        "anio": 1973
      },
      {
        "titulo": "The Lord Loves the One (That Loves the Lord)",
        "disco": "Living in the Material World",
        "anio": 1973
      },
      {
        "titulo": "That Is All",
        "disco": "Living in the Material World",
        "anio": 1973
      },
      {
        "titulo": "Māya Love",
        "disco": "Dark Horse",
        "anio": 1974
      },
      {
        "titulo": "You",
        "disco": "Extra Texture (Read All About It)",
        "anio": 1975
      },
      {
        "titulo": "The Answer’s at the End",
        "disco": "Extra Texture (Read All About It)",
        "anio": 1975
      },
      {
        "titulo": "This Guitar (Can’t Keep from Crying)",
        "disco": "Extra Texture (Read All About It)",
        "anio": 1975
      },
      {
        "titulo": "World of Stone",
        "disco": "Extra Texture (Read All About It)",
        "anio": 1975
      },
      {
        "titulo": "Can’t Stop Thinking About You",
        "disco": "Extra Texture (Read All About It)",
        "anio": 1975
      },
      {
        "titulo": "Beautiful Girl",
        "disco": "Thirty Three & 1/3",
        "anio": 1976
      },
      {
        "titulo": "See Yourself",
        "disco": "Thirty Three & 1/3",
        "anio": 1976
      },
      {
        "titulo": "True Love",
        "disco": "Thirty Three & 1/3",
        "anio": 1976
      },
      {
        "titulo": "Love Comes to Everyone",
        "disco": "George Harrison",
        "anio": 1979
      },
      {
        "titulo": "Here Comes the Moon",
        "disco": "George Harrison",
        "anio": 1979
      },
      {
        "titulo": "Blow Away",
        "disco": "George Harrison",
        "anio": 1979
      },
      {
        "titulo": "Faster",
        "disco": "George Harrison",
        "anio": 1979
      },
      {
        "titulo": "Dark Sweet Lady",
        "disco": "George Harrison",
        "anio": 1979
      },
      {
        "titulo": "If You Believe",
        "disco": "George Harrison",
        "anio": 1979
      },
      {
        "titulo": "Unconsciousness Rules",
        "disco": "Somewhere in England",
        "anio": 1981
      },
      {
        "titulo": "Life Itself",
        "disco": "Somewhere in England",
        "anio": 1981
      },
      {
        "titulo": "All Those Years Ago",
        "disco": "Somewhere in England",
        "anio": 1981
      },
      {
        "titulo": "Baltimore Oriole",
        "disco": "Somewhere in England",
        "anio": 1981
      },
      {
        "titulo": "Hong Kong Blues",
        "disco": "Somewhere in England",
        "anio": 1981
      },
      {
        "titulo": "That’s the Way It Goes",
        "disco": "Gone Troppo",
        "anio": 1982
      },
      {
        "titulo": "Mystical One",
        "disco": "Gone Troppo",
        "anio": 1982
      },
      {
        "titulo": "Shanghai Surprise",
        "disco": "Shanghai Surprise (película)",
        "anio": 1986
      },
      {
        "titulo": "Cloud Nine",
        "disco": "Cloud Nine",
        "anio": 1987
      },
      {
        "titulo": "That’s What It Takes",
        "disco": "Cloud Nine",
        "anio": 1987
      },
      {
        "titulo": "Fish on the Sand",
        "disco": "Cloud Nine",
        "anio": 1987
      },
      {
        "titulo": "Just for Today",
        "disco": "Cloud Nine",
        "anio": 1987
      },
      {
        "titulo": "This Is Love",
        "disco": "Cloud Nine",
        "anio": 1987
      },
      {
        "titulo": "Devil’s Radio",
        "disco": "Cloud Nine",
        "anio": 1987
      },
      {
        "titulo": "Someplace Else",
        "disco": "Cloud Nine",
        "anio": 1987
      },
      {
        "titulo": "Wreck of the Hesperus",
        "disco": "Cloud Nine",
        "anio": 1987
      },
      {
        "titulo": "Got My Mind Set on You",
        "disco": "Cloud Nine",
        "anio": 1987
      },
      {
        "titulo": "Flying Hour",
        "disco": "Songs by George Harrison (EP)",
        "anio": 1988
      },
      {
        "titulo": "Cheer Down",
        "disco": "Lethal Weapon 2 (banda sonora)",
        "anio": 1989
      },
      {
        "titulo": "Any Road",
        "disco": "Brainwashed",
        "anio": 2002
      },
      {
        "titulo": "Pisces Fish",
        "disco": "Brainwashed",
        "anio": 2002
      },
      {
        "titulo": "Looking for My Life",
        "disco": "Brainwashed",
        "anio": 2002
      },
      {
        "titulo": "Rising Sun",
        "disco": "Brainwashed",
        "anio": 2002
      },
      {
        "titulo": "Marwa Blues",
        "disco": "Brainwashed",
        "anio": 2002
      },
      {
        "titulo": "Stuck Inside a Cloud",
        "disco": "Brainwashed",
        "anio": 2002
      },
      {
        "titulo": "Run So Far",
        "disco": "Brainwashed",
        "anio": 2002
      },
      {
        "titulo": "Never Get Over You",
        "disco": "Brainwashed",
        "anio": 2002
      },
      {
        "titulo": "Brainwashed",
        "disco": "Brainwashed",
        "anio": 2002
      }
    ]
  },
  {
    "id": "inxs",
    "nombre": "INXS",
    "pais": "Australia",
    "ciudad": "Sídney",
    "anios": "1977 – 2012",
    "genero": "Rock, new wave, funk rock",
    "integrantes": [
      "Michael Hutchence",
      "Andrew Farriss",
      "Tim Farriss",
      "Jon Farriss",
      "Kirk Pengilly",
      "Garry Gary Beers"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "Tres hermanos Farriss, un grupo de amigos de Sídney y Michael Hutchence, uno de los frontman más magnéticos del rock.",
    "descripcion": [
      "INXS se formó en Sídney a fines de los setenta con los tres hermanos Farriss, sus amigos del colegio y el cantante Michael Hutchence. Durante los primeros años recorrieron Australia tocando sin parar en bares y pubs, y fueron puliendo una mezcla de rock, new wave y funk muy bailable.",
      "En 1987 publicaron Kick, con “Need You Tonight”, “New Sensation” y “Never Tear Us Apart”, y se convirtieron en una de las bandas más grandes del mundo. Siguieron con X y Welcome to Wherever You Are, siempre con canciones compuestas por Andrew Farriss y Hutchence. La muerte de Hutchence en 1997 marcó el final de la etapa clásica, aunque la banda siguió hasta 2012."
    ],
    "nota": "La lista va en orden cronológico, de Shabooh Shoobah a Elegantly Wasted.",
    "canciones": [
      {
        "titulo": "Don’t Change",
        "disco": "Shabooh Shoobah",
        "anio": 1982
      },
      {
        "titulo": "Original Sin",
        "disco": "The Swing",
        "anio": 1984
      },
      {
        "titulo": "What You Need",
        "disco": "Listen Like Thieves",
        "anio": 1985
      },
      {
        "titulo": "Listen Like Thieves",
        "disco": "Listen Like Thieves",
        "anio": 1985
      },
      {
        "titulo": "New Sensation",
        "disco": "Kick",
        "anio": 1987
      },
      {
        "titulo": "Devil Inside",
        "disco": "Kick",
        "anio": 1987
      },
      {
        "titulo": "Need You Tonight",
        "disco": "Kick",
        "anio": 1987
      },
      {
        "titulo": "Never Tear Us Apart",
        "disco": "Kick",
        "anio": 1987
      },
      {
        "titulo": "Mystify",
        "disco": "Kick",
        "anio": 1987
      },
      {
        "titulo": "Kick",
        "disco": "Kick",
        "anio": 1987
      },
      {
        "titulo": "Suicide Blonde",
        "disco": "X",
        "anio": 1990
      },
      {
        "titulo": "Disappear",
        "disco": "X",
        "anio": 1990
      },
      {
        "titulo": "By My Side",
        "disco": "X",
        "anio": 1990
      },
      {
        "titulo": "Bitter Tears",
        "disco": "X",
        "anio": 1990
      },
      {
        "titulo": "Baby Don’t Cry",
        "disco": "Welcome to Wherever You Are",
        "anio": 1992
      },
      {
        "titulo": "Beautiful Girl",
        "disco": "Welcome to Wherever You Are",
        "anio": 1992
      },
      {
        "titulo": "Elegantly Wasted",
        "disco": "Elegantly Wasted",
        "anio": 1997
      }
    ]
  },
  {
    "id": "imagine-dragons",
    "nombre": "Imagine Dragons",
    "pais": "Estados Unidos",
    "ciudad": "Las Vegas, Nevada",
    "anios": "Desde 2008",
    "genero": "Pop rock, rock alternativo",
    "integrantes": [
      "Dan Reynolds",
      "Wayne Sermon",
      "Ben McKee",
      "Daniel Platzman"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "Tambores gigantes, estribillos para gritar en un estadio y letras sobre luchar contra los propios demonios.",
    "descripcion": [
      "Dan Reynolds formó Imagine Dragons en Las Vegas a fines de los dos mil y, junto a Wayne Sermon, Ben McKee y Daniel Platzman, se hizo un lugar tocando en los casinos y bares de la ciudad. En 2012 su primer disco, Night Visions, con “It’s Time”, “Radioactive” y “Demons”, los lanzó a la fama mundial.",
      "Su sonido mezcla rock alternativo, pop y percusiones enormes, pensadas para estadios. Con Evolve, de 2017, llegaron “Believer” y “Thunder”, dos de las canciones más escuchadas de la década. Muchas de sus letras hablan de la depresión y la ansiedad, temas sobre los que Reynolds habla abiertamente."
    ],
    "nota": "La lista va en orden cronológico. “Not Today” es de la banda sonora de la película Me Before You.",
    "canciones": [
      {
        "titulo": "It’s Time",
        "disco": "Night Visions",
        "anio": 2012
      },
      {
        "titulo": "Demons",
        "disco": "Night Visions",
        "anio": 2012
      },
      {
        "titulo": "I Bet My Life",
        "disco": "Smoke + Mirrors",
        "anio": 2015
      },
      {
        "titulo": "Not Today",
        "disco": "Me Before You (banda sonora)",
        "anio": 2016
      },
      {
        "titulo": "Believer",
        "disco": "Evolve",
        "anio": 2017
      },
      {
        "titulo": "Thunder",
        "disco": "Evolve",
        "anio": 2017
      },
      {
        "titulo": "Next to Me",
        "disco": "Origins",
        "anio": 2018
      },
      {
        "titulo": "Bad Liar",
        "disco": "Origins",
        "anio": 2018
      },
      {
        "titulo": "Follow You",
        "disco": "Mercury – Act 1",
        "anio": 2021
      }
    ]
  },
  {
    "id": "iggy-pop",
    "nombre": "Iggy Pop",
    "pais": "Estados Unidos",
    "ciudad": "Muskegon, Míchigan",
    "anios": "Desde 1967",
    "genero": "Rock, punk, art rock",
    "integrantes": [
      "Iggy Pop (solista)",
      "David Bowie (productor en Berlín)"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "El padrino del punk: el cuerpo como instrumento, la voz grave y una amistad con Bowie que le cambió la vida.",
    "descripcion": [
      "James Osterberg creció en un parque de casas rodantes de Míchigan y a fines de los sesenta, al frente de The Stooges, inventó una manera salvaje de estar arriba del escenario: se tiraba al público, se lastimaba, cantaba sin camisa. Aquellos discos fueron la semilla del punk.",
      "En 1977, rescatado de sus adicciones por su amigo David Bowie, se instaló con él en Berlín y grabó The Idiot y Lust for Life, de donde salen “Lust for Life” y “The Passenger”. En 1990 tuvo su mayor éxito en la radio con “Candy”, un dueto con Kate Pierson, de The B-52’s."
    ],
    "nota": "La lista va en orden cronológico. “Lust for Life” y “The Passenger” las compuso y grabó con David Bowie, que también está en este libro.",
    "canciones": [
      {
        "titulo": "Lust for Life",
        "disco": "Lust for Life",
        "anio": 1977
      },
      {
        "titulo": "The Passenger",
        "disco": "Lust for Life",
        "anio": 1977
      },
      {
        "titulo": "Candy",
        "disco": "Brick by Brick · con Kate Pierson",
        "anio": 1990
      }
    ]
  },
  {
    "id": "jackie-wilson",
    "nombre": "Jackie Wilson",
    "pais": "Estados Unidos",
    "ciudad": "Detroit, Míchigan",
    "anios": "1953 – 1975",
    "genero": "Soul, R&B, rock and roll",
    "integrantes": [
      "Jackie Wilson (solista)"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "“Mr. Excitement”: una voz de cuatro octavas y unos movimientos en el escenario que hasta Elvis admiraba.",
    "descripcion": [
      "Jackie Wilson creció en Detroit, fue boxeador amateur de adolescente y empezó a cantar en grupos de gospel. A comienzos de los cincuenta reemplazó a Clyde McPhatter en The Dominoes y en 1957 inició su carrera solista con canciones escritas por un joven Berry Gordy, que con ese dinero fundaría Motown.",
      "“Lonely Teardrops”, “To Be Loved” y “That’s Why (I Love You So)” lo convirtieron en una de las grandes figuras del R&B, con una voz capaz de pasar de lo grave a lo agudo en un instante y unos movimientos que le valieron el apodo de “Mr. Excitement”. En 1967 grabó “(Your Love Keeps Lifting Me) Higher & Higher”, su clásico definitivo. En 1975 sufrió un infarto en pleno escenario y nunca se recuperó; murió en 1984."
    ],
    "nota": "La lista va en orden cronológico. Casi todos sus éxitos salieron primero como simples.",
    "canciones": [
      {
        "titulo": "To Be Loved",
        "disco": "Simple",
        "anio": 1958
      },
      {
        "titulo": "Lonely Teardrops",
        "disco": "Simple",
        "anio": 1958
      },
      {
        "titulo": "That’s Why (I Love You So)",
        "disco": "Simple",
        "anio": 1959
      },
      {
        "titulo": "I’ll Be Satisfied",
        "disco": "Simple",
        "anio": 1959
      },
      {
        "titulo": "Doggin’ Around",
        "disco": "Simple",
        "anio": 1960
      },
      {
        "titulo": "No Pity (In the Naked City)",
        "disco": "Simple",
        "anio": 1965
      },
      {
        "titulo": "(Your Love Keeps Lifting Me) Higher & Higher",
        "disco": "Higher and Higher",
        "anio": 1967
      },
      {
        "titulo": "I Don’t Need You Around",
        "disco": "Higher and Higher",
        "anio": 1967
      },
      {
        "titulo": "I Get the Sweetest Feeling",
        "disco": "I Get the Sweetest Feeling",
        "anio": 1968
      }
    ]
  },
  {
    "id": "jack-johnson",
    "nombre": "Jack Johnson",
    "pais": "Estados Unidos",
    "ciudad": "North Shore, Oʻahu, Hawái",
    "anios": "Desde 1999",
    "genero": "Folk, soft rock, surf rock acústico",
    "integrantes": [
      "Jack Johnson (solista)",
      "Adam Topol",
      "Merlo Podlewski",
      "Zach Gill"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "Un surfista de Hawái con una guitarra acústica y canciones tranquilas que suenan a domingo frente al mar.",
    "descripcion": [
      "Jack Johnson creció en la costa norte de Oʻahu, en Hawái, y a los diecisiete años ya era surfista profesional, hasta que un accidente grave lo alejó de la competencia. Estudió cine en California, filmó películas de surf y empezó a componer canciones para sus bandas sonoras.",
      "Su primer disco, Brushfire Fairytales, de 2001, lo dio a conocer con un sonido acústico, relajado y de letras simples. Con In Between Dreams y Sleep Through the Static se volvió uno de los cantautores más escuchados de los dos mil. Es conocido también por su compromiso ambiental: graba en estudios con energía solar y dona las ganancias de sus giras."
    ],
    "nota": "La lista va en orden cronológico. “Fragments” es de la película The Smog of the Sea, sobre el plástico en los océanos, y “Hold On to the Light”, con Hermanos Gutiérrez, de la banda sonora del documental SURFILMUSIC.",
    "canciones": [
      {
        "titulo": "Good People",
        "disco": "In Between Dreams",
        "anio": 2005
      },
      {
        "titulo": "Sitting, Waiting, Wishing",
        "disco": "In Between Dreams",
        "anio": 2005
      },
      {
        "titulo": "All at Once",
        "disco": "Sleep Through the Static",
        "anio": 2008
      },
      {
        "titulo": "Sleep Through the Static",
        "disco": "Sleep Through the Static",
        "anio": 2008
      },
      {
        "titulo": "If I Had Eyes",
        "disco": "Sleep Through the Static",
        "anio": 2008
      },
      {
        "titulo": "Sunsets for Somebody Else",
        "disco": "All the Light Above It Too",
        "anio": 2017
      },
      {
        "titulo": "My Mind Is for Sale",
        "disco": "All the Light Above It Too",
        "anio": 2017
      },
      {
        "titulo": "Fragments",
        "disco": "All the Light Above It Too",
        "anio": 2017
      },
      {
        "titulo": "Don’t Look Now",
        "disco": "Meet the Moonlight",
        "anio": 2022
      },
      {
        "titulo": "Hold On to the Light",
        "disco": "SURFILMUSIC (banda sonora) · con Hermanos Gutiérrez",
        "anio": 2025
      }
    ]
  },
  {
    "id": "jackson-browne",
    "nombre": "Jackson Browne",
    "pais": "Estados Unidos",
    "ciudad": "Los Ángeles, California",
    "anios": "Desde 1966",
    "genero": "Rock californiano, folk rock, cantautor",
    "integrantes": [
      "Jackson Browne (solista)",
      "David Lindley (guitarra y violín)"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "El poeta del rock californiano: canciones sobre el amor, la pérdida y cómo seguir viviendo en un mundo que no siempre tiene sentido.",
    "descripcion": [
      "Jackson Browne nació en Heidelberg, Alemania, donde su padre estaba destinado, y creció en Los Ángeles. Siendo adolescente ya escribía canciones que grababan otros, como “These Days”, que cantó Nico. Fue amigo y compañero de ruta de los Eagles: con Glenn Frey compuso “Take It Easy”, el primer éxito de la banda.",
      "Sus discos de los setenta, como Late for the Sky y The Pretender, son de los más admirados del rock de cantautor, con letras introspectivas y melodías serenas. En 1977 Running on Empty, grabado en vivo durante una gira, lo llevó a lo más alto. También fue un activista comprometido con causas ambientales y antinucleares."
    ],
    "nota": "La lista va en orden cronológico. “Take It Easy” la compuso con Glenn Frey y también está en la página de The Eagles. La versión de “In the Shape of a Heart” es en vivo, de 1996; acá figura en su disco original.",
    "canciones": [
      {
        "titulo": "Jamaica Say You Will",
        "disco": "Jackson Browne",
        "anio": 1972
      },
      {
        "titulo": "Rock Me on the Water",
        "disco": "Jackson Browne",
        "anio": 1972
      },
      {
        "titulo": "Take It Easy",
        "disco": "For Everyman",
        "anio": 1973
      },
      {
        "titulo": "These Days",
        "disco": "For Everyman",
        "anio": 1973
      },
      {
        "titulo": "Late for the Sky",
        "disco": "Late for the Sky",
        "anio": 1974
      },
      {
        "titulo": "Fountain of Sorrow",
        "disco": "Late for the Sky",
        "anio": 1974
      },
      {
        "titulo": "For a Dancer",
        "disco": "Late for the Sky",
        "anio": 1974
      },
      {
        "titulo": "The Pretender",
        "disco": "The Pretender",
        "anio": 1976
      },
      {
        "titulo": "Stay",
        "disco": "Running on Empty",
        "anio": 1977
      },
      {
        "titulo": "In the Shape of a Heart",
        "disco": "Lives in the Balance",
        "anio": 1986
      }
    ]
  },
  {
    "id": "joan-baez",
    "nombre": "Joan Baez",
    "pais": "Estados Unidos",
    "ciudad": "Staten Island, Nueva York",
    "anios": "Desde 1958",
    "genero": "Folk, canción de protesta",
    "integrantes": [
      "Joan Baez (solista)"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "La voz cristalina del folk y de la canción de protesta, que le abrió el escenario a un joven Bob Dylan.",
    "descripcion": [
      "Joan Baez nació en Staten Island, Nueva York, hija de un físico mexicano y de una madre escocesa, y empezó a cantar en los cafés de Boston a fines de los cincuenta. En 1959 su presentación en el Festival de Folk de Newport la convirtió en una estrella, y a comienzos de los sesenta era la gran figura del renacimiento del folk.",
      "Su voz de soprano, clara y potente, se volvió inseparable de los movimientos por los derechos civiles y contra la guerra de Vietnam. Fue una de las primeras en cantar las canciones de Bob Dylan ante grandes públicos y lo invitó a sus propios conciertos; durante un tiempo fueron pareja. En 1975, una llamada inesperada de él la llevó a escribir “Diamonds & Rust”, su canción más personal."
    ],
    "nota": "La historia de cómo nació “Diamonds & Rust” está en la sección Historias.",
    "canciones": [
      {
        "titulo": "Diamonds & Rust",
        "disco": "Diamonds & Rust",
        "anio": 1975
      }
    ]
  },
  {
    "id": "joe-walsh",
    "nombre": "Joe Walsh",
    "pais": "Estados Unidos",
    "ciudad": "Wichita, Kansas · Cleveland, Ohio",
    "anios": "Desde 1965",
    "genero": "Rock, hard rock, rock clásico",
    "integrantes": [
      "Joe Walsh (solista, guitarra y voz)"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "Un guitarrista con humor, slide filoso y riffs enormes, que pasó de la James Gang a ser uno de los Eagles.",
    "descripcion": [
      "Joe Walsh nació en Wichita, Kansas, y se hizo guitarrista en Ohio. A fines de los sesenta se hizo conocido en la James Gang, un trío de hard rock de Cleveland, y después siguió como solista. En 1973 “Rocky Mountain Way”, con su slide y su talk box, se volvió un clásico de la radio.",
      "En 1975 se sumó a los Eagles en reemplazo de Bernie Leadon y les dio un costado más rockero: su guitarra está en “Hotel California” y “Life in the Fast Lane”. En paralelo siguió con su carrera solista, siempre con humor, como en “Life’s Been Good”, una parodia de la vida de las estrellas de rock."
    ],
    "nota": "La lista va en orden cronológico. Joe Walsh también forma parte de la página de The Eagles.",
    "canciones": [
      {
        "titulo": "Turn to Stone",
        "disco": "Barnstorm",
        "anio": 1972
      },
      {
        "titulo": "Rocky Mountain Way",
        "disco": "The Smoker You Drink, the Player You Get",
        "anio": 1973
      },
      {
        "titulo": "Life’s Been Good",
        "disco": "But Seriously, Folks...",
        "anio": 1978
      },
      {
        "titulo": "A Life of Illusion",
        "disco": "There Goes the Neighborhood",
        "anio": 1981
      }
    ]
  },
  {
    "id": "the-jesus-and-mary-chain",
    "nombre": "The Jesus and Mary Chain",
    "pais": "Reino Unido",
    "ciudad": "East Kilbride, Escocia",
    "anios": "1983 – 1999 · desde 2007",
    "genero": "Rock alternativo, noise pop, post-punk",
    "integrantes": [
      "Jim Reid",
      "William Reid",
      "Douglas Hart",
      "Bobby Gillespie"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "Melodías de los sesenta enterradas bajo una pared de ruido: los hermanos Reid inventaron un sonido que todavía se imita.",
    "descripcion": [
      "Los hermanos Jim y William Reid formaron The Jesus and Mary Chain a comienzos de los ochenta en East Kilbride, un pueblo cerca de Glasgow. Mezclaban la dulzura de los grupos vocales de los sesenta y de The Velvet Underground con guitarras saturadas de ruido. Sus primeros shows duraban veinte minutos y solían terminar en desmanes.",
      "Su primer disco, Psychocandy, de 1985, con “Just Like Honey”, se volvió un clásico del rock alternativo e influyó en todo el shoegaze. En Darklands, de 1987, bajaron el ruido y dejaron más espacio a las melodías. Las peleas entre los hermanos los separaron a fines de los noventa, pero volvieron a reunirse en 2007."
    ],
    "nota": "La lista va en orden cronológico. “Sometimes Always” es un dueto con Hope Sandoval, de Mazzy Star.",
    "canciones": [
      {
        "titulo": "Just Like Honey",
        "disco": "Psychocandy",
        "anio": 1985
      },
      {
        "titulo": "Darklands",
        "disco": "Darklands",
        "anio": 1987
      },
      {
        "titulo": "Deep One Perfect Morning",
        "disco": "Darklands",
        "anio": 1987
      },
      {
        "titulo": "Happy When It Rains",
        "disco": "Darklands",
        "anio": 1987
      },
      {
        "titulo": "April Skies",
        "disco": "Darklands",
        "anio": 1987
      },
      {
        "titulo": "Almost Gold",
        "disco": "Honey’s Dead",
        "anio": 1992
      },
      {
        "titulo": "Sometimes Always",
        "disco": "Stoned & Dethroned",
        "anio": 1994
      }
    ]
  },
  {
    "id": "kid-rock",
    "nombre": "Kid Rock",
    "pais": "Estados Unidos",
    "ciudad": "Romeo, Míchigan · Detroit",
    "anios": "Desde 1988",
    "genero": "Rock sureño, country rock, rap rock",
    "integrantes": [
      "Kid Rock (Robert James Ritchie)",
      "Twisted Brown Trucker Band"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "Del rap rock de Detroit al rock sureño y el country: un mismo tipo con sombrero que mezcla todo lo que escuchó de chico.",
    "descripcion": [
      "Robert James Ritchie creció en Romeo, un pueblo rural cerca de Detroit, y a fines de los ochenta empezó como DJ y rapero en la escena de la ciudad. Su gran salto llegó con Devil Without a Cause, de 1998, que mezclaba hip hop, hard rock y guitarras sureñas, con canciones como “Cowboy” y la balada “Only God Knows Why”.",
      "Con los años fue dejando el rap y se acercó cada vez más al rock sureño y al country, con su banda Twisted Brown Trucker. En 2001 grabó “Picture”, un dueto con Sheryl Crow que se volvió uno de los grandes éxitos de su carrera, y siguió alternando baladas y rock de bar en discos como Rock n Roll Jesus y Born Free."
    ],
    "nota": "La lista va en orden cronológico. “Picture” es un dueto con Sheryl Crow, “Feel Like Makin’ Love” es una versión de Bad Company y “’Til You Can’t” una versión de Cody Johnson.",
    "canciones": [
      {
        "titulo": "Cowboy",
        "disco": "Devil Without a Cause",
        "anio": 1998
      },
      {
        "titulo": "Only God Knows Why",
        "disco": "Devil Without a Cause",
        "anio": 1998
      },
      {
        "titulo": "Cocky",
        "disco": "Cocky",
        "anio": 2001
      },
      {
        "titulo": "Lonely Road of Faith",
        "disco": "Cocky",
        "anio": 2001
      },
      {
        "titulo": "Picture",
        "disco": "Cocky",
        "anio": 2001
      },
      {
        "titulo": "Midnight Train to Memphis",
        "disco": "Cocky",
        "anio": 2001
      },
      {
        "titulo": "Feel Like Makin’ Love",
        "disco": "Kid Rock",
        "anio": 2003
      },
      {
        "titulo": "Blue Jeans and a Rosary",
        "disco": "Rock n Roll Jesus",
        "anio": 2007
      },
      {
        "titulo": "Born Free",
        "disco": "Born Free",
        "anio": 2010
      },
      {
        "titulo": "When It Rains",
        "disco": "Born Free",
        "anio": 2010
      },
      {
        "titulo": "See You Again",
        "disco": "Bad Reputation",
        "anio": 2022
      },
      {
        "titulo": "’Til You Can’t",
        "disco": "Simple",
        "anio": 2026
      }
    ]
  },
  {
    "id": "kiss",
    "nombre": "KISS",
    "pais": "Estados Unidos",
    "ciudad": "Nueva York",
    "anios": "1973 – 2023",
    "genero": "Hard rock, glam rock, heavy metal",
    "integrantes": [
      "Paul Stanley",
      "Gene Simmons",
      "Ace Frehley",
      "Peter Criss",
      "Eric Carr",
      "Bruce Kulick",
      "Tommy Thayer",
      "Eric Singer"
    ],
    "hero": "",
    "heroPos": "center 30%",
    "bajada": "Maquillaje, fuego, sangre falsa y botas de plataforma: la banda que convirtió cada concierto en un espectáculo de historieta.",
    "descripcion": [
      "Paul Stanley y Gene Simmons formaron KISS en Nueva York en 1973, junto al guitarrista Ace Frehley y el baterista Peter Criss. Cada uno se pintó la cara como un personaje: el Chico Estrella, el Demonio, el Hombre del Espacio y el Gato. Sus shows, con fuego, explosiones y Simmons escupiendo sangre, los hicieron famosos antes que sus discos.",
      "El disco en vivo Alive!, de 1975, con “Rock and Roll All Nite”, los llevó a la cima, y en 1979 “I Was Made for Lovin’ You” los acercó a la música disco. En 1983 se sacaron el maquillaje por primera vez para Lick It Up. Con muchos cambios de formación, siguieron tocando hasta su último concierto, en diciembre de 2023 en Nueva York."
    ],
    "nota": "La lista va en orden cronológico. “Beth” la canta el baterista Peter Criss. “See You Tonight” es la versión del MTV Unplugged de 1996.",
    "canciones": [
      {
        "titulo": "Strutter",
        "disco": "Kiss",
        "anio": 1974
      },
      {
        "titulo": "Rock and Roll All Nite",
        "disco": "Dressed to Kill",
        "anio": 1975
      },
      {
        "titulo": "Beth",
        "disco": "Destroyer",
        "anio": 1976
      },
      {
        "titulo": "Hard Luck Woman",
        "disco": "Rock and Roll Over",
        "anio": 1976
      },
      {
        "titulo": "I Was Made for Lovin’ You",
        "disco": "Dynasty",
        "anio": 1979
      },
      {
        "titulo": "2,000 Man",
        "disco": "Dynasty",
        "anio": 1979
      },
      {
        "titulo": "Sure Know Something",
        "disco": "Dynasty",
        "anio": 1979
      },
      {
        "titulo": "Shandi",
        "disco": "Unmasked",
        "anio": 1980
      },
      {
        "titulo": "Lick It Up",
        "disco": "Lick It Up",
        "anio": 1983
      },
      {
        "titulo": "Heaven’s on Fire",
        "disco": "Animalize",
        "anio": 1984
      },
      {
        "titulo": "Crazy Crazy Nights",
        "disco": "Crazy Nights",
        "anio": 1987
      },
      {
        "titulo": "Forever",
        "disco": "Hot in the Shade",
        "anio": 1989
      },
      {
        "titulo": "God Gave Rock ’n’ Roll to You II",
        "disco": "Revenge",
        "anio": 1992
      },
      {
        "titulo": "Every Time I Look at You",
        "disco": "Revenge",
        "anio": 1992
      },
      {
        "titulo": "See You Tonight",
        "disco": "MTV Unplugged",
        "anio": 1996
      },
      {
        "titulo": "I Finally Found My Way",
        "disco": "Psycho Circus",
        "anio": 1998
      }
    ]
  }
];
