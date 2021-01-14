const percentageOfWorld = function (population) {
    const worldPopulation = 79;
    return (population / worldPopulation);
}

const describePopulation = function (country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld(population)} of the world.`
}


console.log(describePopulation("India", 1220));
console.log(describePopulation("USA", 500));
console.log(describePopulation("Australia", 60));