import {Auto} from "./Auto.js";
let a1 = new Auto("Audi", "bela", true);
console.log(a1._marka);
console.log(a1);
console.log(a1.marka);
let a2 = new Auto("Opel", "crvena", false);
console.log(a2);

//klasa je sablon, korisnocki tip
//objekat - instanca(realizacija) klase = promenjljiva nke klase

a1.sviraj();
a2.sviraj();
a1._marka = "skoda";//u pozadini se poziva set marka
console.log(a1);
a1._marka = "";
console.log(a1);
a1.marka = "pezo";
console.log(a1);

a1.marka = "";
console.log(a1);

a1.boja = "zuya";
a1.imaKrov = false;
console.log(a1);
console.log(a1.marka + " " + a1.boja + " " + a1.imaKrov);
console.log(a1);

let a3 = new Auto("", "", 0)
console.log(a3);
