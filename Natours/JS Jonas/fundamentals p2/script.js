"use strict";

/*
let hasDriverslicense = false;
const passTest = true;

if (passTest) hasDriverslicense = true;
if (hasDriverslicense) console.log("I can drive");

function logger() {
  console.log(` MY name is tomas`);
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//Functin declaration
function calcAge1(birthyear) {
  return 2023 - birthyear;
}

const age1 = calcAge1(1993);
console.log(age1);

// function expression

const calcage2 = function (birthyear) {
  return 2023 - birthyear;
};

const age2 = calcage2(1993);
console.log(age1, age2);


function calcAge1(birthyear) {
  return 2023 - birthyear;
}

const calcAge3 = (birthyear) => 2023 - birthyear;
const age3 = calcAge3(1993);
console.log(age3);

const yearsuntilrretirement = (birthyear, firstname) => {
  const age = 2023 - birthyear;
  const retirement = 65 - age;
  return `${firstname} retires in ${retirement}`;
};

console.log(yearsuntilrretirement(1991, "Tom"));


function cutfruitpieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applepieces = cutfruitpieces(apples);
  const orangepieces = cutfruitpieces(oranges);

  const juice = `Juice with ${applepieces} apples and ${orangepieces} 
oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));



function calcAge1(birthyear) {
  return 2023 - birthyear;
}

function yearsuntilretirement(birthyear, firstname) {
  const age = calcAge1(birthyear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log("he needs more");
    return retirement;
  } else {
    console.log(`${firstname} has already retired`);
    return -1;
  }
}
console.log(yearsuntilretirement(1993, "Tom"));
console.log(yearsuntilretirement(1950, "mat"));

const friend1 = "michael";
const friend2 = "steven";
const friend3 = "peter";

const friends = ["Miechael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstname = "Tomasz";
const tomasz = [firstname, "Świerczek", 2023 - 1993, "user", friends];
console.log(tomasz);
console.log(tomasz.length);

const calcage = function (birthyear) {
  return 2037 - birthyear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcage(years[0]);

const age2 = calcage(years[1]);

const age3 = calcage(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcage(years[0]),
  calcage(years[1]),
  calcage(years[years.length - 1]),
];
console.log(ages);



const friends = ["Miechael", "Steven", "Peter"];

//dodaje
friends.push("jay");
console.log(friends);

friends.unshift("john");
console.log(friends);

// usuwa

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));

console.log(friends.includes("Steven"));
console.log(friends.includes("bob"));

if (friends.includes("Steven")) console.log("You have a friend called steven");

const tomarray = [
  "tom",
  "Świerczek",
  2023 - 1993,
  "user",
  ["Miechael", "Peter", "Steven"],
];

const tom = {
  fiirstname: "tom",
  lastname: "Świerczek",
  age: 2023 - 1993,
  job: "user",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(tom);

const tom = {
  firstname: "tom",
  lastname: "Świerczek",
  age: 2023 - 1993,
  job: "user",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(tom);

console.log(tom.lastname);

const nameKey = "name";
console.log(tom["first" + nameKey]);
console.log(tom["last" + nameKey]);

const interestedin = prompt(
  "What do you want to know about Tom? Choose between firstName, lastName, age,job,and friends"
);

if (tom[interestedin]) {
  console.log(tom[interestedin]);
} else {
  console.log("Wrong request!");
}

tom.location = "Poland";
tom["twitter"] = "@ttomtom";
console.log(tom);

console.log(
  `${tom.firstname} has  ${tom.friends.length} friends, and his best friend is called  ${tom.friends[0]} `
  );
  
  const tom = {
    firstname: "tom",
    lastname: "Świerczek",
    birth: 1993,
    job: "user",
    friends: ["Michael", "Peter", "Steven"],
    hasdriverlicense: true,
    
    calcAge: function () {
      console.log(this);
      return 2037 - this.birth;
    },
    
    getSummary: function () {
    return `${this.firstname} is a ${this.calcAge()} year old ${
      tom.job
    }}, and he has ${this.hasdriverlicense ? "a" : "no"} driver's license`;
  },
};

console.log(tom.calcAge(1993));

console.log(tom.getSummary());




// const tom = [
  //   "tom",
  //   "Świerczek",
  //   2023 - 1993,
  //   "user",
  //   ["Miechael", "Peter", "Steven"],
  //   true,
  //   false,
// ];

// const types = [];

// for (let i = 0; i < tom.length; i++) {
  //   console.log(tom[i], typeof tom[1]);
  
  //   types[i] = typeof tom[i];
  // }
  
  // console.log(types);
  
  // const years = [1991, 2007, 1969, 2020];
  
  // const ages = [];
  
  // for (let i = 0; i < years.length; i++) {
    //   //ages.push(2023 - years[i]);
    //   ages[i] = 2023 - years[i];
    // }
    // console.log(ages);
    
    // console.log(`ONLY STRINGS`);
    // for (let i = 0; i < tom.length; i++) {
      //   if (typeof tom[i] !== "string") continue;
      
      //   console.log(tom[i], typeof tom[1]);
      // }
      
      // console.log(`BREAK WITH NUMBER`);
      // for (let i = 0; i < tom.length; i++) {
        //   if (typeof tom[i] === "number") break;
        
        //   console.log(tom[i], typeof tom[1]);
        // }
        
        const tom = [
          "tom",
          "Świerczek",
          2023 - 1993,
          "user",
          ["Miechael", "Peter", "Steven"],
        ];
        
for (let i = tom.length - 1; i >= 0; i--) {
  console.log(i, tom[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`=====Starting exercise ${exercise}`);
  
  for (let rep = 1; rep < 6; rep++)
  console.log(`===Exercise ${exercise} weight repetition ${rep}`);
}

// for (let rep = 1; rep <= 10; rep++) {
  //   console.log(`lifting weights repetition ${rep}`);
  // }
  
  // let rep = 1;
  // while (rep <= 10) {
    //   console.log(`lifting weights repetition ${rep}`);
    //   rep++;
    // }
    
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    
    while (dice !== 6) {
      console.log(`You rolled a ${dice}`);
      dice = Math.trunc(Math.random() * 6) + 1;
      if (dice === 6) console.log(`loop is about to end`);
    }
    
    
    //Temperatures min max
    
    const Temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
    
    const calcTempAmplitude = function (temps) {
      let max = temps[0];
      let min = temps[0];
      
      for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        
        if (typeof curTemp !== "number") continue;
        
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
      }
      console.log(max, min);
      return max - min;
    };
    
    const amplitude = calcTempAmplitude(Temperatures);
    console.log(amplitude);
    
    */
