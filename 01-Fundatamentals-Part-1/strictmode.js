'use strict'

let hasDriversLicense = false;
const passedTest = true;

// if (passedTest) hasDriverLicense = true; //if we don't use strict mode then js will assume this as new variable and will not throw any error
// console.log(hasDriverLicense);

if (passedTest) hasDriversLicense = true;
if (hasDriversLicense)
    console.log("He can drive !!");
// console.log(hasDriversLicense);

//SyntaxError: Unexpected strict mode reserved word
// const interface = 123; // without strict mode we can use interface as variable name
//but with strict mode we can't use because it is a reserve word for a feature which might come in future.
// console.log(interface);