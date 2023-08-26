"use strict";
console.log(me);
///console.log(job);
//console.log(year);

var me = "Tom";
let job = "teacher";
const year = 1993;

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

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
