// Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success

let paragraf = document.getElementsByTagName("p");
console.log(paragraf);
for(let i = 0; i < paragraf.length; i++) {
    if(i%2==0) {
        paragraf[i].classList.add(`error`);
    }
    else {
        paragraf[i].classList.add(`success`);
    }
}
// // Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.
for(let i = 0; i < paragraf.length; i++) {
    if(i%3==0) {
        paragraf[i].style.fontSize = "15px";
    }
    else if(i%3==1){
        paragraf[i].style.fontSize = "20px";
    }
    else {
        paragraf[i].style.fontSize = "25px";
    }
}


// // Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
//ispitati zasto ovo ne radi
// for(let i = 0; i < paragraf.length; i++) {
//     if(paragraf[i].textContent.includes("error")) {
//         paragraf[i].classList.add(`error`);
//     }
//     else if(paragraf.textContent.includes("success")) {
//         paragraf[i].classList.add(`success`);
//     }
   
// }


// //  if(p.textContent.includes(’success’))

// // Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.
for(let i = 0; i < paragraf.length; i++) {
   paragraf[i].classList.toggle(`error`);
}
