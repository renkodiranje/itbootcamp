// zadatak 2

let sumaElem = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma+= el;
    });
    return suma;
}

let a = [1, 3, 4, 6];
console.log(sumaElem(a));

// 5.
let maxVr = niz => {
    let max = niz[0];
    niz.forEach(el=> {
        if(el>max) {
            max = el;
        }
    });
    return max;
}
console.log(maxVr(a));

//zadatak 7

let indexMaxVr = niz => {
    let max = niz[0];
    let idx = 0;
    niz.forEach((el, i) => {
        if(el > max) {
            max = el;
            idx = i;//????
        }
    });
    return idx;
}
console.log(indexMaxVr(a));

let b = [1, 3, 6, -8, 6, 6, 4];
//console.log(indexMaxVr(b));//vraca 2 jer ovi kasnije nisu veci

let indexMaxVr2 = niz => {
    let max = maxVr(niz);
    let idx = undefined;
    niz.forEach((el, i) => {//for each poziva funkciju uvek za svaki element niza i ne moze se zaustaviti
        if(el == max && idx == undefined) {
            idx = i;
        }
    });
    return idx;
}

// let indexSvihMaxVr = niz => {
//     let max = maxVr(niz);
//     let indices = [];
//     niz.forEach((el, i) => {/
//         if(el == max ) {
//             indices.push(i);
//         }
//     });
//     return indices;
// }
// console.log(indexSvihMaxVr(b));



console.log(indexMaxVr2(b));//5 jer ce proveriti sve i na zadnjoj poslednji put ispunjava uslov

//19. Ispisati dužinu svakog elementa u nizu stringova. 
let imena = ["kafa", "caj", "mleko", "voda", "aperitiv"];
let duzineSvihStr = niz => {
    niz.forEach(el => {
        console.log(el.length);
    });
}
duzineSvihStr(imena);

//20. Odrediti element u nizu stringova sa najvećom dužinom.

let maxDuzinaPoslednji = niz => {
    let maxd = 0;
    niz.forEach(el => {
        if(el.length > maxd) {
            maxd = el.length;
        }
    });
    let maxStr = undefined;
    niz.forEach(el => {
        if(el.length == maxd) {
            maxStr = el;
        }
    });
    return maxStr;
    
}
console.log(maxDuzinaPoslednji(imena));

let maxDuzinaPrvi = niz => {
    let maxd = 0;
    niz.forEach(el => {
        if(el.length > maxd) {
            maxd = el.length;
        }
    });
    let maxStr = undefined;
    niz.forEach(el => {
        if(el.length && maxStr == undefined) {
            maxStr = el;
        }
    });
    return maxStr;
    
}
console.log(maxDuzinaPrvi(imena));

// 11. 

let prosecnaDuzina = niz => {
    let duz = 0;
    niz.forEach(el => {
        duz += el.length;
    });
    return duz / niz.length;
}
console.log(prosecnaDuzina(imena));
let brojNatprosecnoDugih = niz => {
    let duz = prosecnaDuzina(niz);
    let br = 0;
    niz.forEach(el => {
        if(el.length > duz) {
            br++;
        }
    });
    return br;
}
console.log(brojNatprosecnoDugih(imena));
// zadatak 22

let brojSadrziA = niz => {
    let br = 0;
    niz.forEach(el=> {
        if(el.includes("a") || el.includes("A")) {
            br++;
        }
    });
    return br;
}
console.log(brojSadrziA(imena));
// zadatak 23

let brojPocinjeA = niz => {
    let br = 0;
    niz.forEach(el=> {
        if(el[0] == "a" || el[0] == "A") {
            br++;
        }
    });
    return br;
}
console.log(brojPocinjeA(imena));


