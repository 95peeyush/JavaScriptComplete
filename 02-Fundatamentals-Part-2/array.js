const languages = ['hindi', 'english', 'chinese', 'sanskrit'];
console.log(languages);

//although it is const but we can still change the values inside the array

languages[2] = 'gujrati';

console.log(languages);

//but we can't do 
//languages='hello'; bcz of the constant

const ages = new Array(11, 23, 53, 56);

console.log(ages);

const array = [12, 'peeyush', 23 - 11, ages];

console.log(array);

//we can array inside array
const checkArray = [1, 2, 3, [4, 5, 6, 7]];
console.log(checkArray);
console.log(checkArray[3][1]);

