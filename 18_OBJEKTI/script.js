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
    },
    maksimalna: function() {
        let max = 0;
        this.temperature.forEach (t => {
            if(t > max) {
                max = t;
            }
        });
        let br = 0;
        this.temperature.forEach (t => {
            if(t == max) {
                br++;
            }
        });
        return br;
    },
    dve_temperature: function(a,b) {
        let tx = 0;
        
        this.temperature.forEach ( t => {
            if(t > b &&  t < a ) {
                tx++;
            }
            });
        return tx;       
    },
    toplo: function() {
        // if(this.brNatprosecnih() > this.temperature.length/2) {
        //     return true;
        // }
        // else {
        //     return false;
        // }
        return (this.brNatprosecnih() > this.temperature.length/2);
    },
    // iznad_proseka: function() {
    //     let tem = 0;
    //     let pros;
    //     let br_da = 0;
    //     let br_ne = 0;
    //     let x = undefined;
    //     this.temperature.forEach(t => {
    //         tem += t;
    //     });
    //     pros = tem / this.temperature.length;
    //     this.temperature.forEach(t => {
    //         if(t > pros) {
    //             br_da++;
    //         }
    //         if(t < pros) {
    //             br_ne++;
    //         }
    //     });
    //     if(br_da > br_ne) {
    //         x = true;
    //     }
    //     else {
    //         x = false;
    //     }
    //     return x;

    // },
    
    ledeni_dan: function() {
        
        let t_plus = 0;
        this.temperature.forEach(t => {
            if(t > 0) {
                t_plus++;
            }
        });
        if( t_plus == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
//     leden: function() {
//         for(let i =0; i < this.length; i++) {
//             if(this.temperature[i] > 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// };
console.log(dan.ledeni_dan());
//console.log(dan.iznad_proseka());
console.log(dan.dve_temperature(-50, 10));
console.log(dan.maksimalna());
console.log(dan.prosecna());
console.log(dan.brNatprosecnih());
console.log(dan.toplo());



