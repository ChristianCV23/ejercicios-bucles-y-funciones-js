const actors = [
    { name: "Leonardo DiCaprio", birthYear: 1974 },
    { name: "Morgan Freeman", birthYear: 1937 },
  ];
  
  function calculateAges(actors) {
    const currentYear = new Date().getFullYear();
    return actors.map(actor => ({
      name: actor.name,
      age: currentYear - actor.birthYear,
    }));
  }
  
  console.log(calculateAges(actors));
  