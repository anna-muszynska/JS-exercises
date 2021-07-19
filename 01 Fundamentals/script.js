/*
// Values and Variables
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

/*
// Data types
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
// Let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = "Programmer";
job = "Teacher";

//lastName = "Smith";
console.log(lastName);
*/

/*
// Math operators
const now = 2037;
const ageAnna = now - 1996;
const ageMarcel = now - 2018;
console.log(ageAnna, ageMarcel);

console.log(ageAnna * 2, ageAnna / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Anna";
const lastName = "Muszynska";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageAnna > ageMarcel); // >, <, >=, <=
console.log(ageMarcel >= 18);

const isFullAge = ageMarcel >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
// Operator precedence
const now = 2037;
const ageAnna = now - 1996;
const ageMarcel = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 20 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageAnna + ageMarcel) / 2;
console.log(ageAnna, ageMarcel, averageAge);
*/

/*
// Strings and template literals
const firstName = "Anna";
const job = "Frontend developer";
const birthYear = 1996;
const year = 2037;

const anna = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(anna);

const annaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(annaNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);
*/

/*
// If / else statements
const age = 15;

if (age >= 18) {
    console.log(`Marcel can start driving license 🚗`);
} else {
    const yearsLeft = (18 - age);
    console.log(`Marcel is too young to drive. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1996;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Anna')); // NaN (invalid number)
console.log(typeof (NaN));

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * 2);
console.log('23' > '18'); // true

let n = '1' + 1;
n = n - 1;
console.log(n);
*/