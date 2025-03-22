function person(name, age, height, gender) {
    console.log(this)
    this.name = name
    console.log(this)
    this.age = age
    console.log(this)
    this.height = height
    console.log(this)
    this.gender = gender
}

const fahad = new person("Fahad", 34, 6,  "Male")

// console.log(new person("Fahad", 34, 6,  "Male"))
