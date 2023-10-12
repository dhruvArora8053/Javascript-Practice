"use strict";
//Left:-
//1. String method Practice

console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  let arr = [];

  for (const n of names) {
    // arr += n[0].toUpperCase() + n.slice(1) + " ";
    // arr.push(n[0].toUpperCase() + n.slice(1));
    arr.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(arr.join(" "));
};

capitalizeName("jeesica ann smith davis");
capitalizeName("jonas schmedtmann");

const message = "Go to gate 23!";
console.log(message.padStart(25, "+"));
console.log("Jonas".padStart(25, "+"));
console.log(message.padStart(25, "+").padEnd(35, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  console.log(str.slice(-4).padStart(str.length, "*"));
};

maskCreditCard(5923793257923579);
maskCreditCard("2357953279357293572");

const message2 = "Bad weather... All Departures Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`Their are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(10);
