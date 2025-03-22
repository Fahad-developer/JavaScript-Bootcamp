/*
this keyword is a special keyword in javascript which changes it's values in different context.
*/

// this ki value alag alag gajho pa alag alag ho sakti hai.

// aik function jo object ka andar ho usa method kahta hain.

// global ma this ki value => window
// function ma this ki value => window
// method ma this ki value => object

// in any method "this" keyword always refers to parent object


// call   apply   bind


// call


function abcd(){
    console.log(this)
}

var obj = {age: 24}

abcd.call(obj)


function abcd(val1, val2, val3){
    console.log(this)
}

var obj = {age: 24}

abcd.call(obj,1,2,3)



// Apply

function abcd(val1, val2, val3){
    console.log(this)
}

var obj = {age: 24}

abcd.apply(obj, [1,2,3])


// Bind


function abcd(){
    console.log(this)
}

var obj = {age: 24}

var bindedfunc = abcd.bind(obj)
