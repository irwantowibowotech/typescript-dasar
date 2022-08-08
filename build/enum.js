"use strict";
// enum
// numeric enum
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
    Month[Month["MAY"] = 5] = "MAY";
})(Month || (Month = {}));
console.log(Month); // akan muncul data month beserta index-nya
console.log(Month.FEB); // akan muncul 1
console.log(Month[1]); // akan muncul JAN
// string enum
var Days;
(function (Days) {
    Days["SUN"] = "Minggu";
    Days["MON"] = "Senin";
    Days["TUE"] = "Selasa";
    Days["WED"] = "Rabu";
})(Days || (Days = {}));
console.log(Days.MON);
