let cars = ["toyota", "bmw", "volvo"];
console.log(cars);
console.log(cars[0]);
console.log(cars[2]);
console.log(cars[3]);
cars[1] = cars[1] + " 208";
console.log(cars);
let razno = [15, -3.5, "hello", true, [1, 2, 3]];
console.log(razno);
//ispis elemenata niza cars
for( let i=0; i < cars.length; i++) {
    console.log(cars[i]);
}
// pristup elementima niya razno

for(let i =0; i< razno.length; i++) {
    console.log(razno[i]);
}
let unutrasnji = razno[4];
for(let i = 0; i < unutrasnji.length; i++) {
    console.log(unutrasnji[i]);
}
for(let i = 0; i<razno[4].length;i++) {
    console.log(razno[4][i]);
}
razno[4][1] = 5;
for(let i = 0; i<razno[4].length;i++) {
    console.log(razno[4][i]);
}
for( let i = 0;i<razno[4].length;i++) {
    razno[4][i] *=1.1;
}
for(let i = 0; i<razno[4].length;i++) {
    console.log(razno[4][i]);
}

//2. odrediti zvir elemenata celobrojnog niza
let brojevi = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];

let sumaElemenata = niz => {
    let zbir = 0;
    for(let i = 0; i < niz.length; i++) {
    zbir += niz[i];
    }
    return zbir;
}

// zadatak 3
let proizvodElem = niz => {
    let pr = 1;
    for(let i = 0; i <= niz.length-1; i++) { // moze i ovako <= i -1 ili samo <
        pr*= niz[i];
    }
    return pr;
}

//pozivi funkcija
let brojevi3 = [5, 1, 2];
console.log(sumaElemenata(brojevi));
console.log(sumaElemenata(brojevi2));
console.log(proizvodElem(brojevi3));

// 4.Odrediti srednju vrednost elemenata celobrojnog niza.

let srednjaVrednost = niz => {
    let sum = 0;
    let br = 0;
    for(let i = 0; i< niz.length; i++) {
        sum += niz[i];
        br++;
    }
    return sum/br;
}
console.log(srednjaVrednost(brojevi3));
let srVr = niz => {
    let zbir = sumaElemenata(niz);
    let br = niz.length;
    return zbir / br;
}

let srVr3 = niz => sumaElemenata(niz) / niz.length;
console.log(srVr3(brojevi3));

// isto samo za parne
let srVrparnih = niz => {
    let zbir = 0;
    let br = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0) {
            zbir = zbir + niz[i];
            br++;
        }
    }
    return zbir / br;
}

console.log(srVrparnih(brojevi3));

// 5.Odrediti maksimalnu vrednost u celobrojnom niz
// console.log(maksim(brojevi4));
let brojx = [1,2,2,5,-10];
let maxNiza = niz => {
    let max = niz[0];
    for(let i = 1; i< niz.length; i++) {
        if(niz[i] > max) {
            max = niz[i];
        }
    }
    return max;
}
console.log(maxNiza(brojx));

//6. Odrediti minimalnu vrednost u celobrojnom nizu.

let br = [1,2,3,4,-10];
let minNiza = niz => {
    let min = niz[0];
    for(let i = 1; i< niz.length; i++) {
        if(niz[i] < min) {
            min = niz[i];
        }
    }
    return min;
}
console.log(minNiza(br));

//7. Odrediti indeks maksimalnog elementa celobrojnog niza.
//ovakva funkcija vraca index poslednjeg maksimuma
let indMaxNiza = niz => {
    let max = maxNiza(niz);
    let index;
    for(let i = 0; i < niz.length; i++) {
        if(max == niz[i]) {
            index = i;
        }
    }
    return index;
}
let elementi = [15,13,15,10,15];
console.log(indMaxNiza(elementi));
// vraca index prvog maksimuma
let indMaxNiza2 = niz => {
    let max = maxNiza(niz);
    let index;
    for(let i = 0; i < niz.length; i++) {
        if(max == niz[i]) {
            index = i;
            break;
        }
    }
    return index;
}
console.log(indMaxNiza2(elementi));

//9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let nizx = [1, -2, 5, -6];
let veciodarsr = niz => {
    let arsr = srednjaVrednost(niz);
    let br = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i]>arsr) {
            br++;
        }
    }
    return br;
}
console.log(veciodarsr(nizx));

//10. Izračunati zbir pozitivnih elemenata celobrojnog niza.

let zbirPoz = niz => {
    let sum = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i]>0) {
            sum += niz[i];
        }
    }
    return sum;
}
console.log(zbirPoz(nizx));

//11. Odrediti broj parnih elemenata u celobrojnom nizu.
let brParnih = niz => {
    let br = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i]%2==0) {
            br++;
        }
    }
    return br;
}
console.log(brParnih(nizx));

//12. Odrediti broj parnih elemenata sa neparnim indeksom.

let paranBrojNeparanInd = niz => {
    let br = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0 && i % 2 != 0) {
            br++;
        }
    }
    return br;
}
let niz = [10, 12, 11, 13, 14, 16];
console.log(paranBrojNeparanInd(niz));

let paranBrojNeparanInd1 = niz => {
    let br = 0;
    for(let i = 1; i < niz.length; i+=2) {
        if(niz[i] % 2 == 0) {
            br++;
        }
    }
    return br;
}
console.log(paranBrojNeparanInd1(niz));

//13. Izračunati sumu elemenata niza sa parnim indeksom.
let niz2 = [1, 2, 8, 5, 6];
let sumaParInd = niz => {
    let sum = 0;
    for(let i = 0; i < niz.length; i+=2) {
        sum += niz[i];
    }
    return sum;
}
console.log(sumaParInd(niz2));

//14. Promeniti znak svakom elementu celobrojnog niza.
let br8 = [1,2,4,-5];
let promeniZnak = niz => {
    for(let i = 0; i < niz.length; i++) {
      niz[i] = niz[i] * (-1);
        
    }
    return niz;
}
document.write(promeniZnak(br8));


//15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

let promZnparNepar = niz => {
    for(let i = 0; i < niz.length; i++) {
        if(niz[i]%2!=0&&i%2==0) {
            niz[i] = niz[i] *(-1);
        }
        return niz;
    }
}
document.write(promZnparNepar(br8));