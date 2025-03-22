// Fetch api provides an interface for fetching (sending/receiving) resources.
// The fetch() method is used to fetch a resource (Data).
// Fetch api sirf GET request krti hai or GET ka matlab hota hai kahi sa data laka ana.

// let promise = fetch(url, [options])

// kise bhi api ko call kr ka data mangawana async kam hai.
// API ka sath jab bhi kam kara ga to async await ka use kara ga.


const url = 'https://cat-fact.herokuapp.com/facts'

// const getFacts = async () => {
//     // jab bhi hum fetch method use krta hain or hum koi bhi options usa nahi bajhta to fetch method aik particular type ke request create krta hai jisa hum (GET) request kahta hain. zaida tar hum get request use krta hain kuka hama data recieve krna hota hai. 
//     let response = await fetch(url);
//     console.log(response.status) // se status code check hota hai (e.g., 200 for success).
//     let data = await response.json() // response body ko JSON mein convert karta hai, jisse tum data ko access kar sako.
//     console.log(data[1].text)
// }

// getFacts()



// 1- Response (JSON)
// 2- Convert JSON to JS object to be usefull using json() method. (Input in JSON, output in js Obj)


function getFacts() {
    fetch(url).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
    })
}

getFacts()