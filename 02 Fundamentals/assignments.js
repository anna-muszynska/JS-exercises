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


// 6th
const neighbours = ['Germany', 'Czech', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes('Germany')) {
    console.log(`Probably a central European country :D`)
}

console.log(neighbours.indexOf('Czech'));
neighbours[1] = 'The Czech Republic';
console.log(neighbours);



// Challenge #2
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return (bill * 0.15)
    } else {
        return (bill * 0.2)
    }
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);



// 7th
const myCountry = {
    country: 'Poland',
    capital: 'Warsaw',
    language: 'polish',
    population: 38,
    neighbours: ['Germany', 'The Czech Republic', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia'],
}



// 8th
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)



// 9th
const myCountry = {
    country: 'Poland',
    capital: 'Warsaw',
    language: 'polish',
    population: 38,
    neighbours: ['Germany', 'The Czech Republic', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia'],

    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    },

    checkIsland: function () {
        return this.isIsland = this.neighbours.length === 0 ? true : false
    }
}

console.log(myCountry.describe());
console.log(myCountry.checkIsland());



// Challenge #3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        return this.bmi = this.mass / this.height ** 2;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        return this.bmi = this.mass / this.height ** 2;
    }
}

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if (mark.bmi < john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else {
    console.log('They have even bmi')
}



// 10th
for (voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`)
}



// 11th
const populations = [38, 83, 17.3, 328];
const percentages2 = [];

function percentageOfWorld1(population) {
    return population * 100 / worldPopulation;
}

const worldPopulation = 7900;

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);



// 12th
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}




// 13th
const populations = [38, 83, 17.3, 328];
const percentages3 = [];

function percentageOfWorld1(population) {
    return population * 100 / worldPopulation;
}

const worldPopulation = 7900;

let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++
}

console.log(percentages3);




// Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return (bill * 0.15)
    } else {
        return (bill * 0.2)
    }
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i])
}

console.log(tips, totals);


const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    return sum / arr.length
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/