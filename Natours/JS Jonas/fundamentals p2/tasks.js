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





const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(44, 23, 71));

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

function checkwinner(avgdolphins, avgkoalas) {
  if (avgdolphins >= 2 * avgkoalas) {
    console.log(`Dolphins win (${avgdolphins} vs ${avgkoalas})`);
  } else if (avgkoalas >= 2 * avgdolphins) {
    console.loge(`Koalas win (${avgkoalas} vs ${avgdolphins})`);
  } else {
    console.log(`No team wins...`);
  }
}

checkwinner(scoreDolphins, scoreKoalas);

const populations = [1441, 42, 35, 70];
console.log(populations.length === 4);

function percentageofWorld(population) {
  return (population / 7900) * 100;
}

const percentages = [
  percentageofWorld(populations[0]),
  percentageofWorld(populations[1]),
  percentageofWorld(populations[2]),
  percentageofWorld(populations[3]),
];
console.log(percentages);


const neighbours = ["Germany", "Czech", "Ukraine"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop("Utopia");
console.log(neighbours);

if (neighbours.includes("Germany")) console.log("Central Eropean country");

neighbours[neighbours.indexOf("Germany")] = "Republic of Germany";

console.log(neighbours);

const caltip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

const bills = [125, 555, 44];

const tips = [caltip(bills[0]), caltip(bills[1]), caltip(bills[2])];

console.log(bills, tips);

//With Bonus:
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

const myCountry = {
  country: "Poland",
  capital: "Warszawa",
  langauge: "Polski",
  population: "42",
};

const object = {
  country: "Finland",
  population: "6",
  neighbours: ["Poland", "Sweden", "Germany"],
  capital: "Helsinki",
};

console.log(
  `${object.country} has ${object.population} milion finish speaking people, 3 ${object.neighbours.length} countries and a capital called ${object.capital}`
  );
  
  object.population += 2;
  console.log(object.population);
  
  object.population -= 2;
  console.log(object.population);
  
  
  country: "Poland",
  capital: "Warszawa",
  langauge: "Polski",
  neighbours: ["Poland", "Sweden", "Germany"],
  population: "42",
  
  describe: function () {
    console.log(
      `${this.country} has ${this.population} milions polish-speaking people, and a capital called ${this.capital}`
      );
    },
    
    checkIsland: function () {
      this.isIsland = !Boolean(this.neighbours.length);
    },
  };
  
  myCountry.describe();
  myCountry.checkIsland();
  console.log(myCountry);
  
  const myCountry = {
    
    const mark = {
      fullname: "Mark Miller",
      mass: 78,
      height: 1.69,
      
      calcBMi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
      },
    };
    
    const john = {
      fullname: "Jhon Smith",
      mass: 92,
      height: 1.95,
      
      calcBMi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
      },
    };
    
    if (mark.calcBMi > john.calcBMi) {
      console.log(
        `Mark Miller's BMI (${mark.calcBMi}) is higher than Jhon Smith (${john.calcBMi}) `
        );
      } else if (john.bmi > mark.bmi) {
        console.log(`Jhon Smith's BMI (${mark.calcBMi}) is 
        higher than Jhon Miller (${john.calcBMi}) `);
      }
      console.log(mark.calcBMi());
      
      console.log(john.calcBMi());

      
      for (let rep = 1; rep <= 50; rep++) {
        console.log(`Vote number ${rep} is currently voting`);
      }
      

// console.log(`lifting weights repetition 1`);
// console.log(`lifting weights repetition`);
// console.log(`lifting weights repetition`);
// console.log(`lifting weights repetition`);
// console.log(`lifting weights repetition`);
// console.log(`lifting weights repetition`);
// console.log(`lifting weights repetition`);

for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repetition ${rep}`);

  
  const populations = [1441, 42, 35, 70];
  console.log(populations.length === 4);
  
  function percentageofWorld(population) {
    return (population / 7900) * 100;
  }
  
  const percentages = [
    percentageofWorld(populations[0]),
    percentageofWorld(populations[1]),
    percentageofWorld(populations[2]),
    percentageofWorld(populations[3]),
  ];
  console.log(percentages);
  
  const percentage2 = [];
  for (let i = 0; i < populations.length; i++) {
    const perc = percentageofWorld(populations[i]);
    percentage2.push(perc);
  }
  console.log(percentage2);
  
  
  const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
  ];
  
  for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
  console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  
  const populations = [1441, 42, 35, 70];
  function percentageofWorld(population) {
    return (population / 7900) * 100;
  }
  const percentages = [
    percentageofWorld(populations[0]),
    percentageofWorld(populations[1]),
    percentageofWorld(populations[2]),
    percentageofWorld(populations[3]),
  ];
  
  const percentage3 = [];
  let i = 0;
  while (i < populations.length) {
    const perc = percentageofWorld(populations[i]);
    percentage3.push(perc);
    i++;
  }
  console.log(percentage3);
  
  
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  
  const tips = [];
  
  const totals = [];
  
  const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  };
  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }
  
  console.log(bills, tips, totals);
  
  const calcAverage = function (arr) {
    let = sum - 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    console.log(sum);
  };
  calcAverage([2, 3, 6]);
  
  */
