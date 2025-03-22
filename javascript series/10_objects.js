// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


//  const object ko mutate (change) hone se nahi rokta, sirf reference ko change hone se rohta hai.
const jsUser = {
    name: "Fahad",
    "full name": "Muhammad Fahad", // can'not access it using "." method
    email: "fahad@gmail.com",
    age: 18,
    loc: 'quetta',
    isLoggedIn: false,
}

// console.log(jsUser.name);
// console.log(jsUser['name']);
// console.log(jsUser['full name']);

jsUser.email = 'ranafahad@gmail.com'
// Object.freeze(jsUser)  // the object is now freeze and can't be changed
jsUser.email = 'fahadrana@yahoo.com'
// console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello JS user");
}

jsUser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // when we use the same object for data we use this keyword
}

// console.log(jsUser.greetings);
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());
