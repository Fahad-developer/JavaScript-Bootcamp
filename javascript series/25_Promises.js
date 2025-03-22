// In moderen Programming we use promises instead of Async

// Promises ka three states hota hain

// 1- pending     2- fulfilled     3- rejected 


// const promiseOne = new Promise(function(resolve, reject){
//     // Do an asynnc task
//     // DB calls, cryptography, network calls
//     setTimeout(function(){
//         console.log('Async Task is Complete')
//         // Connecting resolve
//         resolve()
//         //resolve(123)
//         //resolve("Sucess")
//     }, 1000)
// })




// new promise is a class jis sa ham naya promise create kr raha hain
// resolve and reject are handlers
// resolve and rejects are functions


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Task 2")
//         //resolve("Sucess")
//         reject("Some Error Occured")
//     }, 1000)
// })



// promises ko use krna ka liya hamara pass 2 methods hota hain jab bhi hamara pass koi promise ata hai
// agar promise fulfill hona ka bad hama koi kam karwana hai to phr hum .then() method ka use krta hain.
// agar kisse error ana ka bad ya reject hona ka bad hama koi kam karana hota hai to hum .catch() method ka use krta hain.




const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log('I am a Promise')
        // resolve("Sucess")
        reject("Error")
    })
}


// in then and catch function we automatically get a parameter called res and err.

let promise = getPromise()
// promise.then((res) => {
//     console.log("Promise fulfilled", res)
// })


promise.catch((err) => {
    console.log("rejected", err)
})