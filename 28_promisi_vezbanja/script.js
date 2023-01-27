let form = document.getElementById("order");
let truckCap = document.getElementById("cap");
let result = document.getElementById("result");


/// drugi 

function getItems(resource, resolve, reject) {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function(){
        if(request.readyState ===4 && request.status === 200){
            //sve ok
            let data = JSON.parse(request.responseText);
            //kada je resource stok, jednu stvar u radi
            //kada je roseurce weight drugu
            //resource = price trrcu stva
            resolve(data);
        }
        else if (request.readyState ===4){
            //desila se greska
            reject("greska");
        }
    });
    request.open("GET", resource);
    request.send();
}
function submitForm1(e) {
    e.preventDefault();
    //1. iz fajla stok.json dohvati sve artikle koji nisu na stanje
    let ids = [];
    getItems("json/stok.json", (data) => {
        data.forEach(artikl => {
            if(artikl.stok == 0) {
                ids.push(artikl.id);
                 
            }
        });
        //20 iz fajla weight.json dohvati njihovu tezinu
        getItems("./json/weight.json", (data) => {
            let totalWeight = 0;
            data.forEach(artikl=> {
                if(ids.includes(artikl.id)) {
                    totalWeight += artikl.weight;
                }
            });
            if(totalWeight > truckCap.value) {
                result.innerHTML = "kamion nema dovoljno kapaciteta";
            }
            else {
            // 3. ako tezina nije veca od kapaciteta kamiona iz fajla prices .json dohvati njihovu cenu
            getItems("./json/prises.json", (data)=>{
                let totalPrice = 0;
                data.forEach(artikl=> {
                    if(ids.includes(artikl.id)) {
                        totalPrice += artikl.price;
                        
                    }
                });
                result.innerHTML = `ukupna cena proizvoda koji treba da se poruce je ${totalPrice}`;
            }, (message)=>{
                result.innerHTML = message;
            });
             
            }
            // result.innerHTML = totalWeight;
        }, (message)=>{
            result.innerHTML = message;
        });
    
    }, (message)=>{
        result.innerHTML = message;

    });
    //20 iz fajla weight.json dohvati njihovu tezinu
    // getItems("./json.weight.json", (data)=>{}, (message)=>{});
//prvi pristup je da se funkcije get item zovu jedna ispid druge ali to nije dobro jer svaki poziv je asinhroni i to znaci da se ne zivrsavaju jedan ispod drugog, yobig toga smo
// uradili drugi prostup => redosled asinhonih pozvia se odvija preko calback funkkcija, calback hell, tacan je ali nepraktican

//treci pristup promices je i tacan i praktican
   
}
// form.addEventListener("submit", submitForm1);

function getItemsReturnPromise(resource) {
    return new Promise((resolve, reject) => { 
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function(){
        if(request.readyState === 4 && request.status === 200){
            let data = JSON.parse(request.responseText);
            resolve(data);
        }
        else if (request.readyState === 4){
            reject("greska");
        }
    });
    request.open("GET", resource);
    request.send();
    }); 
   
}
// function submitForm2(e) {
//     e.preventDefault();
//     let ids = [];
//     getItemsReturnPromise("./json/stok.json")
//     .then((data) => {
//         data.forEach(artikl => {
//             if(artikl.stok == 0) {
//                 ids.push(artikl.id);
//             }
//         });
//         console.log(ids);
//         return getItemsReturnPromise("./json/weight.json");
//     })
//     .then((data)=>{
//         let  totalWeight = 0;
//         data.forEach(artikl=> {
//             if(ids.includes(artikl.id)) {
//                 totalWeight += artikl.weight;
//             }
//         });
//         console.log(totalWeight);
//         if(totalWeight > truckCap.value) {
//             result.innerHTML = "kamion nema dovoljno kapaciteta";
//         }
//         else {
//             return getItemsReturnPromise("./json/prises.json");
//         }
//     })
//     .then((data) => {
//         if(data !== undefined) {
//             let totalPrice = 0;
            
//             data.forEach(artikl=> {
//                 if(ids.includes(artikl.id)) {
//                     totalPrice += artikl.price;
                    
