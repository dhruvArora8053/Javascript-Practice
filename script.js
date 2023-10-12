"use strict";

const restaurant = {
  name: "Classico Italino",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Foccacia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Gioanni Rossi",
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1, rest2);

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1, rest2);

const rest3 = {
  name: "Capri",
  numGuests: 0,
};

const rest4 = {
  name: "La Piazza",
  owner: "Gioanni Rossi",
};

rest3.numGuests ??= 10;
rest4.numGuests ??= 10;
console.log(rest3, rest4);

// rest3.owner = rest3.owner && "anonymous";
// rest4.owner = rest4.owner && "anonymous";
// console.log(rest3);
// console.log(rest4);

rest3.owner &&= "anonymous";
rest4.owner &&= "anonymous";
console.log(rest3);
console.log(rest4);
