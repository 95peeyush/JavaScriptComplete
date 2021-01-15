const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: ['Hindi', 'English', 'Marathi'],
    population: 1000,
    neighbours: ['Afghanistan', 'Bangladesh', 'Nepal', 'Sri-Lanka']
}
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language[0]}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
myCountry.population += 2;
console.log(myCountry);
myCountry['population'] -= 2;
console.log(myCountry);
