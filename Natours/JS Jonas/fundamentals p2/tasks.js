/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const describe = describeCountry("polska", 34, "warsaw");

const describe2 = describeCountry("Niemcy", 56, "Berlin");

const describe3 = describeCountry("Italy", 44, "Rzym");
console.log(describe, describe2, describe3);


function percentageofWorld(population) {
  return (population / 7900) * 100;
}

const china = percentageofWorld(1441);
const poland = percentageofWorld(42);
const germany = percentageofWorld(35);

console.log(china, poland, germany);

const percentageofWorld1 = function (population) {
  return (population / 7900) * 100;
};
const china2 = percentageofWorld1(1441);
console.log(china2);



const percentageofWorld = (population) => (population / 7900) * 100;

const china = percentageofWorld(1441);

console.log(china);


function percentageofWorld(population) {
  return (population / 7900) * 100;
}

const china = percentageofWorld(1441);
const poland = percentageofWorld(42);
const germany = percentageofWorld(35);

function describePopulation(country, population) {
  const percentage = percentageofWorld(population);

  return `${country} has ${population} people, which is about ${percentage} of the world `;
}

console.log(describePopulation("Portugal", 10));
*/


const DolphinsAverage = (calcaverage) => (44 + 23 + 71) / 3
const Koalas = (calcaverage) => (85 + 54 + 41) / 3

function checkwinner (avgdolphins, avgkoalas)
const scoredol = DolphinsAverage(avgdolphins);
const scorekoal = Koalas(avgkoalas);

if (scoredol > scorekoal){
  console.log( `Dolphins win (${avgdolphins} vs ${avgkoalas} )` );
  return scoredol  
}else{
  console.log(`Koalas win ${avgkoalas} vs ${avgdolphins}` );
}