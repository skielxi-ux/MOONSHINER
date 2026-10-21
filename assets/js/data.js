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
    "heroPos": "center 30%",
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
    "hero": "img/fleetwood-mac.jpg",
    "heroPos": "center 25%",
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
    "hero": "img/guns-n-roses.jpg",
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
    "hero": "img/golden-smog.jpg",
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
    "hero": "img/warren-zevon.jpg",
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
    "hero": "img/wet-wet-wet.jpg",
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
    "hero": "img/wilco.jpg",
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
    "hero": "img/green-day.jpg",
    "heroPos": "center 35%",
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
    "hero": "img/george-michael.jpg",
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
    "hero": "img/george-harrison.jpg",
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
    "hero": "img/inxs.jpg",
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
    "hero": "img/imagine-dragons.jpg",
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
    "hero": "img/iggy-pop.jpg",
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
    "hero": "img/jackie-wilson.jpg",
    "heroPos": "center 22%",
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
    "hero": "img/jack-johnson.jpg",
    "heroPos": "center 40%",
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
    "hero": "img/jackson-browne.jpg",
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
    "hero": "img/joan-baez.jpg",
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
    "hero": "img/joe-walsh.jpg",
    "heroPos": "center 25%",
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
    "hero": "img/the-jesus-and-mary-chain.jpg",
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
    "hero": "img/kid-rock.jpg",
    "heroPos": "center 18%",
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
    "hero": "img/kiss.jpg",
    "heroPos": "center 20%",
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
  },
  {
    "id": "van-morrison",
    "nombre": "Van Morrison",
    "pais": "Reino Unido",
    "ciudad": "Belfast, Irlanda del Norte",
    "anios": "1964 – presente",
    "genero": "Rock, soul, folk, R&B celta",
    "integrantes": [
      "Van Morrison (voz, guitarra, saxo, armónica)"
    ],
    "hero": "img/van-morrison.jpg",
    "heroPos": "center 20%",
    "bajada": "La voz de Belfast que mezcló el soul de Ray Charles con la poesía irlandesa.",
    "descripcion": [
      "George Ivan Morrison nació en Belfast en 1945 y creció escuchando los discos de jazz, blues y soul que coleccionaba su padre. A mediados de los sesenta cantó en Them, la banda de “Gloria”, y en 1967 se lanzó solo con “Brown Eyed Girl”, que se volvió uno de los temas más pasados de la radio.",
      "En 1968 grabó Astral Weeks, un disco casi improvisado que hoy figura entre los mejores de la historia, y en 1970 llegó Moondance, más luminoso y con canciones como “Into the Mystic”. Lo llaman “The Belfast Cowboy”. Lleva más de cuarenta discos editados y sigue grabando y tocando en vivo."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Brown Eyed Girl",
        "disco": "Blowin’ Your Mind!",
        "anio": 1967
      },
      {
        "titulo": "And It Stoned Me",
        "disco": "Moondance",
        "anio": 1970
      },
      {
        "titulo": "Into the Mystic",
        "disco": "Moondance",
        "anio": 1970
      },
      {
        "titulo": "Bright Side of the Road",
        "disco": "Into the Music",
        "anio": 1979
      },
      {
        "titulo": "Days Like This",
        "disco": "Days Like This",
        "anio": 1995
      }
    ]
  },
  {
    "id": "u2",
    "nombre": "U2",
    "pais": "Irlanda",
    "ciudad": "Dublín",
    "anios": "1976 – presente",
    "genero": "Rock, post-punk, pop rock",
    "integrantes": [
      "Bono (voz)",
      "The Edge (guitarra, teclados)",
      "Adam Clayton (bajo)",
      "Larry Mullen Jr. (batería)"
    ],
    "hero": "img/u2.jpg",
    "heroPos": "center 25%",
    "bajada": "Cuatro chicos de un colegio de Dublín que terminaron llenando estadios en todo el mundo.",
    "descripcion": [
      "U2 nació en 1976, cuando el baterista Larry Mullen Jr. pegó un aviso en el colegio Mount Temple de Dublín buscando músicos. Se sumaron Bono, The Edge y Adam Clayton, y desde entonces son los mismos cuatro. Arrancaron en el post-punk con Boy (1980) y con War (1983) empezaron a cantar sobre política y conflictos, como en “Sunday Bloody Sunday”.",
      "The Joshua Tree, de 1987, los convirtió en la banda más grande del mundo. En los noventa se reinventaron con la electrónica y la ironía de Achtung Baby y Zooropa, y en 2000 volvieron a un sonido más clásico con All That You Can’t Leave Behind. Ganaron 22 premios Grammy y en 2023 inauguraron el Sphere de Las Vegas."
    ],
    "nota": "La lista va en orden cronológico. En “When Love Comes to Town” canta y toca la guitarra B.B. King. “Everlasting Love” es una versión del tema de Robert Knight que salió como lado B de “All I Want Is You”. “Sweetest Thing” aparecía dos veces en la lista y quedó una sola.",
    "canciones": [
      {
        "titulo": "I Will Follow",
        "disco": "Boy",
        "anio": 1980
      },
      {
        "titulo": "Sunday Bloody Sunday",
        "disco": "War",
        "anio": 1983
      },
      {
        "titulo": "New Year’s Day",
        "disco": "War",
        "anio": 1983
      },
      {
        "titulo": "Pride (In the Name of Love)",
        "disco": "The Unforgettable Fire",
        "anio": 1984
      },
      {
        "titulo": "Bad",
        "disco": "The Unforgettable Fire",
        "anio": 1984
      },
      {
        "titulo": "Where the Streets Have No Name",
        "disco": "The Joshua Tree",
        "anio": 1987
      },
      {
        "titulo": "I Still Haven’t Found What I’m Looking For",
        "disco": "The Joshua Tree",
        "anio": 1987
      },
      {
        "titulo": "With or Without You",
        "disco": "The Joshua Tree",
        "anio": 1987
      },
      {
        "titulo": "Running to Stand Still",
        "disco": "The Joshua Tree",
        "anio": 1987
      },
      {
        "titulo": "One Tree Hill",
        "disco": "The Joshua Tree",
        "anio": 1987
      },
      {
        "titulo": "Angel of Harlem",
        "disco": "Rattle and Hum",
        "anio": 1988
      },
      {
        "titulo": "When Love Comes to Town (con B.B. King)",
        "disco": "Rattle and Hum",
        "anio": 1988
      },
      {
        "titulo": "All I Want Is You",
        "disco": "Rattle and Hum",
        "anio": 1988
      },
      {
        "titulo": "Everlasting Love",
        "disco": "Simple · lado B de “All I Want Is You”",
        "anio": 1989
      },
      {
        "titulo": "Even Better Than the Real Thing",
        "disco": "Achtung Baby",
        "anio": 1991
      },
      {
        "titulo": "One",
        "disco": "Achtung Baby",
        "anio": 1991
      },
      {
        "titulo": "Mysterious Ways",
        "disco": "Achtung Baby",
        "anio": 1991
      },
      {
        "titulo": "Numb",
        "disco": "Zooropa",
        "anio": 1993
      },
      {
        "titulo": "Stay (Faraway, So Close!)",
        "disco": "Zooropa",
        "anio": 1993
      },
      {
        "titulo": "Staring at the Sun",
        "disco": "Pop",
        "anio": 1997
      },
      {
        "titulo": "Sweetest Thing",
        "disco": "The Best of 1980–1990",
        "anio": 1998
      },
      {
        "titulo": "Beautiful Day",
        "disco": "All That You Can’t Leave Behind",
        "anio": 2000
      },
      {
        "titulo": "Stuck in a Moment You Can’t Get Out Of",
        "disco": "All That You Can’t Leave Behind",
        "anio": 2000
      },
      {
        "titulo": "Elevation",
        "disco": "All That You Can’t Leave Behind",
        "anio": 2000
      },
      {
        "titulo": "Walk On",
        "disco": "All That You Can’t Leave Behind",
        "anio": 2000
      },
      {
        "titulo": "Kite",
        "disco": "All That You Can’t Leave Behind",
        "anio": 2000
      },
      {
        "titulo": "In a Little While",
        "disco": "All That You Can’t Leave Behind",
        "anio": 2000
      },
      {
        "titulo": "Peace on Earth",
        "disco": "All That You Can’t Leave Behind",
        "anio": 2000
      },
      {
        "titulo": "Grace",
        "disco": "All That You Can’t Leave Behind",
        "anio": 2000
      },
      {
        "titulo": "Vertigo",
        "disco": "How to Dismantle an Atomic Bomb",
        "anio": 2004
      },
      {
        "titulo": "Sometimes You Can’t Make It on Your Own",
        "disco": "How to Dismantle an Atomic Bomb",
        "anio": 2004
      },
      {
        "titulo": "City of Blinding Lights",
        "disco": "How to Dismantle an Atomic Bomb",
        "anio": 2004
      },
      {
        "titulo": "Original of the Species",
        "disco": "How to Dismantle an Atomic Bomb",
        "anio": 2004
      },
      {
        "titulo": "No Line on the Horizon",
        "disco": "No Line on the Horizon",
        "anio": 2009
      },
      {
        "titulo": "Moment of Surrender",
        "disco": "No Line on the Horizon",
        "anio": 2009
      },
      {
        "titulo": "The Miracle (Of Joey Ramone)",
        "disco": "Songs of Innocence",
        "anio": 2014
      },
      {
        "titulo": "Every Breaking Wave",
        "disco": "Songs of Innocence",
        "anio": 2014
      }
    ]
  },
  {
    "id": "young-the-giant",
    "nombre": "Young the Giant",
    "pais": "Estados Unidos",
    "ciudad": "Irvine, California",
    "anios": "2004 – presente",
    "genero": "Indie rock, rock alternativo",
    "integrantes": [
      "Sameer Gadhia (voz)",
      "Jacob Tilley (guitarra)",
      "Eric Cannata (guitarra)",
      "Payam Doostzadeh (bajo)",
      "François Comtois (batería)"
    ],
    "hero": "img/young-the-giant.jpg",
    "heroPos": "center 30%",
    "bajada": "Indie rock californiano con una voz que viene de muchos lugares a la vez.",
    "descripcion": [
      "Young the Giant se formó en 2004 en Irvine, California, con el nombre de The Jakes, y en 2009 se cambió al actual. Su cantante, Sameer Gadhia, es hijo de inmigrantes de la India, y el resto de la banda tiene raíces en Irán, Canadá y Estados Unidos, algo que con los años se volvió un tema central de sus letras.",
      "Su primer disco, Young the Giant (2010), traía “My Body” y “Cough Syrup”, que los hicieron conocidos en las radios alternativas. Después vinieron Mind Over Matter (2014), Home of the Strange (2016) y Mirror Master (2018), y en 2022 American Bollywood, un disco conceptual sobre la historia de la familia de Gadhia."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Cough Syrup",
        "disco": "Young the Giant",
        "anio": 2010
      },
      {
        "titulo": "Strings",
        "disco": "Young the Giant",
        "anio": 2010
      },
      {
        "titulo": "Mind Over Matter",
        "disco": "Mind Over Matter",
        "anio": 2014
      },
      {
        "titulo": "Something to Believe In",
        "disco": "Home of the Strange",
        "anio": 2016
      },
      {
        "titulo": "Heat of the Summer",
        "disco": "Mirror Master",
        "anio": 2018
      }
    ]
  },
  {
    "id": "aerosmith",
    "nombre": "Aerosmith",
    "pais": "Estados Unidos",
    "ciudad": "Boston, Massachusetts",
    "anios": "1970 – 2024",
    "genero": "Hard rock, blues rock",
    "integrantes": [
      "Steven Tyler (voz)",
      "Joe Perry (guitarra)",
      "Brad Whitford (guitarra)",
      "Tom Hamilton (bajo)",
      "Joey Kramer (batería)"
    ],
    "hero": "img/aerosmith.jpg",
    "heroPos": "center 25%",
    "bajada": "Los “Toxic Twins” de Boston: la banda de rock más vendida de la historia de Estados Unidos.",
    "descripcion": [
      "Aerosmith se formó en Boston en 1970, alrededor del cantante Steven Tyler y el guitarrista Joe Perry, a quienes por sus excesos apodaron “los gemelos tóxicos”. Con Toys in the Attic (1975) y Rocks (1976) se volvieron la gran banda de hard rock estadounidense, con temas como “Walk This Way”, “Sweet Emotion” y “Dream On”.",
      "Las drogas y las peleas casi los destruyen a fines de los setenta, y Perry se fue de la banda por unos años. En 1986 la versión de “Walk This Way” con Run-DMC los rescató, y con Permanent Vacation, Pump y Get a Grip vivieron una segunda época dorada, ahora con baladas y videos en MTV. En 2024 anunciaron su retiro de los escenarios por una lesión en la voz de Tyler."
    ],
    "nota": "La lista va en orden cronológico. “Remember (Walking in the Sand)”, “Road Runner” y “Stop Messin’ Around” son versiones de otros artistas. “Love in an Elevator” aparecía dos veces en la lista y quedó una sola. “Sedona Sunrise” es una grabación de la época de Get a Grip que se editó recién en 2006.",
    "canciones": [
      {
        "titulo": "Dream On",
        "disco": "Aerosmith",
        "anio": 1973
      },
      {
        "titulo": "Walk This Way",
        "disco": "Toys in the Attic",
        "anio": 1975
      },
      {
        "titulo": "Sweet Emotion",
        "disco": "Toys in the Attic",
        "anio": 1975
      },
      {
        "titulo": "You See Me Crying",
        "disco": "Toys in the Attic",
        "anio": 1975
      },
      {
        "titulo": "Back in the Saddle",
        "disco": "Rocks",
        "anio": 1976
      },
      {
        "titulo": "Remember (Walking in the Sand)",
        "disco": "Night in the Ruts",
        "anio": 1979
      },
      {
        "titulo": "Rag Doll",
        "disco": "Permanent Vacation",
        "anio": 1987
      },
      {
        "titulo": "Dude (Looks Like a Lady)",
        "disco": "Permanent Vacation",
        "anio": 1987
      },
      {
        "titulo": "Angel",
        "disco": "Permanent Vacation",
        "anio": 1987
      },
      {
        "titulo": "Young Lust",
        "disco": "Pump",
        "anio": 1989
      },
      {
        "titulo": "F.I.N.E.",
        "disco": "Pump",
        "anio": 1989
      },
      {
        "titulo": "Love in an Elevator",
        "disco": "Pump",
        "anio": 1989
      },
      {
        "titulo": "Janie’s Got a Gun",
        "disco": "Pump",
        "anio": 1989
      },
      {
        "titulo": "What It Takes",
        "disco": "Pump",
        "anio": 1989
      },
      {
        "titulo": "Get a Grip",
        "disco": "Get a Grip",
        "anio": 1993
      },
      {
        "titulo": "Livin’ on the Edge",
        "disco": "Get a Grip",
        "anio": 1993
      },
      {
        "titulo": "Cryin’",
        "disco": "Get a Grip",
        "anio": 1993
      },
      {
        "titulo": "Crazy",
        "disco": "Get a Grip",
        "anio": 1993
      },
      {
        "titulo": "Amazing",
        "disco": "Get a Grip",
        "anio": 1993
      },
      {
        "titulo": "Hole in My Soul",
        "disco": "Nine Lives",
        "anio": 1997
      },
      {
        "titulo": "Pink",
        "disco": "Nine Lives",
        "anio": 1997
      },
      {
        "titulo": "I Don’t Want to Miss a Thing",
        "disco": "Armageddon: The Album (banda sonora)",
        "anio": 1998
      },
      {
        "titulo": "Fly Away from Here",
        "disco": "Just Push Play",
        "anio": 2001
      },
      {
        "titulo": "Sunshine",
        "disco": "Just Push Play",
        "anio": 2001
      },
      {
        "titulo": "Road Runner",
        "disco": "Honkin’ on Bobo",
        "anio": 2004
      },
      {
        "titulo": "Stop Messin’ Around",
        "disco": "Honkin’ on Bobo",
        "anio": 2004
      },
      {
        "titulo": "Sedona Sunrise",
        "disco": "Devil’s Got a New Disguise (compilado)",
        "anio": 2006
      }
    ]
  },
  {
    "id": "badfinger",
    "nombre": "Badfinger",
    "pais": "Reino Unido",
    "ciudad": "Swansea, Gales",
    "anios": "1969 – 1984",
    "genero": "Power pop, pop rock",
    "integrantes": [
      "Pete Ham (voz, guitarra)",
      "Tom Evans (bajo, voz)",
      "Joey Molland (guitarra, voz)",
      "Mike Gibbins (batería)"
    ],
    "hero": "img/badfinger.jpg",
    "heroPos": "center 40%",
    "bajada": "Los protegidos de los Beatles, padres del power pop.",
    "descripcion": [
      "Badfinger empezó en Swansea, Gales, con el nombre de The Iveys, y fue una de las primeras bandas que firmó con Apple, el sello de los Beatles. En 1969 Paul McCartney les regaló “Come and Get It”, que fue su primer éxito, y George Harrison produjo parte de Straight Up (1971), donde están “Day After Day” y “Baby Blue”.",
      "Pete Ham y Tom Evans escribieron “Without You”, que años después fue un éxito enorme para Harry Nilsson y Mariah Carey. Pero los problemas con sus representantes y el dinero terminaron en tragedia y la banda nunca tuvo el reconocimiento que merecía. En 2013 “Baby Blue” volvió a sonar en todo el mundo al cerrar la serie Breaking Bad."
    ],
    "nota": "La lista va en orden cronológico. “Come and Get It” la escribió y produjo Paul McCartney. En “Day After Day” toca la guitarra slide George Harrison.",
    "canciones": [
      {
        "titulo": "Come and Get It",
        "disco": "Magic Christian Music",
        "anio": 1970
      },
      {
        "titulo": "No Matter What",
        "disco": "No Dice",
        "anio": 1970
      },
      {
        "titulo": "Day After Day",
        "disco": "Straight Up",
        "anio": 1971
      },
      {
        "titulo": "Baby Blue",
        "disco": "Straight Up",
        "anio": 1971
      }
    ]
  },
  {
    "id": "barry-manilow",
    "nombre": "Barry Manilow",
    "pais": "Estados Unidos",
    "ciudad": "Brooklyn, Nueva York",
    "anios": "1973 – presente",
    "genero": "Pop, soft rock, adult contemporary",
    "integrantes": [
      "Barry Manilow (voz, piano)"
    ],
    "hero": "img/barry-manilow.jpg",
    "heroPos": "center 30%",
    "bajada": "El rey de la balada romántica de los setenta.",
    "descripcion": [
      "Barry Manilow nació en Brooklyn en 1943. Antes de ser estrella escribía jingles publicitarios y fue pianista y arreglador de Bette Midler. En 1974 “Mandy” llegó al número uno en Estados Unidos y lo lanzó como solista.",
      "Durante los setenta encadenó éxitos como “I Write the Songs”, “Copacabana” y “Can’t Smile Without You”, y se convirtió en uno de los artistas que más discos vendió en esa década. Sigue tocando en vivo y tiene una larga residencia en Las Vegas."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Mandy",
        "disco": "Barry Manilow II",
        "anio": 1974
      },
      {
        "titulo": "Can’t Smile Without You",
        "disco": "Even Now",
        "anio": 1978
      }
    ]
  },
  {
    "id": "bread",
    "nombre": "Bread",
    "pais": "Estados Unidos",
    "ciudad": "Los Ángeles, California",
    "anios": "1968 – 1973 · 1976 – 1978",
    "genero": "Soft rock, pop rock",
    "integrantes": [
      "David Gates (voz, guitarra, teclados)",
      "James Griffin (guitarra, voz)",
      "Robb Royer (bajo, guitarra)",
      "Mike Botts (batería)",
      "Larry Knechtel (teclados, bajo)"
    ],
    "hero": "img/bread.jpg",
    "heroPos": "center 30%",
    "bajada": "Las baladas suaves de David Gates que sonaron en todas las radios de los setenta.",
    "descripcion": [
      "Bread se formó en Los Ángeles en 1968, cuando el compositor y productor David Gates se juntó con James Griffin y Robb Royer. En 1970 “Make It with You” llegó al número uno en Estados Unidos, y desde ahí encadenaron éxitos como “If”, “Baby I’m-a Want You” y “Everything I Own”.",
      "Su sonido suave, con armonías y guitarras acústicas, fue uno de los que definió el soft rock de los setenta. Las diferencias entre Gates y Griffin sobre qué canciones salían como simples separaron a la banda en 1973. Volvieron en 1976 con Lost Without Your Love y se despidieron poco después."
    ],
    "nota": "La lista va en orden cronológico. Gates escribió “Everything I Own” pensando en su padre, que había muerto poco antes.",
    "canciones": [
      {
        "titulo": "Mother Freedom",
        "disco": "Baby I’m-a Want You",
        "anio": 1972
      },
      {
        "titulo": "Everything I Own",
        "disco": "Baby I’m-a Want You",
        "anio": 1972
      }
    ]
  },
  {
    "id": "brewer-and-shipley",
    "nombre": "Brewer & Shipley",
    "pais": "Estados Unidos",
    "ciudad": "Kent, Ohio · Los Ángeles",
    "anios": "1967 – 1978 · 1993 – 2021",
    "genero": "Folk rock, country rock",
    "integrantes": [
      "Mike Brewer (voz, guitarra)",
      "Tom Shipley (voz, guitarra)"
    ],
    "hero": "img/brewer-and-shipley.jpg",
    "heroPos": "center 30%",
    "bajada": "Dos voces folk de la contracultura, famosos por “One Toke Over the Line”.",
    "descripcion": [
      "Mike Brewer, de Oklahoma, y Tom Shipley se conocieron en el circuito de cafés folk de Kent, Ohio, y en 1968 se mudaron juntos a Los Ángeles. Allí grabaron sus primeros discos, Down in L.A. y Weeds, con armonías a dos voces en la línea de Simon & Garfunkel o Crosby, Stills & Nash.",
      "En 1970 sacaron Tarkio, y su tema “One Toke Over the Line” fue un éxito que el gobierno de Nixon señaló como una canción sobre drogas. Siguieron con Shake Off the Demon y Rural Space, y después de separarse a fines de los setenta volvieron a tocar juntos durante muchos años en el Medio Oeste."
    ],
    "nota": "La lista va en orden cronológico. “Fifty States of Freedom” cierra el disco Tarkio y dura casi siete minutos.",
    "canciones": [
      {
        "titulo": "People Love Each Other",
        "disco": "Weeds",
        "anio": 1969
      },
      {
        "titulo": "Fifty States of Freedom",
        "disco": "Tarkio",
        "anio": 1970
      },
      {
        "titulo": "Shake Off the Demon",
        "disco": "Shake Off the Demon",
        "anio": 1971
      }
    ]
  },
  {
    "id": "albert-hammond",
    "nombre": "Albert Hammond",
    "pais": "Reino Unido",
    "ciudad": "Gibraltar",
    "anios": "1960 – presente",
    "genero": "Pop, soft rock",
    "integrantes": [
      "Albert Hammond (voz, guitarra)"
    ],
    "hero": "img/albert-hammond.jpg",
    "heroPos": "center 35%",
    "bajada": "El cantautor de Gibraltar que escribió éxitos para medio mundo.",
    "descripcion": [
      "Albert Hammond nació en Londres en 1944 y creció en Gibraltar, donde empezó a tocar en bandas locales y en España. En 1972 se mudó a Estados Unidos y grabó “It Never Rains in Southern California”, una canción sobre llegar a Los Ángeles a buscar suerte y no encontrarla, que fue un éxito en todo el mundo.",
      "Pero su mayor obra está en canciones que cantaron otros: con Mike Hazlewood compuso “The Air That I Breathe”, que grabaron The Hollies, y también escribió “When I Need You” para Leo Sayer, “Nothing’s Gonna Stop Us Now” para Starship y “One Moment in Time” para Whitney Houston. Grabó además discos en español, y es el padre de Albert Hammond Jr., guitarrista de The Strokes."
    ],
    "nota": "“The Air That I Breathe”, de The Hollies, también es suya.",
    "canciones": [
      {
        "titulo": "It Never Rains in Southern California",
        "disco": "It Never Rains in Southern California",
        "anio": 1972
      }
    ]
  },
  {
    "id": "alex-ebert",
    "nombre": "Alex Ebert",
    "pais": "Estados Unidos",
    "ciudad": "Los Ángeles, California",
    "anios": "1998 – presente",
    "genero": "Indie folk, rock alternativo",
    "integrantes": [
      "Alex Ebert (voz, guitarra)"
    ],
    "hero": "img/alex-ebert.jpg",
    "heroPos": "center 20%",
    "bajada": "La voz de Edward Sharpe and the Magnetic Zeros, en su faceta solista.",
    "descripcion": [
      "Alex Ebert nació en Los Ángeles en 1978. A fines de los noventa armó la banda Ima Robot, pero después de salir de una época de adicciones inventó a Edward Sharpe, un personaje mesiánico, y formó Edward Sharpe and the Magnetic Zeros, un colectivo folk con más de diez músicos que se hizo conocido en 2009 con “Home”.",
      "En 2011 sacó su primer disco solista, Alexander, grabado casi todo por él solo en su casa, de donde sale “Truth”, con su silbido y su ritmo lento, que después sonó en muchas series y publicidades. En 2014 ganó un Globo de Oro por la música de la película All Is Lost."
    ],
    "nota": "",
    "canciones": [
      {
        "titulo": "Truth",
        "disco": "Alexander",
        "anio": 2011
      }
    ]
  },
  {
    "id": "al-green",
    "nombre": "Al Green",
    "pais": "Estados Unidos",
    "ciudad": "Forrest City, Arkansas · Memphis",
    "anios": "1967 – presente",
    "genero": "Soul, R&B, gospel",
    "integrantes": [
      "Al Green (voz)"
    ],
    "hero": "img/al-green.jpg",
    "heroPos": "center 30%",
    "bajada": "La voz más dulce del soul de Memphis.",
    "descripcion": [
      "Al Green nació en 1946 en Forrest City, Arkansas, y empezó cantando gospel con sus hermanos. En Memphis conoció al productor Willie Mitchell, del sello Hi Records, y juntos crearon un soul suave y elegante, con la voz de Green casi susurrada sobre una banda muy contenida. “Tired of Being Alone” fue su primer gran éxito, en 1971.",
      "Después llegaron “Let’s Stay Together”, “I’m Still in Love with You” y “Love and Happiness”, que lo convirtieron en el gran cantante de soul de los setenta. A fines de esa década se ordenó pastor y dejó la música secular para dedicarse al gospel desde su propia iglesia en Memphis, aunque años después volvió a grabar soul."
    ],
    "nota": "La lista va en orden cronológico. “How Can You Mend a Broken Heart” es una canción de los Bee Gees.",
    "canciones": [
      {
        "titulo": "Tired of Being Alone",
        "disco": "Al Green Gets Next to You",
        "anio": 1971
      },
      {
        "titulo": "How Can You Mend a Broken Heart",
        "disco": "Let’s Stay Together",
        "anio": 1972
      }
    ]
  },
  {
    "id": "a-ha",
    "nombre": "a-ha",
    "pais": "Noruega",
    "ciudad": "Oslo",
    "anios": "1982 – presente",
    "genero": "Synth-pop, new wave, pop rock",
    "integrantes": [
      "Morten Harket (voz)",
      "Paul Waaktaar-Savoy (guitarra)",
      "Magne Furuholmen (teclados)"
    ],
    "hero": "img/a-ha.jpg",
    "heroPos": "center 30%",
    "bajada": "Tres noruegos, un falsete imposible y el video más famoso de los ochenta.",
    "descripcion": [
      "a-ha se formó en Oslo en 1982, cuando Paul Waaktaar-Savoy y Magne Furuholmen se juntaron con el cantante Morten Harket y se mudaron a Londres a buscar suerte. “Take On Me” fracasó dos veces antes de que, en 1985, un video que mezclaba imagen real con dibujos a lápiz la llevara al número uno en Estados Unidos y a medio mundo.",
      "Fueron la primera banda noruega en lograr un éxito global y siguieron llenando estadios, sobre todo en Europa y Sudamérica: en 1991 tocaron ante casi 200.000 personas en el Rock in Rio. En los noventa se separaron y volvieron varias veces, y en 2017 grabaron un MTV Unplugged que les dio un segundo aire."
    ],
    "nota": "La lista va en orden cronológico. “Crying in the Rain” es una versión de los Everly Brothers.",
    "canciones": [
      {
        "titulo": "Take On Me",
        "disco": "Hunting High and Low",
        "anio": 1985
      },
      {
        "titulo": "Crying in the Rain",
        "disco": "East of the Sun, West of the Moon",
        "anio": 1990
      }
    ]
  },
  {
    "id": "crowded-house",
    "nombre": "Crowded House",
    "pais": "Australia",
    "ciudad": "Melbourne",
    "anios": "1985 – 1996 · 2006 – presente",
    "genero": "Pop rock, rock alternativo",
    "integrantes": [
      "Neil Finn (voz, guitarra)",
      "Nick Seymour (bajo)",
      "Paul Hester (batería)",
      "Tim Finn (teclados, voz)",
      "Mark Hart (teclados, guitarra)"
    ],
    "hero": "img/crowded-house.jpg",
    "heroPos": "center 30%",
    "bajada": "Las canciones perfectas del neozelandés Neil Finn.",
    "descripcion": [
      "Crowded House se formó en Melbourne en 1985, después de la separación de Split Enz, la banda neozelandesa de los hermanos Tim y Neil Finn. Neil, junto al baterista Paul Hester y el bajista Nick Seymour, se fue a Los Ángeles a grabar el primer disco, y en 1987 “Don’t Dream It’s Over” llegó al número dos en Estados Unidos.",
      "Con Temple of Low Men y Woodface, donde se sumó Tim Finn, se ganaron fama de tener algunas de las canciones pop mejor escritas de su época. Se despidieron en 1996 con un concierto gratuito frente a la Ópera de Sídney. Hester murió en 2005, y al año siguiente Neil Finn volvió a armar la banda."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Don’t Dream It’s Over",
        "disco": "Crowded House",
        "anio": 1986
      },
      {
        "titulo": "Better Be Home Soon",
        "disco": "Temple of Low Men",
        "anio": 1988
      },
      {
        "titulo": "Fall at Your Feet",
        "disco": "Woodface",
        "anio": 1991
      }
    ]
  },
  {
    "id": "counting-crows",
    "nombre": "Counting Crows",
    "pais": "Estados Unidos",
    "ciudad": "Berkeley, California",
    "anios": "1991 – presente",
    "genero": "Rock alternativo, folk rock",
    "integrantes": [
      "Adam Duritz (voz)",
      "David Bryson (guitarra)",
      "Charlie Gillingham (teclados)",
      "Dan Vickrey (guitarra)",
      "David Immerglück (guitarra)",
      "Millard Powers (bajo)",
      "Jim Bogios (batería)"
    ],
    "hero": "img/counting-crows.jpg",
    "heroPos": "center 30%",
    "bajada": "La voz y las rastas de Adam Duritz, entre Van Morrison y The Band.",
    "descripcion": [
      "Counting Crows se formó en 1991 en la zona de San Francisco, alrededor del cantante Adam Duritz. Su primer disco, August and Everything After (1993), con “Mr. Jones” y “Round Here”, vendió millones de copias y los ubicó como herederos del rock de raíz de Van Morrison y The Band.",
      "Duritz escribe canciones muy personales, en las que cuenta sus problemas de ansiedad, la fama y sus amores, y en vivo cambia las letras cada noche. Siguieron editando discos, como Recovering the Satellites, y en 2004 su versión de “Accidentally in Love” para Shrek 2 fue nominada al Oscar."
    ],
    "nota": "La lista va en orden cronológico. “Big Yellow Taxi” es una versión de Joni Mitchell, cantada con Vanessa Carlton.",
    "canciones": [
      {
        "titulo": "Round Here",
        "disco": "August and Everything After",
        "anio": 1993
      },
      {
        "titulo": "Mr. Jones",
        "disco": "August and Everything After",
        "anio": 1993
      },
      {
        "titulo": "Big Yellow Taxi (con Vanessa Carlton)",
        "disco": "Hard Candy",
        "anio": 2002
      }
    ]
  },
  {
    "id": "chris-isaak",
    "nombre": "Chris Isaak",
    "pais": "Estados Unidos",
    "ciudad": "Stockton, California",
    "anios": "1984 – presente",
    "genero": "Rock, rockabilly, pop",
    "integrantes": [
      "Chris Isaak (voz, guitarra)"
    ],
    "hero": "img/chris-isaak.jpg",
    "heroPos": "75% 20%",
    "bajada": "El heredero californiano de Roy Orbison y Elvis.",
    "descripcion": [
      "Chris Isaak nació en Stockton, California, en 1956, y fue boxeador aficionado antes de dedicarse a la música. Con su banda Silvertone grabó discos que mezclaban rockabilly, baladas y guitarras con mucho eco, y una voz que pasaba del registro grave al falsete, al estilo de Roy Orbison.",
      "Su gran salto fue casi casual: en 1990 David Lynch usó una versión instrumental de “Wicked Game” en la película Corazón salvaje, una radio de Atlanta empezó a pasarla y terminó siendo un éxito mundial, con un video en blanco y negro junto a la modelo Helena Christensen. También actuó en películas y tuvo su propio programa de televisión."
    ],
    "nota": "La lista va en orden cronológico. “I Want You to Want Me” es una versión de Cheap Trick, grabada para su disco de grandes éxitos.",
    "canciones": [
      {
        "titulo": "Wicked Game",
        "disco": "Heart Shaped World",
        "anio": 1989
      },
      {
        "titulo": "San Francisco Days",
        "disco": "San Francisco Days",
        "anio": 1993
      },
      {
        "titulo": "I Want You to Want Me",
        "disco": "Best of Chris Isaak",
        "anio": 2006
      }
    ]
  },
  {
    "id": "christopher-denny",
    "nombre": "Christopher Denny",
    "pais": "Estados Unidos",
    "ciudad": "Little Rock, Arkansas",
    "anios": "2007 – presente",
    "genero": "Americana, country, folk",
    "integrantes": [
      "Christopher Denny (voz, guitarra)"
    ],
    "hero": "img/christopher-denny.jpg",
    "heroPos": "center 30%",
    "bajada": "Una voz de otra época salida de Arkansas.",
    "descripcion": [
      "Christopher Denny es un cantautor de Little Rock, Arkansas, que se formó tocando en veredas y bares de Dallas y Chicago. Su voz aguda y temblorosa, con ecos de Roy Orbison y Jeff Buckley, llamó la atención desde su primer disco, Age Old Hunger, de 2007.",
      "Pasaron siete años hasta el segundo, If the Roses Don’t Kill Us (2014), producido en Nashville, con canciones de amor y de redención escritas después de una época de adicciones. Es un artista de culto dentro del country y la Americana."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Heart’s on Fire",
        "disco": "Age Old Hunger",
        "anio": 2007
      },
      {
        "titulo": "Our Kind of Love",
        "disco": "If the Roses Don’t Kill Us",
        "anio": 2014
      },
      {
        "titulo": "If the Roses Don’t Kill Us",
        "disco": "If the Roses Don’t Kill Us",
        "anio": 2014
      }
    ]
  },
  {
    "id": "commodores",
    "nombre": "Commodores",
    "pais": "Estados Unidos",
    "ciudad": "Tuskegee, Alabama",
    "anios": "1968 – presente",
    "genero": "Funk, soul, R&B",
    "integrantes": [
      "Lionel Richie (voz, saxo, piano)",
      "William King (trompeta)",
      "Thomas McClary (guitarra)",
      "Milan Williams (teclados)",
      "Ronald LaPread (bajo)",
      "Walter Orange (batería, voz)"
    ],
    "hero": "img/commodores.jpg",
    "heroPos": "center 40%",
    "bajada": "Del funk de Motown a las baladas de Lionel Richie.",
    "descripcion": [
      "Commodores se formó en 1968 con estudiantes del Instituto Tuskegee, en Alabama. Firmaron con Motown y en sus comienzos telonearon a los Jackson 5, tocando un funk bailable con temas como “Machine Gun” y “Brick House”.",
      "Con el tiempo las baladas que escribía Lionel Richie se volvieron su sello: “Easy” en 1977 y “Three Times a Lady” en 1978, que llegó al número uno. Richie se fue en 1982 para hacer carrera solista y la banda siguió sin él; en 1985 “Nightshift”, un homenaje a Marvin Gaye y Jackie Wilson, les dio un Grammy."
    ],
    "nota": "La lista va en orden cronológico. “Nightshift” la canta el baterista Walter Orange y está dedicada a Marvin Gaye y Jackie Wilson, los dos muertos en 1984.",
    "canciones": [
      {
        "titulo": "Easy",
        "disco": "Commodores",
        "anio": 1977
      },
      {
        "titulo": "Three Times a Lady",
        "disco": "Natural High",
        "anio": 1978
      },
      {
        "titulo": "Nightshift",
        "disco": "Nightshift",
        "anio": 1985
      }
    ]
  },
  {
    "id": "the-beach-boys",
    "nombre": "The Beach Boys",
    "pais": "Estados Unidos",
    "ciudad": "Hawthorne, California",
    "anios": "1961 – presente",
    "genero": "Pop, surf rock, pop psicodélico",
    "integrantes": [
      "Brian Wilson (bajo, teclados, voz)",
      "Mike Love (voz)",
      "Carl Wilson (guitarra, voz)",
      "Dennis Wilson (batería, voz)",
      "Al Jardine (guitarra, voz)",
      "Bruce Johnston (bajo, teclados, voz)"
    ],
    "hero": "img/the-beach-boys.jpg",
    "heroPos": "center 30%",
    "bajada": "Las armonías de California y el genio de Brian Wilson.",
    "descripcion": [
      "The Beach Boys se formó en 1961 en Hawthorne, California, con los hermanos Brian, Dennis y Carl Wilson, su primo Mike Love y su amigo Al Jardine. Empezaron cantando sobre surf, autos y chicas del verano, con armonías vocales muy elaboradas, y temas como “Surfin’ U.S.A.” e “I Get Around” los convirtieron en la gran respuesta estadounidense a los Beatles.",
      "Brian Wilson dejó de salir de gira para encerrarse en el estudio y en 1966 creó Pet Sounds, considerado uno de los mejores discos de la historia, y el simple “Good Vibrations”. Después vinieron años difíciles por la salud mental de Brian, pero la banda siguió grabando joyas como Surf’s Up y Holland, y en 1988 volvió al número uno con “Kokomo”. Brian Wilson murió en junio de 2025."
    ],
    "nota": "La lista va en orden cronológico. Paul McCartney dijo que “God Only Knows” es su canción favorita de todos los tiempos.",
    "canciones": [
      {
        "titulo": "Surfin’ U.S.A.",
        "disco": "Surfin’ U.S.A.",
        "anio": 1963
      },
      {
        "titulo": "Fun, Fun, Fun",
        "disco": "Shut Down Volume 2",
        "anio": 1964
      },
      {
        "titulo": "Don’t Worry Baby",
        "disco": "Shut Down Volume 2",
        "anio": 1964
      },
      {
        "titulo": "I Get Around",
        "disco": "All Summer Long",
        "anio": 1964
      },
      {
        "titulo": "California Girls",
        "disco": "Summer Days (and Summer Nights!!)",
        "anio": 1965
      },
      {
        "titulo": "Barbara Ann",
        "disco": "Beach Boys’ Party!",
        "anio": 1965
      },
      {
        "titulo": "Wouldn’t It Be Nice",
        "disco": "Pet Sounds",
        "anio": 1966
      },
      {
        "titulo": "God Only Knows",
        "disco": "Pet Sounds",
        "anio": 1966
      },
      {
        "titulo": "Good Vibrations",
        "disco": "Smiley Smile",
        "anio": 1967
      },
      {
        "titulo": "Do It Again",
        "disco": "20/20",
        "anio": 1969
      },
      {
        "titulo": "I Can Hear Music",
        "disco": "20/20",
        "anio": 1969
      },
      {
        "titulo": "Time to Get Alone",
        "disco": "20/20",
        "anio": 1969
      },
      {
        "titulo": "Feel Flows",
        "disco": "Surf’s Up",
        "anio": 1971
      },
      {
        "titulo": "Sail On, Sailor",
        "disco": "Holland",
        "anio": 1973
      },
      {
        "titulo": "Come Go with Me",
        "disco": "M.I.U. Album",
        "anio": 1978
      },
      {
        "titulo": "Kokomo",
        "disco": "Cocktail (banda sonora)",
        "anio": 1988
      }
    ]
  },
  {
    "id": "the-doors",
    "nombre": "The Doors",
    "pais": "Estados Unidos",
    "ciudad": "Los Ángeles, California",
    "anios": "1965 – 1973",
    "genero": "Rock psicodélico, blues rock",
    "integrantes": [
      "Jim Morrison (voz)",
      "Ray Manzarek (teclados, bajo)",
      "Robby Krieger (guitarra)",
      "John Densmore (batería)"
    ],
    "hero": "img/the-doors.jpg",
    "heroPos": "center 30%",
    "bajada": "El Rey Lagarto y el órgano de Ray Manzarek: el lado oscuro de los sesenta.",
    "descripcion": [
      "The Doors se formó en Los Ángeles en 1965, cuando Jim Morrison, un estudiante de cine que escribía poesía, le recitó unos versos a Ray Manzarek en una playa de Venice. Sumaron a Robby Krieger y John Densmore, y tomaron el nombre de un libro de Aldous Huxley. No tenían bajista: Manzarek tocaba las líneas de bajo con la mano izquierda en un teclado.",
      "Su primer disco, de 1967, trajo “Light My Fire”, que llegó al número uno, y “Break On Through”. Morrison, con su voz grave y sus shows provocadores, se volvió un ícono de la contracultura y tuvo varios problemas con la policía. En 1971, después de grabar L.A. Woman, se fue a París, donde murió en julio de ese año, a los 27. La banda siguió dos discos más sin él."
    ],
    "nota": "La lista va en orden cronológico. “Light My Fire” y “Love Me Two Times” las escribió el guitarrista Robby Krieger.",
    "canciones": [
      {
        "titulo": "Break On Through (To the Other Side)",
        "disco": "The Doors",
        "anio": 1967
      },
      {
        "titulo": "Light My Fire",
        "disco": "The Doors",
        "anio": 1967
      },
      {
        "titulo": "People Are Strange",
        "disco": "Strange Days",
        "anio": 1967
      },
      {
        "titulo": "Love Me Two Times",
        "disco": "Strange Days",
        "anio": 1967
      },
      {
        "titulo": "Tell All the People",
        "disco": "The Soft Parade",
        "anio": 1969
      },
      {
        "titulo": "Peace Frog",
        "disco": "Morrison Hotel",
        "anio": 1970
      },
      {
        "titulo": "Roadhouse Blues",
        "disco": "Morrison Hotel",
        "anio": 1970
      },
      {
        "titulo": "Riders on the Storm",
        "disco": "L.A. Woman",
        "anio": 1971
      }
    ]
  },
  {
    "id": "the-jayhawks",
    "nombre": "The Jayhawks",
    "pais": "Estados Unidos",
    "ciudad": "Minneapolis, Minnesota",
    "anios": "1984 – presente",
    "genero": "Alt-country, country rock, Americana",
    "integrantes": [
      "Gary Louris (voz, guitarra)",
      "Mark Olson (voz, guitarra)",
      "Marc Perlman (bajo)",
      "Karen Grotberg (teclados, voz)",
      "Tim O’Reagan (batería, voz)"
    ],
    "hero": "img/the-jayhawks.jpg",
    "heroPos": "center 30%",
    "bajada": "Las armonías de Minneapolis que fundaron el alt-country.",
    "descripcion": [
      "The Jayhawks se formó en Minneapolis en 1984 alrededor de Mark Olson, y al año siguiente se sumó Gary Louris. Las dos voces juntas, con ecos de Gram Parsons y los Everly Brothers, se volvieron su marca. Con Hollywood Town Hall (1992) y “Waiting for the Sun” llegaron a un público más amplio, y Tomorrow the Green Grass (1995) es uno de los discos clave del alt-country.",
      "Olson se fue a fines de 1995 y Louris tomó el mando, llevando a la banda hacia un pop rock más pulido en Sound of Lies, Smile y Rainy Day Music. Después de varias pausas y reencuentros, siguen grabando: Back Roads and Abandoned Motels (2018) reúne canciones que Louris había escrito con las Dixie Chicks y Jakob Dylan, y en 2026 sacaron Sanctuary Park."
    ],
    "nota": "La lista va en orden cronológico. “Everybody Knows” y “Bitter End” las escribió Gary Louris con las Dixie Chicks, y “Gonna Be a Darkness” con Jakob Dylan, de The Wallflowers.",
    "canciones": [
      {
        "titulo": "Ain’t No End",
        "disco": "Blue Earth",
        "anio": 1989
      },
      {
        "titulo": "Sioux City",
        "disco": "Blue Earth",
        "anio": 1989
      },
      {
        "titulo": "Waiting for the Sun",
        "disco": "Hollywood Town Hall",
        "anio": 1992
      },
      {
        "titulo": "Nevada, California",
        "disco": "Hollywood Town Hall",
        "anio": 1992
      },
      {
        "titulo": "Blue",
        "disco": "Tomorrow the Green Grass",
        "anio": 1995
      },
      {
        "titulo": "I’d Run Away",
        "disco": "Tomorrow the Green Grass",
        "anio": 1995
      },
      {
        "titulo": "See Him on the Street",
        "disco": "Tomorrow the Green Grass",
        "anio": 1995
      },
      {
        "titulo": "The Man Who Loved Life",
        "disco": "Sound of Lies",
        "anio": 1997
      },
      {
        "titulo": "Trouble",
        "disco": "Sound of Lies",
        "anio": 1997
      },
      {
        "titulo": "It’s Up to You",
        "disco": "Sound of Lies",
        "anio": 1997
      },
      {
        "titulo": "Stick in the Mud",
        "disco": "Sound of Lies",
        "anio": 1997
      },
      {
        "titulo": "Smile",
        "disco": "Smile",
        "anio": 2000
      },
      {
        "titulo": "I’m Gonna Make You Love Me",
        "disco": "Smile",
        "anio": 2000
      },
      {
        "titulo": "What Led Me to This Town",
        "disco": "Smile",
        "anio": 2000
      },
      {
        "titulo": "Somewhere in Ohio",
        "disco": "Smile",
        "anio": 2000
      },
      {
        "titulo": "A Break in the Clouds",
        "disco": "Smile",
        "anio": 2000
      },
      {
        "titulo": "Queen of the World",
        "disco": "Smile",
        "anio": 2000
      },
      {
        "titulo": "Broken Harpoon",
        "disco": "Smile",
        "anio": 2000
      },
      {
        "titulo": "Mr. Wilson",
        "disco": "Smile",
        "anio": 2000
      },
      {
        "titulo": "Better Days",
        "disco": "Smile",
        "anio": 2000
      },
      {
        "titulo": "Stumbling Through the Dark",
        "disco": "Rainy Day Music",
        "anio": 2003
      },
      {
        "titulo": "Tailspin",
        "disco": "Rainy Day Music",
        "anio": 2003
      },
      {
        "titulo": "All the Right Reasons",
        "disco": "Rainy Day Music",
        "anio": 2003
      },
      {
        "titulo": "Save It for a Rainy Day",
        "disco": "Rainy Day Music",
        "anio": 2003
      },
      {
        "titulo": "Eyes of Sarahjane",
        "disco": "Rainy Day Music",
        "anio": 2003
      },
      {
        "titulo": "Pouring Rain at Dawn",
        "disco": "Mockingbird Time",
        "anio": 2011
      },
      {
        "titulo": "Quiet Corners & Empty Spaces",
        "disco": "Paging Mr. Proust",
        "anio": 2016
      },
      {
        "titulo": "Lovers of the Sun",
        "disco": "Paging Mr. Proust",
        "anio": 2016
      },
      {
        "titulo": "Comeback Kids",
        "disco": "Paging Mr. Proust",
        "anio": 2016
      },
      {
        "titulo": "Everybody Knows",
        "disco": "Back Roads and Abandoned Motels",
        "anio": 2018
      },
      {
        "titulo": "Gonna Be a Darkness",
        "disco": "Back Roads and Abandoned Motels",
        "anio": 2018
      },
      {
        "titulo": "Bitter End",
        "disco": "Back Roads and Abandoned Motels",
        "anio": 2018
      },
      {
        "titulo": "This Forgotten Town",
        "disco": "XOXO",
        "anio": 2020
      },
      {
        "titulo": "Bitter Pill",
        "disco": "XOXO",
        "anio": 2020
      },
      {
        "titulo": "Keeping Our Heads Above Water",
        "disco": "Sanctuary Park",
        "anio": 2026
      },
      {
        "titulo": "American Midnight",
        "disco": "Sanctuary Park",
        "anio": 2026
      }
    ]
  },
  {
    "id": "the-animals",
    "nombre": "The Animals",
    "pais": "Reino Unido",
    "ciudad": "Newcastle upon Tyne, Inglaterra",
    "anios": "1962 – 1969 · reuniones posteriores",
    "genero": "Rhythm and blues, rock",
    "integrantes": [
      "Eric Burdon (voz)",
      "Alan Price (teclados)",
      "Hilton Valentine (guitarra)",
      "Chas Chandler (bajo)",
      "John Steel (batería)"
    ],
    "hero": "img/the-animals.jpg",
    "heroPos": "center 30%",
    "bajada": "El blues más negro de la Invasión Británica, con la voz de Eric Burdon.",
    "descripcion": [
      "The Animals se formó en Newcastle, en el norte de Inglaterra, a comienzos de los sesenta. Eran fanáticos del rhythm and blues estadounidense y tenían en Eric Burdon a uno de los cantantes blancos más intensos de su época. En 1964 su versión de “The House of the Rising Sun”, una vieja canción folk, con el órgano de Alan Price, llegó al número uno en Inglaterra y en Estados Unidos.",
      "Siguieron éxitos como “Don’t Let Me Be Misunderstood” y “We Gotta Get Out of This Place”, pero las peleas por el dinero desarmaron la formación original en 1966. Burdon siguió con otra banda psicodélica, y el bajista Chas Chandler se convirtió en el mánager que descubrió a Jimi Hendrix. Los cinco originales se reunieron en 1977 para grabar Before We Were So Rudely Interrupted."
    ],
    "nota": "La lista va en orden cronológico. “Bring It On Home to Me” es de Sam Cooke y “It’s All Over Now, Baby Blue” de Bob Dylan, grabada en la reunión de 1977.",
    "canciones": [
      {
        "titulo": "The House of the Rising Sun",
        "disco": "The Animals",
        "anio": 1964
      },
      {
        "titulo": "Bring It On Home to Me",
        "disco": "Animal Tracks",
        "anio": 1965
      },
      {
        "titulo": "It’s All Over Now, Baby Blue",
        "disco": "Before We Were So Rudely Interrupted",
        "anio": 1977
      }
    ]
  },
  {
    "id": "the-association",
    "nombre": "The Association",
    "pais": "Estados Unidos",
    "ciudad": "Los Ángeles, California",
    "anios": "1965 – presente",
    "genero": "Sunshine pop, folk rock",
    "integrantes": [
      "Terry Kirkman (voz, vientos)",
      "Jules Alexander (guitarra, voz)",
      "Russ Giguere (voz, guitarra)",
      "Brian Cole (bajo, voz)",
      "Ted Bluechel (batería, voz)",
      "Jim Yester (guitarra, voz)",
      "Larry Ramos (guitarra, voz)"
    ],
    "hero": "img/the-association.jpg",
    "heroPos": "center 30%",
    "bajada": "Seis voces en armonía para el pop soleado de California.",
    "descripcion": [
      "The Association se formó en Los Ángeles en 1965 y se destacó por sus armonías vocales de muchas voces, en la línea de los Beach Boys y The Mamas & the Papas. En 1966 llegaron al número uno con “Cherish”, y al año siguiente con “Windy”.",
      "“Never My Love”, de 1967, escrita por los hermanos Don y Dick Addrisi, es una de las canciones más pasadas por la radio estadounidense en todo el siglo XX. Fueron además la banda que abrió el festival de Monterey en 1967."
    ],
    "nota": "",
    "canciones": [
      {
        "titulo": "Never My Love",
        "disco": "Insight Out",
        "anio": 1967
      }
    ]
  },
  {
    "id": "the-band",
    "nombre": "The Band",
    "pais": "Canadá",
    "ciudad": "Toronto · Woodstock, Nueva York",
    "anios": "1967 – 1977 · 1983 – 1999",
    "genero": "Rock de raíz, Americana",
    "integrantes": [
      "Robbie Robertson (guitarra)",
      "Levon Helm (batería, voz)",
      "Rick Danko (bajo, voz)",
      "Richard Manuel (piano, voz)",
      "Garth Hudson (órgano, saxo)"
    ],
    "hero": "img/the-band.jpg",
    "heroPos": "center 30%",
    "bajada": "Cuatro canadienses y un sureño que inventaron la Americana.",
    "descripcion": [
      "Antes de llamarse The Band fueron The Hawks, la banda de acompañamiento del rockabilly Ronnie Hawkins y después de Bob Dylan en su polémica gira eléctrica de 1966. Instalados en una casa rosada de Woodstock, Nueva York, grabaron con Dylan las Basement Tapes y en 1968 sacaron su propio disco, Music from Big Pink, con “The Weight”.",
      "Mezclaban country, gospel, soul y folk con tres voces distintas, las de Levon Helm, Rick Danko y Richard Manuel, y canciones que sonaban a otra época. Se despidieron en 1976 con un concierto en San Francisco con muchos invitados, que Martin Scorsese filmó en The Last Waltz."
    ],
    "nota": "La lista va en orden cronológico. “I Shall Be Released” es una canción de Bob Dylan; la canta Richard Manuel en falsete.",
    "canciones": [
      {
        "titulo": "The Weight",
        "disco": "Music from Big Pink",
        "anio": 1968
      },
      {
        "titulo": "I Shall Be Released",
        "disco": "Music from Big Pink",
        "anio": 1968
      },
      {
        "titulo": "It Makes No Difference",
        "disco": "Northern Lights – Southern Cross",
        "anio": 1975
      }
    ]
  },
  {
    "id": "the-black-crowes",
    "nombre": "The Black Crowes",
    "pais": "Estados Unidos",
    "ciudad": "Atlanta, Georgia",
    "anios": "1984 – 2015 · 2019 – presente",
    "genero": "Southern rock, blues rock, hard rock",
    "integrantes": [
      "Chris Robinson (voz)",
      "Rich Robinson (guitarra)",
      "Steve Gorman (batería)",
      "Johnny Colt (bajo)",
      "Marc Ford (guitarra)",
      "Eddie Harsch (teclados)"
    ],
    "hero": "img/the-black-crowes.jpg",
    "heroPos": "center 30%",
    "bajada": "Los hermanos Robinson y el rock sureño de los setenta, en plenos noventa.",
    "descripcion": [
      "The Black Crowes nació en Atlanta alrededor de los hermanos Chris y Rich Robinson. En 1990, cuando todo era hair metal o grunge, sacaron Shake Your Money Maker, un disco que sonaba a los Rolling Stones y a los Faces, con éxitos como su versión de “Hard to Handle” y la balada “She Talks to Angels”.",
      "Con The Southern Harmony and Musical Companion (1992) llegaron al número uno en Estados Unidos. Las peleas entre los hermanos los separaron varias veces, pero en 2019 volvieron a juntarse y siguen tocando."
    ],
    "nota": "La lista va en orden cronológico. “Hard to Handle” es una canción de Otis Redding.",
    "canciones": [
      {
        "titulo": "Twice as Hard",
        "disco": "Shake Your Money Maker",
        "anio": 1990
      },
      {
        "titulo": "Hard to Handle",
        "disco": "Shake Your Money Maker",
        "anio": 1990
      },
      {
        "titulo": "She Talks to Angels",
        "disco": "Shake Your Money Maker",
        "anio": 1990
      },
      {
        "titulo": "Remedy",
        "disco": "The Southern Harmony and Musical Companion",
        "anio": 1992
      }
    ]
  },
  {
    "id": "the-black-keys",
    "nombre": "The Black Keys",
    "pais": "Estados Unidos",
    "ciudad": "Akron, Ohio",
    "anios": "2001 – presente",
    "genero": "Garage rock, blues rock",
    "integrantes": [
      "Dan Auerbach (voz, guitarra)",
      "Patrick Carney (batería)"
    ],
    "hero": "img/the-black-keys.jpg",
    "heroPos": "center 35%",
    "bajada": "Un guitarrista y un baterista de Ohio, con el blues sucio y crudo.",
    "descripcion": [
      "The Black Keys es el dúo de Dan Auerbach y Patrick Carney, dos amigos de la infancia de Akron, Ohio. Empezaron en 2001 grabando en el sótano de Carney un blues rock crudo y de garage, y durante años tocaron en bares chicos con una camioneta como única gira.",
      "El salto llegó con Brothers (2010) y sobre todo con El Camino (2011), producido junto a Danger Mouse, con “Lonely Boy” y “Gold on the Ceiling”, que los llevó a llenar estadios y a ganar varios Grammy. Auerbach es además productor de muchos artistas de blues y country."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Lonely Boy",
        "disco": "El Camino",
        "anio": 2011
      },
      {
        "titulo": "Gold on the Ceiling",
        "disco": "El Camino",
        "anio": 2011
      },
      {
        "titulo": "Wild Child",
        "disco": "Dropout Boogie",
        "anio": 2022
      }
    ]
  },
  {
    "id": "the-cars",
    "nombre": "The Cars",
    "pais": "Estados Unidos",
    "ciudad": "Boston, Massachusetts",
    "anios": "1976 – 1988 · 2010 – 2011",
    "genero": "New wave, power pop",
    "integrantes": [
      "Ric Ocasek (voz, guitarra)",
      "Benjamin Orr (bajo, voz)",
      "Elliot Easton (guitarra)",
      "Greg Hawkes (teclados)",
      "David Robinson (batería)"
    ],
    "hero": "img/the-cars.jpg",
    "heroPos": "center 30%",
    "bajada": "Guitarras de rock y sintetizadores: la new wave hecha en Boston.",
    "descripcion": [
      "The Cars se formó en Boston en 1976 alrededor de Ric Ocasek, que escribía las canciones, y Benjamin Orr, que compartía la voz. Su primer disco, The Cars (1978), mezclaba guitarras de rock con sintetizadores y estribillos pegadizos, y casi todas sus canciones, como “Just What I Needed”, sonaron en la radio.",
      "Con Heartbeat City (1984) y sus videos llegaron a lo más alto en MTV: “You Might Think” ganó el primer premio al Video del Año, y “Drive”, cantada por Orr, se volvió un himno cuando sonó en el Live Aid de 1985. Orr murió en 2000 y Ocasek en 2019."
    ],
    "nota": "La lista va en orden cronológico. “Just What I Needed” y “Drive” las canta Benjamin Orr.",
    "canciones": [
      {
        "titulo": "Just What I Needed",
        "disco": "The Cars",
        "anio": 1978
      },
      {
        "titulo": "You Might Think",
        "disco": "Heartbeat City",
        "anio": 1984
      },
      {
        "titulo": "Drive",
        "disco": "Heartbeat City",
        "anio": 1984
      }
    ]
  },
  {
    "id": "the-clash",
    "nombre": "The Clash",
    "pais": "Reino Unido",
    "ciudad": "Londres",
    "anios": "1976 – 1986",
    "genero": "Punk rock, post-punk, reggae",
    "integrantes": [
      "Joe Strummer (voz, guitarra)",
      "Mick Jones (guitarra, voz)",
      "Paul Simonon (bajo)",
      "Topper Headon (batería)"
    ],
    "hero": "img/the-clash.jpg",
    "heroPos": "center 30%",
    "bajada": "“La única banda que importa”: el punk con conciencia política.",
    "descripcion": [
      "The Clash se formó en Londres en 1976, en plena explosión del punk, con Joe Strummer y Mick Jones como compositores. A diferencia de otras bandas de la época, sus letras hablaban de política, desempleo y racismo, y muy pronto mezclaron el punk con reggae, ska, rockabilly y funk.",
      "London Calling (1979), un disco doble, está entre los mejores de la historia del rock. Después vinieron el experimental Sandinista! y Combat Rock (1982), con “Rock the Casbah” y “Should I Stay or Should I Go”, que fueron sus mayores éxitos en Estados Unidos. Las peleas internas terminaron con la banda en 1986. Strummer murió en 2002."
    ],
    "nota": "La lista va en orden cronológico. “Train in Vain” no figuraba en la tapa de London Calling: se agregó a último momento como tema oculto. “Should I Stay or Should I Go” la canta Mick Jones.",
    "canciones": [
      {
        "titulo": "London Calling",
        "disco": "London Calling",
        "anio": 1979
      },
      {
        "titulo": "Train in Vain (Stand by Me)",
        "disco": "London Calling",
        "anio": 1979
      },
      {
        "titulo": "The Magnificent Seven",
        "disco": "Sandinista!",
        "anio": 1980
      },
      {
        "titulo": "Rock the Casbah",
        "disco": "Combat Rock",
        "anio": 1982
      },
      {
        "titulo": "Should I Stay or Should I Go",
        "disco": "Combat Rock",
        "anio": 1982
      }
    ]
  },
  {
    "id": "the-dave-clark-five",
    "nombre": "The Dave Clark Five",
    "pais": "Reino Unido",
    "ciudad": "Tottenham, Londres",
    "anios": "1958 – 1970",
    "genero": "Beat, pop rock",
    "integrantes": [
      "Dave Clark (batería)",
      "Mike Smith (voz, teclados)",
      "Lenny Davidson (guitarra)",
      "Rick Huxley (bajo)",
      "Denis Payton (saxo)"
    ],
    "hero": "img/the-dave-clark-five.jpg",
    "heroPos": "center 35%",
    "bajada": "El “sonido Tottenham” que le disputó a los Beatles la Invasión Británica.",
    "descripcion": [
      "The Dave Clark Five se formó en el barrio londinense de Tottenham, liderado por el baterista Dave Clark, que además producía los discos y manejaba el negocio, algo muy raro para la época. Con la voz potente de Mike Smith, un saxo y una batería bien al frente, en 1964 “Glad All Over” desplazó a los Beatles del número uno en Inglaterra.",
      "Ese mismo año fueron la segunda banda británica, después de los Beatles, en hacer una gira por Estados Unidos, y se presentaron más veces que nadie en el show de Ed Sullivan. “Because”, una balada escrita por Clark, fue uno de sus mayores éxitos en América. Se separaron en 1970 y en 2008 entraron al Salón de la Fama del Rock."
    ],
    "nota": "La lista va en orden cronológico. “I Need You, I Love You” salió como lado B de “Because” en algunos países.",
    "canciones": [
      {
        "titulo": "Because",
        "disco": "American Tour",
        "anio": 1964
      },
      {
        "titulo": "I Cried Over You",
        "disco": "American Tour",
        "anio": 1964
      },
      {
        "titulo": "I Need You, I Love You",
        "disco": "Simple · lado B de “Because”",
        "anio": 1964
      },
      {
        "titulo": "’Til the Right One Comes Along",
        "disco": "Weekend in London",
        "anio": 1965
      }
    ]
  },
  {
    "id": "the-deep-dark-woods",
    "nombre": "The Deep Dark Woods",
    "pais": "Canadá",
    "ciudad": "Saskatoon, Saskatchewan",
    "anios": "2005 – presente",
    "genero": "Folk, alt-country, Americana",
    "integrantes": [
      "Ryan Boldt (voz, guitarra)",
      "Geoff Hilhorst (teclados)",
      "Mike Silverman (batería)",
      "Burke Barlow (guitarra)",
      "Chris Mason (bajo)"
    ],
    "hero": "img/the-deep-dark-woods.jpg",
    "heroPos": "center 30%",
    "bajada": "Baladas antiguas y folk oscuro desde las praderas canadienses.",
    "descripcion": [
      "The Deep Dark Woods nació en 2005 en Saskatoon, en las praderas del centro de Canadá, alrededor del cantante y compositor Ryan Boldt. Su música mezcla el country y el folk de los sesenta y setenta con viejas baladas tradicionales británicas y estadounidenses, con una voz melancólica y un órgano siempre presente.",
      "Con Winter Hours (2009) y The Place I Left Behind (2011) ganaron premios en Canadá y empezaron a girar por Estados Unidos y Europa. Boldt también grabó discos solistas de baladas tradicionales, y la banda sigue sacando discos, como Yarrow (2017), Changing Faces (2021) y The Circle Remains (2025)."
    ],
    "nota": "La lista va en orden cronológico. “Everything Reminds Me” la canta junto a Kacy Clayton.",
    "canciones": [
      {
        "titulo": "The Banks of the Leopold Canal",
        "disco": "The Place I Left Behind",
        "anio": 2011
      },
      {
        "titulo": "Fallen Leaves",
        "disco": "Yarrow",
        "anio": 2017
      },
      {
        "titulo": "Teardrops Fell",
        "disco": "Yarrow",
        "anio": 2017
      },
      {
        "titulo": "Everything Reminds Me",
        "disco": "Changing Faces",
        "anio": 2021
      }
    ]
  },
  {
    "id": "the-everly-brothers",
    "nombre": "The Everly Brothers",
    "pais": "Estados Unidos",
    "ciudad": "Kentucky · Nashville, Tennessee",
    "anios": "1956 – 1973 · 1983 – 2005",
    "genero": "Rock and roll, country, pop",
    "integrantes": [
      "Don Everly (voz, guitarra)",
      "Phil Everly (voz, guitarra)"
    ],
    "hero": "img/the-everly-brothers.jpg",
    "heroPos": "center 30%",
    "bajada": "Las dos voces que enseñaron a cantar a los Beatles, Simon & Garfunkel y los Byrds.",
    "descripcion": [
      "Don y Phil Everly crecieron cantando en el programa de radio de sus padres, músicos country de Kentucky. A fines de los cincuenta, ya en Nashville, mezclaron las armonías cerradas del country con el rock and roll y llenaron las listas con “Bye Bye Love”, “Wake Up Little Susie”, “All I Have to Do Is Dream” y “Cathy’s Clown”.",
      "Su forma de cantar a dos voces influyó directamente en los Beatles, Simon & Garfunkel, los Hollies y los Byrds. Las tensiones entre los hermanos los separaron en 1973, en pleno escenario, y recién volvieron a cantar juntos diez años después. Fueron de los primeros en entrar al Salón de la Fama del Rock, en 1986."
    ],
    "nota": "“Love Hurts”, de Boudleaux Bryant, la grabaron primero ellos; después la hicieron famosa Roy Orbison, Gram Parsons con Emmylou Harris y Nazareth.",
    "canciones": [
      {
        "titulo": "Love Hurts",
        "disco": "A Date with the Everly Brothers",
        "anio": 1960
      }
    ]
  },
  {
    "id": "the-guess-who",
    "nombre": "The Guess Who",
    "pais": "Canadá",
    "ciudad": "Winnipeg, Manitoba",
    "anios": "1965 – 1975 · reuniones posteriores",
    "genero": "Rock, pop rock",
    "integrantes": [
      "Burton Cummings (voz, teclados)",
      "Randy Bachman (guitarra)",
      "Jim Kale (bajo)",
      "Garry Peterson (batería)"
    ],
    "hero": "img/the-guess-who.jpg",
    "heroPos": "center 35%",
    "bajada": "La primera gran banda de rock canadiense en llegar al número uno en Estados Unidos.",
    "descripcion": [
      "The Guess Who nació en Winnipeg a mediados de los sesenta. Su nombre salió de una jugada de la discográfica, que mandó un simple a las radios con la pregunta “¿Adivinen quién?” para que creyeran que era una banda británica. Con la voz de Burton Cummings y la guitarra de Randy Bachman, en 1969 llegaron a las radios de Estados Unidos con “These Eyes” y “Laughing”.",
      "En 1970 “American Woman”, nacida de una improvisación en un concierto, fue la primera canción de una banda canadiense en llegar al número uno en Estados Unidos. Ese mismo año Bachman se fue de la banda y formó Bachman–Turner Overdrive."
    ],
    "nota": "La lista va en orden cronológico. “No Time” apareció en Canned Wheat y la banda la volvió a grabar para American Woman en 1970.",
    "canciones": [
      {
        "titulo": "Laughing",
        "disco": "Canned Wheat",
        "anio": 1969
      },
      {
        "titulo": "No Time",
        "disco": "Canned Wheat",
        "anio": 1969
      },
      {
        "titulo": "American Woman",
        "disco": "American Woman",
        "anio": 1970
      }
    ]
  },
  {
    "id": "the-head-and-the-heart",
    "nombre": "The Head and the Heart",
    "pais": "Estados Unidos",
    "ciudad": "Seattle, Washington",
    "anios": "2009 – presente",
    "genero": "Indie folk, folk rock",
    "integrantes": [
      "Jonathan Russell (voz, guitarra)",
      "Charity Rose Thielen (violín, voz)",
      "Kenny Hensley (piano)",
      "Chris Zasche (bajo)",
      "Tyler Williams (batería)",
      "Matt Gervais (guitarra)",
      "Josiah Johnson (voz, guitarra)"
    ],
    "hero": "img/the-head-and-the-heart.jpg",
    "heroPos": "center 30%",
    "bajada": "Indie folk de Seattle hecho de armonías, piano y violín.",
    "descripcion": [
      "The Head and the Heart se formó en Seattle en 2009, cuando Jonathan Russell y Josiah Johnson se conocieron en las noches de micrófono abierto de un bar. Sumaron a la violinista Charity Rose Thielen y al pianista Kenny Hensley, y vendieron su primer disco a mano en los conciertos hasta que lo editó el sello Sub Pop.",
      "Con Let’s Be Still (2013) y Signs of Light (2016) pasaron de los bares a los grandes festivales, con canciones como “Rivers and Roads” y “All We Ever Knew”. Johnson dejó la banda en 2016 y volvió en 2022. Su disco más reciente es Aperture (2025)."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Another Story",
        "disco": "Let’s Be Still",
        "anio": 2013
      },
      {
        "titulo": "10,000 Weight in Gold",
        "disco": "Let’s Be Still",
        "anio": 2013
      },
      {
        "titulo": "Rhythm & Blues",
        "disco": "Signs of Light",
        "anio": 2016
      },
      {
        "titulo": "Colors",
        "disco": "Signs of Light",
        "anio": 2016
      },
      {
        "titulo": "Honeybee",
        "disco": "Living Mirage",
        "anio": 2019
      },
      {
        "titulo": "Arrow",
        "disco": "Aperture",
        "anio": 2025
      }
    ]
  },
  {
    "id": "the-honeydrippers",
    "nombre": "The Honeydrippers",
    "pais": "Reino Unido",
    "ciudad": "Inglaterra",
    "anios": "1981 – 1985",
    "genero": "Rhythm and blues, rock and roll",
    "integrantes": [
      "Robert Plant (voz)",
      "Jimmy Page (guitarra)",
      "Jeff Beck (guitarra)",
      "Nile Rodgers (guitarra)"
    ],
    "hero": "img/the-honeydrippers.jpg",
    "heroPos": "center 25%",
    "bajada": "El homenaje de Robert Plant y Jimmy Page al rhythm and blues de los cincuenta.",
    "descripcion": [
      "The Honeydrippers fue un proyecto que Robert Plant armó en 1981, después de la separación de Led Zeppelin, para tocar en bares chicos las canciones de rhythm and blues y rock and roll que escuchaba de joven. El nombre venía de un viejo pianista de blues, Roosevelt “The Honeydripper” Sykes.",
      "En 1984 grabaron un EP de cinco canciones, The Honeydrippers: Volume One, con Jimmy Page, Jeff Beck y Nile Rodgers como invitados. Su versión de “Sea of Love”, una balada de Phil Phillips de 1959, llegó al tercer puesto en Estados Unidos y fue el mayor éxito de Plant fuera de Led Zeppelin. Nunca hubo un “Volume Two”."
    ],
    "nota": "“Sea of Love” es una canción de Phil Phillips, de 1959.",
    "canciones": [
      {
        "titulo": "Sea of Love",
        "disco": "The Honeydrippers: Volume One",
        "anio": 1984
      }
    ]
  },
  {
    "id": "the-isley-brothers",
    "nombre": "The Isley Brothers",
    "pais": "Estados Unidos",
    "ciudad": "Cincinnati, Ohio",
    "anios": "1954 – presente",
    "genero": "Soul, R&B, funk",
    "integrantes": [
      "Ronald Isley (voz)",
      "O’Kelly Isley Jr. (voz)",
      "Rudolph Isley (voz)",
      "Ernie Isley (guitarra)",
      "Marvin Isley (bajo)",
      "Chris Jasper (teclados)"
    ],
    "hero": "img/the-isley-brothers.jpg",
    "heroPos": "center 25%",
    "bajada": "Siete décadas de soul, de “Shout” al funk de los setenta.",
    "descripcion": [
      "The Isley Brothers empezó en Cincinnati en los años cincuenta como un trío vocal de gospel formado por los hermanos O’Kelly, Rudolph y Ronald. En 1959 grabaron “Shout”, un tema lleno de energía, con llamadas y respuestas de iglesia, que se volvió un clásico de las fiestas y que después versionaron los Beatles y muchos otros. En 1966 pasaron por Motown con “This Old Heart of Mine”.",
      "En los setenta se sumaron los hermanos menores Ernie y Marvin y su cuñado Chris Jasper, y el grupo se volvió una banda de funk y soul con temas como “It’s Your Thing” y “That Lady”. Un joven Jimi Hendrix fue su guitarrista a mediados de los sesenta. Ronald Isley sigue cantando."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Shout (Parts 1 & 2)",
        "disco": "Shout!",
        "anio": 1959
      },
      {
        "titulo": "This Old Heart of Mine (Is Weak for You)",
        "disco": "This Old Heart of Mine",
        "anio": 1966
      }
    ]
  },
  {
    "id": "the-j-geils-band",
    "nombre": "The J. Geils Band",
    "pais": "Estados Unidos",
    "ciudad": "Boston, Massachusetts",
    "anios": "1967 – 1985 · reuniones posteriores",
    "genero": "Rock, blues rock, new wave",
    "integrantes": [
      "Peter Wolf (voz)",
      "J. Geils (guitarra)",
      "Magic Dick (armónica)",
      "Seth Justman (teclados)",
      "Danny Klein (bajo)",
      "Stephen Jo Bladd (batería)"
    ],
    "hero": "img/the-j-geils-band.jpg",
    "heroPos": "center 25%",
    "bajada": "La banda de bar de Boston que llegó al número uno.",
    "descripcion": [
      "The J. Geils Band se formó en Boston a fines de los sesenta como una banda de blues y rhythm and blues, con el guitarrista J. Geils, la armónica de Magic Dick y el carismático cantante Peter Wolf, que había sido disc jockey. Durante los setenta fueron famosos por sus conciertos enérgicos.",
      "A comienzos de los ochenta, con el tecladista Seth Justman como compositor principal, se acercaron a la new wave y con Freeze-Frame (1981) llegaron al número uno, gracias a “Centerfold” y “Freeze-Frame”. “Angel in Blue”, del mismo disco, es su balada más recordada. Wolf se fue en 1983 y la banda se separó poco después."
    ],
    "nota": "",
    "canciones": [
      {
        "titulo": "Angel in Blue",
        "disco": "Freeze-Frame",
        "anio": 1981
      }
    ]
  },
  {
    "id": "john-cale",
    "nombre": "John Cale",
    "pais": "Reino Unido",
    "ciudad": "Garnant, Gales",
    "anios": "1963 – presente",
    "genero": "Art rock, rock experimental, música clásica",
    "integrantes": [
      "John Cale (voz, viola, piano, bajo)"
    ],
    "hero": "img/john-cale.jpg",
    "heroPos": "center 35%",
    "bajada": "El galés de la viola eléctrica, cofundador de The Velvet Underground.",
    "descripcion": [
      "John Cale nació en 1942 en un pueblo minero de Gales y estudió música clásica antes de viajar a Nueva York, donde trabajó con compositores de vanguardia. En 1965 fundó con Lou Reed The Velvet Underground, a la que le aportó su viola eléctrica y su gusto por el ruido y la experimentación.",
      "Después de dejar la banda en 1968 hizo una larga carrera solista que va de las canciones pop de Vintage Violence (1970) a la elegancia orquestal de Paris 1919 (1973), considerado su mejor disco. Fue también productor clave de los primeros discos de The Stooges, Patti Smith y Nico, y sigue grabando a los más de ochenta años."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Big White Cloud",
        "disco": "Vintage Violence",
        "anio": 1970
      },
      {
        "titulo": "Paris 1919",
        "disco": "Paris 1919",
        "anio": 1973
      },
      {
        "titulo": "You Know More Than I Know",
        "disco": "Fear",
        "anio": 1974
      }
    ]
  },
  {
    "id": "the-killers",
    "nombre": "The Killers",
    "pais": "Estados Unidos",
    "ciudad": "Las Vegas, Nevada",
    "anios": "2001 – presente",
    "genero": "Rock alternativo, new wave, indie rock",
    "integrantes": [
      "Brandon Flowers (voz, teclados)",
      "Dave Keuning (guitarra)",
      "Mark Stoermer (bajo)",
      "Ronnie Vannucci Jr. (batería)"
    ],
    "hero": "img/the-killers.jpg",
    "heroPos": "center 25%",
    "bajada": "Las Vegas, sintetizadores de los ochenta y estribillos de estadio.",
    "descripcion": [
      "The Killers se formó en Las Vegas en 2001, cuando Brandon Flowers respondió un aviso del guitarrista Dave Keuning. Su primer disco, Hot Fuss (2004), mezclaba la new wave británica de los ochenta con el rock de estadio, y trajo “Mr. Brightside”, “Somebody Told Me” y “All These Things That I’ve Done”.",
      "Con Sam’s Town (2006) miraron hacia Bruce Springsteen y el rock estadounidense, y siguieron llenando estadios durante dos décadas. En 2021 sacaron Pressure Machine, un disco más tranquilo y acústico sobre el pueblo de Nephi, en Utah, donde creció Flowers."
    ],
    "nota": "La lista va en orden cronológico. “Quiet Town” y “Desperate Things” son de Pressure Machine, el disco sobre el pueblo de la infancia de Brandon Flowers.",
    "canciones": [
      {
        "titulo": "All These Things That I’ve Done",
        "disco": "Hot Fuss",
        "anio": 2004
      },
      {
        "titulo": "Quiet Town",
        "disco": "Pressure Machine",
        "anio": 2021
      },
      {
        "titulo": "Desperate Things",
        "disco": "Pressure Machine",
        "anio": 2021
      }
    ]
  },
  {
    "id": "the-kinks",
    "nombre": "The Kinks",
    "pais": "Reino Unido",
    "ciudad": "Muswell Hill, Londres",
    "anios": "1963 – 1996",
    "genero": "Rock, pop barroco, hard rock",
    "integrantes": [
      "Ray Davies (voz, guitarra)",
      "Dave Davies (guitarra, voz)",
      "Pete Quaife (bajo)",
      "Mick Avory (batería)",
      "John Dalton (bajo)",
      "John Gosling (teclados)"
    ],
    "hero": "img/the-kinks.jpg",
    "heroPos": "center 30%",
    "bajada": "El riff que inventó el hard rock y el cronista más inglés del rock.",
    "descripcion": [
      "The Kinks se formó en el barrio de Muswell Hill, en Londres, alrededor de los hermanos Ray y Dave Davies. En 1964 “You Really Got Me”, con un riff distorsionado que Dave consiguió tajeando el parlante de su amplificador, llegó al número uno y se considera uno de los primeros temas de hard rock.",
      "Ray Davies se convirtió después en uno de los grandes compositores de su generación, con canciones irónicas y nostálgicas sobre la vida inglesa como “Sunny Afternoon” y “Waterloo Sunset”. Lola Versus Powerman (1970) es un disco conceptual sobre la industria musical. Las peleas entre los hermanos Davies fueron legendarias y la banda se separó en 1996."
    ],
    "nota": "La lista va en orden cronológico. “Strangers” la escribió y la canta Dave Davies. “God’s Children” es de la banda sonora de la película Percy.",
    "canciones": [
      {
        "titulo": "You Really Got Me",
        "disco": "Kinks",
        "anio": 1964
      },
      {
        "titulo": "Sunny Afternoon",
        "disco": "Face to Face",
        "anio": 1966
      },
      {
        "titulo": "Strangers",
        "disco": "Lola Versus Powerman and the Moneygoround, Part One",
        "anio": 1970
      },
      {
        "titulo": "This Time Tomorrow",
        "disco": "Lola Versus Powerman and the Moneygoround, Part One",
        "anio": 1970
      },
      {
        "titulo": "A Long Way from Home",
        "disco": "Lola Versus Powerman and the Moneygoround, Part One",
        "anio": 1970
      },
      {
        "titulo": "Apeman",
        "disco": "Lola Versus Powerman and the Moneygoround, Part One",
        "anio": 1970
      },
      {
        "titulo": "Powerman",
        "disco": "Lola Versus Powerman and the Moneygoround, Part One",
        "anio": 1970
      },
      {
        "titulo": "God’s Children",
        "disco": "Percy (banda sonora)",
        "anio": 1971
      }
    ]
  },
  {
    "id": "the-lumineers",
    "nombre": "The Lumineers",
    "pais": "Estados Unidos",
    "ciudad": "Denver, Colorado",
    "anios": "2005 – presente",
    "genero": "Folk rock, indie folk, Americana",
    "integrantes": [
      "Wesley Schultz (voz, guitarra)",
      "Jeremiah Fraites (batería, piano)",
      "Neyla Pekarek (chelo, voz)"
    ],
    "hero": "img/the-lumineers.jpg",
    "heroPos": "center 30%",
    "bajada": "El folk de pisotón y estribillo coreado que conquistó la radio.",
    "descripcion": [
      "The Lumineers nació en Nueva Jersey, donde Wesley Schultz y Jeremiah Fraites empezaron a componer juntos tras la muerte por sobredosis de Josh, el hermano de Fraites y mejor amigo de Schultz. En 2009 se mudaron a Denver, sumaron a la chelista Neyla Pekarek y en 2012 su primer disco, con “Ho Hey” y “Stubborn Love”, vendió millones de copias.",
      "Siguieron con Cleopatra (2016), que llegó al número uno, y III (2019), un disco conceptual sobre una familia atravesada por las adicciones. Pekarek dejó la banda en 2018, y Schultz y Fraites siguieron con Brightside (2022) y Automatic (2025)."
    ],
    "nota": "La lista va en orden cronológico. “Gale Song” se grabó para la película Los juegos del hambre: En llamas y después se sumó a Cleopatra.",
    "canciones": [
      {
        "titulo": "Ho Hey",
        "disco": "The Lumineers",
        "anio": 2012
      },
      {
        "titulo": "Stubborn Love",
        "disco": "The Lumineers",
        "anio": 2012
      },
      {
        "titulo": "Sleep on the Floor",
        "disco": "Cleopatra",
        "anio": 2016
      },
      {
        "titulo": "Cleopatra",
        "disco": "Cleopatra",
        "anio": 2016
      },
      {
        "titulo": "Gale Song",
        "disco": "Cleopatra",
        "anio": 2016
      },
      {
        "titulo": "Long Way from Home",
        "disco": "Cleopatra",
        "anio": 2016
      },
      {
        "titulo": "My Eyes",
        "disco": "Cleopatra",
        "anio": 2016
      },
      {
        "titulo": "Patience",
        "disco": "Cleopatra",
        "anio": 2016
      },
      {
        "titulo": "It Wasn’t Easy to Be Happy for You",
        "disco": "III",
        "anio": 2019
      },
      {
        "titulo": "Big Shot",
        "disco": "Brightside",
        "anio": 2022
      },
      {
        "titulo": "Automatic",
        "disco": "Automatic",
        "anio": 2025
      },
      {
        "titulo": "So Long",
        "disco": "Automatic",
        "anio": 2025
      }
    ]
  },
  {
    "id": "the-turtles",
    "nombre": "The Turtles",
    "pais": "Estados Unidos",
    "ciudad": "Los Ángeles, California",
    "anios": "1965 – 1970 · reuniones posteriores",
    "genero": "Pop, folk rock",
    "integrantes": [
      "Howard Kaylan (voz)",
      "Mark Volman (voz)",
      "Al Nichol (guitarra)",
      "Jim Tucker (guitarra)",
      "Chuck Portz (bajo)",
      "Jim Pons (bajo)",
      "John Barbata (batería)"
    ],
    "hero": "img/the-turtles.jpg",
    "heroPos": "center 30%",
    "bajada": "El pop soleado de Los Ángeles y una de las canciones más felices de la historia.",
    "descripcion": [
      "The Turtles nació en el sur de California a mediados de los sesenta, liderado por las voces de Howard Kaylan y Mark Volman. Empezaron en el folk rock, con una versión de “It Ain’t Me Babe” de Bob Dylan, y en 1967 llegaron al número uno con “Happy Together”, que desplazó a los Beatles de la cima de las listas estadounidenses.",
      "La canción, escrita por Garry Bonner y Alan Gordon, había sido rechazada por muchas bandas antes de llegar a ellos. Después de la separación, Kaylan y Volman se sumaron a The Mothers of Invention de Frank Zappa y cantaron en discos de T. Rex y Bruce Springsteen, con el nombre de Flo & Eddie."
    ],
    "nota": "",
    "canciones": [
      {
        "titulo": "Happy Together",
        "disco": "Happy Together",
        "anio": 1967
      }
    ]
  },
  {
    "id": "tyler-hilton",
    "nombre": "Tyler Hilton",
    "pais": "Estados Unidos",
    "ciudad": "Palm Springs, California",
    "anios": "2000 – presente",
    "genero": "Pop rock, cantautor",
    "integrantes": [
      "Tyler Hilton (voz, guitarra, piano)"
    ],
    "hero": "img/tyler-hilton.jpg",
    "heroPos": "center 25%",
    "bajada": "El cantautor californiano que fue Chris Keller en One Tree Hill y Elvis en el cine.",
    "descripcion": [
      "Tyler Hilton nació en Palm Springs, California, y creció en el desierto de Bermuda Dunes. Grabó su primer disco a los 17 años y en 2004 sacó The Tracks of Tyler Hilton con un sello grande. Ese mismo año empezó a interpretar a Chris Keller, un músico arrogante, en la serie One Tree Hill.",
      "En 2005 hizo de un joven Elvis Presley en la película Walk the Line, sobre la vida de Johnny Cash. Siguió grabando discos de canciones con piano y guitarra acústica, como Forget the Storm (2012), de donde sale “Kicking My Heels”, que estrenó en un capítulo de One Tree Hill."
    ],
    "nota": "",
    "canciones": [
      {
        "titulo": "Kicking My Heels",
        "disco": "Forget the Storm",
        "anio": 2012
      }
    ]
  },
  {
    "id": "the-verve",
    "nombre": "The Verve",
    "pais": "Reino Unido",
    "ciudad": "Wigan, Inglaterra",
    "anios": "1990 – 1999 · 2007 – 2009",
    "genero": "Rock alternativo, britpop, rock psicodélico",
    "integrantes": [
      "Richard Ashcroft (voz, guitarra)",
      "Nick McCabe (guitarra)",
      "Simon Jones (bajo)",
      "Peter Salisbury (batería)",
      "Simon Tong (guitarra, teclados)"
    ],
    "hero": "img/the-verve.jpg",
    "heroPos": "center 25%",
    "bajada": "Los violines de “Bitter Sweet Symphony” y la voz de Richard Ashcroft.",
    "descripcion": [
      "The Verve se formó en 1990 en Wigan, en el norte de Inglaterra, alrededor del cantante Richard Ashcroft y el guitarrista Nick McCabe. Sus primeros discos eran de un rock psicodélico y expansivo, y la banda se separó por primera vez en 1995 por peleas internas y problemas con las drogas.",
      "Volvieron en 1997 con Urban Hymns, uno de los discos británicos más vendidos de la década, con “Bitter Sweet Symphony”, “The Drugs Don’t Work” y “Lucky Man”. Por usar unos violines tomados de una versión orquestal de los Rolling Stones, los derechos de “Bitter Sweet Symphony” quedaron en manos de Mick Jagger y Keith Richards durante más de veinte años, hasta que se los devolvieron a Ashcroft en 2019."
    ],
    "nota": "La lista va en orden cronológico.",
    "canciones": [
      {
        "titulo": "Bitter Sweet Symphony",
        "disco": "Urban Hymns",
        "anio": 1997
      },
      {
        "titulo": "Lucky Man",
        "disco": "Urban Hymns",
        "anio": 1997
      }
    ]
  },
  {
    "id": "the-walker-brothers",
    "nombre": "The Walker Brothers",
    "pais": "Estados Unidos",
    "ciudad": "Los Ángeles · Londres",
    "anios": "1964 – 1968 · 1975 – 1978",
    "genero": "Pop barroco, baladas",
    "integrantes": [
      "Scott Walker (voz, bajo)",
      "John Walker (voz, guitarra)",
      "Gary Walker (batería)"
    ],
    "hero": "img/the-walker-brothers.jpg",
    "heroPos": "center 30%",
    "bajada": "Tres estadounidenses que triunfaron en Londres con baladas enormes y la voz de Scott Walker.",
    "descripcion": [
      "The Walker Brothers no eran hermanos ni se llamaban Walker: Scott Engel, John Maus y Gary Leeds eran tres músicos de Los Ángeles que adoptaron el mismo apellido artístico y en 1965 se mudaron a Londres. Allí, con producciones de muro de sonido al estilo de Phil Spector, llegaron al número uno con “Make It Easy on Yourself” y “The Sun Ain’t Gonna Shine Anymore”.",
      "En Inglaterra tuvieron un fanatismo comparable al de los Beatles, pero la presión llevó a Scott Walker a dejar la banda en 1967 y emprender una carrera solista de culto. Se reunieron a mediados de los setenta y grabaron Lines (1976) y No Regrets, con versiones de canciones country y soft rock."
    ],
    "nota": "La lista va en orden cronológico. “The Sun Ain’t Gonna Shine Anymore” salió como simple. “We’re All Alone” es una canción de Boz Scaggs.",
    "canciones": [
      {
        "titulo": "The Sun Ain’t Gonna Shine Anymore",
        "disco": "Simple (fuera de álbum)",
        "anio": 1966
      },
      {
        "titulo": "Lines",
        "disco": "Lines",
        "anio": 1976
      },
      {
        "titulo": "We’re All Alone",
        "disco": "Lines",
        "anio": 1976
      }
    ]
  },
  {
    "id": "the-war-on-drugs",
    "nombre": "The War on Drugs",
    "pais": "Estados Unidos",
    "ciudad": "Filadelfia, Pensilvania",
    "anios": "2005 – presente",
    "genero": "Indie rock, heartland rock, rock psicodélico",
    "integrantes": [
      "Adam Granduciel (voz, guitarra)",
      "David Hartley (bajo)",
      "Robbie Bennett (teclados)",
      "Charlie Hall (batería)",
      "Jon Natchez (saxo, teclados)",
      "Anthony LaMarca (guitarra)"
    ],
    "hero": "img/the-war-on-drugs.jpg",
    "heroPos": "center 30%",
    "bajada": "Springsteen y Dylan pasados por guitarras infinitas y sintetizadores de ensueño.",
    "descripcion": [
      "The War on Drugs se formó en Filadelfia en 2005 alrededor de Adam Granduciel, junto a Kurt Vile, que después siguió su propio camino. Su sonido toma el rock de ruta de Bruce Springsteen, Tom Petty y Bob Dylan y lo envuelve en capas de guitarras, teclados y ecos, con canciones largas que avanzan como un viaje.",
      "Lost in the Dream (2014), con “Red Eyes”, fue elegido entre los mejores discos de la década, y A Deeper Understanding (2017) les dio un Grammy al mejor disco de rock. Granduciel es conocido por trabajar durante años cada canción en el estudio."
    ],
    "nota": "",
    "canciones": [
      {
        "titulo": "Red Eyes",
        "disco": "Lost in the Dream",
        "anio": 2014
      }
    ]
  },
  {
    "id": "the-wonders",
    "nombre": "The Wonders",
    "pais": "Estados Unidos",
    "ciudad": "Erie, Pensilvania (ficticia)",
    "anios": "1964 (en la película) · 1996",
    "genero": "Pop rock, beat",
    "integrantes": [
      "Jimmy Mattingly II (voz, guitarra) · Johnathon Schaech",
      "Guy Patterson (batería) · Tom Everett Scott",
      "Lenny Haise (guitarra) · Steve Zahn",
      "El bajista (bajo) · Ethan Embry"
    ],
    "hero": "img/the-wonders.jpg",
    "heroPos": "center 30%",
    "bajada": "La banda de un solo éxito más famosa que nunca existió.",
    "descripcion": [
      "The Wonders es la banda ficticia de That Thing You Do! (1996), la película que escribió y dirigió Tom Hanks. Cuenta la historia de cuatro chicos de Erie, Pensilvania, que en 1964 graban una canción que se vuelve un éxito nacional y viven en pocos meses el ascenso y la caída de una banda de un solo hit.",
      "Las canciones se compusieron para la película imitando el sonido de la Invasión Británica. “That Thing You Do!”, escrita por Adam Schlesinger, de Fountains of Wayne, y cantada por Mike Viola, llegó a las listas reales de Estados Unidos e Inglaterra y fue nominada al Oscar a la mejor canción original."
    ],
    "nota": "Los nombres de los integrantes son los de los personajes, seguidos del actor que los interpreta. Tom Hanks hace de su mánager.",
    "canciones": [
      {
        "titulo": "That Thing You Do!",
        "disco": "That Thing You Do! (banda sonora)",
        "anio": 1996
      },
      {
        "titulo": "Little Wild One",
        "disco": "That Thing You Do! (banda sonora)",
        "anio": 1996
      }
    ]
  },
  {
    "id": "the-zombies",
    "nombre": "The Zombies",
    "pais": "Reino Unido",
    "ciudad": "St Albans, Inglaterra",
    "anios": "1961 – 1967 · 2004 – presente",
    "genero": "Pop barroco, beat, rock psicodélico",
    "integrantes": [
      "Colin Blunstone (voz)",
      "Rod Argent (teclados)",
      "Paul Atkinson (guitarra)",
      "Chris White (bajo)",
      "Hugh Grundy (batería)"
    ],
    "hero": "img/the-zombies.jpg",
    "heroPos": "center 30%",
    "bajada": "La voz susurrada de Colin Blunstone y el órgano de Rod Argent.",
    "descripcion": [
      "The Zombies se formó en St Albans, al norte de Londres, con compañeros de escuela. En 1964 su primer simple, “She’s Not There”, con el piano eléctrico de Rod Argent y la voz suave de Colin Blunstone, fue un éxito en Inglaterra y en Estados Unidos. Su primer disco, Begin Here (1965), mezclaba canciones propias con versiones de soul y rhythm and blues.",
      "En 1967 grabaron Odessey and Oracle, hoy considerado una obra maestra del pop psicodélico, pero la banda se separó antes de su lanzamiento. Paradójicamente, “Time of the Season”, de ese disco, se volvió un éxito en 1969, cuando ya no existían. Blunstone y Argent volvieron a tocar juntos en 2004."
    ],
    "nota": "La lista va en orden cronológico. “You’ve Really Got a Hold on Me” es de Smokey Robinson y en el disco aparece unida a “Bring It On Home to Me”, de Sam Cooke. “Can’t Nobody Love You” es de Solomon Burke.",
    "canciones": [
      {
        "titulo": "You’ve Really Got a Hold on Me",
        "disco": "Begin Here",
        "anio": 1965
      },
      {
        "titulo": "Can’t Nobody Love You",
        "disco": "Begin Here",
        "anio": 1965
      }
    ]
  },
  {
    "id": "wilson-pickett",
    "nombre": "Wilson Pickett",
    "pais": "Estados Unidos",
    "ciudad": "Prattville, Alabama",
    "anios": "1955 – 2004",
    "genero": "Soul, R&B",
    "integrantes": [
      "Wilson Pickett (voz)"
    ],
    "hero": "img/wilson-pickett.jpg",
    "heroPos": "center 25%",
    "bajada": "“The Wicked Pickett”: el grito más feroz del soul sureño.",
    "descripcion": [
      "Wilson Pickett nació en 1941 en Prattville, Alabama, y aprendió a cantar en el coro de la iglesia bautista. Ya en Detroit cantó gospel y después con el grupo The Falcons, y en 1963 empezó su carrera solista con “If You Need Me”, una balada que escribió él mismo.",
      "Al firmar con Atlantic grabó en los estudios Stax de Memphis y en Muscle Shoals, Alabama, con algunos de los mejores músicos del soul. Allí nacieron “In the Midnight Hour”, escrita junto al guitarrista Steve Cropper, “Land of 1000 Dances” y “Mustang Sally”. Su voz áspera y desbordada lo convirtió en uno de los grandes del soul. Entró al Salón de la Fama del Rock en 1991 y murió en 2006."
    ],
    "nota": "La lista va en orden cronológico. “In the Midnight Hour” salió primero en el disco de 1965 del mismo nombre y volvió a aparecer en The Exciting Wilson Pickett. “Something You Got” es una canción de Chris Kenner.",
    "canciones": [
      {
        "titulo": "If You Need Me",
        "disco": "It’s Too Late",
        "anio": 1963
      },
      {
        "titulo": "In the Midnight Hour",
        "disco": "In the Midnight Hour",
        "anio": 1965
      },
      {
        "titulo": "Land of 1000 Dances",
        "disco": "The Exciting Wilson Pickett",
        "anio": 1966
      },
      {
        "titulo": "634-5789 (Soulsville, U.S.A.)",
        "disco": "The Exciting Wilson Pickett",
        "anio": 1966
      },
      {
        "titulo": "Something You Got",
        "disco": "The Exciting Wilson Pickett",
        "anio": 1966
      },
      {
        "titulo": "Mustang Sally",
        "disco": "The Wicked Pickett",
        "anio": 1966
      }
    ]
  },
  {
    "id": "velvet-revolver",
    "nombre": "Velvet Revolver",
    "pais": "Estados Unidos",
    "ciudad": "Los Ángeles, California",
    "anios": "2002 – 2008 · reuniones posteriores",
    "genero": "Hard rock",
    "integrantes": [
      "Scott Weiland (voz)",
      "Slash (guitarra)",
      "Duff McKagan (bajo)",
      "Matt Sorum (batería)",
      "Dave Kushner (guitarra)"
    ],
    "hero": "img/velvet-revolver.jpg",
    "heroPos": "center 30%",
    "bajada": "Tres Guns N’ Roses y la voz de Stone Temple Pilots: un supergrupo de verdad.",
    "descripcion": [
      "Velvet Revolver nació en 2002, cuando Slash, Duff McKagan y Matt Sorum, ex Guns N’ Roses, se juntaron con el guitarrista Dave Kushner y buscaron un cantante durante meses. El elegido fue Scott Weiland, la voz de Stone Temple Pilots, que acababa de separarse de su banda.",
      "Su primer disco, Contraband (2004), debutó en el número uno en Estados Unidos y les dio un Grammy por “Slither”. “Fall to Pieces”, una balada sobre las adicciones de Weiland, fue su canción más emotiva. Después de Libertad (2007), las peleas y los problemas de Weiland terminaron con la banda en 2008. Weiland murió en 2015."
    ],
    "nota": "La lista va en orden cronológico. “Loving the Alien” es una canción propia, distinta de la de David Bowie que lleva el mismo nombre.",
    "canciones": [
      {
        "titulo": "Fall to Pieces",
        "disco": "Contraband",
        "anio": 2004
      },
      {
        "titulo": "Loving the Alien",
        "disco": "Contraband",
        "anio": 2004
      }
    ]
  },
  {
    "id": "the-cure",
    "nombre": "The Cure",
    "pais": "Reino Unido",
    "ciudad": "Crawley, Inglaterra",
    "anios": "1978 – presente",
    "genero": "Post-punk, rock gótico, new wave",
    "integrantes": [
      "Robert Smith (voz, guitarra)",
      "Simon Gallup (bajo)",
      "Porl Thompson (guitarra)",
      "Boris Williams (batería)",
      "Roger O’Donnell (teclados)",
      "Lol Tolhurst (batería, teclados)"
    ],
    "hero": "img/the-cure.jpg",
    "heroPos": "center 25%",
    "bajada": "El pelo revuelto y el lápiz labial corrido de Robert Smith: tristeza y pop en partes iguales.",
    "descripcion": [
      "The Cure se formó en Crawley, al sur de Londres, a fines de los setenta, alrededor de Robert Smith, su cantante, guitarrista y compositor. Empezaron en el post-punk con temas secos como “Boys Don’t Cry”, y a comienzos de los ochenta grabaron una trilogía oscura que los convirtió en referentes del rock gótico.",
      "Smith siempre alternó esa melancolía con canciones pop luminosas, como “Just Like Heaven” y “Friday I’m in Love”. Disintegration (1989), con “Pictures of You” y “Lovesong”, es considerado su obra maestra. Después de dieciséis años sin disco nuevo, en 2024 volvieron con Songs of a Lost World, que cierra con “Endsong”."
    ],
    "nota": "La lista va en orden cronológico. “Boys Don’t Cry” salió como simple en 1979 y quedó en el disco del mismo nombre de 1980. Robert Smith escribió “Lovesong” como regalo de bodas para su esposa, Mary.",
    "canciones": [
      {
        "titulo": "Boys Don’t Cry",
        "disco": "Boys Don’t Cry",
        "anio": 1980
      },
      {
        "titulo": "Just Like Heaven",
        "disco": "Kiss Me, Kiss Me, Kiss Me",
        "anio": 1987
      },
      {
        "titulo": "Pictures of You",
        "disco": "Disintegration",
        "anio": 1989
      },
      {
        "titulo": "Lovesong",
        "disco": "Disintegration",
        "anio": 1989
      },
      {
        "titulo": "Friday I’m in Love",
        "disco": "Wish",
        "anio": 1992
      },
      {
        "titulo": "Endsong",
        "disco": "Songs of a Lost World",
        "anio": 2024
      }
    ]
  },
  {
    "id": "the-offspring",
    "nombre": "The Offspring",
    "pais": "Estados Unidos",
    "ciudad": "Garden Grove, California",
    "anios": "1984 – presente",
    "genero": "Punk rock, pop punk, skate punk",
    "integrantes": [
      "Dexter Holland (voz, guitarra)",
      "Noodles (guitarra)",
      "Todd Morse (bajo)",
      "Brandon Pertzborn (batería)",
      "Greg K. (bajo)",
      "Ron Welty (batería)"
    ],
    "hero": "img/the-offspring.jpg",
    "heroPos": "center 30%",
    "bajada": "El punk californiano que llevó los estribillos de skate a las radios del mundo.",
    "descripcion": [
      "The Offspring se formó en el condado de Orange, California, en los ochenta, liderado por Dexter Holland, que en paralelo estudiaba un doctorado en biología molecular. Durante años tocaron en el circuito punk local, hasta que Smash (1994), editado por un sello independiente, vendió más de diez millones de copias gracias a “Come Out and Play” y “Self Esteem”.",
      "Con Americana (1998) y “Pretty Fly (for a White Guy)” se volvieron una de las bandas más populares del mundo, mezclando punk rápido con humor y crítica social. Siguieron grabando y girando sin pausa, y en 2024 sacaron Supercharged, con “Make It All Right”."
    ],
    "nota": "La lista va en orden cronológico. “Original Prankster” tiene la participación del rapero Redman. Las canciones repetidas en la lista quedaron una sola vez.",
    "canciones": [
      {
        "titulo": "Come Out and Play",
        "disco": "Smash",
        "anio": 1994
      },
      {
        "titulo": "Self Esteem",
        "disco": "Smash",
        "anio": 1994
      },
      {
        "titulo": "Pretty Fly (for a White Guy)",
        "disco": "Americana",
        "anio": 1998
      },
      {
        "titulo": "The Kids Aren’t Alright",
        "disco": "Americana",
        "anio": 1998
      },
      {
        "titulo": "She’s Got Issues",
        "disco": "Americana",
        "anio": 1998
      },
      {
        "titulo": "Why Don’t You Get a Job?",
        "disco": "Americana",
        "anio": 1998
      },
      {
        "titulo": "Original Prankster",
        "disco": "Conspiracy of One",
        "anio": 2000
      },
      {
        "titulo": "Want You Bad",
        "disco": "Conspiracy of One",
        "anio": 2000
      },
      {
        "titulo": "One Fine Day",
        "disco": "Conspiracy of One",
        "anio": 2000
      },
      {
        "titulo": "Hit That",
        "disco": "Splinter",
        "anio": 2003
      },
      {
        "titulo": "You’re Gonna Go Far, Kid",
        "disco": "Rise and Fall, Rage and Grace",
        "anio": 2008
      },
      {
        "titulo": "Kristy, Are You Doing Okay?",
        "disco": "Rise and Fall, Rage and Grace",
        "anio": 2008
      },
      {
        "titulo": "Make It All Right",
        "disco": "Supercharged",
        "anio": 2024
      }
    ]
  },
  {
    "id": "the-police",
    "nombre": "The Police",
    "pais": "Reino Unido",
    "ciudad": "Londres",
    "anios": "1977 – 1986 · 2007 – 2008",
    "genero": "New wave, reggae rock, post-punk",
    "integrantes": [
      "Sting (voz, bajo)",
      "Andy Summers (guitarra)",
      "Stewart Copeland (batería)"
    ],
    "hero": "img/the-police.jpg",
    "heroPos": "center 25%",
    "bajada": "Tres músicos virtuosos que mezclaron el punk con el reggae.",
    "descripcion": [
      "The Police se formó en Londres en 1977, en plena explosión del punk, con el baterista estadounidense Stewart Copeland, el bajista y cantante Sting y, poco después, el guitarrista Andy Summers. Aunque se tiñeron el pelo de rubio y tocaban rápido, eran músicos de jazz y de rock con mucho oficio, y enseguida sumaron el ritmo del reggae a sus canciones.",
      "Su primer disco, Outlandos d’Amour (1978), trajo “Roxanne”, “Can’t Stand Losing You” y “So Lonely”. En cinco discos se convirtieron en la banda más grande del mundo, y Synchronicity (1983), con “Every Breath You Take”, llegó al número uno en Estados Unidos. Las tensiones entre Sting y Copeland los separaron en 1986; se reunieron para una gira mundial en 2007."
    ],
    "nota": "La lista va en orden cronológico. “Every Breath You Take” parece una canción de amor, pero Sting la escribió sobre los celos y la obsesión.",
    "canciones": [
      {
        "titulo": "Roxanne",
        "disco": "Outlandos d’Amour",
        "anio": 1978
      },
      {
        "titulo": "Can’t Stand Losing You",
        "disco": "Outlandos d’Amour",
        "anio": 1978
      },
      {
        "titulo": "So Lonely",
        "disco": "Outlandos d’Amour",
        "anio": 1978
      },
      {
        "titulo": "Every Breath You Take",
        "disco": "Synchronicity",
        "anio": 1983
      }
    ]
  },
  {
    "id": "the-rolling-stones",
    "nombre": "The Rolling Stones",
    "pais": "Reino Unido",
    "ciudad": "Londres",
    "anios": "1962 – presente",
    "genero": "Rock, blues rock, rhythm and blues",
    "integrantes": [
      "Mick Jagger (voz, armónica)",
      "Keith Richards (guitarra, voz)",
      "Ronnie Wood (guitarra)",
      "Charlie Watts (batería)",
      "Brian Jones (guitarra)",
      "Bill Wyman (bajo)",
      "Mick Taylor (guitarra)"
    ],
    "hero": "img/the-rolling-stones.jpg",
    "heroPos": "center 25%",
    "bajada": "“La banda de rock and roll más grande del mundo”, más de sesenta años después.",
    "descripcion": [
      "The Rolling Stones se formó en Londres en 1962, cuando Mick Jagger y Keith Richards, amigos de la infancia, se cruzaron con el guitarrista Brian Jones en el circuito del blues. Empezaron tocando versiones de Chuck Berry, Muddy Waters y el rhythm and blues estadounidense, y su manager los vendió como la contracara peligrosa de los Beatles.",
      "Desde “Satisfaction” (1965), Jagger y Richards se volvieron una de las grandes duplas de compositores, y entre Beggars Banquet (1968) y Exile on Main St. (1972) grabaron una serie de discos considerada de las mejores de la historia del rock. Nunca dejaron de tocar: Charlie Watts, su baterista durante casi sesenta años, murió en 2021, y en 2023 y 2026 sacaron Hackney Diamonds y Foreign Tongues."
    ],
    "nota": "La lista va en orden cronológico. Los discos de los sesenta son las ediciones de Estados Unidos, donde aparecen estas canciones. “Confessin’ the Blues”, “It’s All Over Now”, “Time Is on My Side”, “Little Red Rooster” y “Cry to Me” son versiones de otros artistas.",
    "canciones": [
      {
        "titulo": "Confessin’ the Blues",
        "disco": "12 X 5",
        "anio": 1964
      },
      {
        "titulo": "It’s All Over Now",
        "disco": "12 X 5",
        "anio": 1964
      },
      {
        "titulo": "Time Is on My Side",
        "disco": "12 X 5",
        "anio": 1964
      },
      {
        "titulo": "Little Red Rooster",
        "disco": "The Rolling Stones, Now!",
        "anio": 1965
      },
      {
        "titulo": "(I Can’t Get No) Satisfaction",
        "disco": "Out of Our Heads",
        "anio": 1965
      },
      {
        "titulo": "Cry to Me",
        "disco": "Out of Our Heads",
        "anio": 1965
      },
      {
        "titulo": "Paint It, Black",
        "disco": "Aftermath",
        "anio": 1966
      },
      {
        "titulo": "Under My Thumb",
        "disco": "Aftermath",
        "anio": 1966
      },
      {
        "titulo": "Out of Time",
        "disco": "Aftermath",
        "anio": 1966
      },
      {
        "titulo": "Ruby Tuesday",
        "disco": "Between the Buttons",
        "anio": 1967
      },
      {
        "titulo": "She’s a Rainbow",
        "disco": "Their Satanic Majesties Request",
        "anio": 1967
      },
      {
        "titulo": "Sympathy for the Devil",
        "disco": "Beggars Banquet",
        "anio": 1968
      },
      {
        "titulo": "No Expectations",
        "disco": "Beggars Banquet",
        "anio": 1968
      },
      {
        "titulo": "Jigsaw Puzzle",
        "disco": "Beggars Banquet",
        "anio": 1968
      },
      {
        "titulo": "Street Fighting Man",
        "disco": "Beggars Banquet",
        "anio": 1968
      },
      {
        "titulo": "Gimme Shelter",
        "disco": "Let It Bleed",
        "anio": 1969
      },
      {
        "titulo": "You Can’t Always Get What You Want",
        "disco": "Let It Bleed",
        "anio": 1969
      },
      {
        "titulo": "Brown Sugar",
        "disco": "Sticky Fingers",
        "anio": 1971
      },
      {
        "titulo": "Sway",
        "disco": "Sticky Fingers",
        "anio": 1971
      },
      {
        "titulo": "Wild Horses",
        "disco": "Sticky Fingers",
        "anio": 1971
      },
      {
        "titulo": "Can’t You Hear Me Knocking",
        "disco": "Sticky Fingers",
        "anio": 1971
      },
      {
        "titulo": "Dead Flowers",
        "disco": "Sticky Fingers",
        "anio": 1971
      },
      {
        "titulo": "Tumbling Dice",
        "disco": "Exile on Main St.",
        "anio": 1972
      },
      {
        "titulo": "Loving Cup",
        "disco": "Exile on Main St.",
        "anio": 1972
      },
      {
        "titulo": "Let It Loose",
        "disco": "Exile on Main St.",
        "anio": 1972
      },
      {
        "titulo": "All Down the Line",
        "disco": "Exile on Main St.",
        "anio": 1972
      },
      {
        "titulo": "Angie",
        "disco": "Goats Head Soup",
        "anio": 1973
      },
      {
        "titulo": "Star Star",
        "disco": "Goats Head Soup",
        "anio": 1973
      },
      {
        "titulo": "Time Waits for No One",
        "disco": "It’s Only Rock ’n Roll",
        "anio": 1974
      },
      {
        "titulo": "Fool to Cry",
        "disco": "Black and Blue",
        "anio": 1976
      },
      {
        "titulo": "Miss You",
        "disco": "Some Girls",
        "anio": 1978
      },
      {
        "titulo": "Just My Imagination (Running Away with Me)",
        "disco": "Some Girls",
        "anio": 1978
      },
      {
        "titulo": "Some Girls",
        "disco": "Some Girls",
        "anio": 1978
      },
      {
        "titulo": "Beast of Burden",
        "disco": "Some Girls",
        "anio": 1978
      },
      {
        "titulo": "Emotional Rescue",
        "disco": "Emotional Rescue",
        "anio": 1980
      },
      {
        "titulo": "She’s So Cold",
        "disco": "Emotional Rescue",
        "anio": 1980
      },
      {
        "titulo": "Start Me Up",
        "disco": "Tattoo You",
        "anio": 1981
      },
      {
        "titulo": "No Use in Crying",
        "disco": "Tattoo You",
        "anio": 1981
      },
      {
        "titulo": "Harlem Shuffle",
        "disco": "Dirty Work",
        "anio": 1986
      },
      {
        "titulo": "Mixed Emotions",
        "disco": "Steel Wheels",
        "anio": 1989
      },
      {
        "titulo": "Blinded by Love",
        "disco": "Steel Wheels",
        "anio": 1989
      },
      {
        "titulo": "Love Is Strong",
        "disco": "Voodoo Lounge",
        "anio": 1994
      },
      {
        "titulo": "You Got Me Rocking",
        "disco": "Voodoo Lounge",
        "anio": 1994
      },
      {
        "titulo": "Out of Tears",
        "disco": "Voodoo Lounge",
        "anio": 1994
      },
      {
        "titulo": "Blinded by Rainbows",
        "disco": "Voodoo Lounge",
        "anio": 1994
      },
      {
        "titulo": "Anybody Seen My Baby?",
        "disco": "Bridges to Babylon",
        "anio": 1997
      },
      {
        "titulo": "Already Over Me",
        "disco": "Bridges to Babylon",
        "anio": 1997
      },
      {
        "titulo": "Out of Control",
        "disco": "Bridges to Babylon",
        "anio": 1997
      },
      {
        "titulo": "Saint of Me",
        "disco": "Bridges to Babylon",
        "anio": 1997
      },
      {
        "titulo": "Always Suffering",
        "disco": "Bridges to Babylon",
        "anio": 1997
      },
      {
        "titulo": "Let Me Down Slow",
        "disco": "A Bigger Bang",
        "anio": 2005
      },
      {
        "titulo": "Rain Fall Down",
        "disco": "A Bigger Bang",
        "anio": 2005
      },
      {
        "titulo": "Streets of Love",
        "disco": "A Bigger Bang",
        "anio": 2005
      },
      {
        "titulo": "Biggest Mistake",
        "disco": "A Bigger Bang",
        "anio": 2005
      },
      {
        "titulo": "Sweet Sounds of Heaven (con Lady Gaga y Stevie Wonder)",
        "disco": "Hackney Diamonds",
        "anio": 2023
      },
      {
        "titulo": "Rough and Twisted",
        "disco": "Foreign Tongues",
        "anio": 2026
      },
      {
        "titulo": "Jealous Lover",
        "disco": "Foreign Tongues",
        "anio": 2026
      },
      {
        "titulo": "Some of Us",
        "disco": "Foreign Tongues",
        "anio": 2026
      },
      {
        "titulo": "Back in Your Life",
        "disco": "Foreign Tongues",
        "anio": 2026
      }
    ]
  }
];
