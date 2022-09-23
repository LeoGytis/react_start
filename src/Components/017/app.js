console.log('Ja Ja');


let a = 'labas';

let b = new String('labas');

console.log(b);


// String.prototype.tail = function() {
//     return this.valueOf() + 'o-----------';
// }

// console.log(a);

class Cat {

    constructor(n) {
        console.log('Naujas katinas');
        this.name = n ?? 'Bevardis';
    }

    miau(m = '') {
        console.log(this.name + ' MiauuuuuQ! ' + m);
    }
}

const myCat = new Cat('Pilkis');
const myCat22 = new Cat();

console.log(myCat.name);
console.log(myCat22.name);

myCat.miau('ja ja');



const m = new Map();

m.set({id:1}, myCat);
m.set({id:1}, '---');
m.set({id:1}, myCat22);



console.log(m.size);