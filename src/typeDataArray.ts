// array
let array: number[]; // membuat array dengan tipe number
array = [1,2,3,4,5]

console.log(array);

let array2: any[];
array2 = [1, "Dua", true, null, undefined];
console.log(array2);

// tuple
let biodata: [string, number]; // hanya mengizinkan array dengan tipe string dan angka
biodata = ["Surabaya", 123];
console.log(biodata);
