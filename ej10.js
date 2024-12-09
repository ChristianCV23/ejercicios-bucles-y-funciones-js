const countryCapitals = {
    Argentina: "Buenos Aires",
    España: "Madrid",
    México: "Ciudad de México",
  };
  
  function getCapital(country) {
    return countryCapitals[country] || "País no encontrado en la lista";
  }
  
  console.log(getCapital("Argentina"));
  console.log(getCapital("Brasil"));
  