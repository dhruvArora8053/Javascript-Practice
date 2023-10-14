"use strict";
//Left:-
//1. String method Practice
//2. setters and getters

class Account {
  locale = navigator.language;
  #movements = [21, 44, 56];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    this.#pin = pin;
    console.log(`Thanks for opeing an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  static helper() {
    console.log("Helper");
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);
// console.log(acc1.getMovements());
// console.log(acc1.#movements);
console.log(acc1.getMovements());
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

Account.helper();

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
