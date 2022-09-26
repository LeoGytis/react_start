console.log("019 lesson");

class Grybas {
    constructor() {
        this.valgomas = !this.rand(0, 1); // ! pavercia i true ar fale
        this.sukirmijes = !this.rand(0, 1);
        this.svoris = this.rand(5, 45);
    }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

class Krepsys {
    constructor() {
        this.dydis = 500;
        this.prikrauta = 0;
    }

    deti(grybas) {
        if (grybas.valgomas && !grybas.sukirmijes) {
            this.prikrauta += grybas.svoris;
        }
        return this.prikrauta < this.dydis;
    }
}

const Kr = new Krepsys();

let count = 0; // tik vizualizacijai
while (Kr.deti(new Grybas())) {
    console.log("Grybauju: " + ++count, + 'Krepsyje: ' + Kr.prikrauta); // tik vizualizacijai
}

console.log(Kr);
