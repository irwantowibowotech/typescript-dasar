abstract class Vehicle {
    abstract wheels: number;
    start(): void {
        console.log("bruuummmmm");
    }
}

class Car extends Vehicle {
    wheels: number = 4;
}

class Motorcycle extends Vehicle {
    wheels: number = 2;
}

let car = new Car();
console.log("Jml Roda Mobil ====>", car)
car.start();