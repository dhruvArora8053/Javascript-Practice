"use strict";
//Left:-
//1. String method Practice

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);
console.log(currencies);

currencies.forEach((val, key, map) => {
  console.log(`${key}: ${val}`);
});

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach((val, key, set) => {
  console.log(`${key}: ${val}`);
});
