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
    constructor(name, phone) {
        super(name);
        this.read = true;
        this.write = true;
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    getIdentity() {
        return `Nama : ${this.getName()}, Telp: ${this.phone}`;
    }
}
let admin = new Admin("Admin", "087847654321");
console.log(admin.getIdentity());
