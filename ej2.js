const movies = [
    { title: "The Matrix", year: 1999 },
    { title: "Gladiator", year: 2000 },
    { title: "Titanic", year: 1997 },
    { title: "Inception", year: 2010 },
  ];
  
  let before2000 = 0;
  let after2000 = 0;
  
  for (let movie of movies) {
    if (movie.year < 2000) {
      before2000++;
    } else {
      after2000++;
    }
  }
  
  console.log(`Películas antes del 2000: ${before2000}`);
  console.log(`Películas después del 2000: ${after2000}`);
  