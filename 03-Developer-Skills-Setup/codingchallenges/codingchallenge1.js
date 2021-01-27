let printForecast = function (temps) {
  let outputString = "";
  for (let i = 0; i < temps.length; i++) {
    outputString = outputString.concat(`... ${temps[i]}°C in ${i + 1}days`);
  }
  console.log(outputString + `...`);
};

let arr1 = [17, 21, 23];
let arr2 = [12, 5, -5, 0, 4];
printForecast(arr1);
printForecast(arr2);
