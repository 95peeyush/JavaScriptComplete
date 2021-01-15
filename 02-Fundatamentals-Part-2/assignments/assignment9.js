const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: ['Hindi', 'English', 'Marathi'],
    population: 1000,
    neighbours: ['Afghanistan', 'Bangladesh', 'Nepal', 'Sri-Lanka'],
    // neighbours: [],
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language[0]} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    },
    checkIsIsland: function () {
        this.isIsland = this.neighbours && this.neighbours.length == 0 ? true : false;
    }
}

console.log(myCountry.describe());
myCountry.checkIsIsland();
console.log(myCountry.isIsland);
console.log(myCountry);
