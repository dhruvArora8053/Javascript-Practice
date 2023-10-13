"use strict";
//Left:-
//1. String method Practice
//2. setters and getters

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();

const h = function () {
  const b = 4;
  f = function () {
    console.log(b * 2);
  };
};

h();
f();

const boardPassengers = function (passangers, wait) {
//   const perGroup = passangers / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${passangers} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// boardPassengers(180, 3);
const perGroup = 1000;
boardPassengers(180, 3);