"use strict";
/*console.log(me);
///console.log(job);
//console.log(year);

var me = "Tom";
let job = "teacher";
const year = 1993;

console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted");
}

var x = 1;
let y = 2;
const z = 3;

const calcAge = function (birthyear) {
  console.log(2023 - birthyear);
  //console.log(this);
};
calcAge(1993);

const calcAgearrow = (birthyear) => {
  console.log(2023 - birthyear);
  //console.log(this);
};
calcAgearrow(1993);

const tom = {
  year: 1993,
  calcAge: function () {
    //console.log(this);
    console.log(2023 - this.year);
  },
};
tom.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = tom.calcAge;
matilda.calcAge();

const f = tom.calcAge;
f();
*/

const tom = {
  firstname: "Tom",
  year: 1993,
  calcAge: function () {
    //console.log(this);
    console.log(2023 - this.year);

    //const self = this;
    //const isMilenial = function () {
    // console.log(self);
    //console.log(this.year >= 1981 && this.year <= 1993);

    //  console.log(self.year >= 1981 && self.year <= 1993);
    // };
    // isMilenial();
    //},

    const isMilenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1993);
    };
    isMilenial();
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstname}`);
  },
};
tom.greet();
tom.calcAge();

//Arguments keyword
const addexpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addexpr(2, 5);
addexpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  return a + b;
};

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "tom",
  age: 30,
};
const friend = me;
friend.age = 27;
console.log("friend:", friend);
console.log("Me", me);

//Primitive types
let lastname = "Swierczek";
let oldlastname = lastname;
lastname = "kluszczynska";
console.log(lastname, oldlastname);

//Reference types
const maja = {
  firstname: "Maja",
  lastname: "Swierczek",
  age: 29,
};
const marriedMaja = maja;
marriedMaja.lastname = "Kluszczynska";
console.log("Before marriage:", maja);
console.log("After Marriage", marriedMaja);

//Coping objects

const maja2 = {
  firstname: "Maja",
  lastname: "Swierczek",
  age: 29,
  family: ["alice", "Bob"],
};

const majacopy = Object.assign({}, maja2);
majacopy.lastname = "Kluszczynska";

majacopy.family.push("mary");
majacopy.family.push("John");

console.log("Before marriage:", maja2);
console.log("After Marriage", majacopy);
