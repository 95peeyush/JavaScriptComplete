const populations = [];
populations[0] = 112
populations[1] = 11
populations[2] = 110
populations[3] = 1155
let percentageOfWorld3 = population => (population / 79);

const percentagePopulation = [];

for (let i = 0; i < populations.length; i++)
    percentagePopulation[i] = percentageOfWorld3(populations[i]);

console.log(percentagePopulation);


