var calcAge3 = birthyear => 2037 - birthyear;
console.log(calcAge3(1991));

var calcRetirement = (birthyear, fullName) => {
    return `${fullName} get retire  in ${65 - (2037 - birthyear)} years`;
}
console.log(calcRetirement(1995, 'peeyush'));


//but arrow function doesn't get 'this' keyword.