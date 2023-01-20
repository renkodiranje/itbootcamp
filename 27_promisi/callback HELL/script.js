console.log("callback");
let getresponse = (resurs, callback) => {
//1. kreiraj XML
    let request = new XMLHttpRequest();
   
    request.addEventListener("readystatechange", () => {
        if(request.readyState == 4 && request.status == 200) {
        // sve pk
            // console.log(request.responseText);
            callback(request.responseText, undefined);
        }
        else if(request.readyState == 4) {
        //nesto nije ok
            // console.log("nije moguce dohvatiti podatke");
            callback(undefined, "nije moguce dohvatiti podatke");
        }
    });

    //2. otvaranje kreiranog fajla

    request.open("GET", resurs);

    //3. Slanje zahteva
    request.send();
}
//ucitaj najpre 1. json file
getresponse("../JSON/prvi.json", (data, err) => {
    

    if(data) {
        //ikoliko je sve u redi ispisi podatke prvog i ucitaj drugi
        console.log(data); 
        getresponse("../JSON/drugi.json",(data,err)=>{
            //ukoliko je sve ok ispioisi njegove podatke i ucitaj treci json file
            if(data) {
                console.log(data);
                getresponse("../JSON/treci.json", (data,err) => {
                    if(data) {
                        console.log(data);
                    }
                    else {
                        console.log(err);//ispisuje gresku ako prvi nije 
                    }
                });

            }
            else {
                console.log(err);// ispisuje gresku ako drugi nije 
            }
        });
    }
    else {
        console.log(err);//ispisuje gresku ako prvi nije prosao
    }
});

console.log("KRAJ");