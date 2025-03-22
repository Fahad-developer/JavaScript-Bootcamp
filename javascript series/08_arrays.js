// array

// array is an object
// array create shallow copies
const myArr = [0, 1, 2, 3, 4, 5, true, 'fahad']
console.log(myArr[3]);

// array methods

// push method add element at the end of the list 
// myArr.push(6)
// // automatically remove the last value at the end no argument required
// myArr.pop()

// unshift add values at the start
// myArr.unshift(9)
// shift remove value from the start at index 0
// myArr.shift()

// Questioning the array
// console.log(myArr.includes(9)); // return answer in a boolean data types
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // change the type of the array to string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // output => string


// slice and splice

const newa1 = myArr.slice(0, 3)
// console.log(newa1);
// console.log(myArr);

const newa2 = myArr.splice(0, 3)
// console.log(newa2);
// console.log(myArr);

// console.log(myArr)