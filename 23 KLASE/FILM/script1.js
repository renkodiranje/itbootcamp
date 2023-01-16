import { Film } from "./film.js";
let f1 = new Film("Avatar", "James Cameron", 2022,[7,10,8,9]);
let f2 = new Film("pijev zivot", "Ango li", 2021, [10,6,10,10]);
let f3 = new Film("jesen u njujorku", "joan chen", 2000, [7,8,4,5,5]);

// Kreirati niz od barem tri objekta klase Film
let filmovi = [f1,f2,f3];


// Napraviti metod prosek koji vraća prosečnu ocenu 
console.log(`prosecna ocena ${f1.naslov} filma je${f1.prosek()}`);

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku

function VekFilmova (niz, vek) {
    let pocetna_god = vek*100-99;
    let krajnja_god = vek*100; 
    niz.forEach(film => {
        if(film.godinaIzdanja >= pocetna_god && film.godinaIzdanja <= krajnja_god)
         {
            console.log(film.naslov);
        }
    });
}
VekFilmova(filmovi,20);


// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.


let prosecnaOcena = (niz) => {
    let sumaSvihOcena = 0;
    let brojOcena = 0;
    niz.forEach((f) => {
      let ocene = f.ocene;
      console.log(ocene);
      ocene.forEach((o) => {
        sumaSvihOcena += o;
        // brojOcena++;
      });
      brojOcena += ocene.length;
    });
    return sumaSvihOcena / brojOcena;
  };
  console.log(`Prosecna ocena svih filmova je ${prosecnaOcena(filmovi)}`);
// console.log(ProsecnaOcena(filmovi));
// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.

let NajboljeOcenjeni= niz => {
    let najbolji = niz[0].prosek();
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].prosek() > najbolji) {
          najbolji = niz[i];
        }
    }
    return najbolji.naslov;
} 
console.log(NajboljeOcenjeni(filmovi));
// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.

let osrednjiFilm = niz => {
    let avgSvihFilmova = prosecnaOcena(niz);
    let minFilm = niz[0];
    let minrastojanje = Math.abs(avgSvihFilmova - minFilm.prosek());
    
    niz.forEach(f => {
        let rastojanje = Math.abs(avgSvihFilmova - f.prosek());
        if(minrastojanje> rastojanje) {
            minrastojanje = rastojanje;
            minFilm = f;
        }
    });
    return minFilm;
}
console.log(osrednjiFilm(filmovi));
// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
let najmanjaOcenaNajboljeg = niz => {
  let najboljiFilm = NajboljeOcenjeni(niz);
  
  for(let i = 0; i < niz.length; i++) {
    if(niz[i].naslov==najboljiFilm) {
     let najlabijaOcena = niz[i].ocene[0];
      for(let j = 0; j < niz[i].ocene.length; j++) {
         if(niz[i].ocene[j] <najlabijaOcena) {
          najlabijaOcena = niz[i].ocene[j];
          
         }
         
      }
      console.log(najlabijaOcena);
    }
  }
}
najmanjaOcenaNajboljeg(filmovi);
// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio
let najmanjaOcena = niz => {
  let ocenaMin = niz[0].ocene[0];
  
 niz.forEach(film =>{
  for(let j = 0; j < film.ocene.length; j++) {
    if(film.ocene[j] < ocenaMin) {
      ocenaMin = film.ocene[j];
    }
  }
 });

 return ocenaMin;
}
console.log(najmanjaOcena(filmovi));
// console.log(najmanjaOcena(filmovi));
// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 

let sveOcene = niz => {
  let arrsveocene = [];
  niz.forEach(film=>{
    // arrsveocene.push(film.ocene); daje niz u kome su ocene za svaki od filmova podnizovi
    arrsveocene = arrsveocene.concat(film.ocene); //daje jedan niz sa svim ocenama
  });
  return arrsveocene;
}
console.log(sveOcene(filmovi));
let najcescaOcena = nizocena => {
  let pretpostavkaNajucestalijiElem = nizocena[0];
  let brPojavljivanjaPretpostavke = 1;//sigurno se jednom pojavila ta ocena
  for(let i = 0; i < nizocena.length; i++) {
    let tekuci = nizocena[i];
    let tekucibrpojavljivanja = 0;

    for(let j = 0; j < nizocena.length; j++){
      if(tekuci == nizocena[j]) {
        //nasli smo isti element i treba povecati br pojabvljivanja
        tekucibrpojavljivanja++;
      }
    }
    if(tekucibrpojavljivanja>brPojavljivanjaPretpostavke) {
      brPojavljivanjaPretpostavke = tekucibrpojavljivanja;
      pretpostavkaNajucestalijiElem = tekuci;
    }
  }
  return pretpostavkaNajucestalijiElem;
}
console.log(najcescaOcena(sveOcene(filmovi)));

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.
// f1.prosek();
// f2.prosek();
// f3.prosek();
let iznadOcena = (ocena, filmovi) => {
  let iznad = [];
  filmovi.forEach(film => {
    if(film.prosek() > ocena) {
      iznad.push(film);
    }
  });
  return iznad;
}
console.log(iznadOcena(10, filmovi));
// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

let ispis = document.getElementById("ovde");

let iznadOceneNoviji = (ocena, filmovi) =>{
  let nizfilmova = iznadOcena(ocena,filmovi);
  let noviji = nizfilmova[0];
  nizfilmova.forEach(f=>{
    if(f.godinaIzdanja>noviji.godinaIzdanja) {
      noviji = f;
    }
  });
  console.log(noviji);
  ispis.innerHTML = noviji.stampajListufilmovi();
}
iznadOceneNoviji(5, filmovi);
