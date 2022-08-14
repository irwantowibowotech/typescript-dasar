"use strict";
// tipe data balikan pada function
/*
function getName(): string {
    return "Hello, nama saya Irwanto";
}

console.log(getName());

function getAge(): number {
    return 30;
}

console.log(getAge());

function printName(): void {
    console.log("Print name");
}

printName();
*/
function tambah(angka1, angka2) {
    return angka1 + angka2;
}
console.log(tambah(40, 20));
const Add = (val1, val2) => {
    return val1 + val2;
};
// Default parameter
const getNama = (firstName, lastName = "Wibowo") => {
    return firstName + " " + lastName;
};
console.log(getNama("Irwanto")); // Irwanto Wibowo
console.log(getNama("Irwanto", "Mantabb")); // Irwanto Mantabb
// Optional parameter
const getUser = (val1, val2) => {
    return val1 + " " + val2;
};
console.log(getUser("A", "B")); // A B
console.log(getUser("A")); // A undefined
