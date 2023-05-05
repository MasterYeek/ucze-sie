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
*/

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
