let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        // console.log(request.readyState);
        if(request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText);
            console.log(data);// data je neki objekat
        }
        else if(request.readyState === 4) {
            console.log("desila se greska");
        }
    });

    // bolje je koristiti anonimnu funkciju da bismo mogli da iskoristimo kljucnu rec this

    request.open("GET", "https://jsonplaceholder.typicode.com/posts");
    request.send();

    let request1 = new XMLHttpRequest();
    request1.addEventListener("readystatechange", () => {
        if(request.readyState === 4 && request.status === 200) {
            let data1 = JSON.parse(request1.responseText);
            console.log(data1);
            for(let i = 0; i < data1.length; i++) {
                if(data1[i].website.includes(".com")==true) {
                    console.log(data1[i]);
                }
            }
        }
        else if(request1.readyState === 4) {
            console.log("desila se greska");
        }
    });

    request1.open("GET", "https://jsonplaceholder.typicode.com/users");
    request1.send();
    // Ispisati u konzoli one korisnike čiji website ima domen „.com“.

    // Ispisati korisnike čije ime sadrži reč „Clementin“.
    let request2 = new XMLHttpRequest();
    request2.addEventListener("readystatechange", () => {
        if(request2.readyState === 4 && request2.status === 200) {
            let data1 = JSON.parse(request2.responseText);
            console.log(data1);
            for(let i = 0; i < data1.length; i++) {
                if(data1[i].name.includes("Clementin")==true) {
                    console.log(data1[i]);
                }
            }
        }
        else if(request2.readyState === 4) {
            console.log("desila se greska");
        }
    });

    request2.open("GET", "https://jsonplaceholder.typicode.com/users");
    request2.send();
    // Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 
    let request3 = new XMLHttpRequest();
    request3.addEventListener("readystatechange", () => {
        if(request3.readyState === 4 && request3.status === 200) {
            let data1 = JSON.parse(request3.responseText);
            console.log(data1);
            for(let i = 0; i < data1.length; i++) {
                if((data1[i].company.name.includes("Group") == true) || (data1[i].company.name.includes("LLC")) == true) {
                    console.log(data1[i]);
                }
            }
        }
        else if(request3.readyState === 4) {
            console.log("desila se greska");
        }
    });

    request3.open("GET", "https://jsonplaceholder.typicode.com/users");
    request3.send();

    // Ispisati sve različite gradove u kojima rade ovi korisnici.

    let request4 = new XMLHttpRequest();
    request4.addEventListener("readystatechange", () => {
        if(request4.readyState === 4 && request4.status === 200) {
            let data1 = JSON.parse(request4.responseText);
            console.log(data1);
            let niz = [];
          data1.forEach(el => {
            niz.push(el.address.city);
          });
          console.log(niz);
         
          for(let i = 0; i < niz.length-1; i++) {
            if(niz[i] != niz[i+1]) {
                console.log(niz[i]);
            }
          }
    
        }
        else if(request4.readyState === 4) {
            console.log("desila se greska");
        }
    });

    request4.open("GET", "https://jsonplaceholder.typicode.com/users");
    request4.send();

    // Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
    let request5 = new XMLHttpRequest();
    request5.addEventListener("readystatechange", () => {
        if(request5.readyState === 4 && request5.status === 200) {
            let data1 = JSON.parse(request5.responseText);
            console.log(data1);
            let br = 0;
            data1.forEach(el=>{
                if(Number(el.address.geo.lat)<0 && Number(el.address.geo.lng)<0) {
                    br++;
                }
            });
            console.log(br);
        }
        else if(request5.readyState === 4) {
            console.log("desila se greska");
        }
    });

    request5.open("GET", "https://jsonplaceholder.typicode.com/users");
    request5.send();
    


    // zadaci sa slajda br 16
    let getUsers = (resolve, reject) => {
        let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        // console.log(request.readyState);
        if(request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText);
            resolve(data);
        }
        else if(request.readyState === 4) {
            reject("desila se greska");
            
        }
    });
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.send();

    }
    let ispisKonzola = poruka=> {
        console.log(poruka);
    }
    ///zadatak 2
    let websiteCom = niz => {
        niz.forEach(user => {
            if(user.website.includes(".com")) {
                console.log(user.website);//ali moze i ceo objekat
            }
        });
    }
    getUsers(websiteCom, ispisKonzola);

    // zadatak 3
    let imeCLE= niz=> {
        niz.forEach(user=> {
            if(user.name.includes("Clementin")) {
                console.log(user.name);
            }
        })
    }
    getUsers(imeCLE, ispisKonzola);

    //zadatak 4

    getUsers((niz)=>{
        niz.forEach(user=> {
            if(user.company.name.includes("Group")||user.company.name.includes("LLC")) {
                console.log(user.company.name);
            }
        });
    }, (poruka)=>{
        document.body.innerHTML += poruka;
    });





