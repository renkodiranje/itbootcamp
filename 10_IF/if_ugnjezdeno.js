//Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.
let a = 10;
let b = 15;
let c = 20;
if(a > b) {
    if(a > c) {
        console.log(`naveci broj je${a}`);
        if(b > c) {
            console.log(`srednji broj je${b}`);
            console.log(`najmanji broj je${c}`);
        }
        else { 
            console.log(`srednji broj je${c}`);
            console.log(`najmanji broj je${b}`);
        }
    }
    else {
        console.log(`naveci broj je${c}`);
        console.log(`srednji broj je${a}`);
        console.log(`najmanji broj je${b}`);
    }
}
else {
    //naveci je b ili c
    if(b > c) {
        console.log(`naveci broj je${b}`);
        if(a > c) {
            console.log(`srednji broj je${a}`);
            console.log(`najmanjibroj je${c}`);
        }
        else {
            console.log(`srednji broj je${c}`);
            console.log(`najmanji broj je${a}`);
        }
    }
    else {
        console.log(`naveci broj je${c}`);
        console.log(`srednji broj je${b}`);
        console.log(`najmanji broj je${a}`);

    }
}

// 19. Učitati dva cela broja i ispitati da li je veći od njih paran. 

let b1 = 100;
let b2 = 25;

if(b1 > b2) {
    console.log(`${b1} vece od ${b2}`);
    if(b1 % 2 == 0) {
        console.log(`${b1} je paran`);
    }
}
else {
    console.log(`${b2} je veci od ${b1}`);
    if( b2 % 2 == 0) {
        console.log(`${b2} je paran `);
    }
}







// 20 Uneti dva datuma i ispisati onaj koji je raniji. Datume unosimo tako što u posebnim promenljivama navedemo dan, mesec i godinu, za svaki od njih.
let d1 = 12;
let m1 = 12;
let g1 = 2020;

let d2 = 12;
let m2 = 12;
 let g2 = 2020;
 if(g1 < g2) {
    console.log(`${g1}.${m1}.${d1}. je raniji `);
 }
 else if(g2 < g1)   {
    console.log(`${g2}.${m2}.${d2}. je raniji`);
 }
 else {
    //lada su godine iste
    if(m1 < m2) {
        console.log(`${g1}.${m1}.${d1}. je raniji `);
    }
    else if(m2 < m1) {
        console.log(`${g2}.${m2}.${d2}. je raniji`);
    }
    else {
        //kada su i meseci isti
        if(d1 < d2) {
            console.log(`${g1}.${m1}.${d1}. je raniji `);
        }
        else if(d2 < d1) {
            console.log(`${g2}.${m2}.${d2}. je raniji`);
        }
        else {
            console.log("datumi su isti");
        }
    }
 }
