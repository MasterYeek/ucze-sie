"use strict";
/*

let hasDriverslicense = false;
const passTest = true;

if (passTest) hasDriverslicense = true;
if (hasDriverslicense) console.log("I can drive");
*/

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
