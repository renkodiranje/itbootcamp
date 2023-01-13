class Pacijent {
    constructor(i, v, t) {
        this._ime = i;
        this._visina = v;
        this._tezina = t;
    }
    get ime() {
        return this._ime;
    }
    set ime(i) {
        if(i.length> 0) {
            this._ime = i;
        }
        else {
            this._ime = "John DOE";
        }
    }
    get visina() {
        return this._visina;
    }
    set visina(v) {
        if(v > 0 && v < 250) {
            this._visina = v;
        }
        else {
            this._visina = "greska";
        }
    }
    get tezina() {
        return this._tezina;
    }
    set tezina(t) {
        if(t>0 && t<550) {
            this._tezina = t;
        }
        else {
            this._tezina = "greska";
        }
    }
    stampaj() {
        console.log(`${this.ime} - ${this.visina} - ${this.tezina}`);
    }
    BMI() {
        return (this.tezina/(this.visina/100)**2);
    }
    kritican() {
        if(this.BMI()<15|| this.BMI()>40) {
            return true;
        }
        else {
            return false;
        }
    }
}
export {Pacijent};