"use strict";

const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log("jonas".toUpperCase());

const passenger = "jOnAs";
const passengerLower = passenger.toLowerCase();

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = "hello@jonas.io";
const loginEmail = "   Hello@Jonas.Io \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(normalisedEmail);
console.log(email === normalisedEmail);

const priceGB = "288,96€";
const priceUS = priceGB.replace("€", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));

const plane = "Airbus A320neo";

console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.includes("Air"));
console.log(plane.includes("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the new Airbus family");
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else console.log("Welcome Aboard");
};

checkBaggage("I have a laptop, some Food and a pocked Knife");
checkBaggage("Socks and Camera");
checkBaggage("Got some snacks and a gun for protection");
