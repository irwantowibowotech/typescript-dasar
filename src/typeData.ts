// Tipe data string
let nama: string = "Irwanto";
nama = "Irwanto Wibowo";

console.log("Nama :", nama);

// Tipe data number
let nomor: number = 20;
nomor = 23;
console.log(nomor);

// Tipe data boolean
let isMarriage: boolean = true;
isMarriage = false;
console.log(isMarriage);

// Tipe data any
let identity: any = "Irwanto"
identity = {
    "nama": "Irwanto Wibowo",
    "umur": 30,
    "alamat": "Gunungkidul"
}
console.log(identity);

// Tipe data union
let phone: string | number;
phone = 6287838456789;
phone = "087838745632";
