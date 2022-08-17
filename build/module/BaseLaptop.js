"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Keyboard_1 = require("./Keyboard");
class BaseLaptop {
    constructor(name, type, numeric, touchButton) {
        this.name = name;
        this.type = type;
        this.withNumeric = numeric;
        this.withTouchButton = touchButton;
    }
    keyA() {
        console.log((0, Keyboard_1.a)());
    }
    keyB() {
        console.log((0, Keyboard_1.b)());
    }
}
exports.default = BaseLaptop;
