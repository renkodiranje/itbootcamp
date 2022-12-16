console.log("funkcije");

function zdravo() {
    console.log("zdravo");
}
zdravo();
zdravo();
console.log("hello");
zdravo();
for(i = 1; i<=5; i++) {
    zdravo();//poziva funkciju onoliko puta koliko se iyvrsi for petlja
}

/////////////////////////////////

function hello(name) {
    console.log(`hello ${name}`);
}
hello("jelena");
hello("stefan");
let ime = "zlatko";
hello(ime);

let name = "nikola";
hello(name);

////////////////////////////////////////////


function hello_full_name(ime, prezime) {
    console.log(`hello ${ime} ${prezime}`);
}

hello_full_name("stefan","stanimirovic");
//bitan je redosled argumenata koje prosledjujemo 
let im = "ana";
let pr = "ivanovic";
hello_full_name(im, pr);

//////////////////////
//6. zadatak
function boji_paragraf(boja) {
    document.write(`<p style="color:${boja}">Obojeni tekst</p>`);
}
boji_paragraf("red");
boji_paragraf("orange");

// 2. Napisati funkciju zbir koja računa zbir dva realna broja.

function zbir(prvi_broj, drugi_broj) {
    
    console.log(prvi_broj + drugi_broj);

}
let prvi_broj = 1;
let drugi_broj = 2;
zbir(1,2);

// //5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function prikaziSliku(adresa)  {
    document.write(`<img src=${adresa}>`);
}
prikaziSliku("https://cdn.pixabay.com/photo/2022/11/14/13/39/brown-bear-7591629_960_720.jpg");
prikaziSliku("slika/1.jpg");

// //13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function velicinaFonta(broj) {
    document.write(`<p style='font-size:${broj}px;'>neki tekst</p>`)
}

velicinaFonta(80);

// // Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 
function recenica(v_fonta) {
    document.write(`<p style='font-size:${v_fonta}px'>text</p>`);
}
for(i=20;i<=35;i+=2) {
    v_fonta = i;
    recenica(v_fonta);
}


//3. zadatak
// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
    if(n%2==0) {
        return `paran broj`;
    }
    else {
        return `neparan broj`;
    }
}
let text = neparan(11);
console.log(text);
document.write(text);

// 4. zadatak Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(br1, br2) {
    if(br1>br2) {
        return br1;
    }
    else {
        return br2;
    }
}
let m1 = maks2(13, 6);
console.log(`veci je broj ${m1} `);


function maks4(br1, br2, br3, br4) {
//    let veci1 = maks2(br1,br2);
//    let veci2 = maks2(br3, br4);
//    let najveci = maks2(veci1,veci2);
//    return najveci;

// let najveci = maks2(maks2(br,br2),maks2(br3,br4));
// return najveci;

return maks2(maks2(br1,br2),maks2(br3,br4));
}
let naj = maks4(15, 2, 14, 3);
console.log(naj);

