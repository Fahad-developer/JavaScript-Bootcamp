function sayMyName(){
    console.log('H');
    console.log('E');
    console.log('L');
    console.log('L');
    console.log('O');
}

// sayMyName()

// perameters
function twoNumbers(number1, number2){
    // let result = number1 + number2
    return number1 + number2
    // Nothing is executed after the return statement
    console.log(number1);
}

// arguments
const sum = twoNumbers(1, 2)
// console.log(sum);


// assigning default value
function loginUserMessage(username = 'sam'){
    if (username === undefined) {
        console.log('please enter a username.')
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('fahad'))


// rest operator and spread operator (...)
// it depend on the use case when we call it rest operator and when we call it spread operator
// Spread: Array ya object ko "spread" karke expand karna.
// Rest: Multiple values ko "rest" karke ek group mein combine karna.

function calculateCartPrice(val1, val2, ...num1){
    // output will be in an array
    return num1
}

// console.log(calculateCartPrice(200, 400, 700, 100));

const user = {
    username: 'Fahad',
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// console.log(handleObject(user));

// passing object to a function

// handleObject({
//     username: 'sam',
//     price: 199,
// })


// passing array to a function
const myNewArray = [200, 400, 600, 100]

function returnSecondValue(array){
    return array[2]
}

console.log(returnSecondValue(myNewArray));