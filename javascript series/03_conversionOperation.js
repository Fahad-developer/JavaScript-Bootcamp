let score = "33"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);


// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "fahad" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber);
// console.log(stringNumber);


// *************************  Operations ****************************

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = " fahad"
let str3 = str1 + str2

// console.log(str3);

// console.log("1" + 2); // output => 12
// console.log(1 + "2"); // output => 12
// console.log("1" + 2 + 2); // output => 122
// console.log(1 + 2 + "2"); // output => 32
// console.log((3 + 4) * 5 % 3); // write way to write code

// console.log(+true); // output => 1

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
// console.log(num2);

let gameCounter = 100
// prefix and postfix
// gameCounter++
++gameCounter
console.log(gameCounter);
