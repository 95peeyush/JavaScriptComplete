
let isDynamicTyped = true;
console.log(typeof isDynamicTyped);
isDynamicTyped = "YES!"; //dynamically typed depending on the type of value data type is decided
console.log(typeof isDynamicTyped);

let age = 25;
console.log(typeof age); //number

let firstName = "peeyush";
console.log(typeof firstName); //string

let lastName;

console.log(typeof lastName); //undefined


//bug in JS but it has not be corrected due to legacy reasons
console.log(typeof null); //object


