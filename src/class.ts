export class User {
    constructor(public name: string) {
        this.name = name;
    }
}

let user = new User("Irwanto");
console.log(user);
console.log(user.name);