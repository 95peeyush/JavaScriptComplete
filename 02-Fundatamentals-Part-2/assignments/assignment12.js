const listOfNeighbours = [
    ['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
        'Russia']
];
for (let country = 0; country < listOfNeighbours.length; country++) {
    for (let neighbour = 0; neighbour < listOfNeighbours[country].length; neighbour++) {
        console.log(`Neighbour: ${listOfNeighbours[country][neighbour]}`);
    }
}