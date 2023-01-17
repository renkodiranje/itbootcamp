console.log("zdravo");
let lista = document.querySelector("ul");
let li = document.querySelectorAll("li");
let input = document.querySelector("input[type=text]");

let gore = document.getElementById("pocetak");
let dole = document.getElementById("krajnji");
input.addEventListener("keyup", e => {
    console.log(e.key, e.keyCode);
    if(e.key == "Enter") {
        let nova = document.createElement("li");
            if(input.value.length != 0) {
                nova.textContent = input.value;
        // if(gore.checked == true) {
        //     lista.prepend(nova);
        // }
        // if(dole.checked == true) {
        //     lista.append(nova);
        // }
            let radioadd = document.querySelector("input[name=dugme]:checked");
                if(radioadd.value == "pocetak") {
                    lista.prepend(nova);
                }
                 else {
                    lista.append(nova);
                }
            input.value = "";
            }
        }
});
lista.addEventListener("click", e => {
    // console.log("kliknuto");
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.tagName);
    if(e.target.tagName == "LI"){
        e.target.remove();
    }
    
});
//////////////
//local storage

/////////////
//smestanje u lokalnu memoriju

localStorage.setItem("username","jelena");
localStorage.setItem("city", "Nis");


///////////////////update u lokalnoj memoriji

localStorage.setItem("username", "stefan");
///ukoliko key postoji vec u lokal sotrage onda vrsi udate vrednosti za taj key ukoliko ne postoji key u local torage onda vrsi dodavanje u local storagel
console.log(localStorage.getItem("username"));
let grad = localStorage.getItem("city");
console.log(grad);


localStorage.setItem("year", 33);
let god = localStorage.getItem("year");
god++;
localStorage.setItem("year", god);
console.log(`imam ${god} godina`);
  