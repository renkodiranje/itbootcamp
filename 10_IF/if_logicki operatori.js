// and &&
//1. !
//2. &&
//3. ||
//koristit zagrade
//daje true iskljucivo ako su obe strane tacne
let a = -5;
let b = -6;
if(a == 5 && b == 6) {
    console.log("hello");
}
// or - ||
// ne daje true iskljucivo ako su oba iskaza netacna
//tj daje true ukoliko je makar jedan od iskaza tacan
if(a == 5 || b == 6) {
    console.log("world");
}

let c = 7;
if(a==5&& b==6 && c==7) {
    console.log(`sva tri su tacna`);
}
else {
    console.log(`neki od uslova nije tacan`);
}
//kad se kombinuje && i || prvo se i\vrsava && ali je najbolje koristit zagradu, negacija ima najvisi prioritet

if(a==5 || b==6 || c==7) {
    console.log("makar jedan od uslova je tacan");
}
else {
    console.log("ni jedan od uslova nije tacan tj svi uslovi su netacni");
}
if(c!=7) {
    console.log(`c je razlicito 7`);
}
if(!(c==7)) {
    console.log(`c je razlicito od 7`);
}

// 21. Naći koji je najveći od tri uneta broja 
// a, b i c, korišćenjem logičkih operatora. 
if(a>b && a>c) {
    console.log(`${a} je najveci`);
}
else if ( b>c && b>a) {
    console.log(`${b} je najveci`);
}
else {
    console.log(`${c} je najveci`);
}
// 22. U promenljivu uneti broj koji predstavlja temperaturu vazduha. Na ekranu ispisati „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

let tempVaz = 50;
if(tempVaz < -15 || tempVaz > 40) {
    console.log("ekstremna temperatura");
}
//23. Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400
let god = 2002;
if(god%4==0 && !god%100==0 || god%400==0) {
    console.log(`godina ${god} je prestupna`);
}
else {
    console.log(`godina ${god} nije prestupna`);
}

// 24. Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara, ispitati “otvoreno” ukoliko je butik trenutno otvoren.
// U suprotnom ispisati “zatvoreno”.
let dan = 0;
let sat = 21;
if(dan==0 || dan==6) {
    //vikend
    if(sat>=10 && sat<18) {
        console.log("vikend je i butik je trenutno otvoren");
        document.write(`<img src="https://cdn.pixabay.com/photo/2017/06/10/07/25/open-2389230_960_720.png">`);
    }
    else {
        console.log("vikend je i butik je trenutno zatvoren");
        document.write(`<img src="https://cdn.pixabay.com/photo/2020/03/23/03/48/closed-4959355_960_720.png">`);
        
    }
    }

else {
    //radni dan
    if(sat>=9 && sat<20) {
    console.log("radni dan je i butik je trenutno otvoren");
    document.write(`<img src="https://cdn.pixabay.com/photo/2017/06/10/07/25/open-2389230_960_720.png">`);   
    }
    else {
        console.log("radni dan je i butik je trenutno zatvoren");
        document.write(`<img src="https://cdn.pixabay.com/photo/2020/03/23/03/48/closed-4959355_960_720.png">`);
        
    }
}



