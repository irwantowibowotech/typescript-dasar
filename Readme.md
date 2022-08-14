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

### Enum

Adalah sebuah tipe data yang menyimpan sekumpulan data konstan. Hal ini sama seperti kita `.env` yang menyimpan data data konfigurasi kita (contohnya).

```
enum Month {
    JAN, FEB, MAR, APR, MAY
}
```

Ketika kita membuat enum seperti di atas, maka dia akan diberi index, Sehingga kita bisa akses indexnya maupun sebaliknya kita munculkan indexnya dengan mengakses data Month-nya.

```
console.log(Month); // akan muncul data month beserta index-nya
console.log(Month.FEB); // akan muncul 1
console.log(Month[0]); // akan muncul JAN
```

Default dari index pertama ini adalah 0. Jika kita ingin memulainya dari 1 (bukan dari 0) maka kita bisa definisikan index pertamanya 1 di awal data.

```
enum Month {
    JAN = 1, FEB, MAR, APR, MAY
}

console.log(Month); // akan muncul data month beserta index-nya
console.log(Month.FEB); // akan muncul 1
console.log(Month[1]); // akan muncul JAN
```

Selain itu kita bisa juga memberikan enum dengan index string. Hanya saja saat membuat index dengan string maka kita wajib mengisi index-nya (semuanya).
Hal ini karena index dari data selanjutnya dari enum adalah increment dari data sebelumnya, sehingga jika kita membuat index-nya berupa string dan tidak menambahkannya di data selanjutnya maka akan terjadi error.

```
enum Days {
    SUN = "Minggu",
    MON = "Senin",
    TUE = "Selasa",
    WED = "Rabu"
}

console.log(Days.MON); // senin
```

## Function

### Type Data Balikan Pada Function

Di Typescript, kita harus mendefinisikan tipe data kembalian dari function yang kita buat. Misal kita buat kembaliannya bertipe string, maka ketika kita return dengan tipe number akan menjadikan error di function kita.

```
function getName(): string {
    return "Hello, nama saya Irwanto";
}
console.log(getAge());
```

Jika kita tidak mengembalikan apa apa pada function kita maka kita bisa return-kan `void` pada function kita.

```
function printName(): void {
    console.log("Print name");
}

printName();
```

### Type Data Pada Parameter

Di Javascript biasa ketika kita membuat function (misal pertambahan) dan kita buat parameter kemudian kita return penambahannya, sebenarnya ini akan rentan dengan kesalahan.

```
function tambah(angka1, angka2) {
    return angka1 + angka2;
}
```

Sekilas tampak biasa saja, namun ketika kita panggil functionnya dan kita beri parameter "10" dan 40 maka apa yang terjadi?
tidak akan menyebabkan error, namun yang keluar adalah 1040. Hal ini bisa terjadi karena secara otomatis parametr yang kita masukkan terkonversi menjadi string. <br />
Dengan Typescript kita bisa menghindari hal tersebut dengan memberikan tipe data yang benar di parameternya.

```
function tambah(angka1:number, angka2:number): number {
    return angka1 + angka2;
}

console.log(tambah(40, 20));
```

Dengan menambahkan tipe data pada parameter-nya ketika ada pemanggilan function dan parametrnya tidak sesuai maka akan terjadi error.

### Function Sebagai Tipe Data

Sebelum kita ke pembahasa function sebagai tipe data, mari kita belajar tentang membuat sebuah variabel yang bisa kita pakai untuk tipe data. Gimana maksudnya? <br />
Misal kita mempuanya sebuah tipe data `Age` dengan tipe data number.

```
type Age: number
```

Kemudian kita membuat sebuah variabel yang tipe datanya mereferensikan ke `Age`, sebenarnya ujung - ujungnya variabel tersebut bertipe number, hanya saja sudah kita aliaskan sebaga `Age`.

```
type Age: number
let umur: Age
```

Berdasarkan pemahaman di atas maka sebenarnya kita bisa menjadikan function menjadi tipe data, sama seperti kasus di atas.

```
type Tambah = (val1: number, val2: number) => number;
const Add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2;
}
```

Pada code di atas, kita membuat sebuah tipe data dengan nama `Tambah` yang mana adalah sebuah funtion dan memiliki dua parameter `val1` dan `val2` serta return bertipa numbar.
Artinya adalah saat kita membuat variabel dengan tipe data `Tambah` maka wajib memberikan parameter bertipe number serta harus mereturn kembalian bertipa number juga. Jika kita memaksa
untuk memberikan tipe data lain maka akan menjadikan error.

### Type Data Object

Di typescript, object akan diaggap sebagai tipe data juga. Misal seperti ini,

```
let user = {
    name: "Irwanto",
    age: 30
}
```

Kemudian kita ingin menambahkan alamat di object user, maka hal itu tidak dibolehkan karena dianggap tidak sesuai dengan tipe data object-nya,
yang mana dia memiliki `name` dan `age`. Bahkan ketika kita hanya memasukkan salah satu saja (name saja misalnya) maka akan dianggap error juga karena dia membutuhkan `name` dan `age`.

```
type User = {
    name: string,
    age: number,
}

let user = {
    name: "Irwanto",
    age: 30,
}

user = {
    alamat: "Gunungkidul", // error
}
```

### Type Data Union

Tipe data ini adalah gabungan dari beberapa tipe data. Misal kita memiliki nomor telepon, kita bisa mengisi variabel nomot telepon tersebut dengan tipe number ataupun string.

```
let phone: string | number;
phone = 6287838456789;
phone = "087838745632";
```

### Default Parameter di Typescript

Kita bisa membuat default parameter saat kita membuat sebuah function, nantinya ketika kita tidak menyertakan parameter maka default parameter inilah yang akan dipakai.

```
const getNama = (firstName: string, lastName: string = "Wibowo"): string => {
    return firstName + " " + lastName;
}

console.log(getNama("Irwanto")); // Irwanto Wibowo
console.log(getNama("Irwanto", "Mantabb")); // Irwanto Mantabb
```

### Optional Parameter
Saat kita membuat sebuah function dengan parameter string, kita bisa memberikan opsi kalau parameter itu bisa diisi ataupun tidak.
Hasil dari parameter yang tidak kita isi tersebut adalah `undefined`. <br />
Untuk menandai jika parameter tersebut bersifat opsional adalah dengan menambahkan tanda `?` ke nama parameternmya.
```
const getUser = (val1: string, val2?: string): string => {
    return val1 + " " + val2;
}
console.log(getUser("A", "B")); // A B
console.log(getUser("A")); // A undefined
```
Yang perlu kita perhatikan adalah return type yang kita pakai ketika kita menggunakan opsioanl parameter ini. Ketika kita mereturn number maka 
kita tidak bisa memakai opsional, karena kita tidak bisa menjumlahkan number dengan undefined.

### Memahami Class (Dasar) Di Typescript
Di Javascript sebenarnya tidak mengenal `class`, hanya ada `prototype`. Di Typescript sendiri kita bisa mengguanakn class karena memang typescript 
ada untuk memecahkan masalah tersebut (yang ada di Javascript). Ujung - ujungnya hasil compile dari typescript adalah prototype.
```
export class User {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let user = new User("Irwanto");
console.log(user); // User { name: 'Irwanto' }
console.log(user.name); // Irwanto
```
TIPS:
Kita bisa menyingkat penulisan class kita saat kita menginisiasi properti dan constructor menjadi lebih sederhana di Typescript.
```
export class User {
    constructor(public name: string) {
        this.name = name;
    }
}

let user = new User("Irwanto");
```