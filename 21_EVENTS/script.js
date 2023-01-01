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
//Brojevi između 0 i 10 zelenom bojom.
//Brojevi preko 10 crvenom bojom. probaj da resis
btnMinus.addEventListener("click",()=>{
    br--;
    if(br < 0) {
        br = 0;
    }
    
    spanRez.innerHTML = br;
});
btnMinus.addEventListener("click",()=>{
    
    if(br < 10) {
        spanRez.style.color= 'green';
    }
});
btnPlus.addEventListener("click",()=>{
    br++;
    spanRez.innerHTML = br;
});
btnPlus.addEventListener("click",()=>{
    if(br > 10) {
        spanRez.style.color= 'red';
    }
    if(br < 10) {
        spanRez.style.color= 'green';
    }
});
//5. zadatak

let inputUnos = document.getElementById("ime");
let btnPrikazi = document.getElementById("prikazi");
let spanPrikaz = document.getElementById("prikaz");
//let inputPol = document.querySelectorAll("input[name ='pol']");

btnPrikazi.addEventListener("click", () => {
    let value = inputUnos.value;
    spanPrikaz.innerHTML = ` hello ${value}`;
    //inputUnos.value = "";
});
btnPrikazi.addEventListener("dblclick",()=>{
    //selektovan je jedan radio button koji je cekiran
    let checkedPol = document.querySelector("input[name ='pol']:checked");//vraca HTML tag
    console.log(checkedPol);
    let valueCheckedPol = checkedPol.value; // daje vrednost value iz selektovanog html taga
    console.log(valueCheckedPol);

    ////////////////selektovanje svih radio buttona prema name atributu
    let inputRadios = document.getElementsByName("pol");
    inputRadios.forEach(input=> {
        if(input.checked) {
            console.log(input.value);
        }
    });
////isto postizemo i ukoliko koristimo querry selektror al

let inputRadiosQuery = document.querySelectorAll("input[name='pol']");
inputRadiosQuery.forEach(input=>{
    if(input.checked) {
        console.log(input.value);
    }
});

});
let Unos = document.getElementById("unesi1")
let klik = document.getElementById("klik1")
let ispis = document.getElementById("unet1");

klik.addEventListener("click",() => {
let broj = Unos.value;
ispis.innerHTML = broj ** 2;
});

let Unos2 = document.getElementById("unesi2")
let klik2 = document.getElementById("klik2")
let ispis2 = document.getElementById("unet2");

klik2.addEventListener("click",() => {
    let broj2 = Unos2.value;
    ispis2.innerHTML = broj2 / 2;
    });


let Unos3 = document.getElementById("unesi3")
let klik3 = document.getElementById("klik3")
let ispis3 = document.getElementById("unet3");
klik3.addEventListener("click",() => {
    let broj3 = Unos3.value;
    ispis3.innerHTML = (broj3**2)*Math.PI;
    });

    