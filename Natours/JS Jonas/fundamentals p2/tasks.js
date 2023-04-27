function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const describe = describeCountry("polska", 34, "warsaw");

const describe2 = describeCountry("Niemcy", 56, "Berlin");

const describe3 = describeCountry("Italy", 44, "Rzym");
console.log(describe, describe2, describe3);
