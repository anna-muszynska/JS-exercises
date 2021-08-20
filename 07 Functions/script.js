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
