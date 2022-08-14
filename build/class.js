"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;
let user = new User("Irwanto");
console.log(user);
console.log(user.name);
/*
* Hak akses pada class
*
* public : bisa diakses di semua class/dari luar class
* protected: hanya bisa diakses dari class tersebut, dan class turunannya
* private: hanya bisa diakses dari class itu sendiri
 */
// Inheritance
class Admin extends User {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
}
let admin = new Admin("Admin");
console.log(admin.getName()); // Admin
console.log(admin.getRole()); // { read: true, write: true }
admin.setName("Mantabb");
console.log(admin.getName()); // Mantabb
