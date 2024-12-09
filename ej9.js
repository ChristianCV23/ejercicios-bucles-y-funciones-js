const xMen = [
    { name: "Cyclops", year: 1963 },
    { name: "Wolverine", year: 1974 },
    { name: "Storm", year: 1975 },
  ];
  
  function oldestXMen(members) {
    return members.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
  }
  
  console.log(oldestXMen(xMen));
  