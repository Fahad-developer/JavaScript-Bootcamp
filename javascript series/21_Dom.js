// console.log(document)
// console.dir(document)
// document.getElementById('title')
// document.getElementById('title').id  // return the id of the element
// document.getElementById('title').class
// document.getElementById('title').className
// document.getElementById('title').getAttribute('id')
// document.getElementById('title').setAttribute('class', 'test')
// const title = document.getElementById('title')
// title.style.backgroundColor = 'green'
// title.style.borderRadius = '5px'
// title.textContent
// document.getElementsByClassName('heading')

// ++++++++++++++++++++ Real World Use Cases ++++++++++++++++++++++++

// 4 pillars of DOM

// 1. Selection of an Element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener

// ---------------------- selection of a Element ---------------- //

// var a = document.querySelector("h1")
// console.log(a)

// ---------------------- Changing HTML --------------------- //

// var a = document.querySelector("h1").innerHTML = "changed html"
// var a = document.querySelector("h1") 
// a.innerHTML = "Changed HTML"           // agar text change krna to (textContent) agar html change krna to innerHtml

// ---------------------- Changing CSS ---------------------- //

// var a = document.querySelector("h1")
// a.style.color = "red"
// a.style.backgroundColor = "black"


// ---------------------- Event Listner ------------------- //

var a = document.querySelector("h1")
// a.innerHTML = "Kaise ho ap log"
// a.style.color = "yellow"
// a.style.backgroundColor = "#000"

// a.addEventListener("click", function(){
//     // console.log("hey");
//     a.innerHTML = "Badal Gaya hn mai teri ex ki tarha"
//     a.style.color = "yellow"
//     a.style.backgroundColor = "#000"
// })


// ----------------- Selecting Multiple Events at the Same Time -----------------

// by this method it will only select first h1
// var h = document.querySelector('h1')

// by this it will select all the h1 elements
var h = document.querySelectorAll('h1')
h.forEach(function(e){
    console.log(e)
})



// ------------------- Node List ------------------------------

// Node list are quite similar to array or iska andar apko select kiya hova elements show hon ga.


// ------------------- Names of Tags ---------------------------

// tagName : returns tag for element notes
// innerText : returns the text content of the element and all its children
// innerHtml : return the plain text or HTML conetent in the element
// textContent : returns textual content even for hidden element

// Type of Node:
// 1- text nodes
// 2- comment node
// 3- Element node // most important


// console.dir(document.body.firstChild); // output => first child of node
// document.querySelector("div").children;
