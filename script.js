"use strict";

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italino",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Foccacia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

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

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(orderSet);
console.log(new Set("Jonass"));
console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));

orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("Risotto");
console.log(orderSet);

for (const order of orderSet) console.log(order);

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = new Set(staff);
console.log(staffUnique);

const staffUniqueArr = [...new Set(staff)];
console.log(staffUniqueArr);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("jonasschmedtmann").size);
