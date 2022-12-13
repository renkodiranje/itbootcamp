// 1. ispisati brojeve od 1 do 20
let w = 1;
while(w <= 20) {
    console.log(w);
    w++;
}
for(i = 1; i <=20; i++) {
    console.log(i);
}

//ispisati brojeve od 20 do 1

for(i = 20; i >=1; i--) {
    console.log(i);
}

//3. Ispisati parne brojeve od 1 do 20 
//1. nacin
for(p = 1; p<=20; p++) {
    if(p%2 == 0) {
        console.log(p);
    }
}
// drugi nacin
for(i = 2; i<=20;i+=2) {
    console.log(i);
}

//5. Odrediti sumu brojeva od 1 do n
let s = 0;
let n = 5;
for(i = 1; i <= n; i++) {
    s+= i;
}
console.log(s);

//7. Odrediti proizvod brojeva od n do m
 n = 2;
 let m = 8;
 let proizvod = 1;
 for(n = 2; n<=m; n++) {
    proizvod *=n;
 }
 console.log(`proizvod brojeva od n do m je ${proizvod}`);

 //dobro resenje
 n = 2;
 m = 5;
 pro = 1;
 for(i = n; i<=m; i++) { //i resava ivecanje n
    pro*= i;
 }
 console.log(`proizvod od ${n} do ${m} je ${pro}`);

//9.Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
//1.jpg
//2.jpg
//3.jpg
for(i=1; i<=3; i++) {
    document.write(`<img src="slike/${i}.jpg">`);
}

// ispisati prvih n parnih pocevsi od 2
n = 3;
i = 2;
br_parnih= 0;

while(br_parnih < n) {
    if(i%2==0) {
        br_parnih++;
        console.log(`${br_parnih}. od ${n} parnih je broj ${i}`);
        
    }
    i++;
}

// koliko neparnih brojeva ucetvuje u sumoranju dok suma ne predje broj k

let k = 10;
let suma = 0;
let br_brojeva = 0; // pitam se
let ii = 1;
while(suma<k) {
    if(ii%2!=0) {
        suma+= ii;
        br_brojeva++;
    }
    ii++;
}
console.log(br_brojeva-1);

//11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
let deljiv = 0;
for(b= 5; b<=150;b++) {
    if(b % 13 == 0) {
        console.log(b);
        deljiv++;
    }
}
console.log(`u intervalu od 5 do 150 ima ${deljiv} brojeva koji su deljivi brojem 13`);
//to su :13.26.39.52.65.78.91.104.117.130.143 = 11
// 12. Ispisati aritmetičku sredinu brojeva od n do m.
n = 10;
m = 14;
let zbir = 0;
br_brojeva = 0;
for(i = n; i <= m; i++) {
    zbir+=i;
    br_brojeva++;
}
let arsr = zbir / br_brojeva;
console.log(`aritmeticka sredina je: ${arsr} `);
//10,11,12,13,14

// 15. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.

n= 2;
m = 18;
let br = 0;
suma = 0;
for(i=n; i<=m;i++) {
    if(i%10==4) {
        suma+=i;
        br++;
    }
}
console.log(`ima${br} brojeva kojima je poslednja cifra 4, a njihova suma je ${suma}`);
//4+14=18

// 16.Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
n= 5;
m= 25;
suma = 0;
a= 2;
for(i=n; i<=m;i++) {
    if(i%a!= 0) {
        suma+=i;
    }
}
console.log(`suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}`);

// 5+7+9+11+13+15+17+19+21+23+25=165
//18. Odrediti sa koliko brojeva je deljiv uneti broj k
// 20

let str = `<table border="1">`;
for(i = 1; i <= 6; i++) {
    if(i%2 == 0) {
        str +=
        `
            <tr class="roze">
                <td>Neki tekst</td>
                <td>Neki tekst</td>
            </tr>

        `;
    }
        

    else {
         str +=
         `
            <tr>
                <td>Neki tekst</td>
                <td>Neki tekst</td>
            </tr>

        `;
    }
}

str += `</table>`;
//document.body.innerHTML +=str;
document.write(str);

// 21. 

let lista = `<ul>`;
for(i = 1; i<= 10; i++) {
    if(i%3 ==0) {
        lista +=
        `
        <li>
            <ul>
            <li> element ${i} </li>
            </ul>
        </li>
        `

    }
    else {
        lista += `<li>Element ${i}</li>`;
    }
    
}
lista +=`</ul>`;
document.write(lista);

