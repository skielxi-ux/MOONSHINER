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
  }
];
