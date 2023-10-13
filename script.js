"use strict";
//Left:-
//1. String method Practice

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

console.log(movements.includes(-130));
console.log(movements.some((mov) => mov === -130));

const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);
console.log(movements.every((mov) => mov > 0));

const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
