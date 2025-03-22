/* Prototype JavaScript mein ek object hota hai jo functions aur objects ke properties 
aur methods ko inherit karne ke liye use hota hai. Har function aur object ka ek default
prototype hota hai, aur yeh mechanism allow karta hai ke objects apne parent object ke 
properties ko access kar saken. 

Simply put: Prototype ka use inheritance ke liye hota hai, taki ek object dosre object 
se properties aur methods "borrow" kar sake.

+++++++++++++++++++++++++++++++++++++++

// Understand prototype in easywords // 

Prototype ko is liye use karte hain taake method har object ke liye alag alag na banaye.
 Agar hum method constructor ke andar banate hain toh har object apni copy banata hai, 
 jo zyada memory leta hai. Prototype pe method banane se ek hi copy sab objects share 
 karte hain, jo memory bachata hai.

*/

// javascript ma har aik chz object hoti hai. function bhi aik object hai
function multiply5(num){
    return num*5
}

multiply5.name = 2
// console.log(multiply5.name);
// console.log(multiply5(5));
// console.log(multiply5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    // this matlab jis, jisna bhi bulaya hai uska kam kar do.
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("Tea", 250)

chai.printMe()



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


