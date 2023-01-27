console.log(db);//objekat baze podataka
let users = db.collection("users");
console.log(users);

let user1 = users.doc("rtukic");
console.log(user1);
let user2 = db.doc("users/sstojkovic");
console.log(user2);

// kada pikiramo dokument preko ovih komandi mozemo da izvrsimo jednu od osnovne 4 operacije
//CRUD (create, read, update, delete)
//create: doc.set(...)
//read: doc.get(...)
//update  doc.update(...)
//delete doc.delete(...)
//sve cetri mtode kao rezultat vracaju promise
//=> Mozemo da lancamo .then() i .catch() na bilo koju od ove 4 metode

db.collection("customers")
.doc("cust001")
.set({
    name: "laza lazic",
    age: 35,
    adresses: ["loznica", "cacak"],
    salery: 400
    
})
.then(()=>{
    console.log("uspesno dodata musterija");
})
.catch((err)=>{
    console.log("greska:" + err);
});
db.collection("customers")
.doc("cust002")
.set({
    name: "Mirko Miric",
    age: 40,
    adresses: ["valjevo", "leskovac"],
    salery: 800
    
})
.then(()=>{
    console.log("uspesno dodata musterija");
})
.catch((err)=>{
    console.log("greska:" + err);
});
console.log(1);
console.log(2);
db.collection("customers")
.doc("cust001")
.set({
    height: 185
    
}, {
    merge: true
})
.then(()=>{
    console.log("uspesno dodata musterija");
})
.catch((err)=>{
    console.log("greska:" + err);
});

let datum1 = new Date("2023-01-24 12:00:00");
let datum2 = new Date("2023-01-24 15:00:00");

db.collection("tasks").doc("tango").set({
    title: "tango",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "odlazak na milongu"
}, {
    merge:true
})
.then(function(){
    console.log("task je dodat");
})
.catch(function(err) {
    console.err("greska pri dodavanju", err);
});
db.collection("tasks").doc("tango").update({
    description: "odlazak na milongu ako budem raspolozena"
})
.then(function(){
    console.log("task je apdejtovan");
})
.catch(function(err) {
    console.err("greska pri dodavanju", err);
});
db.collection("USERS").doc("pperic").set({
    age: 35,
    name: "pera",
    surname: "peric", 
})
.then(
    function(){
        console.log("user je dodat");}
)
.catch(function(err) {
    console.err("greska pri dodavanju", err);
});
db.collection("USERS").doc("pperic").set({
    height: 179 
}, {merge:true})
.then(
    function(){
        console.log("visina je dodata");}
)
.catch(function(err) {
    console.err("greska pri dodavanju", err);
});
//update metoda
db.collection("USERS").doc("rtukic").update({
    age: 27
})
.then(()=> {
    console.log("promenjen");

db.collection("USERS").doc("rtukic")
.update({
    adrese: firebase.firestore.FieldValue.arrayUnion("pasi poljana"),
    age: 33
    })
})    
.then(()=>{
    console.log("grad");
})
.catch(err=>{
    console.log(err);
})


