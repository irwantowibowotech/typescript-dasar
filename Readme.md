## Belajar Typescript

### Type Data String
Di Typescript, tipe data bersifat strict banget. Misal kita membuat variabel dengan tipe data string, kemudian kita timpa dengan tipe data number maka akan terjadi error.
```
let nama: string = "Irwanto";
nama = 25;
```
Hal ini akan menjadikan error karena kita menimpa varibel yang berisi string "Irwanto" dengan number 25.<br />
Sedikit tambahan, ketika kita mendefinisakan sebuah variabel yang langsung kita isi maka typescript akan mengenali tipe data tersebut sesuai dengan apa yang kita isi.
```
let nama = "Rina Pratama"
```
Secara otomatis typescript akan menganggap kalau variabel nama memiliki tipe data string, sehingga saat kita menimpanya dengan tipe data selain string maka akan terjadi error.

### Type Data Number
Tidak jauh berbeda dengan tipe data number, tipe data number hanya bisa kita ganti dengan tipe data number. Jika kita paksa dengan tipe data selain number maka akan terjadi error.
```
let umur: number = 20;
umur = "30" (error)
```

### Type Data Boolean
Senada dengan string dan number, tipe data boolean hany bisa kita beri/ganti dengan tipe data boolean.

### Type Data Any
Jika kita ingin menyimpan data dan ada kebutuhan mengganti / menimpa data di kemudian hari dengan tipe data yang berbeda beda, maka solusi yang bisa kita pakai adalah membuat variabel dangan tipe data any.
Dengan tipe data any ini maka kita bisa memberikan nilai / value apa saja.
```
let identity: any = "Irwanto"
identity = {
    "nama": "Irwanto Wibowo",
    "umur": 30,
    "alamat": "Gunungkidul"
}
```
Dengan menggunakan tipe data any, kita bisa memasukkan data apa saja di variabel yang kita buat.

### Type Data Array
Array adalah kumpulan darai beberapa data. Array di sini juga sama dengan tipe data lainnya, ketika kita sudah membuat array dengan tipe data tertentu maka 
kita tidak bisa meggantinya dengan tipe data lain.
```
let array: number[] = [1,2,3,4,5] // membuat array dengan tipe number

array = ["satu", "dua"] // error, karena array bertipe string
```
Lalu bagaimana jika kita ingin membuat array dengan tipe data yang berbeda beda? solusinya adalah gunakan array dengan tipe `any`.
```
let array2: any[];
array2 = [1, "Dua", true, null, undefined];
```

### Array Tuple
Tuple adalah array yang bisa berisi berbagai macam tipe data namun nilai / item-ny terbatas.
```
let biodata: [string, number];
```
Kode di atas memberitahu kita jika variabel biodata hanya bisa diisi dengan tipe data string di posisi pertama dan number di posisi kedua.
Hal ini akan error jika kita mengisi string di posisi pertama dan string di posisi kedua karena memang berbeda tipe datanya.
```
biodata = ["Surabaya", 123]; // benar
biodata = ["Surabaya", "Malang"]; // salah
biodata = [123, "Surabaya"]; // salah
```
