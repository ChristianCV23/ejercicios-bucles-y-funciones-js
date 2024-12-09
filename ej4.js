const series = [
    { name: "Tom and Jerry", year: 1940 },
    { name: "The Simpsons", year: 1989 },
    { name: "Looney Tunes", year: 1930 },
  ];
  
  let oldestSeries = series[0];
  
  for (let s of series) {
    if (s.year < oldestSeries.year) {
      oldestSeries = s;
    }
  }
  
  console.log(`La serie más antigua es: ${oldestSeries.name}`);
  