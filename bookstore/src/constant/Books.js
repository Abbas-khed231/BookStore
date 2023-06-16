const data = [
    {
      "id":1,
      "category":"Thriller",      
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "image": "/images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958,
      "price": "10.99"
    },
    {
      "id":2,
      "category":"Fairy",      
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "image": "/images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836,
      "price": "11"
    },
    {
      "id":3,
      "category":"Comedy",      
      "author": "Dante Alighieri",
      "country": "Italy",
      "image": "/images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315,
      "price": "14"
    },
    {
      "id":4,
      "category":"Thriller",      
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "image": "/images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700,
      "price": "19"
    },
    {
      "id":5,
      "category":"Sci-fi",      
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "image": "/images/the-book-of-job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600,
      "price": "10"
    },
    {
      "id":6,
      "category":"Horror",     
      "author": "Unknown",
      "country": "India/Iran/Iraq/Egypt/Tajikistan",
      "image": "/images/one-thousand-and-one-nights.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
      "pages": 288,
      "title": "One Thousand and One Nights",
      "year": 1200,
      "price": "9"
    },
    {
      "id":7,
      "category":"Fairy",      
      "author": "Unknown",
      "country": "Iceland",
      "image": "/images/njals-saga.jpg",
      "language": "Old Norse",
      "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
      "pages": 384,
      "title": "Nj\u00e1l's Saga",
      "year": 1350,
      "price": "20"
    },
    {
      "id":8,
      "category":"Thriller",      
      "author": "Jane Austen",
      "country": "United Kingdom",
      "image": "/images/pride-and-prejudice.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
      "pages": 226,
      "title": "Pride and Prejudice",
      "year": 1813,
      "price": "21"
    },
    {
      "id":9,
      "category":"Fairy",     
      "author": "Honor\u00e9 de Balzac",
      "country": "France",
      "image": "/images/le-pere-goriot.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
      "pages": 443,
      "title": "Le P\u00e8re Goriot",
      "year": 1835,
      "price": "8"
    },
    {
      "id":10,
      "category":"Thriller",
      "author": "Samuel Beckett",
      "country": "Republic of Ireland",
      "image": "/images/molloy-malone-dies-the-unnamable.jpg",
      "language": "French, English",
      "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
      "pages": 256,
      "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
      "year": 1952,
      "price": "12"
    },
    {
      "id":11,
      "category":"Fairy",  
      "author": "Giovanni Boccaccio",
        "country": "Italy",
        "image": "/images/the-decameron.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
        "pages": 1024,
        "title": "The Decameron",
        "year": 1351,
        "price": "17"
      },
      {
        "id":12,
        "category":"Horror",
        "author": "Jorge Luis Borges",
        "country": "Argentina",
        "image": "/images/ficciones.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Ficciones\n",
        "pages": 224,
        "title": "Ficciones",
        "year": 1965,
        "price": "13"
      },
      {
        "id":13,
        "category":"comedy",
        "author": "Emily Bront\u00eb",
        "country": "United Kingdom",
        "image": "/images/wuthering-heights.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
        "pages": 342,
        "title": "Wuthering Heights",
        "year": 1847,
        "price": "18"
      },
      {
        "id":15,
        "category":"Horror",
        "author": "Paul Celan",
        "country": "Romania, France",
        "image": "/images/poems-paul-celan.jpg",
        "language": "German",
        "link": "\n",
        "pages": 320,
        "title": "Poems",
        "year": 1952,
        "price": "11"
      },
      {
        "id":17,
        "category":"sci-fi",
        "author": "Miguel de Cervantes",
        "country": "Spain",
        "image": "/images/don-quijote-de-la-mancha.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Don_Quixote\n",
        "pages": 1056,
        "title": "Don Quijote De La Mancha",
        "year": 1610,
        "price": "28"
      },
      {
        "id":18,
        "category":"Fairy",
        "author": "Geoffrey Chaucer",
        "country": "England",
        "image": "/images/the-canterbury-tales.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
        "pages": 544,
        "title": "The Canterbury Tales",
        "year": 1450,
        "price": "7"
      },
      {
        "id":19,
        "category":"Horror",
        "author": "Anton Chekhov",
        "country": "Russia",
        "image": "/images/stories-of-anton-chekhov.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
        "pages": 194,
        "title": "Stories",
        "year": 1886,
        "price": "10.99"
      },
      {
        "id":20,
        "category":"Fairy",
        "author": "Joseph Conrad",
        "country": "United Kingdom",
        "image": "/images/nostromo.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Nostromo\n",
        "pages": 320,
        "title": "Nostromo",
        "year": 1904,
        "price": "23"
      },
      {
        "id":21,
        "category":"Comedy",
        "author": "Charles Dickens",
        "country": "United Kingdom",
        "image": "/images/great-expectations.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Great_Expectations\n",
        "pages": 194,
        "title": "Great Expectations",
        "year": 1861,
        "price": "15"
      },
      {
        "id":22,
        "category":"Thriller",
        "author": "Denis Diderot",
        "country": "France",
        "image": "/images/jacques-the-fatalist.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
        "pages": 596,
        "title": "Jacques the Fatalist",
        "year": 1796,
        "price": "13"
      },
      {
        "id":23,
        "category":"SCi-fi",
        "author": "Alfred D\u00f6blin",
        "country": "Germany",
        "image": "/images/berlin-alexanderplatz.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n",
        "pages": 600,
        "title": "Berlin Alexanderplatz",
        "year": 1929,
        "price": "13.5"
      },
      {
        "id":24,
        "category":"Sci-fi",
        "author": "Fyodor Dostoevsky",
        "country": "Russia",
        "image": "/images/crime-and-punishment.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/Crime_and_Punishment\n",
        "pages": 551,
        "title": "Crime and Punishment",
        "year": 1866,
        "price": "14.5"
      },
      {
        "id":25,
        "category":"Comedy",
        "author": "Fyodor Dostoevsky",
        "country": "Russia",
        "image": "/images/the-idiot.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/The_Idiot\n",
        "pages": 656,
        "title": "The Idiot",
        "year": 1869,
        "price": "15"
      },
      {
        "id":26,
        "category":"Horror",
        "author": "Fyodor Dostoevsky",
        "country": "Russia",
        "image": "/images/the-possessed.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n",
        "pages": 768,
        "title": "The Possessed",
        "year": 1872,
        "price": "16"
      },
      {
        "id":28,
        "category":"Fairy",
        "author": "George Eliot",
        "country": "United Kingdom",
        "image": "/images/middlemarch.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Middlemarch\n",
        "pages": 800,
        "title": "Middlemarch",
        "year": 1871,
        "price": "12"
      },
      {
        "id":29,
        "category":"Comedy",
        "author": "Ralph Ellison",
        "country": "United States",
        "image": "/images/invisible-man.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Invisible_Man\n",
        "pages": 581,
        "title": "Invisible Man",
        "year": 1952,
        "price": "19"
      },
      {
        "id":30,
        "category":"Thriller",
        "author": "Euripides",
        "country": "Greece",
        "image": "/images/medea.jpg",
        "language": "Greek",
        "link": "https://en.wikipedia.org/wiki/Medea_(play)\n",
        "pages": 104,
        "title": "Medea",
        "year": -431,
        "price": "21"
      },
      {
        "id":31,
        "category":"Sci-fi",
        "author": "William Faulkner",
        "country": "United States",
        "image": "/images/absalom-absalom.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Absalom,_Absalom!\n",
        "pages": 313,
        "title": "Absalom, Absalom!",
        "year": 1936,
        "price": "20"
      },
      {
        "id":32,
        "category":"Horror",
        "author": "William Faulkner",
        "country": "United States",
        "image": "/images/the-sound-and-the-fury.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n",
        "pages": 326,
        "title": "The Sound and the Fury",
        "year": 1929,
        "price": "17"
      },
      {
        "id":33,
        "category":"Comedy",
        "author": "Gustave Flaubert",
        "country": "France",
        "image": "/images/madame-bovary.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Madame_Bovary\n",
        "pages": 528,
        "title": "Madame Bovary",
        "year": 1857,
        "price": "16"
      },
      {
        "id":35,
        "category":"Fairy",
        "author": "Federico Garc\u00eda Lorca",
        "country": "Spain",
        "image": "/images/gypsy-ballads.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Gypsy_Ballads\n",
        "pages": 218,
        "title": "Gypsy Ballads",
        "year": 1928,
        "price": "14.99"
      },
      {
        "id":36,
        "category":"Sci-fi",
        "author": "Gabriel Garc\u00eda M\u00e1rquez",
        "country": "Colombia",
        "image": "/images/one-hundred-years-of-solitude.jpg",
        "language": "Spanish",
        "link": "https:/,/en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\n",
        "pages": 417,
        "title": "One Hu,ndred Years of Solitude",
        "price": "11.99"
      },
      {
        "id":37,
        "category":"Thriller",
        "author": "Gabriel Garc\u00eda M\u00e1rquez",
        "country": "Colombia",
        "image": "/images/love-in-the-time-of-cholera.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n",
        "pages": 368,
        "title": "Love in the Time of Cholera",
        "year": 1985,
        "price": "12.99"
      },
      {
        "id":38,
        "category":"Comedy",
        "author": "Johann Wolfgang von Goethe",
        "country": "Saxe-Weimar",
        "image": "/images/faust.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/Goethe%27s_Faust\n",
        "pages": 158,
        "title": "Faust",
        "year": 1832,
        "price": "13.75"
      },
      {
        "id":39,
        "category":"Horror",
        "author": "Nikolai Gogol",
        "country": "Russia",
        "image": "/images/dead-souls.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/Dead_Souls\n",
        "pages": 432,
        "title": "Dead Souls",
        "year": 1842,
        "price": "12.25"
      },
      {
        "id":40,
        "category":"Fairy",
        "author": "G\u00fcnter Grass",
        "country": "Germany",
        "image": "/images/the-tin-drum.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/The_Tin_Drum\n",
        "pages": 600,
        "title": "The Tin Drum",
        "year": 1959,
        "price": "14.99"
      }
    ]

export default data;