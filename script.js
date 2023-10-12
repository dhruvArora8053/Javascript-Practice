"use strict";

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before Marriage:", jessica);
console.log("After Marriage:", marriedJessica);

// marriedJessica = {};

const jessica1 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica1);
jessicaCopy.lastName = "Davis";
console.log(jessica1);
console.log(jessicaCopy);

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy2 = Object.assign({}, jessica2);
jessicaCopy2.lastName = "Davis";
jessicaCopy2.family.push("Mary");
jessicaCopy2.family.push("John");

console.log("Before Marriage", jessica2);
console.log("After Marriage", jessicaCopy2);
