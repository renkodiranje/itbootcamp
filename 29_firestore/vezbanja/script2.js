// db.collection("customers")
// .doc("cust001")
// .delete()
// .then(()=>{
//     console.log("izbrisan");
// })
// .catch((e)=>{
//     console.log("greska"+ e);
// });
// // dodavanje dokumenta u kolekciju preko metode add
// db.collection("customers")
// .add({
//     name: "Mika Mikic",
//     age: 25,
//     salery: 800,
//     adresses: ["Beograd", "Nis"]
// })
// .then(()=> {
//     console.log("dodat mika");
// })
// .catch((e)=> {
//     console.log("desila se greska" + e);
// });
// //moze se dohvatiti 1 dokument

// //moze se dohvatiti vise dokumenara

// // 1)
// db.collection("USERS")
// .doc("rtukic")
// .get()
// .then((doc)=> {
//     if(doc.exists) {
//         let data = doc.data();
//         console.log("uspesno skinut dokument " + doc.id);
//         console.log(data);
//     }
//     else {
//         console.log("ne postoji dati dokument");
//     }

// })
// .catch((e) => {
//     console.log("Greska:" + e);
// });

//2) 

// db.collection("customers")
// .get()
// .then((snapshot)=> {
//    snapshot.forEach((doc) => {
//        console.log("uspesno dodat" + doc.id);
//        console.log(doc.data());
//    });
// })
// .catch((e)=> {
//     console.log("greska:" + e);
// });

//get metoda kod kolekcije:
//1 prikazivanje dokumenata u odredjenom redosledu (orderBy)
//2 Prikazivanje odredjenok broja dokumenta (limit)
//3 prikazivanje dokumentat koji zadovoljavaju odredjene kriterijume  filtriranje (where)

//1

// db.collection("customers")
// .orderBy("salery", "desc")
// .orderBy("name", "asc")
// .get()
// .then((snapshot)=> {
//    snapshot.forEach((doc) => {
//        console.log("uspesno dodat" + doc.id);
//        console.log(doc.data());
//    });
// })
// .catch((e)=> {
//     console.log("greska:" + e);
// });

// 2 limit

// db.collection("customers")
// .orderBy("salery", "desc")
// .orderBy("name", "asc")
// .limit(3)
// .get()
// .then((snapshot)=> {
//    snapshot.forEach((doc) => {
//        console.log("uspesno dodat" + doc.id);
//        console.log(doc.data());
//    });
// })
// .catch((e)=> {
//     console.log("greska:" + e);
// });

// 3 where

// db.collection("customers")
// // .where("salery", "<=", 600)
// // .where("salery", ">", 500)
// // .where("name", "in", ["laza" , "Mika"]) // ovo ne bi radilo bez kreiranja indeksa
// .where("name", ">=", "M")
// .where("name", "<", "N")
// // .orderBy("name")
// // .orderBy("age") moralo bi da se kreira index
// .get()
// .then((snapshot)=> {
//    snapshot.forEach((doc) => {
//        console.log("uspesno dodat" + doc.id);
//        console.log(doc.data());
//    });
// })
// .catch((e)=> {
//     console.log("greska:" + e);
// });

// Iz kolekcije customers, pročitati sve klijente koji:
// Imaju adresu u Nišu,
// Imaju platu veću ili jednaku od 500,


// Iz kolekcije customers, pročitati sve klijente sortirane po imenu.
db.collection("customers")
.orderBy("name", "asc")
.get()
.then((snapshot)=> {
   snapshot.forEach((doc) => {
       console.log("Iz kolekcije customers, pročitati sve klijente sortirane po imenu." + doc.id);
       console.log(doc.data());
   });
})
.catch((e)=> {
    console.log("greska:" + e);
});

// Imaju adresu u Nišu,
db.collection("customers")
.where("adresses", "array-contains", "nis")
.get()
.then((snapshot)=> {
   snapshot.forEach((doc) => {
       console.log("Imaju adresu u Nišu" + doc.id);
       console.log(doc.data());
   });
})
.catch((e)=> {
    console.log("greska:" + e);
});

// Imaju platu veću ili jednaku od 500,

db.collection("customers")
.where("salery", ">=", 500)
.get()
.then((snapshot)=> {
   snapshot.forEach((doc) => {
       console.log("Imaju platu veću ili jednaku od 500" + doc.id);
       console.log(doc.data());
   });
})
.catch((e)=> {
    console.log("greska:" + e);
});


// Imaju platu između 300 i 800,

db.collection("customers")
.where("salery", ">",300)
.where("salery", "<",800)
.get()
.then((snapshot)=> {
   snapshot.forEach((doc) => {
       console.log(" Imaju platu između 300 i 800" + doc.id);
       console.log(doc.data());
   });
})
.catch((e)=> {
    console.log("greska:" + e);
});




// Imaju platu manju od 900, i imaju 30 godina,
db.collection("customers")
.where("salery", "<", 900)
.where("age", "==", 30)
.get()
.then((snapshot)=> {
   snapshot.forEach((doc) => {
       console.log("Imaju platu manju od 900, i imaju 30 godina," + doc.id);
       console.log(doc.data());
   });
})
.catch((e)=> {
    console.log("greska:" + e);
});

// Imaju adresu u Nišu ili Beogradu,
db.collection("customers")
.where("adresses","array-contains-any", ["Nis", "Beograd"])
.get()
.then((snapshot)=> {
   snapshot.forEach((doc) => {
       console.log("Imaju adresu u Nišu ili Beogradu" + doc.id);
       console.log(doc.data());
   });
})
.catch((e)=> {
    console.log("greska:" + e);
});

// Imaju 22, 25 ili 28 godina.

db.collection("customers")
.where("age","in", [22, 25, 28])
.get()
.then((snapshot)=> {
   snapshot.forEach((doc) => {
       console.log("Imaju 22, 25 ili 28 godina." + doc.id);
       console.log(doc.data());
   });
})
.catch((e)=> {
    console.log("greska:" + e);
});

db.collection("tasks")
.where("priority","==", true)
.get()
.then((snapshot)=> {
   snapshot.forEach((doc) => {
       console.log("prioritetni taskovi" + doc.id);
       console.log(doc.data());
   });
})
.catch((e)=> {
    console.log("greska:" + e);
});
let datum = new Date();
let godina = datum.getFullYear();
let datum1 = new Date(godina, 0, 1);
let datum2 = new Date((godina + 1), 0, 1);
// let datum2 = new Date(godina, 0, 1, 23, 59, 59, 999); onda u drugom uslovu mora i =
let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
let ts2 = firebase.firestore.Timestamp.fromDate(datum2);
db.collection("tasks")
.where("due_date",">=", ts1)
.where("due_date","<", ts2)
.get()
.then((snapshot)=> {
   snapshot.forEach((doc) => {
       console.log("koji se izbrsavaju ove godine" + doc.id);
       console.log(doc.data());
   });
})
.catch((e)=> {
    console.log("greska:" + e);
});

// Su završeni,

let danas = new Date();

db.collection("tasks")
.where("due_date","<", danas)
.get()
.then((snapshot)=> {
   snapshot.forEach((doc) => {
       console.log("koji su zavrseni" + doc.id);
       console.log(doc.data());
   });
})
.catch((e)=> {
    console.log("greska:" + e);
});

// Tek treba da počnu.
db.collection("tasks")
.where("start_data",">", danas)
.get()
.then((snapshot)=> {
   snapshot.forEach((doc) => {
       console.log("koji treba da pocnu" + doc.id);
       console.log(doc.data());
   });
})
.catch((e)=> {
    console.log("greska:" + e);
});
