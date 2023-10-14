"use strict";
//Left:-
//1. String method Practice
//2. setters and getters

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;

    this.movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opeing an account, ${owner}`);
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
acc1.requestLoan(1000);
