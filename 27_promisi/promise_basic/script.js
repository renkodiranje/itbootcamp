let getSomething = () => {
    let obj = new Promise((resolve, reject) => {

        //resolve("nesto je resolve");//ako je sve ok resolve
        reject("reject");//ako nesto nije ok reject
        
    });
    return obj; // vraca objekat Promise
}
// ako je promise vratio resolve realizuje se .then grana, a ako je promise vratio reject realizuje se .catch grana
getSomething().then(a=> {
    console.log(`aktivirana je .then grana ${a}`);
}).catch(a=> {
    console.log(`aktivirana je .catch grana ${a}`);
});