const characters = [
    { name: "Luke Skywalker", species: "Human" },
    { name: "Chewbacca", species: "Wookiee" },
    { name: "Han Solo", species: "Human" },
    { name: "R2-D2", species: "Droid" },
  ];
  
  const humanCharacters = [];
  for (let character of characters) {
    if (character.species === "Human") {
      humanCharacters.push(character);
    }
  }
  
  console.log(humanCharacters);
  