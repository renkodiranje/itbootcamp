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

// let zbir = 0;
// for(let i = 0; i<brojevi.length;i++) {
//     zbir += brojevi[i];

// }
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
// let brojevi4 = [1,8,2,-4];
// let maksim = niz => {
   
//     let veci;
//     for(let i = 0; i< niz.length; i++) {
//         if(niz[i]>niz[i+1]) {
//             veci=niz[i];
//         }
//     }
//     return veci;
// }
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

// let minim = niz => {
//     let manji;
//     for(let i = 0; i< niz.length; i++) {
//         if(niz[i+1]<niz[i]) {
//             manji = niz[i+1];
//         }
//     }
//     return manji;
// }
// console.log(minim(brojevi4));
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