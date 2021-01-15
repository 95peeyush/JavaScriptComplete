const peeyushObject = { //this type of declaration of object is callled literal object as we literally define the object
    firstName: 'peeyush',
    lastName: 'jain',
    age: 2021 - 1995,
    job: 'Developer',
    friends: ['sahitya', 'kushagra', 'tarun', 'vicky']
}

const nameKey = 'firstName';

console.log(peeyushObject.nameKey);  //since nameKey is not a key in the object
console.log(peeyushObject[nameKey]); //here nameKey value will be fetched first(since we can pass expression inside [])

const name1 = 'Name';

console.log(peeyushObject[`first${name1}`]);
console.log(peeyushObject[`last${name1}`]);
console.log(peeyushObject.first + name1);
console.log(`first${name1}`);


console.log(`${peeyushObject.firstName} has ${peeyushObject.friends.length} friends, and his best friend is ${peeyushObject.friends[0]} `);