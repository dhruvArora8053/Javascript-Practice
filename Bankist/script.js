'use strict';

console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);

console.log(x.map(() => 5));
x.map(() => 5);

console.log(x.fill(1));

const y = new Array(7);
y.fill(1, 3, 5);
console.log(y);

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.fill(23, 4, 7);
console.log(arr);

const z = Array.from({ length: 7 }, () => 1);
console.log(z);

const a = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(a);

const diceRoll = Array.from({ length: 100 }, () =>
  Math.trunc(Math.random() * 100 + 1)
);
console.log(diceRoll);