//                 }
//             });
//             result.innerHTML = `ukupna cena proizvoda koji treba da se poruce je ${totalPrice}`;

//         }
//     })
//     .catch((message) => {
//         result.innerHTML = message;
//     });
// }

// form.addEventListener("submit", submitForm2);

function submitForm3(e) {
    e.preventDefault();
    let ids = [];
    let table = document.createElement("table");
    table.style.border = "1px solid black";
    let zaispis = [];
    
    getItemsReturnPromise("./json/stok.json")
    .then((data) => {
        data.forEach(artikl => {
            if(artikl.stok == 0) {
                ids.push(artikl.id);
            }
           
        });
        console.log(ids);
        return getItemsReturnPromise("./json/weight.json");
    })
    .then((data)=>{
        let  totalWeight = 0;
        data.forEach(artikl=> {
            if(ids.includes(artikl.id)) {
                totalWeight += artikl.weight;
            }
        });
        console.log(totalWeight);
        if(totalWeight > truckCap.value) {
            result.innerHTML = "kamion nema dovoljno kapaciteta";
        }
        else {
            return getItemsReturnPromise("./json/prises.json");
        }
    })
    .then((data) => {
        if(data !== undefined) {
            let totalPrice = 0;
            
            data.forEach(artikl=> {
                if(ids.includes(artikl.id)) {
                    zaispis.push(artikl);
                    totalPrice += artikl.price;
                }
                
            });
            
            zaispis.forEach(el=> {
                let td1 = document.createElement("td");
                td1.innerHTML = el.item;
                let td2 = document.createElement("td");
                td2.innerHTML =el.price;
                let tr = document.createElement("tr");
                tr.append(td1, td2);
                table.append(tr);

            });
          
            let td4 = document.createElement("td");
            td4.innerHTML = "Ukupno:";
            let td5 = document.createElement("td");
            td5.innerHTML = totalPrice;
            let tr = document.createElement("tr");
            tr.append(td4, td5); 
            table.append(tr);
            result.append(table);
            

        }
    })
    .catch((message) => {
        result.innerHTML = message;
    });
}

form.addEventListener("submit", submitForm3);

/////2. zadatak

// a.	Odrediti sve proizvode koji su na stanju.
// b.	Naći takve proizvode koji u nazivu sadrže reč koju je korisnik uneo.
// c. 	Kao i one čija je cena između dve vrednosti zadate u dva numerička inputa.
// d.	Korisniku prikazati u listi nazive tih artikala.
// e.	BONUS VARIJANTA: Ne ispisati samo nazive artikala, već ispis izvršiti u tabeli sa tri kolone: U prvoj koloni staviti naziv artikla, u drugoj stanje u magacinu, u trećoj cenu artikla.

let form2 = document.getElementById("prvi");
let prvacena = document.getElementById("1");
let drugacena = document.getElementById("2");
let naziv = document.getElementById("unos");
let rez =  document.getElementById("rez");


form2.addEventListener("submit", function2);
function function2(e) {
    e.preventDefault();
    let nizx = [];
    getItemsReturnPromise("./json/stok.json")
    .then((data) => {
        data.forEach(artikl => {
            if(artikl.stok != 0 && artikl.item.includes(naziv.value)) {
                nizx.push(artikl);
            }
        });
        console.log(nizx);
        return getItemsReturnPromise("./json/prises.json");
    })
    .then((data)=> {
        let x = [];
        data.forEach(artikl => {
            for(let i = 0; i < nizx.length; i++) {
               
                if(artikl.id == nizx[i].id && artikl.price>prvacena.value && artikl.price<drugacena.value) {
                    x.push(artikl);
                }
            }
        });
        console.log(x);
        let table = document.createElement("table");
        table.style.border = "1px solid black";
        rez.append(table);
        console.log(nizx);
        
        for(let i = 0; i < nizx.length; i++) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            
            td1.textContent = nizx[i].item;
            td2.textContent = nizx[i].stok;
            let td3 = document.createElement("td");
            td3.textContent = x[i].price;
        
            tr.append(td1, td2, td3);
            table.append(tr);
        }
        
    })
    .catch(()=>{
        console.log("greska");
    });
}
form2.addEventListener("submit", function2);