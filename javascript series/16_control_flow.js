// 2 == "2"
// === also check the type

// if (3 != 2) {
//     console.log('Three is not equal to two');
    
// }

// const balance = 400

// Short hand syntax for writting if statement.
// if (balance > 300) console.log('Okay');


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log('Allowed to buy courses');
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log('user logged in');
}