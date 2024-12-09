const movies = [
    { title: "Inception", duration: 148 },
    { title: "The Godfather", duration: 175 },
    { title: "Titanic", duration: 195 },
  ];
  
  function averageDuration(movies) {
    const total = movies.reduce((sum, movie) => sum + movie.duration, 0);
    return total / movies.length;
  }
  
  console.log(`Promedio de duración: ${averageDuration(movies)} minutos`);
  