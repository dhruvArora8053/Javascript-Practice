'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const globalBalance = movements.reduce((acc, mov) => acc + mov, 0);
console.log(globalBalance);

const max = movements.reduce((acc, mov) => {
  if (acc < mov) acc = mov;
  return acc;
}, movements[0]);
console.log(max);

const max1 = movements.reduce(
  (acc, mov) => (acc < mov ? (acc = mov) : acc),
  movements[0]
);
console.log(max1);

