// Constructor Function har bar apko aik naya instance deta hai.

// jaisa hi ap new keyword ka use kara ga sab sa pahla aik empty object create hota hai jisko instance bola jata hai.
// 1- new object create ho rha hai.
// 2- apka aik cunstruction function call hota hai new keyword ki wajha sa.
// 3- jo bhi argument apna likha hain wo iska andar inject ho jata hain.



function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }

    // return likha ya na likha farq nahi parta.
    //return this
}

const userOne = new User("M.Fahad", 18, true)
const userTwo = new User("M.Ashar", 19, false)
console.log(userOne.constructor)
// console.log(userTwo);

// This checks if the object 'userOne' is an instance of the 'User' class or constructor function.
console.log(userOne instanceof User)
