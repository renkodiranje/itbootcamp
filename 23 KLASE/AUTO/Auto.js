class Auto { // moze i ovde export
    constructor (m, b, ik) {
        this.marka = m;
        this.boja = b;
        this.imaKrov = ik;
    }
    sviraj() {
        console.log(`auto marke ${this._marka} svira: bip! bip!`);
    }
    // seteri
    set marka(m) {
        if(m.length > 0) {
            this._marka = m;
        }
        else {
        this._marka= "Skoda";
        }
        console.log(`pozvan je seter za polje _ marka`);
    }
    set boja(b) {
        if(b.length>0) {
            this._boja = b;
        }
        else {
            this._boja = "bela";
        }
    }
    set imaKrov(ik) {
        if(ik == true || ik == false) {
            this._imaKrov = ik;
        }
        else {
            this._imaKrov = false;
        }
    }
    get marka() {
        return this._marka;
    }
    get boja() {
        return this._boja;
    }
    get imaKrov() {
        return this._imaKrov;
    }

}

export { Auto};
