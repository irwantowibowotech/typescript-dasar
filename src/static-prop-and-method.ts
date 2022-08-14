class People {
    name: string;
    address: string;
    static isAlien: boolean = false;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

    static getHello(): string {
        return "Hello peopla class!!";
    }
}

let people = People.isAlien;
console.log(people);
console.log(People.getHello());