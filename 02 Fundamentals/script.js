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