class Film {
    constructor(n, r, g, o) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
        this.ocene = o;
    }

    stampaj() {
        console.log(this);
    }
    
   stampajListufilmovi() {
    let lista = 
    `
    <ul>
        <li>ime: ${this.naslov}</li>
        <li>rziser:${this.reziser}</li>
        <li>godina:${this.godinaIzdanja}</li>
        <li>ocene:${this.ocene}</li>
    </ul>
    `;
    return lista;
   }
    prosek() {
        let sum = 0;
        this.ocene.forEach(ocena => {
            sum+= ocena;
        });
        return sum/this.ocene.length;
    }
    set naslov(n) {
        if(n.length > 0) {
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
        if(r.length > 0) {
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
    get ocene() {
        return this._ocene;
    }
    set ocene(o) {
        if(Array.isArray(o)) {
            this._ocene = o;

        }
        else {
            this._ocene = [];
        }
        
    }
}
export {Film};
