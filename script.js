"use strict";
//Left:-
//1. String method Practice
//2. setters and getters

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// const jessica = new PersonCl("Jessica", 1996);
// console.log(jessica);
// jessica.calcAge();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();

const account = {
  owner: "jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else console.log(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jonas = new PersonCl("Jonas", "1991");
const jessica = new PersonCl("Jessica Davis", 1996);