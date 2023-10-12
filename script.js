"use strict";
//Left:-
//1. String method Practice

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalDeposited = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * 1.1)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDeposited);