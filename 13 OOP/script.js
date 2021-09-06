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

///////////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

ania.calcAge();
console.log(ania.__proto__);
console.log(ania.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(ania));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(ania.species, marcelina.species);

console.log(ania.hasOwnProperty('firstName'));
console.log(ania.hasOwnProperty('species'));

///////////////////////////////////////
// Prototypal inheritance on built-in objects

console.log(ania.__proto__);
// Object.prototype (top of prototype chain)
console.log(ania.__proto__.__proto__);
console.log(ania.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 6, 6, 9, 9, 11]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
