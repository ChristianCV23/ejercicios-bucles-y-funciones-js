const songs = [
    { title: "Stairway to Heaven", genre: "Rock", duration: 8 },
    { title: "Bohemian Rhapsody", genre: "Rock", duration: 6 },
    { title: "Song 2", genre: "Rock", duration: 2 },
    { title: "Imagine", genre: "Pop", duration: 3 },
  ];
  
  const rockPlaylist = [];
  
  for (let song of songs) {
    if (song.genre === "Rock" && song.duration > 5) {
      rockPlaylist.push(song);
    }
  }
  
  console.log(rockPlaylist);
  