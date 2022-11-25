const productsData = [
  {
    id: 1,
    name: "Back to the Future",
    category: "Ciencia Ficción",
    description: "1985 / 1989 / 1990",
    description: "Ciencia Ficción",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/back-to-the-future/back-to-the-future.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/back-to-the-future/back-to-the-future.png",
    price: 19308,
  },

  {
    id: 2,
    name: "Star Wars",
    category: "Ciencia Ficción",
    description: "1977",
    description: "Ciencia Ficción",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/star-wars-a-new-hope/star-wars-a-new-hope.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/star-wars-a-new-hope/star-wars-a-new-hope.png",
    price: 10639,
  },

  {
    id: 3,
    name: "E.T. the Extra-Terrestrial",
    category: "Ciencia Ficción",
    description: "1982",
    description: "Ciencia Ficción",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/e.t.the.extra-terrestrial/e.t.the.extra-terrestrial.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/e.t.the.extra-terrestrial/e.t.the.extra-terrestrial.png",
    price: 17077,
  },

  {
    id: 4,
    name: "2001: A Space Odyssey",
    category: "Ciencia Ficción",
    description: "1968",
    description: "Ciencia Ficción",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/2001-a-space-odyssey/2001-a-space-odyssey.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/2001-a-space-odyssey/2001-a-space-odyssey.png",
    price: 16890,
  },

  {
    id: 5,
    name: "Terminator 2: Judgment Day",
    category: "Ciencia Ficción",
    description: "1991",
    description: "Ciencia Ficción",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/terminator-2-judgment-day/terminator-2-judgment-day.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/terminator-2-judgment-day/terminator-2-judgment-day.png",
    price: 11890,
  },

  {
    id: 6,
    name: "Close Encounters of the Third Kind",
    category: "Ciencia Ficción",
    description: "1977",
    description: "Ciencia Ficción",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/close-encounters-of-the-third-kind/close-encounters-of-the-third-kind.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/close-encounters-of-the-third-kind/close-encounters-of-the-third-kind.png",
    price: 9468,
  },

  {
    id: 7,
    name: "Interstellar",
    category: "Ciencia Ficción",
    description: "2014",
    description: "Ciencia Ficción",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/interstellar/interstellar.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/interstellar/interstellar.png",
    price: 11694,
  },

  {
    id: 8,
    name: "Fire in the Sky",
    category: "Ciencia Ficción",
    description: "1993",
    description: "Ciencia Ficción",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/fire-in-the-sky/fire-in-the-sky.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/fire-in-the-sky/fire-in-the-sky.png",
    price: 6200,
  },

  {
    id: 9,
    name: "Ex Machina",
    category: "Ciencia Ficción",
    description: "2015",
    description: "Ciencia Ficción",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/ex-machina/ex-machina.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/ex-machina/ex-machina.png",
    price: 10879,
  },

  {
    id: 10,
    name: "The Exorcist",
    category: "Terror",
    description: "1973",
    description: "Terror",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-exorcist/the-exorcist.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-exorcist/the-exorcist.png",
    price: 11649,
  },

  {
    id: 11,
    name: "The Witch",
    category: "Terror",
    description: "2015",
    description: "Terror",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-witch/the-witch.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-witch/the-witch.png",
    price: 12890,
  },

  {
    id: 12,
    name: "The Shining",
    category: "Terror",
    description: "1980",
    description: "Terror",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-shining/the-shining.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-shining/the-shining.png",
    price: 13890,
  },

  {
    id: 13,
    name: "Pet Sematary",
    category: "Terror",
    description: "1989",
    description: "Terror",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/pet-sematary/pet-sematary.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/pet-sematary/pet-sematary.png",
    price: 15106,
  },

  {
    id: 14,
    name: "The Ring",
    category: "Terror",
    description: "2002",
    description: "Terror",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-ring/the-ring.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-ring/the-ring.png",
    price: 10913,
  },

  {
    id: 15,
    name: "Scream",
    category: "Terror",
    description: "1997",
    description: "Terror",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/scream/scream.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/scream/scream.png",
    price: 14290,
  },

  {
    id: 16,
    name: "The Conjuring",
    category: "Terror",
    description: "2013",
    description: "Terror",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-conjuring/the-conjuring.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-conjuring/the-conjuring.png",
    price: 6890,
  },

  {
    id: 17,
    name: "The Conjuring 2",
    category: "Terror",
    description: "2016",
    description: "Terror",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-conjuring-2/the-conjuring-2.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-conjuring-2/the-conjuring-2.png",
    price: 6890,
  },

  {
    id: 18,
    name: "The Conjuring: The Devil Made Me Do It",
    category: "Terror",
    description: "2021",
    description: "Terror",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-conjuring-3/the-conjuring-3.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-conjuring-3/the-conjuring-3.png",
    price: 11423,
  },

  {
    id: 19,
    name: "X-Men: Days of Future Past",
    category: "Comic",
    description: "2014",
    description: "Comic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/x-men-days-of-future-past/x-men-days-of-future-past.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/x-men-days-of-future-past/x-men-days-of-future-past.png",
    price: 15106,
  },

  {
    id: 20,
    name: "Batman Begins",
    category: "Comic",
    description: "2005",
    description: "Comic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/batman-begins/batman-begins.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/batman-begins/batman-begins.png",
    price: 14350,
  },

  {
    id: 21,
    name: "Batman Forever",
    category: "Comic",
    description: "1995",
    description: "Comic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/batman-forever/batman-forever.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/batman-forever/batman-forever.png",
    price: 14350,
  },

  {
    id: 22,
    name: "Superman",
    category: "Comic",
    description: "1978",
    description: "Comic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/superman/superman.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/superman/superman.png",
    price: 13836,
  },

  {
    id: 23,
    name: "Man of Steel",
    category: "Comic",
    description: "2013",
    description: "Comic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/man-of-steel/man-of-steel.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/man-of-steel/man-of-steel.png",
    price: 10210,
  },

  {
    id: 24,
    name: "Batman v Superman: Dawn of Justice",
    category: "Comic",
    description: "2016",
    description: "Comic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/batman-v-superman-dawn-of-justice/batman-v-superman-dawn-of-justice.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/batman-v-superman-dawn-of-justice/batman-v-superman-dawn-of-justice.png",
    price: 8558,
  },

  {
    id: 25,
    name: "Spider-Man: Far from Home",
    category: "Comic",
    description: "2019",
    description: "Comic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/spider-man-far-from-home/spider-man-far-from-home.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/spider-man-far-from-home/spider-man-far-from-home.png",
    price: 10102,
  },

  {
    id: 26,
    name: "Avengers: Age of Ultron",
    category: "Comic",
    description: "2015",
    description: "Comic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/avengers-age-of-ultron/avengers-age-of-ultron.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/avengers-age-of-ultron/avengers-age-of-ultron.png",
    price: 10024,
  },

  {
    id: 27,
    name: "Sin City",
    category: "Comic",
    description: "2005",
    description: "Comic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/sin-city/sin-city.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/sin-city/sin-city.png",
    price: 7102,
  },

  {
    id: 28,
    name: "Iron Man",
    category: "Comic",
    description: "2008",
    description: "Comic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/iron-man/iron-man.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/iron-man/iron man.png",
    price: 13890,
  },

  {
    id: 29,
    name: "Watchmen",
    category: "Comic",
    description: "2009",
    description: "Comic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/watchmen/watchmen.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/watchmen/watchmen.png",
    price: 13833,
  },

  {
    id: 30,
    name: "300",
    category: "Comic",
    description: "2007",
    description: "Comic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/300/300.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/300/300.png",
    price: 14890,
  },

  {
    id: 31,
    name: "Harry Potter and the Philosopher's Stone",
    category: "Fantasía",
    description: "2001",
    description: "Fantasía",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/harry-potter-and-the-philosopher's-stone/harry-potter-and-the-philosopher's-stone.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/harry-potter-and-the-philosopher's-stone/harry-potter-and-the-philosopher's-stone.png",
    price: 12990,
  },

  {
    id: 32,
    name: "Fantastic Beasts: The Crimes of Grindelwald",
    category: "Fantasía",
    description: "2018",
    description: "Fantasía",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/fantastic-beasts-the-crimes-of-grindelwald/fantastic-beasts-the-crimes-of-grindelwald.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/fantastic-beasts-the-crimes-of-grindelwald/fantastic-beasts-the-crimes-of-grindelwald.png",
    price: 12184,
  },

  {
    id: 33,
    name: "The Lord of the Rings",
    category: "Fantasía",
    description: "2001 / 2002 / 2003",
    description: "Fantasía",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/lord-of-the-rings/lord-of-the-rings.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/lord-of-the-rings/lord-of-the-rings.png",
    price: 39500,
  },

  {
    id: 34,
    name: "The Hobbit",
    category: "Fantasía",
    description: "2012 / 2013 / 2014",
    description: "Fantasía",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-hobbit/the-hobbit.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-hobbit/the-hobbit.png",
    price: 39500,
  },

  {
    id: 35,
    name: "Edward Scissorhands",
    category: "Fantasía",
    description: "1990",
    description: "Fantasía",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/edward-scissorhands/edward-scissorhands.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/edward-scissorhands/edward-scissorhands.png",
    price: 19500,
  },

  {
    id: 36,
    name: "Big Fish",
    category: "Fantasía",
    description: "2003",
    description: "Fantasía",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/big-fish/big-fish.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/big-fish/big-fish.png",
    price: 13386,
  },

  {
    id: 37,
    name: "Where the Wild Things Are",
    category: "Fantasía",
    description: "2009",
    description: "Fantasía",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/where-the-wild-things-are/where-the-wild-things-are.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/where-the-wild-things-are/where-the-wild-things-are.png",
    price: 6200,
  },

  {
    id: 38,
    name: "Labyrinth",
    category: "Fantasía",
    description: "1986",
    description: "Fantasía",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/labyrinth/labyrinth.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/labyrinth/labyrinth.png",
    price: 14800,
  },

  {
    id: 39,
    name: "Pan's Labyrinth",
    category: "Fantasía",
    description: "2006",
    description: "Fantasía",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/pan's-labyrinth/pan's-labyrinth.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/pan's-labyrinth/pan's-labyrinth.png",
    price: 16500,
  },

  {
    id: 40,
    name: "Titanic",
    category: "Ficción Histórica",
    description: "1997",
    description: "Ficción Histórica",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/titanic/titanic.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/titanic/titanic.png",
    price: 12890,
  },

  {
    id: 41,
    name: "Saving Private Ryan",
    category: "Ficción Histórica",
    description: "1997",
    description: "Ficción Histórica",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/saving-private-ryan/saving-private-ryan.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/saving-private-ryan/saving-private-ryan.svg",
    price: 13079,
  },

  {
    id: 42,
    name: "The Revenant",
    category: "Ficción Histórica",
    description: "2015",
    description: "Ficción Histórica",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-revenant/the-revenant.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-revenant/the-revenant.png",
    price: 13079,
  },

  {
    id: 43,
    name: "Dunkirk",
    category: "Ficción Histórica",
    description: "2017",
    description: "Ficción Histórica",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/dunkirk/dunkirk.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/dunkirk/dunkirk.png",
    price: 17810,
  },

  {
    id: 44,
    name: "Apollo 13",
    category: "Ficción Histórica",
    description: "1995",
    description: "Ficción Histórica",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/apollo-13/apollo-13.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/apollo-13/apollo-13.png",
    price: 12575,
  },

  {
    id: 45,
    name: "Braveheart",
    category: "Ficción Histórica",
    description: "1995",
    description: "Ficción Histórica",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/braveheart/braveheart.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/braveheart/braveheart.png",
    price: 15719,
  },

  {
    id: 46,
    name: "Schindler's List",
    category: "Ficción Histórica",
    description: "1993",
    description: "Ficción Histórica",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/schindler's-list/schindler's-list.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/schindler's-list/schindler's-list.png",
    price: 16200,
  },

  {
    id: 47,
    name: "Hidden Figures",
    category: "Ficción Histórica",
    description: "2016",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/hidden-figures/hidden-figures.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/hidden-figures/hidden-figures.png",
    price: 12100,
  },

  {
    id: 48,
    name: "JFK",
    category: "Ficción Histórica",
    description: "1991",
    description: "Ficción Histórica",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/jfk/jfk.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/jfk/jfk.png",
    price: 12500,
  },

  {
    id: 49,
    name: "Toy Story",
    category: "Animación",
    description: "1995",
    description: "Animación",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/toy-story/toy-story.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/toy-story/toy-story.png",
    price: 12500,
  },

  {
    id: 50,
    name: "Coco",
    category: "Animación",
    description: "2017",
    description: "Animación",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/coco/coco.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/coco/coco.png",
    price: 12500,
  },

  {
    id: 51,
    name: "Ratatouille",
    category: "Animación",
    description: "2007",
    description: "Animación",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/ratatouille/ratatouille.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/ratatouille/ratatouille.png",
    price: 12500,
  },

  {
    id: 52,
    name: "The Nightmare Before Christmas",
    category: "Animación",
    description: "1993",
    description: "Animación",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-nightmare-before-christmas/the-nightmare-before-christmas.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-nightmare-before-christmas/the-nightmare-before-christmas.png",
    price: 8100,
  },

  {
    id: 53,
    name: "Rango",
    category: "Animación",
    description: "2011",
    description: "Animación",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/rango/rango.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/rango/rango.png",
    price: 8100,
  },

  {
    id: 54,
    name: "千と千尋の神隠し",
    category: "Animación",
    description: "2001",
    description: "Animación",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/千と千尋の神隠し/千と千尋の神隠し.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/千と千尋の神隠し/千と千尋の神隠し.png",
    price: 10000,
  },

  {
    id: 55,
    name: "Fantasia",
    category: "Animación",
    description: "1940",
    description: "Animación",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/fantasia/fantasia.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/fantasia/fantasia.png",
    price: 9500,
  },

  {
    id: 56,
    name: "The Lion King",
    category: "Animación",
    description: "1994",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-lion-king/the-lion-king.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-lion-king/the-lion-king.svg",
    price: 11200,
  },

  {
    id: 57,
    name: "Alice in Wonderland",
    category: "Animación",
    description: "1951",
    description: "Animación",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/alice-in-wonderland/alice-in-wonderland.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/alice-in-wonderland/alice-in-wonderland.png",
    price: 11200,
  },

  {
    id: 58,
    name: "The Imitation Game",
    category: "Biopic",
    description: "2014",
    description: "Biopic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-imitation-game/the-imitation-game.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-imitation-game/the-imitation-game.png",
    price: 13500,
  },

  {
    id: 59,
    name: "The Doors",
    category: "Biopic",
    description: "1991",
    description: "Biopic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-doors/the-doors.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-doors/The-Doors.png",
    price: 13500,
  },

  {
    id: 60,
    name: "Bohemian Rhapsody",
    category: "Biopic",
    description: "2018",
    description: "Biopic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/bohemian-rhapsody/bohemian-rhapsody.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/bohemian-rhapsody/bohemian-rhapsody.png",
    price: 13500,
  },

  {
    id: 61,
    name: "Rocketman",
    category: "Biopic",
    description: "2019",
    description: "Biopic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/rocketman/rocketman.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/rocketman/rocketman.png",
    price: 10800,
  },

  {
    id: 62,
    name: "The Wolf of Wall Street",
    category: "Biopic",
    description: "2013",
    description: "Biopic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-wolf-of-wall-street/the-wolf-of-wall-street.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-wolf-of-wall-street/the-wolf-of-wall-street.png",
    price: 14200,
  },

  {
    id: 63,
    name: "Malcom X",
    category: "Biopic",
    description: "1992",
    description: "Biopic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/malcom-x/malcom-x.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/malcom-x/malcom-x.png",
    price: 11100,
  },

  {
    id: 63,
    name: "Ford v Ferrari",
    category: "Biopic",
    description: "2019",
    description: "Biopic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/ford-v-ferrari/ford-v-ferrari.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/ford-v-ferrari/ford-v-ferrari.png",
    price: 11100,
  },

  {
    id: 64,
    name: "Green Book",
    category: "Biopic",
    description: "2018",
    description: "Biopic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/green-book/green-book.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/green-book/green-book.png",
    price: 11100,
  },

  {
    id: 65,
    name: "Captain Phillips",
    category: "Biopic",
    description: "2013",
    description: "Biopic",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/captain-phillips/captain-phillips.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/captain-phillips/captain-phillips.png",
    price: 11100,
  },

  {
    id: 66,
    name: "Zoolander",
    category: "Comedia",
    description: "2001",
    description: "Comedia",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/zoolander/zoolander.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/zoolander/zoolander.png",
    price: 6500,
  },

  {
    id: 67,
    name: "Superbad",
    category: "Comedia",
    description: "2007",
    description: "Comedia",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/superbad/superbad.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/superbad/superbad.png",
    price: 11300,
  },

  {
    id: 68,
    name: "Coming to America",
    category: "Comedia",
    description: "1988",
    description: "Comedia",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/coming-to-america/coming-to-america.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/coming-to-america/coming-to-america.png",
    price: 10900,
  },

  {
    id: 69,
    name: "The Hangover",
    category: "Comedia",
    description: "2009 / 2011 / 2013",
    description: "Comedia",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-hangover/the-hangover.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-hangover/the-hangover.png",
    price: 18200,
  },

  {
    id: 70,
    name: "Home Alone",
    category: "Comedia",
    description: "1990",
    description: "Comedia",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/home-alone/home-alone.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/home-alone/home-alone.png",
    price: 12100,
  },

  {
    id: 71,
    name: "American Pie",
    category: "Comedia",
    description: "1999",
    description: "Comedia",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/american-pie/american-pie.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/american-pie/american-pie.png",
    price: 9200,
  },

  {
    id: 72,
    name: "Philadelphia",
    category: "Drama",
    description: "1993",
    description: "Drama",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/philadelphia/philadelphia.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/philadelphia/philadelphia.png",
    price: 13500,
  },

  {
    id: 73,
    name: "Gladiator",
    category: "Drama",
    description: "2000",
    description: "Drama",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/gladiator/gladiator.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/gladiator/gladiator.svg",
    price: 15500,
  },

  {
    id: 74,
    name: "The Green Mile",
    category: "Drama",
    description: "1999",
    description: "Drama",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-green-mile/the-green-mile.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-green-mile/the-green-mile.png",
    price: 16890,
  },

  {
    id: 75,
    name: "The Shawshank Redemption",
    category: "Drama",
    description: "1994",
    description: "Drama",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-shawshank-redemption/the-shawshank-redemption.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-shawshank-redemption/the-shawshank-redemption.png",
    price: 16890,
  },

  {
    id: 76,
    name: "Scarface",
    category: "Drama",
    description: "1983",
    description: "Drama",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/scarface/scarface.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/scarface/scarface.png",
    price: 18890,
  },

  {
    id: 77,
    name: "The Godfather",
    category: "Drama",
    description: "1972",
    description: "Drama",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-godfather/the-godfather.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-godfather/the-godfather.svg",
    price: 18890,
  },

  {
    id: 78,
    name: "The Godfather Part II",
    category: "Drama",
    description: "1974",
    description: "Drama",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-godfather-part-2/the-godfather-part-2.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-godfather-part-2/the-godfather-part-2.png",
    price: 18890,
  },

  {
    id: 79,
    name: "The Godfather Coda. The Death of Michael Corleone",
    category: "Drama",
    description: "1990",
    description: "Drama",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-godfather-coda-the-death-of-michael-corleone/the-godfather-coda-the-death-of-michael-corleone.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-godfather-coda-the-death-of-michael-corleone/the-godfather-coda-the-death-of-michael-corleone.png",
    price: 18890,
  },

  {
    id: 80,
    name: "Forrest Gump",
    category: "Drama",
    description: "1994",
    description: "Drama",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/forrest-gump/forrest-gump.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/Forrest Gump/forrest-gump.png",
    price: 18890,
  },

  {
    id: 81,
    name: "Inception",
    category: "Drama",
    description: "2010",
    description: "Thriller",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/inception/inception.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/inception/inception.png",
    price: 17890,
  },

  {
    id: 82,
    name: "American Psycho",
    category: "Thriller",
    description: "2000",
    description: "Thriller",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/american-psycho/american-psycho.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/american-psycho/american-psycho.png",
    price: 17890,
  },

  {
    id: 83,
    name: "Prisoners",
    category: "Thriller",
    description: "2013",
    description: "Thriller",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/prisoners/prisoners.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/prisoners/prisoners.png",
    price: 17890,
  },

  {
    id: 84,
    name: "Twelve Monkeys",
    category: "Thriller",
    description: "1995",
    description: "Thriller",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/twelve-monkeys/twelve-monkeys.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/twelve-monkeys/twelve-monkeys.png",
    price: 17890,
  },

  {
    id: 85,
    name: "Fight Club",
    category: "Thriller",
    description: "1999",
    description: "Thriller",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/fight-club/fight-club.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/fight-club/fight-club.png",
    price: 17890,
  },

  {
    id: 86,
    name: "Nightcrawler",
    category: "Thriller",
    description: "2014",
    description: "Thriller",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/nightcrawler/nightcrawler.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/nightcrawler/nightcrawler.png",
    price: 17890,
  },

  {
    id: 87,
    name: "Memento",
    category: "Thriller",
    description: "2000",
    description: "Thriller",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/memento/Memento.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/memento/memento.png",
    price: 17890,
  },

  {
    id: 88,
    name: "The Prestige",
    category: "Thriller",
    description: "2006",
    description: "Thriller",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-prestige/the-prestige.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-prestige/the-prestige.png",
    price: 17890,
  },

  {
    id: 89,
    name: "The Machinist",
    category: "Thriller",
    description: "2004",
    description: "Thriller",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-machinist/the-machinist.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-machinist/the-machinist.png",
    price: 17890,
  },

  {
    id: 90,
    name: "Frankenstein",
    category: "Clásico",
    description: "1931",
    description: "Clásico",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/frankenstein/frankenstein.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/frankenstein/frankenstein.png",
    price: 19890,
  },

  {
    id: 91,
    name: "Casablanca",
    category: "Clásico",
    description: "1942",
    description: "Clásico",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/casablanca/casablanca.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/casablanca/casablanca.png",
    price: 17890,
  },

  {
    id: 92,
    name: "The Wizard of Oz",
    category: "Clásico",
    description: "1939",
    description: "Clásico",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/the-wizard-of-oz/the-wizard-of-oz.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/the-wizard-of-oz/the-wizard-of-oz.png",
    price: 15890,
  },

  {
    id: 93,
    name: "Spartacus",
    category: "Clásico",
    description: "1960",
    description: "Clásico",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/spartacus/spartacus.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/spartacus/spartacus.png",
    price: 15890,
  },

  {
    id: 94,
    name: "Lawrence of Arabia",
    category: "Clásico",
    description: "1962",
    description: "Clásico",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/lawrence-of-arabia/lawrence of-arabia.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/lawrence-of-arabia/lawrence-of-arabia.png",
    price: 17890,
  },

  {
    id: 95,
    name: "Apocalypse Now",
    category: "Clásico",
    description: "1979",
    description: "Clásico",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-posters/apocalypse-now/apocalypse-now.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-movies/blu-ray-and-4k-ultra-hd-movie-logos/apocalypse-now/apocalypse-now.png",
    price: 17890,
  },

  {
    id: 96,
    name: "Game of Thrones",
    category: "Serie",
    description: "Serie",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-series/blu-ray-and-4k-ultra-hd-series-posters/game-of-thrones/game-of-thrones.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-series/blu-ray-and-4k-ultra-hd-series-logos/game-of-thrones/game-of-thrones.png",
    price: 75000,
  },

  {
    id: 97,
    name: "Chernobyl",
    category: "Serie",
    description: "Serie",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-series/blu-ray-and-4k-ultra-hd-series-posters/chernobyl/chernobyl.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-series/blu-ray-and-4k-ultra-hd-series-logos/chernobyl/chernobyl.png",
    price: 18000,
  },

  {
    id: 98,
    name: "Breaking Bad",
    category: "Serie",
    description: "Serie",
    CardImg:
      "img/blu-ray-and-4k-ultra-hd-series/blu-ray-and-4k-ultra-hd-series-posters/breaking-bad/breaking-bad.png",
    LogoImg:
      "img/blu-ray-and-4k-ultra-hd-series/blu-ray-and-4k-ultra-hd-series-logos/breaking-bad/breaking-bad.png",
    price: 28000,
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
