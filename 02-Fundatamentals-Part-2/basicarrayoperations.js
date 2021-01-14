const friends = ['aayushi', 'sahitya', 'kushagra', 'nishu', 'mathur'];
console.log(friends);

//add elements
const newLength = friends.push('priyanka'); // add the element to the last of array and returns the new length
console.log(newLength);
console.log(friends);

friends.unshift('samyak'); //also returns the length
console.log(friends);

//removes the element
const poppedElement = friends.pop(); //removes last element
console.log(poppedElement);
friends.shift(); //remove the first element and return the popped element
console.log(friends);

//Strict check (===)
console.log(friends.indexOf('aayushi')); //0
console.log(friends.indexOf('rahul')); //-1

console.log(friends.includes('mathur'));
console.log(friends.includes('priyanka'));


