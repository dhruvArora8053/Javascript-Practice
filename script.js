"use strict";
//Left:-
//1. String method Practice

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(+future);

const daysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);