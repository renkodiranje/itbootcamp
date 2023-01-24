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
function submitForm2(e) {
    e.preventDefault();
    let ids = [];
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
                    totalPrice += artikl.price;
                    
                }
            });
            result.innerHTML = `ukupna cena proizvoda koji treba da se poruce je ${totalPrice}`;

        }
    })
    .catch((message) => {
        result.innerHTML = message;
    });
}

form.addEventListener("submit", submitForm2);

// function submitForm2(e) {
//     e.preventDefault();
//     let ids = [];
//     let table = document.createElement("table");
//     table.style.border = "1px solid black";
    
    
//     getItemsReturnPromise("./json/stok.json")
//     .then((data) => {
//         data.forEach(artikl => {
//             if(artikl.stok == 0) {
//                 let tr = document.createElement("tr");
//                 let td1 = document.createElement("td");
//                 td1.innerHTML = artikl.item;
//                 console.log(td1);
//                 ids.push(artikl.id);
//                 console.log(ids);
//                 tr.append(td1);
//                 console.log(tr);
//             }
//             // tr.append(td1);
//             // console.log(tr);
           
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
//                     let td2 = document.createElement("td");
//                     totalPrice += artikl.price;
//                     td2.innerHTML = artikl.price;
                    
//                 }
//                 let td3 = document.createElement("td");
//                 td3.innerHTML = "UKUPNO:"
//                 let td4 = document.createElement("td");
//                 td4.innerHTML = totalPrice;
//             });
            
//             // tr.append(td2);
            
//             // table.append(tr);
//             result.append(table);
//             // result.innerHTML = `ukupna cena proizvoda koji treba da se poruce je ${totalPrice}`;

//         }
//     })
//     .catch((message) => {
//         result.innerHTML = message;
//     });
// }

// form.addEventListener("submit", submitForm2);

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
        data.forEach(artikl => {
            if()
        })
    })
    


}



form2.addEventListener("submit", function2);