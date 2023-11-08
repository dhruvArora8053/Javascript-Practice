'use strict';

const ingredients = ['spinach', 'olive'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  2000,
  ...ingredients
);

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
