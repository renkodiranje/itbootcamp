import { Pacijent } from "./pacijent.js";
let p1 = new Pacijent("renata", 1.65, 60);
let p2 = new Pacijent("ana", 1.70, 45);
let p3 = new Pacijent("branko", 1.80, 200);
let p4 = new Pacijent("jovana",1.55, 45);
let pacijenti = [p1, p2 ,p3, p4];



//ispisati podatke o pacijentu sa najmanjom tezinom

let btnMinTezina = document.getElementById("racunajMinTezinu");
let pMinTezina = document.getElementById("minTezina");

btnMinTezina.addEventListener("click",() =>{
    let minPac = pacijenti[0];
    console.log(minPac);
    pacijenti.forEach(pacijent =>{
        if(pacijent.tezina<minPac.tezina) {
            minPac = pacijent;
           
        }
    });
    minPac.stampaj();
    pMinTezina.innerHTML = minPac.stampajListu();
});

// Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
let btnNajveciBmi = document.getElementById("racunajNajveciBMI");
let pnajveciBmi = document.getElementById("MaxBMI");

btnNajveciBmi.addEventListener("click", () =>{
    let PacmaxBmi = pacijenti[0];
    pacijenti.forEach(p => {
        if(p.BMI() > PacmaxBmi.BMI()) {
            PacmaxBmi = p;
        }
    });
    PacmaxBmi.stampaj();
    pnajveciBmi.innerHTML = PacmaxBmi.stampajListu();

});

// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

let srednjaVisina = niz => {
    let zbirvisina = 0;
    niz.forEach(p => {
        zbirvisina += p.visina;
    });
    return zbirvisina/niz.length;

}
console.log(srednjaVisina(pacijenti));

let divbmi = document.getElementById("AvgVisina");
divbmi.innerHTML += srednjaVisina(pacijenti);











