// for
// const arr = [1, 2, 3, 4, 5, 6, 7]

// for (let index = 0; index <= arr.length; index++) {
//     const element = index;
//     if (element == 5) {
//         console.log('5 is best number')
//     }
//     console.log(element);
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and Inner loop ${i}`);
//     }
// }



// Break and Continue
// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log('5 Detected');
//         break
//     }
//     console.log(`Value of i is ${i}`);
// }



// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log('5 Detected');
//         continue
//     }
//     console.log(`Value of i is ${i}`);
// }



// while and do while loop

// while
// let index = 0
// while (index <= 20) {
//     console.log(`index is ${index}`);
//     index = index + 2
// }


// let myArray = ['superman', 'batman', 'spiderman', 'flash']

// let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }


// do while

// pehla kam hoga phr condition check hogi

let score = 11
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);