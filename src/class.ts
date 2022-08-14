export class User {
    constructor(public name: string) {
        this.name = name;
    }

    setName(value: string) {
        this.name = value;
    }

    getName(): string {
        return this.name;
    }
}

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
    read: boolean = true;
    write: boolean = true;
    phone: string;

    constructor(name: string, phone: string,) {
        super(name);
        this.phone = phone;
    }

    getRole(): {read: boolean, write: boolean} {
        return {
            read: this.read,
            write: this.write,
        }
    }

    getIdentity(): string {
        return `Nama : ${this.getName()}, Telp: ${this.phone}`
    }
}

let admin = new Admin("Admin", "087847654321");
console.log(admin.getIdentity());