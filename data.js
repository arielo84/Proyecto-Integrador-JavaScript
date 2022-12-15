const productsData = [
  {
    id: 1,
    name: "Back to the Future",
    category: "Ciencia Ficción",
    year: "1985 / 1989 / 1990",
    description: "Ciencia Ficción",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/back-to-the-future/back-to-the-future.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/back-to-the-future/back-to-the-future.png",
    price: 19250,
  },

  {
    id: 2,
    name: "Star Wars",
    category: "science-fiction",
    year: "1977",
    description: "Ciencia Ficción",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/star-wars-a-new-hope/star-wars-a-new-hope.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/star-wars-a-new-hope/star-wars-a-new-hope.png",
    price: 10650,
  },

  {
    id: 3,
    name: "E.T. the Extra-Terrestrial",
    category: "science-fiction",
    year: "1982",
    description: "Ciencia Ficción",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/e.t.the.extra-terrestrial/e.t.the.extra-terrestrial.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/e.t.the.extra-terrestrial/e.t.the.extra-terrestrial.png",
    price: 17500,
  },

  {
    id: 4,
    name: "2001: A Space Odyssey",
    category: "science-fiction",
    year: "1968",
    description: "Ciencia Ficción",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/2001-a-space-odyssey/2001-a-space-odyssey.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/2001-a-space-odyssey/2001-a-space-odyssey.png",
    price: 16850,
  },

  {
    id: 5,
    name: "Terminator 2: Judgment Day",
    category: "science-fiction",
    year: "1991",
    description: "Ciencia Ficción",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/terminator-2-judgment-day/terminator-2-judgment-day.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/terminator-2-judgment-day/terminator-2-judgment-day.png",
    price: 11850,
  },

  {
    id: 6,
    name: "Close Encounters of the Third Kind",
    category: "science-fiction",
    year: "1977",
    description: "Ciencia Ficción",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/close-encounters-of-the-third-kind/close-encounters-of-the-third-kind.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/close-encounters-of-the-third-kind/close-encounters-of-the-third-kind.png",
    price: 9500,
  },

  {
    id: 7,
    name: "Interstellar",
    category: "science-fiction",
    year: "2014",
    description: "Ciencia Ficción",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/interstellar/interstellar.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/interstellar/interstellar.png",
    price: 11850,
  },

  {
    id: 8,
    name: "Fire in the Sky",
    category: "science-fiction",
    year: "1993",
    description: "Ciencia Ficción",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/fire-in-the-sky/fire-in-the-sky.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/fire-in-the-sky/fire-in-the-sky.png",
    price: 6500,
  },

  {
    id: 9,
    name: "Ex Machina",
    category: "science-fiction",
    year: "2015",
    description: "Ciencia Ficción",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/ex-machina/ex-machina.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/ex-machina/ex-machina.png",
    price: 10850,
  },

  {
    id: 10,
    name: "Annihilation",
    category: "science-fiction",
    year: "2018",
    description: "Ciencia Ficción",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/annihilation/annihilation.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/annihilation/annihilation.png",
    price: 11250,
  },

  {
    id: 11,
    name: "Arrival",
    category: "science-fiction",
    year: "2016",
    description: "Ciencia Ficción",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/arrival/arrival.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/arrival/arrival.png",
    price: 11250,
  },

  {
    id: 12,
    name: "A.I. Artificial Intelligence",
    category: "science-fiction",
    year: "2001",
    description: "Ciencia Ficción",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/a.i.-artificial-intelligence/a.i.-artificial-intelligence.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/a.i.-artificial-intelligence/a.i.-artificial-intelligence.png",
    price: 13500,
  },

  {
    id: 13,
    name: "Total Recall",
    category: "science-fiction",
    year: "1990",
    description: "Ciencia Ficción",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/total-recall/total-recall.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/total-recall/total-recall.png",
    price: 12500,
  },

  {
    id: 14,
    name: "The Exorcist",
    category: "terror",
    year: "1973",
    description: "Terror",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-exorcist/the-exorcist.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-exorcist/the-exorcist.png",
    price: 11500,
  },

  {
    id: 15,
    name: "The Witch",
    category: "terror",
    year: "2015",
    description: "Terror",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-witch/the-witch.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-witch/the-witch.png",
    price: 12850,
  },

  {
    id: 16,
    name: "The Shining",
    category: "terror",
    year: "1980",
    description: "Terror",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-shining/the-shining.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-shining/the-shining.png",
    price: 13850,
  },

  {
    id: 17,
    name: "Pet Sematary",
    category: "terror",
    year: "1989",
    description: "Terror",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/pet-sematary/pet-sematary.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/pet-sematary/pet-sematary.png",
    price: 15250,
  },

  {
    id: 18,
    name: "The Ring",
    category: "terror",
    year: "2002",
    description: "Terror",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-ring/the-ring.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-ring/the-ring.png",
    price: 10950,
  },

  {
    id: 19,
    name: "Scream",
    category: "terror",
    year: "1997",
    description: "Terror",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/scream/scream.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/scream/scream.png",
    price: 14250,
  },

  {
    id: 20,
    name: "The Conjuring",
    category: "terror",
    year: "2013",
    description: "Terror",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-conjuring/the-conjuring.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-conjuring/the-conjuring.png",
    price: 6850,
  },

  {
    id: 21,
    name: "The Conjuring 2",
    category: "terror",
    year: "2016",
    description: "Terror",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-conjuring-2/the-conjuring-2.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-conjuring-2/the-conjuring-2.png",
    price: 6850,
  },

  {
    id: 22,
    name: "The Conjuring: The Devil Made Me Do It",
    category: "terror",
    year: "2021",
    description: "Terror",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-conjuring-3/the-conjuring-3.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-conjuring-3/the-conjuring-3.png",
    price: 11500,
  },

  {
    id: 23,
    name: "X-Men: Days of Future Past",
    category: "comic",
    year: "2014",
    description: "Comic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/x-men-days-of-future-past/x-men-days-of-future-past.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/x-men-days-of-future-past/x-men-days-of-future-past.png",
    price: 15250,
  },

  {
    id: 24,
    name: "Batman Begins",
    category: "comic",
    year: "2005",
    description: "Comic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/batman-begins/batman-begins.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/batman-begins/batman-begins.png",
    price: 14250,
  },

  {
    id: 25,
    name: "Batman Forever",
    category: "comic",
    year: "1995",
    description: "Comic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/batman-forever/batman-forever.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/batman-forever/batman-forever.png",
    price: 14250,
  },

  {
    id: 26,
    name: "Superman",
    category: "comic",
    year: "1978",
    description: "Comic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/superman/superman.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/superman/superman.png",
    price: 13500,
  },

  {
    id: 27,
    name: "Man of Steel",
    category: "comic",
    year: "2013",
    description: "Comic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/man-of-steel/man-of-steel.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/man-of-steel/man-of-steel.png",
    price: 10500,
  },

  {
    id: 28,
    name: "Batman v Superman: Dawn of Justice",
    category: "comic",
    year: "2016",
    description: "Comic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/batman-v-superman-dawn-of-justice/batman-v-superman-dawn-of-justice.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/batman-v-superman-dawn-of-justice/batman-v-superman-dawn-of-justice.png",
    price: 10500,
  },

  {
    id: 29,
    name: "The Dark Knight",
    category: "comic",
    year: "2008",
    description: "Comic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-dark-knight/the-dark-knight.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-dark-knight/the-dark-knight.png",
    price: 13500,
  },

  {
    id: 30,
    name: "Spider-Man: Far from Home",
    category: "comic",
    year: "2019",
    description: "Comic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/spider-man-far-from-home/spider-man-far-from-home.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/spider-man-far-from-home/spider-man-far-from-home.png",
    price: 10250,
  },

  {
    id: 31,
    name: "Avengers: Age of Ultron",
    category: "comic",
    year: "2015",
    description: "Comic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/avengers-age-of-ultron/avengers-age-of-ultron.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/avengers-age-of-ultron/avengers-age-of-ultron.png",
    price: 10250,
  },

  {
    id: 32,
    name: "Sin City",
    category: "comic",
    year: "2005",
    description: "Comic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/sin-city/sin-city.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/sin-city/sin-city.png",
    price: 7500,
  },

  {
    id: 33,
    name: "Iron Man",
    category: "comic",
    year: "2008",
    description: "Comic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/iron-man/iron-man.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/iron-man/iron man.png",
    price: 13500,
  },

  {
    id: 34,
    name: "Watchmen",
    category: "comic",
    year: "2009",
    description: "Comic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/watchmen/watchmen.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/watchmen/watchmen.png",
    price: 13500,
  },

  {
    id: 35,
    name: "300",
    category: "comic",
    year: "2007",
    description: "Comic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/300/300.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/300/300.png",
    price: 12500,
  },

  {
    id: 36,
    name: "Constantine",
    category: "comic",
    year: "2005",
    description: "Comic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/constantine/constantine.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/constantine/constantine.png",
    price: 13500,
  },

  {
    id: 37,
    name: "Alita: Battle Angel",
    category: "comic",
    year: "2019",
    description: "Comic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/alita-battle-angel/alita-battle-angel.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/alita-battle-angel/alita-battle-angel.png",
    price: 12800,
  },

  {
    id: 38,
    name: "Harry Potter and the Philosopher's Stone",
    category: "fantasy",
    year: "2001",
    description: "Fantasía",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/harry-potter-and-the-philosopher's-stone/harry-potter-and-the-philosopher's-stone.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/harry-potter-and-the-philosopher's-stone/harry-potter-and-the-philosopher's-stone.png",
    price: 15250,
  },

  {
    id: 39,
    name: "Fantastic Beasts: The Crimes of Grindelwald",
    category: "fantasy",
    year: "2018",
    description: "Fantasía",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/fantastic-beasts-the-crimes-of-grindelwald/fantastic-beasts-the-crimes-of-grindelwald.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/fantastic-beasts-the-crimes-of-grindelwald/fantastic-beasts-the-crimes-of-grindelwald.png",
    price: 15250,
  },

  {
    id: 40,
    name: "The Lord of the Rings",
    category: "fantasy",
    year: "2001 / 2002 / 2003",
    description: "Fantasía",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/lord-of-the-rings/lord-of-the-rings.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/lord-of-the-rings/lord-of-the-rings.png",
    price: 39500,
  },

  {
    id: 41,
    name: "The Hobbit",
    category: "fantasy",
    year: "2012 / 2013 / 2014",
    description: "Fantasía",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-hobbit/the-hobbit.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-hobbit/the-hobbit.png",
    price: 39500,
  },

  {
    id: 42,
    name: "Edward Scissorhands",
    category: "fantasy",
    year: "1990",
    description: "Fantasía",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/edward-scissorhands/edward-scissorhands.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/edward-scissorhands/edward-scissorhands.png",
    price: 19500,
  },

  {
    id: 43,
    name: "Big Fish",
    category: "fantasy",
    year: "2003",
    description: "Fantasía",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/big-fish/big-fish.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/big-fish/big-fish.png",
    price: 13350,
  },

  {
    id: 44,
    name: "Where the Wild Things Are",
    category: "fantasy",
    year: "2009",
    description: "Fantasía",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/where-the-wild-things-are/where-the-wild-things-are.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/where-the-wild-things-are/where-the-wild-things-are.png",
    price: 6250,
  },

  {
    id: 45,
    name: "Labyrinth",
    category: "fantasy",
    year: "1986",
    description: "Fantasía",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/labyrinth/labyrinth.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/labyrinth/labyrinth.png",
    price: 14850,
  },

  {
    id: 46,
    name: "Pan's Labyrinth",
    category: "fantasy",
    year: "2006",
    description: "Fantasía",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/pan's-labyrinth/pan's-labyrinth.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/pan's-labyrinth/pan's-labyrinth.png",
    price: 16500,
  },

  {
    id: 47,
    name: "Titanic",
    category: "historical-fiction",
    year: "1997",
    description: "Ficción Histórica",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/titanic/titanic.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/titanic/titanic.png",
    price: 12500,
  },

  {
    id: 48,
    name: "Saving Private Ryan",
    category: "historical-fiction",
    year: "1997",
    description: "Ficción Histórica",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/saving-private-ryan/saving-private-ryan.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/saving-private-ryan/saving-private-ryan.svg",
    price: 13500,
  },

  {
    id: 49,
    name: "The Revenant",
    category: "historical-fiction",
    year: "2015",
    description: "Ficción Histórica",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-revenant/the-revenant.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-revenant/the-revenant.png",
    price: 13500,
  },

  {
    id: 50,
    name: "Dunkirk",
    category: "historical-fiction",
    year: "2017",
    description: "Ficción Histórica",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/dunkirk/dunkirk.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/dunkirk/dunkirk.png",
    price: 17850,
  },

  {
    id: 51,
    name: "Apollo 13",
    category: "historical-fiction",
    year: "1995",
    description: "Ficción Histórica",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/apollo-13/apollo-13.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/apollo-13/apollo-13.png",
    price: 12500,
  },

  {
    id: 52,
    name: "Braveheart",
    category: "historical-fiction",
    year: "1995",
    description: "Ficción Histórica",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/braveheart/braveheart.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/braveheart/braveheart.png",
    price: 15750,
  },

  {
    id: 53,
    name: "Schindler's List",
    category: "historical-fiction",
    year: "1993",
    description: "Ficción Histórica",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/schindler's-list/schindler's-list.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/schindler's-list/schindler's-list.png",
    price: 16250,
  },

  {
    id: 54,
    name: "Hidden Figures",
    category: "historical-fiction",
    year: "2016",
    description: "Ficción Histórica",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/hidden-figures/hidden-figures.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/hidden-figures/hidden-figures.png",
    price: 12500,
  },

  {
    id: 55,
    name: "JFK",
    category: "historical-fiction",
    year: "1991",
    description: "Ficción Histórica",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/jfk/jfk.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/jfk/jfk.png",
    price: 12500,
  },

  {
    id: 56,
    name: "Toy Story",
    category: "animation",
    year: "1995",
    description: "Animación",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/toy-story/toy-story.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/toy-story/toy-story.png",
    price: 12500,
  },

  {
    id: 57,
    name: "Coco",
    category: "animation",
    year: "2017",
    description: "Animación",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/coco/coco.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/coco/coco.png",
    price: 12500,
  },

  {
    id: 58,
    name: "Ratatouille",
    category: "animation",
    year: "2007",
    description: "Animación",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/ratatouille/ratatouille.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/ratatouille/ratatouille.png",
    price: 12500,
  },

  {
    id: 59,
    name: "The Nightmare Before Christmas",
    category: "animation",
    year: "1993",
    description: "Animación",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-nightmare-before-christmas/the-nightmare-before-christmas.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-nightmare-before-christmas/the-nightmare-before-christmas.png",
    price: 8150,
  },

  {
    id: 60,
    name: "Rango",
    category: "animation",
    year: "2011",
    description: "Animación",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/rango/rango.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/rango/rango.png",
    price: 8150,
  },

  {
    id: 61,
    name: "千と千尋の神隠し",
    category: "animation",
    year: "2001",
    description: "Animación",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/千と千尋の神隠し/千と千尋の神隠し.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/千と千尋の神隠し/千と千尋の神隠し.png",
    price: 10500,
  },

  {
    id: 62,
    name: "Fantasia",
    category: "animation",
    year: "1940",
    description: "Animación",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/fantasia/fantasia.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/fantasia/fantasia.png",
    price: 9500,
  },

  {
    id: 63,
    name: "The Lion King",
    category: "animation",
    year: "1994",
    description: "Animación",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-lion-king/the-lion-king.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-lion-king/the-lion-king.svg",
    price: 11250,
  },

  {
    id: 64,
    name: "Alice in Wonderland",
    category: "animation",
    year: "1951",
    description: "Animación",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/alice-in-wonderland/alice-in-wonderland.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/alice-in-wonderland/alice-in-wonderland.png",
    price: 11250,
  },

  {
    id: 65,
    name: "The Imitation Game",
    category: "biopic",
    year: "2014",
    description: "Biopic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-imitation-game/the-imitation-game.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-imitation-game/the-imitation-game.png",
    price: 13500,
  },

  {
    id: 66,
    name: "The Doors",
    category: "biopic",
    year: "1991",
    description: "Biopic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-doors/the-doors.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-doors/The-Doors.png",
    price: 13500,
  },

  {
    id: 67,
    name: "Bohemian Rhapsody",
    category: "biopic",
    year: "2018",
    description: "Biopic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/bohemian-rhapsody/bohemian-rhapsody.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/bohemian-rhapsody/bohemian-rhapsody.png",
    price: 13500,
  },

  {
    id: 68,
    name: "Rocketman",
    category: "biopic",
    year: "2019",
    description: "biopic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/rocketman/rocketman.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/rocketman/rocketman.png",
    price: 10850,
  },

  {
    id: 69,
    name: "The Wolf of Wall Street",
    category: "biopic",
    year: "2013",
    description: "Biopic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-wolf-of-wall-street/the-wolf-of-wall-street.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-wolf-of-wall-street/the-wolf-of-wall-street.png",
    price: 14250,
  },

  {
    id: 70,
    name: "Malcom X",
    category: "biopic",
    year: "1992",
    description: "Biopic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/malcom-x/malcom-x.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/malcom-x/malcom-x.png",
    price: 11150,
  },

  {
    id: 71,
    name: "Ford v Ferrari",
    category: "biopic",
    year: "2019",
    description: "Biopic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/ford-v-ferrari/ford-v-ferrari.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/ford-v-ferrari/ford-v-ferrari.png",
    price: 11150,
  },

  {
    id: 72,
    name: "Green Book",
    category: "biopic",
    year: "2018",
    description: "Biopic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/green-book/green-book.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/green-book/green-book.png",
    price: 11150,
  },

  {
    id: 73,
    name: "Captain Phillips",
    category: "biopic",
    year: "2013",
    description: "Biopic",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/captain-phillips/captain-phillips.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/captain-phillips/captain-phillips.png",
    price: 11150,
  },

  {
    id: 74,
    name: "Zoolander",
    category: "comedy",
    year: "2001",
    description: "Comedia",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/zoolander/zoolander.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/zoolander/zoolander.png",
    price: 6500,
  },

  {
    id: 75,
    name: "Superbad",
    category: "comedy",
    year: "2007",
    description: "Comedia",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/superbad/superbad.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/superbad/superbad.png",
    price: 11300,
  },

  {
    id: 76,
    name: "Coming to America",
    category: "comedy",
    year: "1988",
    description: "Comedia",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/coming-to-america/coming-to-america.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/coming-to-america/coming-to-america.png",
    price: 10900,
  },

  {
    id: 77,
    name: "The Hangover",
    category: "comedy",
    year: "2009 / 2011 / 2013",
    description: "Comedia",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-hangover/the-hangover.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-hangover/the-hangover.png",
    price: 18200,
  },

  {
    id: 78,
    name: "Home Alone",
    category: "comedy",
    year: "1990",
    description: "Comedia",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/home-alone/home-alone.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/home-alone/home-alone.png",
    price: 12100,
  },

  {
    id: 79,
    name: "American Pie",
    category: "comedy",
    year: "1999",
    description: "Comedia",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/american-pie/american-pie.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/american-pie/american-pie.png",
    price: 9200,
  },

  {
    id: 80,
    name: "Philadelphia",
    category: "drama",
    year: "1993",
    description: "Drama",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/philadelphia/philadelphia.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/philadelphia/philadelphia.png",
    price: 13500,
  },

  {
    id: 81,
    name: "Gladiator",
    category: "drama",
    year: "2000",
    description: "Drama",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/gladiator/gladiator.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/gladiator/gladiator.svg",
    price: 15500,
  },

  {
    id: 82,
    name: "The Green Mile",
    category: "drama",
    year: "1999",
    description: "Drama",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-green-mile/the-green-mile.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-green-mile/the-green-mile.png",
    price: 16890,
  },

  {
    id: 83,
    name: "The Shawshank Redemption",
    category: "drama",
    year: "1994",
    description: "Drama",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-shawshank-redemption/the-shawshank-redemption.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-shawshank-redemption/the-shawshank-redemption.png",
    price: 16890,
  },

  {
    id: 84,
    name: "Scarface",
    category: "drama",
    year: "1983",
    description: "Drama",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/scarface/scarface.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/scarface/scarface.png",
    price: 18890,
  },

  {
    id: 85,
    name: "The Godfather",
    category: "drama",
    year: "1972",
    description: "Drama",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-godfather/the-godfather.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-godfather/the-godfather.svg",
    price: 18890,
  },

  {
    id: 86,
    name: "The Godfather Part II",
    category: "drama",
    year: "1974",
    description: "Drama",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-godfather-part-2/the-godfather-part-2.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-godfather-part-2/the-godfather-part-2.png",
    price: 18890,
  },

  {
    id: 87,
    name: "The Godfather Coda. The Death of Michael Corleone",
    category: "drama",
    year: "1990",
    description: "Drama",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-godfather-coda-the-death-of-michael-corleone/the-godfather-coda-the-death-of-michael-corleone.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-godfather-coda-the-death-of-michael-corleone/the-godfather-coda-the-death-of-michael-corleone.png",
    price: 18890,
  },

  {
    id: 88,
    name: "Forrest Gump",
    category: "drama",
    year: "1994",
    description: "Drama",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/forrest-gump/forrest-gump.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/forrest-gump/forrest-gump.png",
    price: 18890,
  },

  {
    id: 89,
    name: "Inception",
    category: "thriller",
    year: "2010",
    description: "Thriller",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/inception/inception.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/inception/inception.png",
    price: 17890,
  },

  {
    id: 90,
    name: "American Psycho",
    category: "thriller",
    year: "2000",
    description: "Thriller",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/american-psycho/american-psycho.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/american-psycho/american-psycho.png",
    price: 17890,
  },

  {
    id: 91,
    name: "Prisoners",
    category: "thriller",
    year: "2013",
    description: "Thriller",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/prisoners/prisoners.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/prisoners/prisoners.png",
    price: 17890,
  },

  {
    id: 92,
    name: "Twelve Monkeys",
    category: "thriller",
    year: "1995",
    description: "Thriller",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/twelve-monkeys/twelve-monkeys.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/twelve-monkeys/twelve-monkeys.png",
    price: 17890,
  },

  {
    id: 93,
    name: "Fight Club",
    category: "thriller",
    year: "1999",
    description: "Thriller",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/fight-club/fight-club.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/fight-club/fight-club.png",
    price: 17890,
  },

  {
    id: 94,
    name: "Nightcrawler",
    category: "thriller",
    year: "2014",
    description: "Thriller",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/nightcrawler/nightcrawler.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/nightcrawler/nightcrawler.png",
    price: 17890,
  },

  {
    id: 95,
    name: "Memento",
    category: "thriller",
    year: "2000",
    description: "Thriller",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/memento/Memento.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/memento/memento.png",
    price: 17890,
  },

  {
    id: 96,
    name: "The Prestige",
    category: "thriller",
    year: "2006",
    description: "Thriller",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-prestige/the-prestige.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-prestige/the-prestige.png",
    price: 17890,
  },

  {
    id: 97,
    name: "The Machinist",
    category: "thriller",
    year: "2004",
    description: "Thriller",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-machinist/the-machinist.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-machinist/the-machinist.png",
    price: 17890,
  },

  {
    id: 98,
    name: "Frankenstein",
    category: "classic",
    year: "1931",
    description: "Clásico",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/frankenstein/frankenstein.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/frankenstein/frankenstein.png",
    price: 19890,
  },

  {
    id: 99,
    name: "Casablanca",
    category: "classic",
    year: "1942",
    description: "Clásico",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/casablanca/casablanca.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/casablanca/casablanca.png",
    price: 17890,
  },

  {
    id: 100,
    name: "The Wizard of Oz",
    category: "classic",
    year: "1939",
    description: "Clásico",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-wizard-of-oz/the-wizard-of-oz.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-wizard-of-oz/the-wizard-of-oz.png",
    price: 15890,
  },

  {
    id: 101,
    name: "Spartacus",
    category: "classic",
    year: "1960",
    description: "Clásico",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/spartacus/spartacus.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/spartacus/spartacus.png",
    price: 15890,
  },

  {
    id: 102,
    name: "Lawrence of Arabia",
    category: "classic",
    year: "1962",
    description: "Clásico",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/lawrence-of-arabia/lawrence of-arabia.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/lawrence-of-arabia/lawrence-of-arabia.png",
    price: 17890,
  },

  {
    id: 103,
    name: "Apocalypse Now",
    category: "classic",
    year: "1979",
    description: "Clásico",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/apocalypse-now/apocalypse-now.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/apocalypse-now/apocalypse-now.png",
    price: 17890,
  },

  {
    id: 104,
    name: "Game of Thrones",
    category: "serie",
    year: "2011-2019",
    description: "Serie",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-series/blu-ray-and-4k-ultra-hd-series-posters/game-of-thrones/game-of-thrones.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-series/blu-ray-and-4k-ultra-hd-series-logos/game-of-thrones/game-of-thrones.png",
    price: 75000,
  },

  {
    id: 105,
    name: "Chernobyl",
    category: "serie",
    year: "2019",
    description: "Serie",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-series/blu-ray-and-4k-ultra-hd-series-posters/chernobyl/chernobyl.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-series/blu-ray-and-4k-ultra-hd-series-logos/chernobyl/chernobyl.png",
    price: 20000,
  },

  {
    id: 106,
    name: "Breaking Bad",
    category: "serie",
    year: "2008-2013",
    description: "Serie",
    cardImg:
      "img/blu-ray-and-4k-ultra-hd-series/blu-ray-and-4k-ultra-hd-series-posters/breaking-bad/breaking-bad.png",
    logoImg:
      "img/blu-ray-and-4k-ultra-hd-series/blu-ray-and-4k-ultra-hd-series-logos/breaking-bad/breaking-bad.png",
    price: 29000,
  },
];

const splitProducts = (size) => {
  let dividedProducts = [];
  for (let i = 0; i < productsData.length; i += size)
    dividedProducts.push(productsData.slice(i, i + size));
  return dividedProducts;
};

const productsController = {
  dividedProducts: splitProducts(6),
  nextProductsIndex: 1,
  productsLimit: splitProducts(6).length,
};
