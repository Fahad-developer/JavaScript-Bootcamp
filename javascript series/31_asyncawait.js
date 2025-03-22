/* async keyword function ke sath isliye likha jata hai kyunki ye function ko 
asynchronous banata hai. Jab hum ek function ko async banate hain, to us function 
ka output automatically ek promise hota hai, chahe hum return karein ya nahi. 
Iska fayda ye hota hai ke hum us function ke andar await keyword ka use kar sakte 
hain, jo kisi promise ke resolve hone ka intezar karta hai bina code ko block kiye. */


async function abcd() {
    // Dono asynchronous hain aur humein inka result milne tak wait karna padta hai.
  
    // await fetch(): Server se raw response lene ka intezar karta hai.
    let raw = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    // await raw.json(): Us raw response ko JSON object mein convert karne ka intezar karta hai.
    let ans = await raw.json();
    console.log(ans);
  }
  
  abcd();




// Concurrency and Paralelism

// Concurrency: JavaScript mein concurrency ka matlab yeh hota hai ke sync aur async code ko saath mein handle kiya jata hai. Sync code turant run hota hai, jabke async code background mein schedule hota hai. Event loop ke through async tasks complete hote hain, aur ye sab kuch ek hi thread par hota hai.
// for example: jaisa main stack ma bhi code execute ho rha hai or side stack ma bhi code execute ho rha tha bas usa end ma main stack ma laka execute kiya iska matlab hai ka 2no code aik sath chal rha tha.

// Paralelism: Multiple tasks ko exactly same time par run karna, alag cores ya threads par.

// Throttling: Kise code ko control krna number of executions