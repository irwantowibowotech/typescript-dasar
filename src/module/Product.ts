import Asus from "./Asus";
import Macbook from "./Macbook";

let asus = new Asus("Thinkpad", false, true);
console.log(asus);
asus.keyA();

console.log("");

let macbook = new Macbook(2017, true, false);
console.log(macbook);
macbook.keyB();