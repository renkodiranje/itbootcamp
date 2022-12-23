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
    likes: 200,
    dislikes: 15
};
let blog5 = {
    title:"responsiv",
    likes: 80,
    dislikes: 155
}
let blog6 = {
    title:"php!",
    likes: 700,
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
    blogs: [blog2, blog3, blog5],
    logblogs: function() {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
};
let user2 = {
    username: "JohnDoe",
    age: 16,
    blogs: [blog1, blog6],
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
