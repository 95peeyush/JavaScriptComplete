//To String
console.log(`---------- To String ----------`);
console.log(String(null)); //null
console.log(String(undefined)); //undefined
console.log(String(true)); //true
console.log(String(false)); //true
console.log(String(11)); //11
console.log(String(-11)); //-11
console.log(String(-11.00001)); //-11.00001
console.log(String(-0)); //0
console.log(String(11 / 0)); //Infinity
console.log(String(0 / 11)); //0
console.log(`---------- To String ----------`);

//To Number
console.log(`---------- To Number ----------`);
console.log(Number('1995')); // 1995
console.log(Number(`1995`)); // 1995
console.log(Number(`ABC`)); // NaN(invalid number)
//proof that NaN is number but NaN is invalid number
console.log(typeof NaN);//number
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(`---------- To Number ----------`);


//To Boolean
console.log(`---------- To Boolean ----------`);
console.log(Boolean(1)); //true
console.log(Boolean(-1)); //true
console.log(Boolean(`ABC`)); //true
//5 falsy Values in JS are ⬇️
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(``)); //false
console.log(Boolean(null)); //false
console.log(`---------- To Boolean ----------`);





