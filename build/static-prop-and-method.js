"use strict";
class People {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    static getHello() {
        return "Hello peopla class!!";
    }
}
People.isAlien = false;
let people = People.isAlien;
console.log(people);
console.log(People.getHello());
