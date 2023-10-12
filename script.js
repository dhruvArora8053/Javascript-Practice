"use strict";
//Left:-
//1. String method Practice

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const globalBalance = movements.reduce((acc, mov, i, arr) => acc + mov, 0);
console.log(globalBalance);

const max = movements.reduce((acc, mov, i, arr) => (acc < mov ? mov : acc), 0);
console.log(max);
