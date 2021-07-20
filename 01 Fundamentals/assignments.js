/*
// 1st
const country = "Poland";
const continent = "Europe";
let population = 38000000;

console.log(country, continent, population);

// 2nd
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// 3rd
language = "polish";

// 4th
let splitCountry = population / 2;
population++;
console.log(splitCountry, population)

let finlandPopulation = 6000000;
let biggerPopulation = finlandPopulation > population;
let averagePopulation = 33000000;
let aboveAverage = population > averagePopulation;
console.log(biggerPopulation, aboveAverage);

let description = country + " is in " + continent + "," + " and its " + population + " people speak " + language;
console.log(description);

// Challenge #1
// Data 1
const marksWeight = 78;
const marksHeight = 1.69;
const johnsWeight = 92;
const johnsHeight = 1.95;

// Data 2
// const marksWeight = 95;
// const marksHeight = 1.88;
// const johnsWeight = 85;
// const johnsHeight = 1.76;

const bmiMark = marksWeight / marksHeight ** 2;
const bmiJohn = johnsWeight / johnsHeight ** 2;
const markHigherBmi = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBmi);

// 5th
let descriptionNew = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(descriptionNew);

// 6th
if (population > averagePopulation) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} below average`);
}


// Challenge #2
const marksWeight = 78;
const marksHeight = 1.69;
const johnsWeight = 92;
const johnsHeight = 1.95;

// Data 2
// const marksWeight = 95;
// const marksHeight = 1.88;
// const johnsWeight = 85;
// const johnsHeight = 1.76;

const bmiMark = marksWeight / marksHeight ** 2;
const bmiJohn = johnsWeight / johnsHeight ** 2;
const markHigherBmi = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBmi);
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}


// 7th
'9' - '5'; // 4
'19' - '13' + '17'; // 617
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143

// 8th
let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

// 8th
const country = "Poland";
let population = 38000000;
language = "polish";
const isIsland = false;

if (language === 'english' && population < 50000000 && isIsland === false) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

// Challange #3
// Data 1
let [scoreD1, scoreD2, scoreD3] = [96, 108, 89];
let [scoreK1, scoreK2, scoreK3] = [88, 91, 110];

// Data 2
// let [scoreD1, scoreD2, scoreD3] = [97, 112, 101];
// let [scoreK1, scoreK2, scoreK3] = [109, 95, 123];

// Data 3
// let [scoreD1, scoreD2, scoreD3] = [97, 112, 101];
// let [scoreK1, scoreK2, scoreK3] = [109, 95, 106];

let scoreAvgDolphins = (scoreD1 + scoreD2 + scoreD3) / 3;
let scoreAvgKoalas = (scoreK1 + scoreK2 + scoreK3) / 3;

console.log(scoreAvgDolphins);
console.log(scoreAvgKoalas);

if (scoreAvgDolphins > scoreAvgKoalas) {
    console.log(`Dolphins won the game!`);
} else if (scoreAvgDolphins < scoreAvgKoalas) {
    console.log(`Koalas won the game!`);
} else {
    console.log(`It is a draw! Both teams are great!`);
}

// BONUS TO CHALLANGE - 1) team needs at least 100 points to win 2) both teams need at least 100 points to have a draw
if (scoreAvgDolphins >= 100 && scoreAvgDolphins > scoreAvgKoalas) {
    console.log(`Dolphins won the game!`);
} else if (scoreAvgKoalas >= 100 && scoreAvgDolphins < scoreAvgKoalas) {
    console.log(`Koalas won the game!`);
} else if (scoreAvgDolphins >= 100 && scoreAvgKoalas >= 100 && scoreAvgDolphins === scoreAvgKoalas) {
    console.log(`It is a draw! Both teams are great!`);
} else {
    console.log(`Nobody won the game :(`);
}
*/