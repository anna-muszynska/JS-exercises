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