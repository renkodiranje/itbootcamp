console.log("primeri callback f-ja");

let myFunc = callback => {
    callback();
}
myFunc(() => {
    console.log("f-ja okinuta");
});

///////////

//calback f ja za sabiranje dva broja

let sum = (callback) => {
    callback(5, 7);
}
//1. nacin: kreirali smo posebnu f ju koja na m sluzi kao realizacija i koju cemo prosledjivatoi kao parametar
function printSum(a, b) {
    console.log(a+b);
}
sum(printSum); // poziv f je koja realizuje callback ide bez zagrada

// 2. nacin

sum((a, b)=>{
    console.log(a+b);
});

///////////////////////////////

let racunaj = (str, cb) => {
    console.log(str);
   let rez =  cb(10,5);
   console.log(rez);
}

racunaj("Oduzimanje",(x,y)=>{
    return (x-y);
});
racunaj("deljenje",(x,y)=>{
    return (x/y);
});


let racunaj2 = (str, br1, br2, funkcija) => {
    console.log(str);
    console.log(funkcija(br1,br2));
}
racunaj2("Mnozenje", 4, 7, (x,y) => {
    return x*y;
})