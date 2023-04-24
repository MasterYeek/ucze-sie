/*
let country = "Poland";

let continet = "Europe";

let population = "42mil";

console.log(country);
console.log(continet);
console.log(population);



let isISland = false;
console.log(typeof isISland);

let language

console.log(typeof isISland);

console.log(typeof population);

console.log(typeof language);


language = "Polski";
const country = "Poland";
const nation = "Europe";
const isIslad = false;nst population = 42;
console.log(population / 2);
console.log(population);
console.log(population);

const Poland = 42;

console.log(6 < Poland);

const Polska = 42;
console.log(33 < Polska);

const description =
  "Portugal is in Europe and its 11 milion people speak portuguese";
console.log(description);

const massmark = 78;
const heightmark = 1.69;

const massjohn = 92;
const heightjohn = 1.95;

const BMImark = massmark / heightmark ** 2;
const BMIjohn = massjohn / (heightjohn * heightjohn);
const markhigherBMI = BMImark > BMIjohn;

console.log(BMImark, BMIjohn, markhigherBMI);

const country = "Portugal";
const nation = "Europe";
const people = 11;
const language = "portuguese";

const description = ` ${country} is in ${nation}, and its ${people} milion people speak ${language}`;
console.log(description);



const mypopulation = 20;
const Portugal = 33;

if (mypopulation > Portugal) {
  console.log(`Portugal's population is above average`);
} else {
  console.log(
    `Portugal's population is ${Portugal - mypopulation}  milion below average `
  );
}


const massmark = 78;
const heightmark = 1.69;

const massjohn = 92;
const heightjohn = 1.95;

const BMImark = massmark / heightmark ** 2;
const BMIjohn = massjohn / (heightjohn * heightjohn);
const markhigherBMI = BMImark > BMIjohn;

if (BMImark > BMIjohn) {
  console.log(`Mark BMI is higher than john's BMI`);
} else {
  console.log(`Jhon's BMI is higher than Mark BMI`);
}

console.log(`Mark's BMI ${BMImark} is higher than Jhon's ${BMIjohn}!`);

*/

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
console.log(numNeighbours);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border in case");
} else {
  console.log("No borders");
}
