

// scope
// {}


// inside is block scope and outside is global scope.
// var is a global scope and let, const are local scope.
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);


// nested scope

function one(){
    const username = 'fahad'

    function two(){
        const website = 'www.fahad.com'
        // console.log(username);
    }
    //console.log(website);

    two()
}

one()

if(true){
    const username = 'fahad'
    if (username === 'fahad') {
        const website = ' youtube'
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// +++++++++++++++++++++ Intresting ++++++++++++++++++++++

function addOne(num){
    return num + 1
}

addOne(5)

// javascript ma variables kafi powerful hain or ya kuch bhi hold kr sakta hain.
const addTwo = function(num){
    return num + 2
}

addTwo(5)