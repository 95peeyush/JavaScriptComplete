'use strict'
const peeyushObject = { //this type of declaration of object is callled literal object as we literally define the object
    firstName: 'peeyush',
    lastName: 'jain',
    birthYear: 2021 - 1995,
    job: 'Developer',
    friends: ['sahitya', 'kushagra', 'tarun', 'vicky'],
    calcAge: function () {
        return 2021 - this.birthYear;
    },
    hasLicense: false,
    getSummary: function () {
        return `${this.firstName} is ${this.calcAge()} years old, and he has ${this.hasLicense ? "a" : "no"} driver's license.`;
    }
}


console.log(peeyushObject.calcAge());
console.log(peeyushObject['calcAge']());

console.log(peeyushObject.getSummary());