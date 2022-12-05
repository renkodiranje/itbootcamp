
// 1 zadatak
let sati = 5; 
let minuti = 20; 
let minuti_odponoci = sati * 60 + minuti;
console.log(minuti_odponoci);
let doponoci = 24*60 - minuti_odponoci;

// 2 zadatak
let minuti_ukupni = 500; //minuti od ponoci
let protekli_minuti = minuti_ukupni % 60; //minuti
console.log(protekli_minuti);
let protekli_sati = (minuti_ukupni - protekli_minuti) / 60;//sati
console.log(protekli_sati + ":" + protekli_minuti);

//zadatak 4
let datum = new Date(); //datum je objekat koji sadrzi info o trenutnom datumu i vremenu
let mesec = datum.getMonth() + 1;

console.log(datum.getFullYear());
console.log(datum.getMonth() + "/" + mesec);

let h = datum.getHours();
let m = datum.getMinutes();
console.log(h + ":" + m);
let mop = h * 60 + m;
console.log(mop);
// 3. zadatak

var cenaRobe = 553.22;
var novcanica = 1000;
var kusur = novcanica - cenaRobe
console.log(kusur);
// zadatak 5



//zadatak 6
let ukupnoEvra = 500;
let kursEvroDinar = 117.35;
console.log("imamo " + ukupnoEvra * kursEvroDinar + " dinara.");

//zadatak 7

ukupnoEvra = 200;
let dolarDinar = 111.45;
let dinar = ukupnoEvra * kursEvroDinar;
let dolar = dinar / dolarDinar;
console.log("imamo " + dolar + " dolara");
console.log( "imamo " + dolar * dolarDinar / kursEvroDinar + " evra");

//zadatak 8

let C = 10;
let F = C * 1.8 + 32;

console.log( "farenhate vrednost:" + F);
F = 100;
console.log("celzijusa je:" + ( F - 32) / 1.8);

//zadatak 9 
//prva konverzija
C = 25;
K = C + 273.15;
console.log("kelvina je:" + K);
//druga konverzija
K = 273.15;
console.log( "celzijusa je:" + (K - 273.15));

//zadatak 5

let dan = datum.getDate();
let meseci = datum.getMonth() +1;
let godina = datum.getFullYear();
console.log(dan + "." + meseci + "." + godina);
console.log(godina + "/" + meseci + "/" + dan);

//zadatak 6
let ukupnoEvro = 100;
kursEvroDinar = 117.27;
let dobijeniDinari = ukupnoEvro * kursEvroDinar;
console.log(dobijeniDinari);
// drugi nacin 6
dobijeniDinari = 130000;
 
ukupnoEvro =  dobijeniDinari / kursEvroDinar;
console.log(ukupnoEvro);
