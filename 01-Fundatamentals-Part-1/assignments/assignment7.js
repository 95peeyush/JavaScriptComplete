// 1. '9' - '5';
// 2. '19' - '13' + '17';
// 3. '19' - '13' + 17;
// 4. '123' < 57;
// 5. 5 + 6 + '4' + 9 - 4 - 2



//'-,*,/,%' operators convert string to number
console.log('9' - '4'); //5
//here since '-' is used converts the string to number and the calculate the result.


console.log('19' - '13' + '17'); //617
//here '19'-'13' gives 6 of number type then we have '+' which converts 
//number to string so '6'+'17'=617

console.log('19' - '13' + 17); //23 
//here '19'-'13' return 6 of number type then we have 17 as number so it 
//will return 6+17=23


console.log('123' < 57); //false
//since both are of different type hence false


console.log(5 + 6 + '4' + 9 - 4 - 2); //1143 

//here 1st 5+6=11
//then 11 + '4' '+' converts to string so '114'
//then '114'+9 will give '1149'
//then '-' will convert '1149' to number then subtract 4 and then 2 from it hence 1143