'use strict';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();

var firstName = 'Matilda';

const jonas1 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => {
    console.log(this);
    console.log(this.firstName);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas1.greet();

const jonas2 = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const self = this;
    const isMillenial = function () {
      // console.log(this);
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    const isMillenial1 = () => {
      console.log();
    };
    isMillenial();
  },
};

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
