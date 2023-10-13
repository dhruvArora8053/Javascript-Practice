"use strict";
//Left:-
//1. String method Practice

const Person0 = function (firstName, birthYear) {};
new Person0("Jonas", 1991);

const Person = function (firstName, birthYear) {
  //   console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);
console.log(jonas instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2036 - this.birthYear);
};
console.log(Person.prototype);

jonas.calcAge();
console.log(jonas);

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = "Homo Sapiens";
console.log(jonas);
console.log(jonas.species);
