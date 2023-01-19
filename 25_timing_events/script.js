console.log(1);
console.log(2);
window.setTimeout(()=>{
    console.log("ispisana poruka nakon nekog vremena");
},2000);
console.log(3);
console.log(4);

let i = 5;
setInterval(()=>{
    console.log(i);
    i++;
},1000);

let btn1 = document.querySelector("#click1");
let btn2 = document.querySelector("#click2");
let btn3 = document.querySelector("#click3");
let btn4 = document.querySelector("#click4");
let ispis = document.querySelector("#ispis");
let vreme = 1000/2;
let tajmer = null;
btn1.addEventListener("click", function(e){
    e.preventDefault();
    let datum = new Date();
    let h = datum.getHours();
    let m = datum.getMinutes();
    let s = datum.getSeconds();
    if(tajmer===null) { 
    tajmer = setTimeout(function(){
        ispis.innerHTML = `${h}:${m}:${s}`;
        tajmer = null;
    },vreme);
    }
});
btn2.addEventListener("click", function(e){
    e.preventDefault();
    clearTimeout(tajmer);
    tajmer = null;
});

let vr = 0;
let clock = null;// clock => sat 1, clock -> sat 2 -> clok sat tri ako smo tri puta kliknuli pamti se zadnji ako se napravi niz od svih satova moze im se svima pristupitu iteriranjem kroz niz

btn3.addEventListener("click",()=> {
    if(clock===null) { 
        clock = setInterval(()=>{
        // let datum = new Date();
        // let h = datum.getHours();
        // let m = datum.getMinutes();
        // let s = datum.getSeconds();
        // ispis.innerHTML = `${h}:${m}:${s}`;
        vr++;
        ispis.innerHTML = vr;
        },1000)
    }
});

btn4.addEventListener("click", () => {
    clearInterval(clock);
    clock = null;
});

let start = document.getElementById("click5");
let stop = document.getElementById("click6");
let input = document.getElementById("prikaz");
let br = 0;
let timer = null;
start.addEventListener("click", () => {
    if(timer===null) {
        timer = setInterval(()=> {
            br++;
            input.value = br;
        }, 2000)
    }
});
stop.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    br = 0;
    ispis.value = "";
});