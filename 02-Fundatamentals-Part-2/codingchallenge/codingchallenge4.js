const bills = [
    22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
];
console.log(bills);

const calcTip = (bill) => bill >= 50 && bill <= 300 ? .15 * bill : .2 * bill;

const tips = [];
const total = [];

for (let bill = 0; bill < bills.length; bill++) {
    tips[bill] = calcTip(bills[bill]);
    total[bill] = tips[bill] + bills[bill];
}

console.log(`tips: ${tips}`);
console.log(`tips: ${total}`);


const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}


console.log(calcAverage(bills));