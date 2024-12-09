const starWarsMovies = [
    { title: "A New Hope", year: 1977 },
    { title: "The Empire Strikes Back", year: 1980 },
    { title: "The Phantom Menace", year: 1999 },
    { title: "The Force Awakens", year: 2015 },
  ];
  
  const moviesByDecade = {};
  
  for (let movie of starWarsMovies) {
    let decade = Math.floor(movie.year / 10) * 10;
    if (!moviesByDecade[decade]) {
      moviesByDecade[decade] = [];
    }
    moviesByDecade[decade].push(movie);
  }
  
  console.log(moviesByDecade);
  