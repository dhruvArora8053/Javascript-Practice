"use strict";
//Left:-
//1. String method Practice

const ingredients = ["spinach", "olive"];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  2000,
  ...ingredients
);

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

setInterval(() => {
  console.log(new Date());
}, 1000);

setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();
    console.log(`${hour}:${minute}:${sec}`);
  }, 1000);
  