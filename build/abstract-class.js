"use strict";
class Vehicle {
    start() {
        console.log("bruuummmmm");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
console.log("Jml Roda Mobil ====>", car);
car.start();
