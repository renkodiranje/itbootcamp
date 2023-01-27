let ul = document.querySelector("ul");
let diverror = document.getElementById("error");
// let addbutton = document.getElementById("add");
let form = document.querySelector("form");
// db.collection("tasks")
// .orderBy("start_date", "desc")
// .get()
// .then((snapshot)=> {
//     snapshot.forEach(doc => {
//         let task = doc.data();
//         let li = document.createElement("li");
//         li.innerHTML = `${task.title} (${task.start_date.toDate()}) [${task.description}]`;
//         if(task.priority== true) {
//             li.style.color = "red";
//         }
//         ul.append(li);
//     });
// })
// .catch((e)=> {
//     diverror.innerHTML = `An rror ocured: ${e}`;
//     diverror.style.color = "red";
// });

form.addEventListener("submit", function(e) {
    e.preventDefault(e);
    
    let title = this.title.value;
    let start_date = this.start_date.value;
    let due_date = this.due_date.value;
    let priority = this.priority.checked;
    let description= this.description.value;
    // alert( title +","+ start_date + ", " + due_date +", "+ priority + ", " + description)
    let date1 = new Date(start_date);
    let date2 = new Date(due_date);
    let ts1 = firebase.firestore.Timestamp.fromDate(date1);
    let ts2 = firebase.firestore.Timestamp.fromDate(date2);
    let obj = {
        title: title,
        start_date: ts1,
        due_date: ts2,
        priority: priority,
        description: description
    };
    db.collection("tasks")
    .add(obj)
    .then(()=>{
        diverror.innerHTML = `Task succefuly added`;
        diverror.style.color = "green";

    })
    .catch((e)=> {
        diverror.innerHTML = `An rror ocured: ${e}`;
        diverror.style.color = "red";
    });

});
//umesto direktnog pristupa elementima neke kolekcije mnogo je bolje pristupati snapshotovima, odnosno osluskivanti primene u kolekcuje

db.collection("tasks")
.onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();
    changes.forEach(change=> {
        let type = change.type; //tip promene add remove
        let doc = change.doc; //sam dokument koji je izazvao promene

        if(type == "added") {
            let task = doc.data();
            let li = document.createElement("li");
            li.id = doc.id;
            li.innerHTML = `${task.title} (${task.start_date.toDate()}) [${task.description}]`;
            if(task.priority== true) {
                li.style.color = "red";
            }
            ul.append(li);
            let button = document.createElement("button");
            button.innerHTML = "obrisi task";
            li.append(button);
        }
       
        else if(type=="removed"){
            let id = doc.id;
            let li = document.getElementById(id);
            li.remove();
        }
    });

});

ul.addEventListener("click", function(e) {
    if(e.target.tagName == "BUTTON") {
        let li = e.target.parentElement;
        let id = li.id;
        db.collection("tasks")
        .doc(id)
        .delete()
        .then(() => {
            diverror.innerHTML = `Task succefuly deleted`;
            diverror.style.color = "orange";
        })
        .catch((e) => {
            diverror.innerHTML = `An rror ocured: ${e}`;
            diverror.style.color = "red";
        });
    }
});