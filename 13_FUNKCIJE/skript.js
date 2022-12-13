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
//2. Napisati funkciju zbir koja računa zbir dva realna broja.
function zbir(prvi_broj, drugi_broj) {
    
    console.log(`prvi_broj+'drugi_broj`);

}
let prvi_broj = 1;
let drugi_broj = 2;
zbir(1,2);
//5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
function prikaziSliku(adresa)  {
    document.write(`<img src=${adresa}>`)
}
prikaziSliku("https://cdn.pixabay.com/photo/2022/11/14/13/39/brown-bear-7591629_960_720.jpg");
prikaziSliku("slika/1.jpg");

//13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
function velicinaFonta(broj) {
    document.write(`<p stle="font-size:${broj}px">neki tekst</p>`)
}
let broj = 80;
velicinaFonta(80);