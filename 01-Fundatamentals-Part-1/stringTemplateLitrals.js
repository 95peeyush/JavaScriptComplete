const firstName = "peeyush";
const birthYear = 1995;
const currentYear = 2021;
const job = "developer";


//using traditonal way to generate the string using above variables.
//managing these spaces is difficult
console.log("I'm " + firstName + ", a " + (currentYear - birthYear) + " year's " + job);

//To overcome the above problem template literals came in ES6

console.log(`I'm ${firstName}, a ${currentYear - birthYear} year's ${job}`);
