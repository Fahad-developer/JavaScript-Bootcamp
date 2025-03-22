// singleton object

const tinderUser = new Object()
tinderUser.id = "123abc"
tind= "erUser.name Fahad"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

// nested objects
const regularUser = {
    email : 'fahad@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'muhammad',
            lastname: 'fahad',
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// object assign
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// non singleton object
// const tinderUser = {}

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("id"));


// destructuring object
//  Is code mein object destructuring ka use kiya gaya hai
const course = {
    coursename: 'JS in hindi',
    price: '999',
    courseInstructor: 'Hitesh'
}

const {courseInstructor} = course
console.log(courseInstructor);

// renaming the refrence
const {courseInstructor: instructor} = course

// console.log(instructor);




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// object
// const student = {
//     // properties
//     name: 'fahad',
//     marks: 94.6,
//     // Functions or Methods
//     printmarks: function(){
//         // this ka matlab hai ka wohi object, hum marks ko direct function sa access ni kr sakta this laga ka acces kr sakta hain.
//         console.log("marks = ", this.marks); // this.marks / student.marks
//     }
// }

// console.log(student);