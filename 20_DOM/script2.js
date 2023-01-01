let naslov = document.createElement("h3");
naslov.innerHTML = "naslov";
document.body.append(naslov);

let lista = document.createElement("ul");
document.body.append(lista);
let li1 = document.createElement("li");
li1.innerHTML = "prva stavka liste";
lista.append(li1);
let li2 = document.createElement("li");
li2.innerHTML ="druga stavka";
lista.append(li2);

for(let i = 0; i < 3; i++) {
    let par = document.createElement("p");
    par.innerHTML = `${i+1}- ta stavka liste`;
    let li = document.createElement("li");
    li.append(par);
    lista.append(li);
}