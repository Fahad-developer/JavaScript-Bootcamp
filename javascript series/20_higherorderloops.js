// array pa loop lagana hoga to (for of) loop lagai gai or objects ya map pa lagana hoga to (for of) lagai ga

// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const val of arr) {
//     console.log(val);
    
// }

const greetings = "Hello World"

// for (const greet of greetings) {
//     console.log(greet);
// }


// Maps

// Maps unique values ko store krta hain agar double value dalna ki koshish kara to accept ni krta

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ":-" ,value);
// }


const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'rubby',
    py: 'python',
}

// for in loop can only be used on objects

// for (const key in myObj) {
//     console.log(`${key} stands for ${myObj[key]}`);
// }


const coding = ["js", "python", "c", "c++", "java", "ruby"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach(item => {
//     console.log(item);
// });


const pro = [{
    lan: 'python',
    use: 'data science',
},
{
    lan: 'javascript',
    use: 'web dev',
},
{
    lan: 'c++',
    use: 'system software development',
},
]

// pro.forEach(item => {
//     console.log(item.lan);
// });


// const data = ['js', 'python', 'c++', 'swift']

// const values = data.forEach( (item) => {
//     console.log(item);
// })

// console.log(values); // output => undefined



// const myNums = [1, 2, 3, 4, 5, 6]

// // const newNums = myNums.filter((num) => num > 4)
// const newNums = myNums.filter((num) => {
//     return num > 4
// })
// console.log(newNums);



const myNumbers = [1, 2, 3, 4, 5, 6, 7]
// const newNums = myNumbers.map( (num) => num + 10)

// chaining
const newNums = myNumbers
.map((num) => num * 10 )
.map((num) => num + 1)
console.log(newNums);
