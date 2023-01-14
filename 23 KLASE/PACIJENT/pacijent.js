export class Pacijent {
    constructor(i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
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
        if(v > 0 && v < 2.50) {
            this._visina = v;
        }
        else {
            this._visina = 1.7;
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
            this._tezina = 58;
        }
    }
    stampaj() {
        console.log(this);
    }
    stampajListu() {
        let htmlLista = 
        `
        <ul>
            <li>Ime:${this.ime}</li>
            <li>Visina:${this.visina}</li>
            <li>Tezina:${this.tezina}</li>
        </ul>
        `;
        return htmlLista;
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
