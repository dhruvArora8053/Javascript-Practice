"use strict";
//Left:-
//1. String method Practice

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);
