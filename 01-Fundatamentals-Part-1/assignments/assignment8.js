
const numNeighbours = prompt(`How many neighbour countries does your country have?`);

console.log(`-------Loose------------`);
if (numNeighbours == 1) console.log(`Only 1 border!`);
else if (numNeighbours > 1) console.log(`More than 1 border `);
else console.log(`No borders`);
console.log(`-------Loose------------`);

console.log(`-------Strict------------`);
//=== will not execute to true as data types are different
if (numNeighbours === 1) console.log(`Only 1 border!`);
else if (numNeighbours > 1) console.log(`More than 1 border`);
else console.log(`No borders`);
console.log(`-------Strict------------`);

console.log(`-------Converted------------`);
if (Number(numNeighbours) === 1) console.log(`Only 1 border!`);
else if (numNeighbours > 1) console.log(`More than 1 border`);
else console.log(`No borders`);
console.log(`-------Converted------------`);
