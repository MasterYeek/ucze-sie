function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 4));
console.log(add(1, 7));

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}
console.log(addMoreNumbers(1, 6));

const hoobies = ["Sports", "Cooking"];

function printhobies(h) {
  h.push("New hooby");
  console.log(hoobies);
}

printhobies(hoobies);

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}
const calculateVatAmount = createTaxCalculator(0.19);
const incomeaTaxAmount = createTaxCalculator(0.25);

let username = "Tom";

function greetUcer() {
  let name = "Anna";
  console.log("hit " + name);
}
let name = "Maximilian";
username = "Manuel";
greetUcer();

// function powerOf(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

function powerOf(x, n) {
  if (n === 1) {
    return x;
  }
  return x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2*2*2

const myself = {
  name: "tom",
  friends: [
    {
      name: "Manuel",
      friends: [
        {
          name: "Matt",
        },
      ],
    },
    {
      name: "Darek",
    },
  ],
};

function printFriendNames(person) {
  const collectedNames = [];
  if (!person.friends) {
    return [];
  }
  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...printFriendNames(friend));
  }
  return collectedNames;
}

printFriendNames(myself);
