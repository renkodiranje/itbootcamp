// Dohvatiti prvi paragraf na stranici.
let p = document.querySelectorAll("p");
// Dohvatiti prvi div tag sa klasom „error“.
let el_div = document.querySelector("div.error");
console.log(el_div);
// Dohvatiti poslednji red u tabeli.
let tab = document.querySelector("tr:last-child");
console.log(tab);
// Dohvatiti sve linkove na stranici.
let link = document.getElementsByTagName("a");
console.log(link);
for(let i = 0; i < link.length; i++) {
    console.log(link[i]);
}
// Dohvatiti sve slike na stranici.
let slike = document.getElementsByTagName("img");
console.log(slike);
for(let i = 0; i < slike.length; i++) {
    console.log(slike[i]);
}

//selektovato sve paragrafe i svakom od njih pridodati tekst vazno
let p1 = document.querySelectorAll("p");
for(let i = 0; i < p1.length; i++) {
    p1[i].innerHTML+=` vazno!!!`;
}
//neka je n broj paragrafa u datom dokumentu u svakom i tom paragrafu dodati broj i **2 za svako i = 1,2...n
for(let i = 0; i < p1.length; i++) {
    p1[i].innerHTML+="(i+1)**2";
}
//sve paragrafe oboji u ljubicasto
for(let i = 0; i < p1.length; i++) {
    p1[i].style.color = "purple";
}
//svim parnim paragrafima dodati pozadinsku zelenu boju a neparnim crvenu
for(let i = 0; i < p1.length; i++) {
    if(i%2==0) {
        p1[i].style.backgroundColor = "green";
    }
    else {
        p1[i].style.backgroundColor = "red";
    }
}
//svim divovima sa klasom error dodati naslov najvece velicine sa tekstom greska!
let el_div1 = document.querySelectorAll("div.error");
for(let i = 0; i < el_div1.length; i++) {
    el_div1[i].innerHTML += "<h1>greska!!!</h1>";
}
//svim slikama dodati alternativni tekst
let foto = document.querySelectorAll("img");
for(let i = 0; i < foto.length; i++) {
    foto[i].setAttribute("alt", "slika");
}

// Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.
for(let i = 0; i < link.length; i++) {
    link[i].style.padding = "5px";
    link[i].style.fontSize = "18px";
    link[i].style.textDecoration = "none";
}


// Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.


for(let i = 0; i < link.length; i++) {
    if(i%2 == 0) {
        link[i].style.backgroundColor = "green";
        link[i].style.color = "purple";
    }
    else {
        link[i].style.backgroundColor = "blue";
        link[i].style.color = "white";
    }
    
}
// Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju. 

for(let i = 0; i < slike.length; i++) {
    if(slike[i].src.includes(".png")) { 
    slike[i].style.border = "20px solid red";
}
}


// Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank. 

for(let i = 0; i < link.length; i++) {
  if(link[i].target == "_blank") {
    link[i].target = "_top";
  }
  else if(link[i].target != "_blank") {
    link[i].target = "_blank";
  } 
}






 