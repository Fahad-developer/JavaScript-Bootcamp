/*
Premitive Datatypes

                  Type                                   typeof

1)           Number                                   number
2)           String                                   string
3)           Boolean                                  boolean
4)           Bigint                                   bigint
5)           Symbol                                   symbol
6)           Null                                     object
7)           Undefined                                undefined


Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

1)              Object                                object
2)              Array                                 object
3)              Function                              function(object)

*/

// Note
// Null is completly empty

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);


let myObj = {
    name: 'Fahad',
    age: 18
}


const myFunction = function () {
    console.log('Hello world');
}

// console.log(myFunction);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive), Heap(Non-Primitive)
// Stack => variable ki copy milti hai.
// Heap => refrence milta hai.

let name = 'Muhammad Fahad'

let anothername = name
anothername = 'chaiorcode'

// console.log(anothername);
// console.log(name);



let userOne = {
    email: 'shaka@gmail.com',
    upi: '@shaka'
}

let userTwo = userOne
userTwo = userOne
userTwo.email = 'kaka@gmail.com'

console.log(userTwo.email);
console.log(userOne.email);
