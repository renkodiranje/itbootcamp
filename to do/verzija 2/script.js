console.log("zdravo");
lista = document.querySelector("ul");
li = document.querySelectorAll("li");
input = document.querySelector("input[type=text]");
button = document.querySelector("input[type=button]");
let gore = document.getElementById("pocetak");
let dole = document.getElementById("krajnji");
button.addEventListener("click",() => {
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
  