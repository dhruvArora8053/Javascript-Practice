"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log("B737"[0]);
console.log(airline.length);
console.log("B737".length);
console.log(airline.indexOf("r"));
console.log(airline.indexOf("Portugal"));
console.log(airline.indexOf("portugal"));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const chekMiddleSeat = function (seat) {
  const lastWord = seat.slice(-1);
  if (lastWord === "A") console.log("first seat");
  else if (lastWord === "B") console.log("middle seat");
  else if (lastWord === "C") console.log("last seat");
  else console.log("wrong input");
};

chekMiddleSeat("11C");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));
console.log(typeof new String("jonas").slice(1));
