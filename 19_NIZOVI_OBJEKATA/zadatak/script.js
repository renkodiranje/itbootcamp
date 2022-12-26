let student1 = {
    ime: "Dragan",
    prezime: "Aetrovic",
    godStudija: 3,
    ocene: [8, 9, 7, 8, 8, 10, 9, 6, 7, 8, 8, 9, 10, 9, 7],
};
let student2 = {
    ime: "Milan",
    prezime: "Markovic",
    godStudija: 4,
    ocene:  [8, 9, 7, 8, 8, 10, 9, 6, 7, 8, 8, 9, 10, 9, 7],
};
let student3 = {
    ime: "Milos",
    prezime: "Zarkovic",
    godStudija: 4,
    ocene: [8, 9, 7, 8, 9, 6, 6, 8, 7, 8, 9, 8, 7],
};
let student4 = {
    ime: "Mosa",
    prezime: "Aijade",
    godStudija: 4,
    ocene: [6, 7, 9, 8, 9, 7, 8, 8, 9, 10, 9, 7],
};
let studenti = [student1, student2, student3, student4];


let prosecnaOcena = ocene => {
    let sum = 0;
    ocene.forEach(o => {
        sum += o;
   });
   return sum/ocene.length;
}
let najStudent = studenti => {
    let naj = studenti[0];//pretpostavka
    studenti.forEach(student=> {
        if(prosecnaOcena(naj.ocene)< prosecnaOcena(student.ocene)) {
            naj = student;
        }
    });

    return `${naj.ime} ${naj.prezime}`;
}
console.log(najStudent(studenti));
//drugi nacin jedna funkcija
let najStudent1 = studenti => {
   let ime_najboljeg = "";
   let prezime_najboljeg = "";
   let prosek_najboljeg = -1;//bolje nego undefined ili nista nemoguca je i odmah ce biti abdejtovana
    studenti.forEach(student=> {
        let zbir = 0; 
        student.ocene.forEach(ocena=>{
        zbir+= ocena;
       });
       let prosek = zbir / student.ocene.length;
       //>vece vraca prvog sa najvecim prosekom, a >= vraca poslednjeg
       if(prosek > prosek_najboljeg) {
        prosek_najboljeg = prosek;
        ime_najboljeg = student.ime;
        prezime_najboljeg = student.prezime;
       }
    });

    return `${ime_najboljeg} ${prezime_najboljeg}`;
}

console.log(najStudent1(studenti));

let SvinajStudenti = studenti => {
   
    let prosek_najboljeg = -1;
    //izracunamo najveci prosek
     studenti.forEach(student=> {
         let zbir = 0; 
         student.ocene.forEach(ocena=>{
         zbir+= ocena;
        });
        let prosek = zbir / student.ocene.length;
      
        if(prosek > prosek_najboljeg) {
         prosek_najboljeg = prosek;
        }
     });
     //trazimo sve koji imaju taj najveci prosek
    studenti.forEach(student=> {
        if(prosek_najboljeg == prosecnaOcena(student.ocene)) {
            console.log(`${student.ime} ${student.prezime}`);
        }
    });
 }
 SvinajStudenti(studenti);