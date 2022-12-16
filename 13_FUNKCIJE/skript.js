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


// 8. Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.
function deljivSaTri(n,m) {
    br_br = 0;
    for(i=n;i<=m;i++) {
        if(i%3==0) {
            console.log(i);
            br_br++; 
        }
    }
console.log(br_br);
 
   
}
deljivSaTri(3, 18);


// Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji

function sumiraj(n,m){
    suma = 0;
    for(i = n; i<=m; i++) {
    suma+=i;
    }
    console.log(suma);
    return suma;

}
let text1 =sumiraj(5, 20);
document.write(text1);

// 10. Napisati funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.


function mnozi(n,m){
    proizvod = 1;
    for(i = n; i<=m; i++) {
    proizvod*=i;
    }
    console.log(proizvod);
    return proizvod;

}
let p =mnozi(2, 6);
document.write(`<p>${p} </p>`);

//11. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function arsr(n,m){
    suma = 0;
    br_br=0;
    for(i = n; i<=m; i++) {
        br_br++;
        suma+=i;
    }
    ari = suma/br_br;
    console.log(ari);
    return ari;

}
let ar = arsr(2, 6);
document.write(`<p>${ar} </p>`);

// Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function arsr(n,m){
    suma = 0;
    br_br=0;
    for(i = n; i<=m; i++) {
        if( i% 10 ==3) {
            br_br++;
            suma+=i;
        }
        
    }
    ari = suma/br_br;
    console.log(ari);
    return ari;

}
let aar = arsr(2, 6);
document.write(`<p>${aar} </p>`);

// Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
//  Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
//  Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

// n = 6;
// a = 30000;
// d = 5000;
// c = a+d;

function zarada(n,a,d) {
    i = 2;
    a;
    d;
    ukupno = 30000;//krecemo od drugog meseca da ucecavamo
    while(i<=n) {
        a=a+d;
        ukupno +=a;
        i++;
    }
    return ukupno;
}
let plate= zarada(6, 30000, 5000);
console.log(plate);

// Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s
//ili t = 15, p=16, n= 8, cekanje je 0
function prolaz(t,p,n) {

    if(t<=p) {
        let cekanje = 0;
        console.log(`kako bi prosli poligon bez zaustavljanja treba da krenu ${cekanje} s nakon pocetka merenja`);
    }else {
        cekanje = n-(t-p);
        console.log(`krece ${cekanje} s nakon pocetka merenja`);
    }
}
prolaz(10,11,5);