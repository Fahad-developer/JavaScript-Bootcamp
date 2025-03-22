let name = 'Muhammad Fahad'
let tech = 'javascript'

// using backticks ``
// string is an object type ex: 0: 'h', 1: '3'.
// console.log(`Hello my name is ${name} and i am a ${tech} developer.`);

let test = 'Hello-world'
// console.log(test[0]); // output => H
// console.log(test.length); // output => 11
// console.log(test.toUpperCase()); // output => HELLO WORLD
// console.log(test.charAt(2)); // output => 1 (2 is the index)
// console.log(test.indexOf("H")); // output => 0

const newString = test.substring(0, 4)
// console.log(newString);


const anotherString = newString.slice(4, -8)
// console.log(anotherString);


const newStringOne = "   Fahad  "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://www.fahad.com/resume%20download"

// console.log(url.replace('%20', "-")) // output => /resume-download
// console.log(url.includes('fahad')); // output => true
// console.log(url.split('/')); // return a new array after splitting


