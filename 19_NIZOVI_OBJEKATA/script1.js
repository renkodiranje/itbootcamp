let blog1 = {
    title:"HTML",
    likes: 30,
    dislikes: 5
};
let blog2 = {
    title:"CSS",
    likes: 20,
    dislikes: 15
}
let blog3 = {
    title:"Java Script!",
    likes: 3,
    dislikes: 15
}
let blog4 = {
    title:"NoSQL DB",
    likes: 2,
    dislikes: 15
};
let blog5 = {
    title:"responsiv",
    likes: 80,
    dislikes: 155
}
let blog6 = {
    title:"php!",
    likes: 400,
    dislikes: 71
}
let user = {
    username: "jelena",
    age: 28,
    blogs: [blog1, blog2, blog3, blog4],
    logblogs: function() {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
};
let user1 = {
    username: "stefan",
    age: 13,
    blogs: [blog5],
    logblogs: function() {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
};
let user2 = {
    username: "JohnDoe",
    age: 16,
    blogs: [blog6],
    logblogs: function() {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
};


user.logblogs();
//ispisati sve blogove korisnoka user

console.log(user.blogs);

//ispisati naslov prvog bloga koji je napisao korisnik user
console.log(user.blogs[0].title);

let users = [user, user1, user2];

//ispisati imena autora ispod 18 god

users.forEach(u => {
    if(u.age < 18) {
        console.log(u.username);
    }
});

// Ispisati naslove onih blogova koji imaju više od 50 lajkova

users.forEach(user => {//ugnjezdena petlja
    let blogs = user.blogs;//niz blogova tekucek usera
    blogs.forEach(blog => {
        if(blog.likes > 50) {
            console.log(blog.title);
        }
    });
});
// Ispisati sve blogove autora čiji je username ’JohnDoe’

users.forEach(user => {
    if(user.username == "JohnDoe") {
        user.logblogs();
    }
});

//napraviti arrow funkciju kojoj se prosledjuje user name autora a ona ispisuje njegove blogove

let print_blogs = username => {
    users.forEach(user => {
        if(user.username == username) {
            user.logblogs();
        }
    });
}
print_blogs("stefan");
// Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
users.forEach(user => {
    let blogs = user.blogs;
    let sum = 0;
    blogs.forEach(el => {
        sum += el.likes;
        
    });
    if(sum > 100) {
        document.write(`<p style="color:pink;">${user.username}</p>`);
    }
});

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
// mije dobro ovo
// let prosek = blogs => {
//     let sum = 0;
//     let br = 0;
//     blogs.forEach(blog =>{
//         sum += blog.likes;
//         br++;
//     });
//     return sum / br;
// }
// users.forEach(user=>{
//     let blogs = user.blogs;
//     blogs.forEach(blog => {
//         if(blog.likes>prosek(blogs)) {
//             console.log(blog.title);
//         }
//     });
// });

//////
///sa jelenom

let avglikes = users => {
    let sum = 0;//suma ljakova
    let br = 0;//ukupan br blogova
    for(let i = 0; i < users.length; i++) {
        let user = users[i];//ovo daje objekat
        let blogs = user.blogs;///niz blogova sa selektovanog korisnika
        for( let j = 0; j < blogs.length; j++) {
            let blog = blogs[j];
            sum += blog.likes;
            br++;//dodajem d sam naisla na blog, brojm blogove
        }
    }
    return sum/br;
}

let iznadProsekaLajkovi = users => {
    let prosekLajkova = avglikes(users);
    for(let i = 0; i < users.length; i++) {
        let user = users[i];
        let blogs = user.blogs;
        for( let j = 0; j < blogs.length; j++) {
            let blog = blogs[j];
            if(blog.likes > prosekLajkova) {
                console.log(blog.title);
            }
        }
    }
}


console.log(`prosecan br lajkova je ${avglikes(users)}`);

iznadProsekaLajkovi(users);