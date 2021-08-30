"use strict";

///////////////////////////////////////
// Converting and checking numbers
/*
// Base 10 - 0 to 9
// Binary base - 0 1
console.log(23 === 23.0);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number("23"));
console.log(+"23");

// Parsing
console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("e23", 10));

console.log(Number.parseInt("2.5rem"));
console.log(Number.parseFloat("2.5rem"));

// Check is value in NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20K"));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20K"));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
*/

///////////////////////////////////////
// Math and rounding
/*
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));
console.log(Math.max(5, 18, "23px", 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor("23.9"));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.9));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));
*/

///////////////////////////////////////
// The remainder operator
/*
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

console.log(9 % 3);
console.log(9 % 4);
*/

///////////////////////////////////////
// The BigInt
/*
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(42349874927492757520453276743n);
console.log(BigInt(4234987492));

// Operations
console.log(10000n + 10000n);
console.log(9345626492634072730493247250864359n * 1000000000000n);
// console.log(Math.sqrt(16n)); // error

const huge = 739475937203481943794623687n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n);
console.log(20n == 20); // true

console.log(huge + " is REALLY big!!!");

// Divisions
console.log(11n / 3n); // cut decimal part
console.log(10 / 3);
*/

///////////////////////////////////////
// Creating dates
/*
// Create a date
const now = new Date();
console.log(now);

console.log(new Date("Aug 29 2021 23:07:32"));
console.log(new Date("December 24, 2015"));

const account1 = {
  movementsDates: ["2019-11-18T21:31:17.178Z", "2019-12-23T07:42:02.383Z"],
};

console.log(new Date(account1.movementsDates[0]));

// Months are 0-based
// 31.11 --> 01.12 as November has 30 days
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31, 15, 23, 5));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days later form 0

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); // day of the month
console.log(future.getDay()); // day of the week --> 0 based
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142253380000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);
*/

///////////////////////////////////////
// Operations with dates
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 4, 18), new Date(2037, 4, 15));
console.log(days1);
*/

///////////////////////////////////////
// Timers: setTimeout and setInterval

// setTimeout
const ingredients = ["olives", "spinach"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log("Waiting...");

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// setInterval
const timer = setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
clearInterval(timer);

const timer2 = setInterval(function () {
  const sec = new Date().getSeconds();
  const min = new Date().getMinutes();
  const hrs = new Date().getHours();
  console.log(`${hrs}:${min}:${sec}`);
}, 1000);
clearInterval(timer2);
