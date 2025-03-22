// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}


// checking if object is empty
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log('object is empty');   
}


// Nullish Coalescing Operator (??): null undefined

/* The nullish coalescing operator (??) checks if the left side is null or undefined, 
and if it is, it gives the value on the right side; otherwise, it sticks with the 
left side.
*/
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

console.log(val1);

// console.log(0 ?? 1);


// ++++++++++++++++++++++++++++ Terniary Operators +++++++++++++++++++++++++++++

// Terniary Operator

/* The ternary operator (condition ? valueIfTrue : valueIfFalse) checks a 
condition: if it's true, it gives the first value; if it's false, it gives the 
second value.
*/

// condition ? true: false

const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less then 80") : console.log("More then 80")