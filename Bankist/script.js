'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};

const eurwoings = {
  airline: 'Eurwoings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
const bookEW = book.bind(eurwoings);
const bookLH = book.bind(lufthansa);

bookEW(23, 'Steven Williams');
console.log(eurwoings);

const bookEW23 = book.bind(eurwoings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

