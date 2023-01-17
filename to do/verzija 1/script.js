console.log("zdravo");
let liItem = document.querySelector("ul");
console.log(liItem);
liItem.addEventListener("click", e => {
    // console.log("kliknuto");
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.tagName);
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("precrtaj");
    }
    
});
