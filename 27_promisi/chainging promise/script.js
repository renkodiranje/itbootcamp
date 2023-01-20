console.log("callback");
let getresponse = (resurs) => {
//1. kreiraj XML
    let request = new XMLHttpRequest();
     //2. otvaranje kreiranog fajla

    request.open("GET", resurs);

     //3. Slanje zahteva
    request.send();
    return new Promise((resolve, reject)=> {
        request.addEventListener("readystatechange", () => {
            if(request.readyState == 4 && request.status == 200) {
                resolve(request.responseText);// sve ok i koristimo resolve kome prosledjujemo podatke iy json fajla
            }
            else if(request.readyState == 4) {
                reject("nije moguce dohvatiti podatke");//nesto nije ok i koristimo reject kome saljemo tekst greske
            }
        });
    });
    
}

getresponse("../JSON/prvi.json").then(sadrzaj=>{
    console.log("prvi json resolve", sadrzaj);
    return getresponse("../JSON/drugi.json");//vraca promise na koji se odnosi naredni then
}).then(sadrzaj2 => {
    console.log("drugi.json resolved", sadrzaj2);
    return getresponse("../JSON/treci.json");
}).then(sadrzaj3=> {
    console.log("treci.json resolve",sadrzaj3);
}).catch(greska=>{
    console.log("Promise json reject", greska);//ako se deci greska u prvom odmah ide greska
});
//ucitaj najpre 1. json file
console.log("KRAJ");


