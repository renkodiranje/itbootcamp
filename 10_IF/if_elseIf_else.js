let br = "broj";
if(br < 0) {
    console.log("broj je manji od nule");
}
else if(br == 0) {
    console.log("broj je jednak nuli");
}
else if( br > 1) {
    console.log("broj je veci od nule");
}
else {
    console.log("nije broj");
}
console.log("kraj grananja");

//Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 

let vreme = new Date();
let dan = vreme.getDay();
console.log(dan);
if(dan == 0) {
    console.log("vikend");
}
else if(dan == 6) {
    console.log("vikend");
}
else{
    console.log("radni dan");
}
/*Na osnovu unetog broja poena u paragrafu ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit nekom ocenom  ukoliko ima više od 50 poena, u suprotnom treba ispisati da je pao ispit. 
Za više od 50 poena učenik dobija ocenu 6, 
za više od 60 poena učenik dobija ocenu 7,
za više od 70 poena učenik dobija ocenu 8, 
za više od 80 poena učenik dobija ocenu 9 i 
za više od 90 poena učenik dobija ocenu 10.*/
let poeni = 95;
if(poeni > 90) {
    document.write("ocena 10");
}
else if( poeni > 80) {
    document.write("ocena 9");
}
else if(poeni > 70) {
    document.write("ocena 8");
}
else if(poeni > 60) {
    document.write("ocena 7");
}
else if(poeni > 50) {
    document.write("ocena 6");
}
else {
    document.write("nije polozio");
}
// 10. Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.
let sati = vreme.getHours();
console.log(sati);
sati = 17;

if( sati >= 17) {
    console.log("zatvoreno");
}
else if(sati < 9) {
    console.log("zatvoreno");
}
else {
    console.log("otvoreno");
}
// // 11. Za unet sat početka i sat kraja radnog vremena dva lekara,  
// ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE..
// //mora iscrtati sve varijante i isprobati za sve
let p1 = 8;
let k1 = 16;
let p2 = 16;
let k2 = 19;

if(k1 < p2) {
    console.log("nema");
}
else if( k2 < p1) {
    console.log("nema");
}
else {
    console.log("ima")
}
//12.Za uneti broj ispitati da li je paran ili nije. 
 br = 0;

let ost = br % 2;
if(ost == 0) {
    console.log("paran broj");
}
else {
    console.log("neparan broj");
}
//0/2=0 moze
//2/0 ne moze se deliti 0
//13. Za uneti broj ispisati da li je deljiv sa 3 ili ne.
br = 7;
console.log(br);
ost = br % 3;
console.log(ost);
if(ost == 0) {
    console.log("deljiv sa tri");
}
else {
    console.log("nije deljiv sa 3");
}
//14. Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.
broj1 = 10;
broj2 = 55;
if(broj1 > broj2) {
    console.log(broj1 - broj2);
}
else if(broj2 > broj1) {
    console.log( broj2 - broj1);
}
//16.Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture. 
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

//odredjivanje srednjeg broja
let sr = b1 + b2 + b3 - maks - mini;
document.write(`srednji broj je ${sr}`);
// 10. zadatak

if(sati < 12) {
    document.write("dobro jutro");
}
else if ( sati < 18) {
    document.write("dobar dan");
}
else {
    document.write("dobro vece");
}
// // 15. Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. 
// Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.
broj = 0;
if(broj < 0) {
    document.write("manji od nule");
}
else if( broj > 0) {
    document.write("veci od nule");
}
else {
    document.write("jednak 0");
}
// da li je ceo
broj = 5.57;
console.log(Number.isInteger(broj));

if(Number.isInteger(broj)) {
    console.log("ceo broj");
}
else {
    console.log("decimalan broj");
}



 