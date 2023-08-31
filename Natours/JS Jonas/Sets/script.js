`use strict`;

const ordersSets = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "RIsotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSets);

console.log(ordersSets.size);
console.log(ordersSets.has("Pizza"));
console.log(ordersSets.has("Bread"));
ordersSets.add("Garlic Bread");
ordersSets.add("Garlic Bread");
ordersSets.delete("RIsotto");
//ordersSets.clear();
console.log(ordersSets);

for (const order of ordersSets) console.log(order);

//Example

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//How many Unique position are there
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

//How many letters in Array

console.log(new Set("Tomasz").size);

let arr = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];

let arrUnique = [...new Set(arr)];
console.log(arrUnique);
