// Object literal means litterly creating an Object example bellow is an object
const user = {
    username: 'M.Fahad',
    getUserDetails:function(){
        // this keyword refers to current context.
        // console.log(this.username)
        console.log(this)
    }
}

user.getUserDetails()

// console.log(this)