const neighbours = ['nepal', 'china', 'bangladesh', 'srilanka'];

neighbours.push('Uthopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (neighbours.includes('Germany'))
    console.log(`Probably not a central European country :D`);
const indexOfChina = neighbours.indexOf('china');
neighbours[indexOfChina] = 'afghanistan';
console.log(neighbours);

