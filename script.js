"use strict";
//Left:-
//1. String method Practice
//2. setters and getters

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha", 2012, "Computer Science");
console.log(martha);

class StudentCl1 extends PersonCl {}
const martha1= new StudentCl1('Martha', 2012, 'Computer Science')
console.log(martha1);

martha.introduce();
martha.calcAge();