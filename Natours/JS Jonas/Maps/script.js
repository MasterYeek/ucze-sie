`use strict`;

const rest = new Map();
rest.set("name", "Classico Intaliano");
rest.set(1, "Firenze, italy");
rest.set(2, "Lisbon, Portugal");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(rest.get("name"));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
//rest.clear();
const arr = [1, 2];
rest.set(document.querySelector("h1"), "Heading");
rest.set(arr, "test");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

const question = new Map([
  ["question", "What is the best programming languagein the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, " Try again!"],
]);
console.log(question);

//Convert object to map
//const hoursMap = new Map(Object.entries);

//Quiz capp
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt("Your answer"));
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log([...question]);
//console.log(...question.entries);
console.log([...question.keys()]);
console.log([...question.values()]);
