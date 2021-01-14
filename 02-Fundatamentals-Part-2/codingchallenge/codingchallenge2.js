const calcTip = (bill) => bill >= 50 && bill <= 300 ? .15 * bill : .2 * bill;

// console.log(calcTip(100));

const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

console.log(`Bill: ${bill}`);
console.log(`Tip: ${tips}`);
console.log(`Total: ${total}`);