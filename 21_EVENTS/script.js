console.log("events");

//1. dohvatiti element
let btnHello = document.getElementById("hello");
//2.korak postavljamo osluskivac na element koji smo dohvatili
btnHello.addEventListener("click", () => {
    console.log("hello!");
});
//////////////////////

let btnhellohello = document.getElementById("hello2");
btnhellohello.addEventListener("dblclick",() => {
    console.log("hello hello");
});

//////////////
let btnEvents = document.getElementById("hello3");
btnEvents.addEventListener("click", () => {
    console.log(`event click`);
});
btnEvents.addEventListener("dblclick", () => {
    console.log(`event dblclick`);
});

// 1. zadatakNapraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1
let b = document.getElementById("brojac");
let brojac = 1;
let par = document.getElementsByTagName("p");

b.addEventListener("click",() => {
    console.log(`brojac je ${brojac}`);
    let par = document.getElementById("ii");
    par.innerHTML = brojac;
    brojac += 1;
});

// Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.
// Napraviti dugme + i dugme -. 
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
// Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.

btnMinus = document.getElementById("minus");
btnPlus = document.getElementById("plus");
spanRez = document.getElementById("rezultat");
let br = 0;
btnMinus.addEventListener("click",()=>{
    br--;
    if(br < 0) {
        br = 0;
    }
    spanRez.innerHTML = br;
});
btnPlus.addEventListener("click",()=>{
    br++;
    spanRez.innerHTML = br;
});