//function declaration
//here we call the function before having the function defination.
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

console.log(calcAge1(1995));

//function expression
//enforces us to call the function after the defination
//before that if we try to access it, calcAge2 is not a function error will come.(var)
//or can't access calcAge2 before initialization(const,let)
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};
console.log(calcAge2(1995));