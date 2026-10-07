// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    runCar() {
        return `Car Is Running Now`;
    }
    stopCar() {
        return `Car Is Stopped Now`;
    }
}
let carOne  = new Car("MG", "2022", 420000);
let carTwo  = new Car("Toyota", "2021", 350000);
let carThree = new Car("Honda", "2020", 300000);

console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
console.log(carOne.runCar());
// Needed Output

// => "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// => "Car Is Running Now"