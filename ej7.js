const songs = [
    { title: "Hey Jude", genre: "Rock" },
    { title: "Thriller", genre: "Pop" },
    { title: "Master of Puppets", genre: "Metal" },
    { title: "Shake It Off", genre: "Pop" },
  ];
  
  const songsByGenre = {};
  
  for (let song of songs) {
    if (!songsByGenre[song.genre]) {
      songsByGenre[song.genre] = [];
    }
    songsByGenre[song.genre].push(song);
  }
  
  console.log(songsByGenre);
  