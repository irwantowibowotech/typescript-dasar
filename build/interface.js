"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("Laptop menyala");
    }
    off() {
        console.log("Laptop dimatikan");
    }
}
let asus = new Asus("Asus ROG 17", true);
asus.on();
asus.off();
class MacBook {
    constructor(name, keyboardLight) {
        this.name = name;
        this.keybordLight = keyboardLight;
    }
    on() {
        console.log("Laptop MacBook dinyalakan");
    }
    off() {
        console.log("Laptop MacBook dimatikan");
    }
}
let macbook = new MacBook("MacBook Pro M2", true);
macbook.on();
macbook.off();
