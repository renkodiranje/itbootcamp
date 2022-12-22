console.log("objekti");
let blog1 = {
    title: "html",
    content: "ovo je blog o osnovnim html tagovima",
    autor: "Jelena"
};
//ispis celog objekta
console.log(blog1);
console.log(typeof blog1);
//ispis jednog propertija
console.log(blog1.title);
console.log(blog1['title']);

//izmena propertija

blog1.content = "Osnove HTML-a";
console.log(blog1.content);
blog1['autor'] = "stefan";
console.log(blog1);

//////////////////////////////////

let user = {
    username: "JM",
    age: 28,
    blogs: ["If naredba grananja", "FOR petlja", "While petlja"],
    login: function() {
        console.log("Ulogovani ste");
    },
    logout: function() {
        console.log("izlogovani ste");
    },
    logblogs: function(){
        this.blogs.forEach(b=>{
            console.log(b);
        });
    }
};

user.login();
user.logout();
user.logblogs();

console.log(this);

user.blogs.forEach(b=> {
    document.write(`<p>${b}</p>`);
});

////////////////////////////

let dan = {
    datum: "2022/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [5, 10, 15],
    prosecna: function() {
        let suma = 0;
        this.temperature.forEach(t => {
            suma += t;
        });
        return suma/this.temperature.length;
    },
    brNatprosecnih: function() {
        let br = 0;
        let avg = this.prosecna();
        this.temperature.forEach(t => {
            if(t > avg) {
                br++;
            }
        });
        return br;
    }

};
console.log(dan.prosecna());
console.log(dan.brNatprosecnih());

