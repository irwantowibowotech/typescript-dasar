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

function tambah(angka1:number, angka2:number): number {
    return angka1 + angka2;
}

console.log(tambah(40, 20));

// Function sebagai tipe data
type Tambah = (val1: number, val2: number) => number;
const Add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2;
}

// Default parameter
const getNama = (firstName: string, lastName: string = "Wibowo"): string => {
    return firstName + " " + lastName;
}

console.log(getNama("Irwanto")); // Irwanto Wibowo
console.log(getNama("Irwanto", "Mantabb")); // Irwanto Mantabb
