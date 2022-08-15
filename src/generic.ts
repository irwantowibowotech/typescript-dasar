function getData(value: any) {
    return value;
}
console.log(getData("Irwanto").length);
console.log(getData(100).length);

function myData<T>(value: T) {
    return value;
}
// console.log(myData("Irwanto").length);
// console.log(myData(100).length); // errror