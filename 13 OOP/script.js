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

///////////////////////////////////////
// Coding challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.accelerate();
car2.brake();
car2.brake();

///////////////////////////////////////
// ES6 Classes

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance method
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there!');
    console.log(this);
  }
}

const alicja = new PersonCl('Alicja Mak', 1960);
console.log(alicja);
alicja.calcAge();
console.log(alicja.age);

console.log(alicja.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
alicja.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1995);
PersonCl.hey();

///////////////////////////////////////
// Setters and getters

const account = {
  owner: 'Ania',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

///////////////////////////////////////
// Static methods

Person.hey = function () {
  console.log('Hey there!');
  console.log(this);
};

Person.hey();
