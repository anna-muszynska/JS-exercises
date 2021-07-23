/*
// 1st
function describeCountry(country, population, capitalCity) {
    const string = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return string;
}

const poland = describeCountry('Poland', 38, 'Warsaw');
const germany = describeCountry('Germany', 83, 'Berlin');
const netherlands = describeCountry('Netherlands', 17.3, 'Amsterdam');

console.log(poland, germany, netherlands);

// 2nd
const worldPopulation = 7900;

// Function declaration
function percentageOfWorld1(population) {
    return population * 100 / worldPopulation;
}
const percentagePoland = percentageOfWorld1(38);
const percentageGermany = percentageOfWorld1(83);
const percentageNetherlands = percentageOfWorld1(17.3);

console.log(percentagePoland, percentageGermany, percentageNetherlands);

// Function expression
const percentageOfWorld2 = function (population) {
    return population * 100 / worldPopulation;
}

const percentagePoland2 = percentageOfWorld2(38);
const percentageGermany2 = percentageOfWorld2(83);
const percentageNetherlands2 = percentageOfWorld2(17.3);

console.log(percentagePoland2, percentageGermany2, percentageNetherlands2);


// 3rd
const worldPopulation = 7900;

const percentageOfWorld3 = population => population * 100 / worldPopulation;

const percentagePoland3 = percentageOfWorld3(38);
const percentageGermany3 = percentageOfWorld3(83);
const percentageNetherlands3 = percentageOfWorld3(17.3);

console.log(percentagePoland3, percentageGermany3, percentageNetherlands3);

// 4th
function describePopulation(country, population) {
    const percentageOfCountry = percentageOfWorld3(population);

    return `${country} has ${population} million people, which is about ${percentageOfCountry} of the world`;
}

const poland = describePopulation('Poland', 38);
const germany = describePopulation('Germany', 83);
const netherlands = describePopulation('Netherlands', 38);

console.log(poland, germany, netherlands);


// Challenge #1
const calcAverage = function (score1, score2, score3) {
    return (score1 + score2 + score3) / 3
}

// Data1
// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);
// Data 2
let avgDolphins = calcAverage(85, 54, 41);
let avgKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins');
    }
}

console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);


// 5th
const worldPopulation = 7900;

const populations = [38, 83, 17.3, 328];

console.log(populations.length === 4 ? true : false);

function percentageOfWorld1(population) {
    return population * 100 / worldPopulation;
}

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);
*/