console.log(`nizovi objekata`);
let blog1 = {
    title:"HTML",
    likes: 30,
    dislikes: 5
};
let blog2 = {
    title:"CSS",
    likes: 20,
    dislikes: 115
}
let blog3 = {
    title:"Java Script!",
    likes: 70,
    dislikes: 7
}
let blogs = [blog1, blog2, blog3];

// ispis niza objekata

console.log(blogs); 

//ispis jednog objekta iz niza

console.log(blogs[2]);

//ispis propertija

console.log(blogs[2].title);

// ispis naslova svh blogova u konzoli

blogs.forEach(blog => {
    console.log(blog.title);
});
// ispis svih naslova blogova na stranici
for(let i = 0; i < blogs.length;i++) {
    document.body.innerHTML += `<h3>${blogs[i].title}</h3>`;
    document.body.innerHTML += `<p>${blogs[i].likes}</p>`;
    document.body.innerHTML += `<p>${blogs[i].dislikes}</p>`;
}

//1. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova

let sumLikes = arrObj => {
    let sum = 0;
    arrObj.forEach(obj => {
        sum +=obj.likes;
    });
    return sum;
}
console.log(sumLikes(blogs));

//2. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let avgLikes = blogs => sumLikes(blogs)/blogs.length;
console.log(`prosecan br lajkova je : ${avgLikes(blogs)}`);

//3. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let pozitivne = arrObj => {
    for(let i = 0; i < arrObj.length; i++) {
        if(arrObj[i].likes>arrObj[i].dislikes) {
            console.log(arrObj[i].title);
        }
    }
}
pozitivne(blogs);


//4. Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let naslov = obj => {
    for(let i = 0; i < obj.length; i++) {
        if(obj[i].title.endsWith("!")) {
            console.log(obj[i].title);
        }
    }
}

naslov(blogs);

//5. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let pozitivne1 = arrObj => {
    for(let i = 0; i < arrObj.length; i++) {
        if(arrObj[i].likes >= arrObj[i].dislikes*2) {
            console.log(arrObj[i].title);
        }
    }
}
pozitivne1(blogs);



