// pure function is any function which has these two features
// 1- it should always return same output for same input
// 2- it will never change/update the value of a global variable


// This is an impure function

var abcdef = 12

function abcd(val){
    abcdef = 23
    return Math.random()*val
}

var ans1 = abcd(2)
var ans2 = abcd(2)

console.log(ans1);


// This is a Pure function

function abcde(){
    return a*b
}

abcde(1,2)
abcde(1,2)