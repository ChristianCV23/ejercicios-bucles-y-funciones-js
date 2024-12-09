const albums = [
    { title: "Dark Side of the Moon", genre: "Rock", duration: 43 },
    { title: "Thriller", genre: "Pop", duration: 42 },
    { title: "Back in Black", genre: "Rock", duration: 42 },
  ];
  
  let totalDuration = 0;
  
  for (let album of albums) {
    if (album.genre === "Rock") {
      totalDuration += album.duration;
    }
  }
  
  console.log(`Duración total de álbumes de rock: ${totalDuration} minutos`);
  