const artists = [
    { name: "The Beatles", influences: ["Elvis Presley", "Little Richard"] },
    { name: "Led Zeppelin", influences: ["The Beatles", "Howlin' Wolf"] },
  ];
  
  for (let artist of artists) {
    for (let influence of artist.influences) {
      console.log(`${artist.name} fue influenciado por ${influence}`);
    }
  }
  