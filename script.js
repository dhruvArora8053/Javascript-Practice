"use strict";

// Hoisting with Variables:-
console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

console.log(addDecl(5, 5));
// console.log(addExpr(5, 5));
// console.log(addArrow(5, 5));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// console.log(addExpr1(5, 5));
// console.log(addArrow1(5, 5));

console.log(addExpr1);
console.log(addArrow1);

var addExpr1 = function (a, b) {
  return a + b;
};

var addArrow1 = (a, b) => a + b;

//Pitfall of Hoisting
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

//1. just don't use var to declare variables
//2. use const variable most of the time
//3. use let if you really need to change that variable later
//4. also inorder to write clean code you should declare your variables at the top of each scope
//5. and finally always delare all your function first and use them only after declaration this even applies for function declarations

var x = 1;
let y = 2;
const z = 3;

console.log(window);
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
