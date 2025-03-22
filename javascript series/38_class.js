class ToyotaCar {
    start(){
        console.log("Start")
    }

    stop(){
        console.log("Stop")
    }

    setBrand(brand){
        this.brand = brand
    }
}

// new hamara aik keyword hota hai jo hamara liya objects ko create krta hai threw classes
let fortuner = new ToyotaCar()
fortuner.setBrand('fortuner')
let lexus = new ToyotaCar()

console.log(fortuner.brand);
console.log(lexus.start());

