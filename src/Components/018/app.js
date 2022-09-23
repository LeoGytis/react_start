console.log('07 Uzduotis');

class Stikline {

    constructor(turis) {
        this.turis = turis ?? 0;
        this.kiekis = 0;
    }

    ipilti(kiekis) {
        if (kiekis > this.turis) {
            this.kiekis  = this.turis;
            return this.kiekis;
        } else return this.kiekis  = kiekis;
    }

    ispilti(kiekis) {
        if (kiekis > this.turis) {
            return this.kiekis  = kiekis - this.turis;
        } else return 0;
    }

    stiklinejeYra() {
        console.log('Stiklineje yra: ' + this.kiekis + 'ml gerimo');
    }
}

const stikline1 = new Stikline(200);
const stikline2 = new Stikline(150);
const stikline3 = new Stikline(100);

stikline1.ipilti(250);
stikline1.stiklinejeYra();

stikline2.stiklinejeYra(stikline1.ispilti());

// ======== Arvydo kodas ===========

// class Stikline {

//     static gerimukas = 'Pepsi';
//     static registras = [];

//     static naujaStikline(t) {
//         // return;
//         return new this(t);
//     }

//     static whatType() {
//         console.log(this.gerimukas);
//     }

//     static visosStiklines(stikline) {
//         this.registras.push(stikline);
//     }

//     constructor(turis) {
//         this.turis = turis;
//         this.kiekis = 0;
//         this.constructor.visosStiklines(this);
//     }

//     ipilti(kiekis) {
//         this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
//         return this;
//     }

//     ispilti() {
//         const kiek = this.kiekis;
//         this.kiekis = 0;
//         return kiek;
//     }

//     stiklinejeYra() {
//         console.log(`Stiklinėje ${this.turis}ml yra:
//         ${this.kiekis} ${this.constructor.gerimukas} `);
//     }


// }

// const s1 = new Stikline(200);
// const s2 = Stikline.naujaStikline(150);
// console.log(s2);
// const s3 = new Stikline(100);

// console.log(Stikline.registras);

// Stikline.whatType();

// console.log(Stikline.gerimukas);

// s3.ipilti(s2.ipilti(s1.ipilti(80).ispilti()).ispilti());

// Stikline.registras[0].ipilti(40);

// s1.stiklinejeYra();
// s2.stiklinejeYra();
// s3.stiklinejeYra();