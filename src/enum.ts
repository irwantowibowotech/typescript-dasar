// enum

// numeric enum
enum Month {
    JAN = 1, FEB, MAR, APR, MAY
}

console.log(Month); // akan muncul data month beserta index-nya
console.log(Month.FEB); // akan muncul 1
console.log(Month[1]); // akan muncul JAN

// string enum
enum Days {
    SUN = "Minggu",
    MON = "Senin",
    TUE = "Selasa",
    WED = "Rabu"
}

console.log(Days.MON);
