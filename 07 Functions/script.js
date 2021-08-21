'use strict';

/*
///////////////////////////////////////
// Default parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

/*
///////////////////////////////////////
// How passing arguments works: value vs. reference

const flight = 'LH234';
const ania = {
  name: 'Anna Muszyńska',
  passport: 23482749362,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Ms. ' + passenger.name;

  if (passenger.passport === 23482749362) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, ania);
// console.log(flight);
// console.log(ania);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = ania;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(ania);
checkIn(flight, ania);
*/

///////////////////////////////////////
// Functions accepting callback functions
/*
const oneWord = function (str) {
  return string.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);
*/

///////////////////////////////////////
// Functions returning functions
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Ania');
greeterHey('Marcelina');

greet('Hello')('Ania');

// Challenge
const greet2 = greeting => name => console.log(`${greeting} ${name}`);

const greetYou = greet2('Bonjour');
greetYou('Marcel');
greet2('Hi')('Marcelina');
*/

///////////////////////////////////////
// The call and apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(293, 'Anna Muszyńska');
lufthansa.book(635, 'Marcelina Bogal');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Marcel Bogal');

book.call(eurowings, 23, 'Marcel Bogal');
console.log(eurowings);

book.call(lufthansa, 239, 'James Bond');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 44, 'Przemysław Bogacz');
console.log(swiss);

// Apply method
const flightData = [538, 'Magdalena Skrolecka'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
