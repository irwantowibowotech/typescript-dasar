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
