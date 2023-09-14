// const ids = new Set([1, 2, 3]);
// ids.add(2);
// ids.delete(3);

// for (const entry of ids.entries()) {
//   console.log(entry);
// }

// const person1 = { name: "tom" };
// const person2 = { name: "Marcel" };

// const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);

// personData.set(person2, [{ date: "two weeks ago", price: 100 }]);
// console.log(personData);
// console.log(personData.get(person1));

// for (const entry of personData.entries()) {
//   console.log(entry);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }
// for (const value of personData.values()) {
//   console.log(value);
// }

// console.log(personData.size);

//WeaskSet

let person = { name: "Tom" };
const persons = new WeakSet();
persons.add(person);

//pseron = null
console.log(persons);

//WeakMap

const personData = new WeakMap();
personData.set(person, "Extra info");
person = null;

console.log(personData);
