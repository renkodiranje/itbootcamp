// funkcija 1: niz => {for petljom prodjemp kroy sve elemente niza u svaki ispisuje u konzoli}
// funkcija 2: niz => { for petljom prodjemo kroy sve elemente niza i svaki ispisemo u koloni.
// }
// funkcija : niz,nacin ispisa => prodjemo kroy sveelemente niza i ispisemo na zadati nacin.
function ispisKonzola(poruka) {
    console.log(poruka);
} 
function ispisStranica(poruka) {
    let div = document.getElementById("container");
    div.innerHTML = poruka;
}
function ispisNiza(niz,cb) {
    let poruka = "";
    for(let i = 0; i < niz.length; i++) {
        poruka += (niz[i] + " ");
    }
    cb(poruka);
}
let a = [1, 2, 3, 4, 5];
let b = ["pera", "mika"];
ispisNiza(a, ispisStranica);
ispisNiza(a, ispisKonzola);
ispisNiza(b, ispisKonzola);

ispisKonzola("blabla");
ispisStranica("blabla");
a.forEach(ispisKonzola);
//forEach petlja je metoda koja za svaki element niza poziva callback funkciju a kao parametar te callback funkcijie prosledjuje bas taj element niza
b.forEach(ispisKonzola);
a.forEach(function(element){
    console.log(element);
});
//foreach ce za svaki element niza a da pozove anonimnu funkciju i prosledice svaki put po jedan element nizaa
a.forEach(elem => {
    console.log(elem);
});
