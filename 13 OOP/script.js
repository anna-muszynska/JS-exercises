'use strict';

///////////////////////////////////////
// Constructor functions and the new operator

const Person = function (firstName, birthYear) {
  // Istance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const ania = new Person('Ania', 1996);
console.log(ania);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const marcelina = new Person('Marcelina', 1993);
const marcel = new Person('Marcel', 2015);
console.log(marcelina, marcel);

console.log(ania instanceof Person);
