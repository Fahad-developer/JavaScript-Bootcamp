function hello() {
    console.log('Hello');
}

// setTimeout(hello, 10000) // timeout;  2s = 2000ms


/* setTimeout is a JavaScript function that executes a specified piece of code or function 
after a certain period of time (in milliseconds) has elapsed. In this example, 
it will log 'Hello' to the console after 4000 milliseconds (or 4 seconds). */



// setTimeout(()=>{
//     console.log('Hello');
// }, 4000)


// callback hells
// callback nesting is called callback hells

let age = 18

// if (age >= 18) {
//     if (age >= 60) {
//         console.log('Senior');
//     } else {
//         console.log('middle');
//     }
// } else {
//     console.log('Child');
// }


// Async javascript code example

// function getData(dataId) {
//     setTimeout(()=>{
//         console.log("data", dataId);
//     }, 2000)
// }

// getData(2)


// Callbacks

function getData(dataId, getNextData) {
    setTimeout(()=>{
        console.log("data", dataId);
        if (getNextData) {
            getNextData()
        }
    }, 2000)
}


// callback hell
// nested callbacks are called callback hells
// to resolve callback hells we have promises


// getData(1, ()=>{
//     console.log('Getting data 2.....');
//     getData(2, ()=>{
//         console.log('Getting data 3.....');
//         getData(3)
//     })
// })


// promise

// resolve and reject were two handlers
// resolve ka matlab hai ka agar apna isa run kr dya matlab apka kam pura ho gya.
// reject ka matlab hai ka agar apna isa run kr dya to matlab apka kam ho to jai ga par usma koi error a jai ga.

// promise hamara pass aik object hota hai javascript ma jiski hamara pass 3 states hoti hain.
// states in promises
// 1- pending       2- fulfilled     3- rejected
let promise = new Promise((resolve, reject)=>{
    console.log('i am a promise');
    resolve("kam ho gya")
})