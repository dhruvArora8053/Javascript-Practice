"use strict";
//Left:-
//1. String method Practice

const num = 3884764.23;
console.log("US:   ", new Intl.NumberFormat("en-US").format(num));
console.log("Germany:   ", new Intl.NumberFormat("de-DE").format(num));
console.log("Syria:   ", new Intl.NumberFormat("ar-SY").format(num));

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);

const options = {
  style: "currency",
  unit: "mile-per-hour",
  currency: "EUR",
};

console.log("US:   ", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany:   ", new Intl.NumberFormat("de-DE", options).format(num));
console.log("Syria:   ", new Intl.NumberFormat("ar-SY", options).format(num));
