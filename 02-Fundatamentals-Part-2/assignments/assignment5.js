const populations = [];
populations[0] = 112
populations[1] = 11
populations[2] = 110
populations[3] = 1155
let percentageOfWorld3 = population => (population / 79);
console.log(populations.length == 4 ? true : false);

let percentage = [percentageOfWorld3(populations[0]), percentageOfWorld3(populations[1])
    , percentageOfWorld3(populations[2]), percentageOfWorld3(populations[3])];
console.log(percentage);