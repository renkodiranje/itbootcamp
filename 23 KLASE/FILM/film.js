class Film {
 

    constructor(n, r, g) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
    }

    stampaj() {
        console.log(`${this.naslov} - ${this.reziser} (${this.godinaIzdanja})`);
    }
    set naslov(n) {
        if(n.length>0) {
            this._naslov = n;
        }
        else {
            this._naslov = "film";
        }
    }
    get naslov() {
        return this._naslov;
    }
    set reziser(r) {
        if(r.length>0) {
            this._reziser = r;
        }
        else {
            this._reziser = "John Doe";
        }
    }
    get reziser() {
        return this._reziser;
    }
    set godinaIzdanja(g) {
        if(g > 1800) {
            this._godinaIzdanja = g;
        }
        else {
            this._godinaIzdanja = 1800;
        }
    }
    get godinaIzdanja() {
        return this._godinaIzdanja;
    }
}
export {Film};
