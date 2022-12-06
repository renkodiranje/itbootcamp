let x = 5;
let y = 7;

if(x == y) {
    console.log("jednake vrednosti");
}
else {
    console.log("razlicite vrednosti");
}

if(x != y) {
    console.log("razlicite vrednosti");
}
else {
    console.log("iste vrednosti");
}
//1. Za unetu zapreminu proizvoda, u paragrafu ispisati “Throw away”, ukoliko je proizvod zapremine veće od 100ml. U suprotnom ispisati “Pack up”.
let proizvod = 100;
if(proizvod > 100) {
    document.write("<p>throw away</p>");
}
else {
    document.write("<p>pack up</p>");
}
// 2. Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom. Ukoliko je temperatura nula, računati kao temperaturu u plusu.

let temp = -2;

if(temp >= 0) {
    document.write("<p style='color:red;'>temperatura u plusu</p>");
}
else {
    document.write("<p style='color:blue;'>temperatura u minusu</p>");
}
// 3. U odnosu na pol koji je korisnik uneo u promenljivu  (“m” za muški pol ili “z” za ženski pol)  na ekranu prikazati odgovarajući avatar (odgovarajuću sličicu). 

let pol = "m";

if(pol == "m") {
    document.write("<img src='https://cdn.pixabay.com/photo/2019/08/06/08/46/old-man-4387774_960_720.png' style='width:50px'>");
}
else {
    document.write("<img src='https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg' style='width:50px'>");
}

// 4. U odnosu na preuzeto trenutno vreme sa računara, u paragrafu ispisati da li je trenutno jutro ili popodne.
//Popodne je kada prođe 12:00 sati, ne računajući i to vreme.

let vreme = new Date();
let sati = vreme.getHours();
console.log(sati);
if(sati < 12) {
    document.write("<p>Jutro je</p>")
}
else {
    document.write("<p>podne je</p>")
}
// 5.  Za preuzetu godinu sa računara i unetu godinu rođenja izračunati i u paragrafu ispisati da li je osoba punoletna ili maloletna. osoba je punoletna kada napuni 18 godina.

let godina = vreme.getFullYear();
console.log(godina);
let unetaGodina = 1989;
let kalk = godina - unetaGodina;
if(kalk < 18) {
    document.write("<p>osoba je maloletna</p>");
}
else {
    document.write("<p>osoba je punoletna</p>");
}
// 6 Odrediti i u paragrafu ispisati najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).
let b1 = 10;
let b2 = -15;
let b3 = 13;

let maks = b1;

if(maks < b2) {
    maks = b2;
}
if(maks < b3) {
    maks = b3;
}
document.write(`<p>maksimum je ${maks}</p>`);

//primer minimum
let mini = b1;
if(b2 < mini) {
    mini = b2;
}
if(b3 < mini) {
    mini = b3;
}
document.write(`<p>minimum  je ${mini}</p>`);
