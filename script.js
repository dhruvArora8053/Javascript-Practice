"use strict";
//Left:-
//1. String method Practice
//2. setters and getters

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    this._pin = pin;
    this._movements = [12, 16, 300];
    this.locale = navigator.language;
    console.log(`Thanks for opeing an account, ${owner}`);
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);
console.log(acc1.getMovements());