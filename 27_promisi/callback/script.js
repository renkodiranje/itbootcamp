console.log("callback");
let getTodos = (resurs, callback) => {
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
getTodos("../JSON/todos.json", (data, err) => {
    // console.log(data, err);

    if("jelena") {
        console.log(data); //moze da se raspolaze sa ovim podacima
    }
    else {
        console.log(err);
    }
});

console.log("KRAJ");