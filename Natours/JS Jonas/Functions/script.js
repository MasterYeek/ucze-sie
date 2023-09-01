'use strict';

const bookings = [];

const createbooking = function (
  flightNum,
  numPassenegers = 1,
  price = 199 * numPassenegers
) {
  //ES5
  //numPassenegers = numPassenegers || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    numPassenegers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createbooking('LH123');
createbooking('LH123', 2, 800);
createbooking('LH123', 2);
createbooking('LH123', 5);
createbooking('LH123', undefined, 1000);

//

const flight = 'LH234';
const tom = {
  name: 'tom swierczek',
  passport: 23424234321,
};
const checkIn = function (flightNum, passsenger) {
  flightNum = 'Lh999';
  passsenger.name = 'Mr. ' + passsenger.name;

  if (passsenger.passport === 23424234321) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, tom);
// console.log(flight);
// console.log(tom);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};
newPassport(tom);
checkIn(flight, tom);

const oneWord = function (str) {
  return str.replace(/ /g, ''.toLowerCase());
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher-oreder function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
// const high5 = function () {
//   console.log('👍');
// };
// document.body.addEventListener('click', high5);

// ['Tom', 'Marta', 'Adam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

//SAME
// Arrow function
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('TOm');
greeterHey('Steven');

greet('Hello')('Tom');

const Lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flgiht: `${this.iataCode} ${flightNum}`, name });
  },
};

Lufthansa.book(239, 'Tom swierczek');
Lufthansa.book(635, 'Jon swierczek');
console.log(Lufthansa);

const Eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = Lufthansa.book;

// Does not work
//book(23, 'Sarah Williams')

//CALL method
book.call(Eurowings, 23, 'Sarah Williams ');
console.log(Eurowings);

book.call(Lufthansa, 239, 'Mary cooper');
console.log(Lufthansa);

// Apply Method
// not used
const Flightdata = [573, 'Geroge cooper'];
book.apply(Eurowings, Flightdata);
console.log(Eurowings);

//bind method

const bookEW = book.bind(Eurowings);
bookEW(28, 'Steven Williams');

const bookEW23 = book.bind(Eurowings, 23);
bookEW23('Tom swierczek');
bookEW23('Martha Cooper');

//With addEventListener
Lufthansa.planes = 300;
Lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++, console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', Lufthansa.buyPlane.bind(Lufthansa));

//Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.23);

// console.log(addVat(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVat2 = addTaxRate(0.23);

console.log(addVat2(100));
console.log(addVat2(23));
