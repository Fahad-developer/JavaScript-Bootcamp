const international_heros = ['spiderman', 'batman', 'superman']
const local_heros = ['burkha avenger', 'commander safeguard']

// international_heros.push(local_heros) // add array in a array
// console.log(international_heros);
// console.log(international_heros[3][1]);

const newArr = international_heros.concat(local_heros)
// console.log(newArr);


const all_new_heros = [...international_heros, ...local_heros] // spread operator
// console.log(all_new_heros);


const messyArr = [1, 2, 3, [6, 7, 8], 5, 1, [2, 3, 8, [33, 4]]]
const anotherMessyArr = messyArr.flat(Infinity) // output a single array
// console.log(anotherMessyArr); 


console.log(Array.isArray("Fahad"))
console.log(Array.from("Fahad")); // convert string into array


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // create array from elements
