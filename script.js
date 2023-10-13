"use strict";
//Left:-
//1. String method Practice
//2. setters and getters

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
console.dir(booker);