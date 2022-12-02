
// 1 zadatak
let sati = 5; 
let minuti = 20; 
let minuti_odponoci = sati * 60 + minuti;
console.log(minuti_odponoci);
let doponoci = 24*60 - minuti_odponoci;

// 2 zadatak
let minuti_ukupni = 500; //minuti od ponoci
let protekli_minuti = minuti_ukupni % 60; //minuti
console.log(protekli_minuti);
let protekli_sati = (minuti_ukupni - protekli_minuti) / 60;//sati
console.log(protekli_sati);

// na casu
let minOdPonoci = 135;
let hours = math.flor(minOdPonoci/60);
let minutes = minOdPonoci % 60;
console.log(hours + ":" minutes);