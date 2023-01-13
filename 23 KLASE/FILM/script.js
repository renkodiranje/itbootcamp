import { Film } from "./film.js";
let f1 = new Film("Avatar", "James Cameron", 2022 );
let f2 = new Film ("pijev zivot", "Ango li", 2021);
let f3 = new Film("jesen u njujorku", "joan chen", 2000);
let f4 = new Film("", "", 5);
f1.stampaj();
f2.stampaj();
f3.stampaj();
f4.stampaj();
f1.naslov = "";
f1.stampaj();


