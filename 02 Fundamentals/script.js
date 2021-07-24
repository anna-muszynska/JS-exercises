'use strict';

/*
// Functions
function logger() {
    console.log('My name is Ania');
}

// Calling, running of invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(4, 4);
console.log(appleOrangeJuice);
*/

/*
// Function declarations vs. expressions
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1996);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1996);

console.log(age1, age2);
*/

/*
// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthYear, name) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${name} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1996, 'Anna'));
console.log(yearsUntilRetirement(1993, 'Marcelina'));
*/

/*
// Functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
// Reviewing functions
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, name) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${name} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${name} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1996, 'Ania'));
console.log(yearsUntilRetirement(1950, 'John'));
*/

/*
// Introduction to arrays
const friend1 = 'Marcelina';
const frind2 = 'Marcel';
const friend3 = 'Mięta';

const friends = ['Marcelina', 'Marcel', 'Mięta'];
console.log(friends);

const y = new Array(1996, 1993, 2014);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Przemek';
console.log(friends);
// friends = ['Ala', 'Rysio']; redefining array is permited

const firstName = 'Ania'
const ania = [firstName, 'Muszyńska', 2037 - 1996, 'front-end developer', friends];
console.log(ania);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
// Basic array operations (methods)
const friends = ['Marcelina', 'Marcel', 'Mięta'];

// Add elements
const newLength = friends.push('Justyna');
console.log(friends);
console.log(newLength);

friends.unshift('Paulina');
console.log(friends);

// Remove elements
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();// first
console.log(friends);

// Checking index of the element
console.log(friends.indexOf('Marcelina'));
console.log(friends.indexOf('John'));

friends.push(23);
console.log(friends.includes('Marcel'));
console.log(friends.includes('John'));
console.log(friends.includes(23));

if (friends.includes('Marcelina')) {
    console.log(`You have a frind called Marcelina`);
}
*/

/*
// Introduction to objects
const ania = {
    firstName: 'Ania',
    lastName: 'Muszyńska',
    age: 2021 - 1996,
    job: 'front-end developer',
    friends: ['Marcelina', 'Marcel', 'Mięta']
};
*/

/*
// Dot vs. bracket notation
const ania = {
    firstName: 'Ania',
    lastName: 'Muszyńska',
    age: 2021 - 1996,
    job: 'front-end developer',
    friends: ['Marcelina', 'Marcel', 'Mięta']
};
console.log(ania);

console.log(ania.lastName);
console.log(ania['lastName']);

const nameKey = 'Name';
console.log(ania['first' + nameKey]);

const interestedIn = prompt('What do you want to know about Ania? Choose between firstName, lastName, age, job and friends');

if (ania[interestedIn]) {
    console.log(ania[interestedIn]);
} else {
    console.log(`Wrong request! Choose between firstName, lastName, age, job and friends`)
}

ania.location = 'Krakow'; ania['github'] = 'anna-muszynska';
console.log(ania);

console.log(`${ania.firstName} has ${ania.friends.length} friends and her best friend is called ${ania.friends[0]}`);
*/

/*
// Object methods
const ania = {
    firstName: 'Ania',
    lastName: 'Muszyńska',
    birthYear: 1996,
    job: 'front-end developer',
    friends: ['Marcelina', 'Marcel', 'Mięta'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2021 - 1996;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2021 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2021 - this.birthYear
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriverLicense ? "a" : "no"} driver's license`
    }
};

console.log(ania.calcAge());

console.log(ania.age);
console.log(ania.age);
console.log(ania.age);
console.log(ania.getSummary());
*/