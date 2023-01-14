import { Film } from "./film.js";
let f1 = new Film("Avatar", "James Cameron", 2022,[1,2,8,6,10]);
let f2 = new Film("pijev zivot", "Ango li", 2021, [7, 8, 6, 4, 9]);
let f3 = new Film("jesen u njujorku", "joan chen", 2000, [1, 2, 5, 4, 7]);

// Kreirati niz od barem tri objekta klase Film
let filmovi = [f1,f2,f3];
f1.stampaj();
f2.stampaj();
f3.stampaj();
console.log(f3.ocene);

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
    let minrastojanje = Math.abs(avgSvihFilmova = minFilm.prosek());
    
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
      return najlabijaOcena;
    }
  }
}
console.log(najmanjaOcenaNajboljeg(filmovi));
// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.


// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 
// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.
// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu