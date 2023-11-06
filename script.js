'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[1, 2], 3, [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));
