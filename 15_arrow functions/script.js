function sum(a, b) //imenovane funkicje: function, ime, para, return
{
    return a+b;
}
let datum = new Date();
let dan = datum.getDate();//vraca dan od 1 do 31
console.log(`danas je ${dan}`);

let rez = sum(1, 2);
console.log(rez);

//anonimne funkcije nema ime, ima function, param, return
let suma = function(a, b)
{
    return a+b;
}
rez = suma(1,2);
console.log(rez);

//arrow funkcije(anonimne funkcije sa skracenim zapisom)
let suma2 = (a, b) => { // {param, =>,return}
    
    return a + b;
    
}

rez = suma2(5, 6);
console.log(rez);


let hello = () => {
    console.log("hello world");
}
hello();
hello();

let echo = (s1, s2) => {
    let rezultat= s1 + ", " + s2;
    console.log(rezultat);
}
echo("stefan", "stanimirovic");

//napasitai arrow funkciju koja prihvata ime prezime i godine i ispisati ime prezime punoletna, ime prezime maloletna u konzoli

let punoletstvo = (i, p, g) => {
    if(g>=18) {
        console.log(`osoba ${i} ${p} je punoletna `);
    }
    else {
        console.log(`osoba ${i} ${p} je maloletna`);
    }
}
punoletstvo("renata", "tukic",33);

//sa return

let ispisHTML = (ime, prezime, godine) => {
    if(godine>=18) {
        let ispis = `<p>osoba ${ime} ${prezime} je punoletna</p>`;
        return ispis;
    }
    else {
        let ispis = `<p>Osoba ${ime} ${prezime} je maloletna</p>`;
        return ispis;
    }
}
document.body.innerHTML += ispisHTML("renata","tukic",33);
document.body.innerHTML += ispisHTML("pera","peric",13);

// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
let neparan = (n) => {
    if(n % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(neparan(3));
console.log(neparan(6));
neparan(5);
document.body.innerHTML += neparan(5);


let neparan1 = (n) => {
    if(n%2!=0) {
        var x = true;
    }
    else{
        var x = false;
    }
    return x;
}
var x = 5;
console.log(x);
console.log(neparan1(2));
console.log(neparan1(3));

///moze i ovako
let neparan4 = (n) => {
    if(n % 2 ==1) {
        return true;
    }
    else {
        return false;
    }
    
}

/// moze i ovao skraceno

let neparan5 = (n) => {
    return (n % 2 ==1);
}
console.log(neparan5(5));
console.log(neparan5(2));
document.body.innerHTML += neparan5(13);

//varijanta 6  na osnovu svojstava arrow funkcije
// 1) ako arrow funkciji prosledjujemo 1 parametar zagrade nisu obavezne
// 2) ako se telo arrow funkcije sastoji samo od return naredbe ona nije obavezna
let neparan6 = n => (n%2==1);

console.log(neparan6(5));
console.log(neparan6(2));


//4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

//varijanta 1
let maks2 = (br1,br2) => {
    if(br1>br2) {
        return br1;
    }
    else {
        return br2;
    }
}


//varijanta 2 skracen zapis

let max2 = (a, b) =>  a > b ? a : b; 
//__ ?__:__ ternarni operator (+ je binarni operator jedan sa leve jedan sa desne)

console.log(max2(13,6));

let maks4 = (br1,br2,br3,br4) => {
    return maks2(maks2(br1,br2),maks2(br3,br4));
}
document.body.innerHTML += maks4(1,8,3,4);

let max4 = (a,b,c,d,) => max2(max2(a,b),max2(c,d));
console.log(max4(6,8,18,12));

//jos jedna varijanta

let max4a = (a,b,c,d) => maks2(maks2(maks2(a,b),c),d);
console.log(max4a(6,8,18,12));


// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

let slika = i => {
    document.body.innerHTML += `<img src='${i}'>`;
}
slika("slika/1.jpg");

// drugi nacin

let slika1 = i => `<img src=${i}>`;
document.write(slika1("slika/1.jpg"));

// Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

let boja = co => {
    document.body.innerHTML += `<p style='color:${co};'>neki tekst</p>`;
}
boja("red");
//drugi nacin

let boja1 = co => `<p style="color:${co}">tekst paragrafa</p>`;
document.write(boja1("orange"));