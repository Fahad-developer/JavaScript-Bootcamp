// Async Await

// Async keyword was used with functions, yani ka hum kise bhi normal function ko async function bana sakta hain.


// With async it will automatically return a promise

// Async
async function Hello() {
    console.log("Hello")
}


// Await
// await means ka kise chz ka inteezar krna.
// await pauses the execution of its surrounding async function until the promise is settled.
// await ass pass walli sari execution ko rok kr w8 kara ka.
// await keyword ko ham sirf kise async function ka andar hi use kar sakta hain.
// await ma result ka liya w8 kiya jai ga hum uska ilawa aga nahi barha ga.

/* 1- (async) keyword kisi function ko asynchronous banata hai. Jab tum kisi function 
ko async declare karte ho, to wo function hamesha ek promise return karta hai, 
chahe tum us function ke andar koi promise explicitly return karo ya na karo. 

2- (await) keyword asynchronous operation ka result aane tak execution ko temporarily stop 
kar deta hai. Jaise hi result milta hai, code ka agla part execute hota hai. Ye 
asynchronous task ko synchronous tarike se handle karne ka tarika hai, jo code ko 
readable banata hai.
*/

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("weather data")
            resolve(200)
        }, 3000)
    })
}

// aga ka kam krna sa pehla w8 kro 
async function getWeatherData(){
    await api() //1st call
    await api() //2nd call
}


getWeatherData()