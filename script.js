"use strict";
//Left:-
//1. String method Practice

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementsUSD = movements.map((mov) => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsDescirption = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescirption);