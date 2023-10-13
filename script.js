"use strict";
//Left:-
//1. String method Practice
//2. setters and getters

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greet("Hello")("JOnas");

const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow("Hello")("Trinity");
