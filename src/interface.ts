interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGaming: boolean;

    constructor(name: string, isGaming: boolean) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on(): void {
        console.log("Laptop menyala");
    }
    off(): void {
        console.log("Laptop dimatikan")
    }
}

let asus = new Asus("Asus ROG 17", true);
asus.on();
asus.off();

class MacBook implements Laptop {
    name: string;
    keybordLight: boolean;

    constructor(name: string, keyboardLight: boolean) {
        this.name = name;
        this.keybordLight = keyboardLight;
    }

    on(): void {
        console.log("Laptop MacBook dinyalakan");
    }

    off(): void {
        console.log("Laptop MacBook dimatikan");
    }
}

let macbook = new MacBook("MacBook Pro M2", true);
macbook.on();
macbook.off();