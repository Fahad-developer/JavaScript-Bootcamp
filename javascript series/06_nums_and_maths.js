const score = 400

const balance = new Number(100)
// console.log(balance); // output => [Number: 100]

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // output => 100.00

const otherNumber = 123.8956
// console.log(otherNumber.toPrecision(3)); // output => 124 (round off / round down the value)


const hundreds = 100000
// console.log(hundreds.toLocaleString("en-IN"));


// +++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3)); // output => round off, Mostly used
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(2, 4, 5, 6, 1)); // output => 1, Find the minimum value
// console.log(Math.max(2, 4, 5, 6, 1)); // output => 6, Find the maximum value

console.log(Math.random()); // output values from 0 to 1.
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


// with Hack

let nums = [1, 2, 3, 4, 5, 6,  7, 8]

console.log(Math.min(...nums))
