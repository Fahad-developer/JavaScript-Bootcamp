// current context

const user = {
    username: 'fahad',
    price: 199,
    welcome : function(){
        // we use this keyword for current context
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcome()


// function chai(){
//     let username = 'fahad'
//     console.log(this.username);
// }

// chai()


// const chai = function(){
//     let username = 'fahad'
//     console.log(this.username); // output => undefined
// }

// basic arrow function
// const addTwo = () => {}

// const chai = () => {
//     let username = 'fahad'
//     console.log(this.username); // output => undefined
// }


// chai()


// const sum = (num1, num2) => {
//     return num1 + num2
// }


// Implicit return
// agar currly braces ma likha to return keyword likhna para ga.
// agar parenthesis ma likha to return keyword nahi likhna para ga.
// const sum = (num1, num2) => num1 + num2.
// () also used in react.

// const sum = (num1, num2) => (num1 + num2)

// returning a object
const sum = (num1, num2) => ({username: 'fahad'})


console.log(sum(3, 4))
