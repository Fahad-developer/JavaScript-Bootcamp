
// Promise Chain

function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("Success");
        }, 3000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("Success");
        }, 6000);
    });
}


console.log("Fetching data...")

asyncFunc().then((res) => {
    console.log(res);
    console.log("Fetching data2...");
    asyncFunc2().then((res) => {
        console.log(res)
    })
});



// console.log("Fetching data2...")

// let p2 = asyncFunc2();

// p2.then((res) => {
//     console.log(res);
// });