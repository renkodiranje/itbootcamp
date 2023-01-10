// generateTable(parent), koja formira tabelu i dodaje je na parent element,
// generateTableRow(parent), koja formira tr tag i dodaje ga na parent element,
//  generateTableItem(parent, src), koja formira td tag čiji je sadržaj slika na zadatoj putanji, i dodaje ga na parent element.
import generatelmage from "./general.js";
function generateTable(parent) {
    let table = document.createElement("table");
    table.style.border = "1px solid black";
    parent.append(table);
    return table;

}

function generateTableRow(parent) {
    let tr = document.createElement("tr");
    parent.append(tr);
    return tr;
}
function generateItem(parent, src) {
    let td = document.createElement("td");
    let img = generatelmage(src);
    td.append(img);
    parent.append(td);
    return td;
}
const length = 3;
export  {generateTable, generateTableRow, generateItem, length};