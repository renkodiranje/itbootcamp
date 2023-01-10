function generatelmage(src) {
    let img = document.createElement("img");
    img.src= src;
    img.alt = "greska";
    return img;
}
//po defaultu moze samo jedna stavka
export default generatelmage;