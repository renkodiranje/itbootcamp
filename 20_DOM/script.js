console.log(document);//objekat(koren dom stabla)
console.log(document.body);// objekat

let el1 = document.getElementById("p2");
console.log(el1);//objekat iz dom stabla

console.log(`stefan`);//ovako izgleda kad je string, crno
let el2 = document.getElementsByClassName("par");
console.log(el2);//html collection objekata iz dom stabla, ima i indekse svaki

let el3 = document.getElementsByTagName("p");console.log(el3);//vraca html collection objekata iz dom stabla
let el4 = document.getElementsByTagName("a");
console.log(el4);//pise html collection bez obzira sto je jedan
let el5 = document.getElementsByName("p");
console.log(el5);//ovde se dobija node lista objekata iz dom stabla

//pristup elementima html kolekcije

for(let i = 0; i < el2.length; i++) {
    console.log(el2[i]);//el2[i] je element (objekat, html, tag) iz html kolekcije el2
}

//ovako ne moze jer html kolekcija ne posduje for each petlju
// el2.forEach(e => {
//     console.log(e);
// });

//ali moze ovako

let elems = Array.from(el2);
elems.forEach(e => {
    console.log(e);
});

//node lista podrzava i for i forEach

el5.forEach(e => {
    console.log(e);
});
//primena metoda query selektor

let t1 = document.querySelector("#p2");
console.log(t1);

let t2 = document.querySelector(".par");
console.log(t2);//vraca prvi objekat obuhvacen prosledjenim css selektorom

let t3 = document.querySelectorAll(".par:nth-child(odd)");
console.log(t3); //vraca node listu vazi i for i foreach
t1.innerHTML += "Novi tekst paragrafa sa id <span class='bold'>p2</span>";
for(let i = 0; i < t3.length; i++) {
    t3[i].innerHTML = "promena teksta  u elementu sa klasom <span class='bold'>par</span>"
}
let link = document.querySelector("a");
link.href = "https://www.google.com";
link.target = "_blank";
//link.id = "link";

// link.style.color = "red";
// link.style.border = "1px solid blue";
// link.style.fontSize = "24px";

// link.style = "color:red;border: 1px solid blue;font-size 24px; text-decoration: none;";
link.setAttribute("style", "color:red; border: 1px solid blue; font-size: 24px;");
link.setAttribute("id","link");
let tabela = document.querySelector("table");
console.log(tabela);
console.log(tabela.parentNode);
console.log(tabela.childNodes[0]);
console.log(tabela.childNodes[1]);
console.log(tabela.childNodes[1].childNodes[0]); // tr
for(let i = 0; i < document.body.childNodes.length;i++) {
    let element = document.body.childNodes[i];
    console.log(element);
}

let naslov = document.createElement("h1");
naslov.innerHTML = "naslov kreiran iz js-a";
document.body.prepend(naslov);
naslov.remove();

