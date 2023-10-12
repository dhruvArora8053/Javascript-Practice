"use strict";
//Left:-
//1. String method Practice

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else console.log(`You withdrew ${Math.abs(movement)}`);
}

console.log("------------------forEach-------------");
movements.forEach((movement) => {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else console.log(`You withdrew ${Math.abs(movement)}`);
});

console.log("---------------forOf------------");
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else console.log(`Movement ${i + 1}: You Withdrew ${Math.abs(mov)}`);
}

console.log("-----------------forEach----------");
movements.forEach((mov, i, arr) => {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else console.log(`Movement ${i + 1}: You Withdrew ${Math.abs(mov)}`);
});
