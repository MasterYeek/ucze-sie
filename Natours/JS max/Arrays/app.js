// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = new Array("hi ", "Welcome"); // = []
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listitems = document.querySelectorAll("li");

// const moreNumbers = Array.from(listitems);
// console.log(moreNumbers);

// const hobbies = ["Cooking", "Sports"];

// const personalData = [30, "Tom", { moreDetail: [] }];

// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1],
// ];

// for (const data of analyticsData) {
//   for (const dataPoints of data) {
//     console.log(dataPoints);
//   }
// }

// console.log(personalData[1]);

// const hoobies = ["Sports", "Cooking"];
// hoobies.push("reading");
// hoobies.unshift("Coding");
// const poppedValue = hoobies.pop();
// hoobies.shift();
// console.log(hoobies);

// hoobies[1] = "Coding";
// hoobies[5] = "Reading";
// console.log(hoobies);

// hoobies.splice(1, 0, "Good Food");
// console.log(hoobies);

// hoobies.splice(0, 1);
// console.log(hoobies);

// const testResult = [1, 4.5, 2.2, 10.53, 1.5, -4, 10];
// //const storedResults = testResult.slice(0, 2);
// const storedResults = testResult.concat([3.99, -2]);
// testResult.push(5.91);

// console.log(storedResults, testResult);
// console.log(testResult.indexOf(1.5));
// console.log(testResult.lastIndexOf(1.5));

// console.log(testResult.includes(10.53));
// const personData = [{ name: "Tom" }, { name: "Marcel" }];
// console.log(personData.indexOf({ name: "Marcel" }));

// const manuel = personData.find((person, index, persons) => {
//   return person.name === "Marcel";
// });
// manuel.name = "Anna";
// console.log(manuel, personData);

// const TomIndex = personData.findIndex((person, index, persons) => {
//   return person.name === "Tom";
// });

// console.log(TomIndex);

// const prices = [10.99, 5.99, 3.99, 6.67];
// const tax = 0.19;
// const taxAdjustedPrice = [];

// // for (const price of prices) {
// //   taxAdjustedPrice.push(price * (1 + tax));
// // }
// prices.forEach((price, ind, prices) => {
//   const priceObj = { index: ind, taxAdjustedPrice: price * (1 + tax) };
//   taxAdjustedPrice.push(priceObj);
// });

// console.log(taxAdjustedPrice);

// const prices = [10.99, 5.99, 3.99, 6.67];
// const tax = 0.19;

// const taxAdjustedPrice = prices.map((price, ind, prices) => {
//   const priceObj = { index: ind, taxAdjustedPrice: price * (1 + tax) };
//   return priceObj;
// });

// //console.log(prices, taxAdjustedPrice);

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedPrices.reverse());

// const filteredArray = prices.filter((price, index, prices) => {
//   return price > 6;
// });
// //Short
// const filteredArray2 = prices.filter((price) => price > 6);

// console.log(filteredArray);

// const sum = prices.reduce((prevValue, curValue) => {
//   return prevValue + curValue;
// }, 0);

// console.log(sum);

// const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
// const sum1 = originalArray.map((obj) => obj.price);

// console.log(sum1, originalArray);

// const data = "new york;10.99;2000";

// const transformedData = data.split(";");
// console.log(transformedData);

// const nameFragments = ["Tom", "Swierczek"];

// const name = nameFragments.join(" ");
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// nameFragments.push("Marek");
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [
//   { name: "tom", age: 30 },
//   { name: "Manuel", age: 31 },
// ];
// const copiedpersons = persons.map((person) => ({
//   name: person.name,
//   age: person.age,
// }));

// persons.push({ name: "Anna", age: 29 });

// console.log(persons, copiedpersons);

const nameFragments = ["Tom", "Swierczek", "Mr", 30];
// const firstName = namedata[0]
// const lastname = namedata[1]

const [firstName, lastname, ...otherInformation] = nameFragments;
console.log(firstName, lastname, otherInformation);
