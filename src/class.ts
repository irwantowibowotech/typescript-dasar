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

    getRole(): {read: boolean, write: boolean} {
        return {
            read: this.read,
            write: this.write,
        }
    }
}

let admin = new Admin("Admin");
console.log(admin.getName()); // Admin
console.log(admin.getRole()); // { read: true, write: true }
admin.setName("Mantabb");
console.log(admin.getName()); // Mantabb