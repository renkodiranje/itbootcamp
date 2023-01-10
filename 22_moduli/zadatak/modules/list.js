// generateList(parent), koja formira ul listu i dodaje je na parent element,
// generateListItem(parent, src), koja formira stavku liste čiji je sadržaj slika na zadatoj putanji, i dodaje je na parent element
import generatelmage from "./general.js";
function generateList(parent) {
    let ul = document.createElement("ul");
    ul.style.overflow = "hidden";
    ul.style.listStyle = "none";
    parent.append(ul);
    return ul;
}

function generateItem(parent, src) {
    let li = document.createElement("li");
    li.style.float = "left";
    let img = generatelmage(src);
    li.append(img);
    parent.append(li);
    return li;
}
let length = 3;
export {generateList as GL, generateItem as GI, length};


