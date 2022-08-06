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
