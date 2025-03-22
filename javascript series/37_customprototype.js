const employee = {
    calcTax(){
        console.log("Tax rate is 10 %")
    }
}

// console.log(employee.calcTax());


const karanArjun = {
    salary: 50000,
}

console.log(karanArjun);


karanArjun.__proto__ = employee

// prototype type is refrence to an object

// if object and prototype have same method, object method will be used.