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
const high5 = function () {
  console.log('👍');
};
document.body.addEventListener('click', high5);

['Tom', 'Marta', 'Adam'].forEach(high5);
