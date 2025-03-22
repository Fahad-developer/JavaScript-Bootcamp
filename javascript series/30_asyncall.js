// "new Promise()" ka constructor turant execute hota hai, isko manually call karne ki zaroorat nahi hoti, aur andar diya hua code (like setTimeout) bhi turant run hota hai.
// Promises un operations ke liye use hote hain jo asynchronous hote hain, matlab jo kam turant nahi hota, balki kuch waqt leta hai.

// +++++++++++++++++++++ Creating a Simple Promise ++++++++++++++++++=

// const Promiseone = new Promise(function(reject, resolve){
//     setTimeout(function(){
//         console.log("Async Task Completed")
//         resolve()
//     }, 1000)
// })

// // resolve ka connection hai .then ka sath hai, jaisa hi hum resolve() promise ma likha ga .then ka code execute ho jai ga.
// Promiseone.then(function(){
//     console.log("Promise Consumed")
// })


// ++++++++++++++++++++++++ Creating a promise without saving it to a variable ++++++++++++++++++

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task 2')
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })


// +++++++++++++++++++++ Creating a promise and passing value to .then ++++++++++++++++++++



// const PromiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // resolve ma jo bhi paramter pass kara ga wo .then() method ma hama mill sakta hai.
//         resolve({username: 'chai', email: 'chai@gmail.com'})
//     }, 1000)
// })

// PromiseThree.then(function(user){
//     console.log(user)
// })



// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: 'fahad', password: '123'})
//         } else {
//             reject('ERROR: something went wrong')
//         }
//     }, 1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user)
//     return user.username
// })
// .then((username) => {
//     console.log(username)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(()=> console.log('The Promise is either resolved or rejected')
// )


// +++++++++++++++++++ Using Async / Await +++++++++++++++++++++++


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'javascript', password: '123'})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})