// Synchronous(sync): aik ka bad dosra hoga, jab tak aik command complete na ho dusra shuru nahi hoga.
// Asynchronous(Async): sara kam aik sath shuru kr do, jiska answer pehla a jai uska jawab da dena

// task a - 5 
// task b - 2
// task c - 15
// task d - 1

// if you are using {

    // setTimeout
    // setInterval
    // promises
    // fetch
    // axios
    // XMLHttpRequest
// }

// then you are using async javascript

// or agar inka use ni kr rha to hum sync javascript use kar rha hain

/* kai bar apka code dependent hota hai kise or ka server par, is case ma hama nahi pata hota
ka answer uska server sa kab lot ka ai ga. is liye hum async code likh deta hain ka 
blocking na ho (sync) sa ya mumkin ni. */

/* async code ka main motive hota hai ka un cases mein jinmein hume pata nahi code ka answer kitni der mein
aayega to jab bhi answer aa jaye uske answer ke respect mein koi particular code chala dena */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log("hey");
// is function ko call back function is liya kahta hain kuka ya yahan w8 kara ga or iska 2 sec ka bad dobara call kar ka bulaya jai ga.
// callbacks fnc hamesha async code mein answer ane pa chalta hai
setTimeout(function(){
console.log("hey2");
}, 2000)


// javascript async programming language nahi hai.

// async ka matlab hota hai do kam ek sath hona
// hamara pass 2 stacks hain 1- main stack or 2- side stack
// jo bhi main stack par hota hai wo chalta hai and jo bhi side stack par hota hai wo behind the scenes precessing kar sakta hai aur jab uski processing complete ho use main stack main la ka chalaya ja sakta hai.
// sync code always move to main stack
// async code always run in the side stack 
// jab main stack khali hota hai tab side stack ko check kiya jata hai, kya uska answer a chuka hai? agar uska answer a chuka hoga sirf tab hi usa main stack ma laya jai ga.

// jo bhi sync hoga usa main stack ma dala jai ga or bhi async hoga usa side stack ma dala jai ga jab main stack ka sara kam khatam ho jai ga phr side stack ko end ma check kiya jai ga ka kya uska jawab a chuka hai? phr us jawab ko main stack ma laka usa execute kiya jai ga.
// main stack sa side stack ma cheeza lana or check krna ka kam (event loop) krta hai.

// ++++++++++++++++++++++++++++ SingleThreading and MultiThreading ++++++++++++++++++++

// javascript ma single threading ho rahi hoti hai multi threading nahi. Multi threading means ka 2 cheeza simutaniously chala rahi hai.

// ++++++++++++++++++++++++++++ CallBacks +++++++++++++++++++++++++++++++++

/* in sa request ko bajha tha.

fetch
axios
promises
setTimeout
setInterval
 */


// jab answer complete ho jai tab kaisa chalana hai.
/*
then catch
callbacks
async await
*/

// callback hamesha aik function hota hai, ya sirf tab chalta hai jab async code ka completion ho jata hai.
// yani ka ya aisa code hai jo async code ka complete hona pa chalta hai.
// fetch(`https://shaka.com/menu`)
// async javascript ka mainly 2 hissa hain aik async code likhna ka liya
/*
fetch
XMLHttpRequest
axios
promises
setTime
setInterval

--> inka answer chalana ka liya hota hai.
callbacks
then catch
async await
*/

// +++++++++++++++++++++++++ Promises +++++++++++++++++++++++++++++++

// answer can be in pending state or resolve state or in reject state
// var ans = new Promise((res, rej) => {
//     if (false) {
//         return res()
//     } else{
//         return rej()
//     }
// })

/* then(): A method to handle the successful result of a promise.
Usage: Called on a promise to define what to do when the promise is fulfilled. */

// ans
// .then(function(){
//     console.log('resolve ho gya tha');
// })
// .catch(function(){
//     console.log('reject hova tha');
// })
//


// user will ask a number between 0 - 9 and if the number is below 5 resolve if not reject


var ans = new Promise((res, rej) => {
    var n = Math.floor(Math.random()*10)
    if (n < 5) {
        return res();
    } 
    else{
        return rej();
    }
})

ans.then(function(){
    console.log('below');
})
.catch(function(){
    console.log('above');
})

