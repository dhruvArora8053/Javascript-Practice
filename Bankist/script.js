'use strict';

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));
console.log(Math.min(5, 18, 23, 11, 2));
console.log(Math.PI);
console.log(Math.PI * Number.parseFloat('10px'));

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + min + 1);

console.log(randomInt(5, 20));

console.log(Math.trunc(23.3));
console.log(Math.round(23.3));

console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log(+(2.345).toFixed(2));
