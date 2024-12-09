const mutants = [
    { name: "Jean Grey", power: "Telepathy" },
    { name: "Nightcrawler", power: "Teleportation" },
  ];
  
  function findMutantByPower(mutants, power) {
    return mutants.some(mutant => mutant.power === power) ? "Mutante encontrado" : "Mutante no encontrado";
  }
  
  console.log(findMutantByPower(mutants, "Teleportation"));
  console.log(findMutantByPower(mutants, "Invisibility"));
  