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
const percentageOfWorld3 = population => population * 100 / worldPopulation;

const percentagePoland3 = percentageOfWorld3(38);
const percentageGermany3 = percentageOfWorld3(83);
const percentageNetherlands3 = percentageOfWorld3(17.3);

console.log(percentagePoland3, percentageGermany3, percentageNetherlands3);
*/