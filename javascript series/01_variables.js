// const is constant and we can'not reassign it.
const accountId = 180999
// let is scope variable
let accountEmail = "M.fahad@gmail.com"
// var is global variable
var accountPassword = "12345"
// reserve memory space but this method is not a good practice.
accountCity = "Quetta"
let accountState


// accountId = 2 // Not Allowed
accountEmail = "hc@gmail.com"
accountPassword = "212121"
accountCity = "Fasilabad"

/*
Prefer not to use var.
because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])