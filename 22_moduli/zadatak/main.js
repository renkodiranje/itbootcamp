// import {GL, GI} from "./modules/list.js";
// import {generateTable, generateTableRow, generateItem as generateTableItem} from "./modules/table.js";
// let ul = GL(document.body);
// GI(ul,"images/houses.jpg");
// GI(ul,"images/houses.jpg");
// GI(ul,"images/moon.jpg");
// let table = generateTable(document.body);
// let tr = generateTableRow(table);
// generateTableItem(tr,"images/houses.jpg");
// generateTableItem(tr,"images/moon.jpg");
// generateTableItem(tr,"images/landscape.jpg");
import * as Lista from "./modules/list.js";
import * as Tabela from "./modules/table.js";

let ul = Lista.GL(document.body);
for(let i = 1; i <= Lista.length; i++) {
    Lista.GI(ul,`images/0${i}.jpg`);
}

let table = Tabela.generateTable(document.body);
let tr = Tabela.generateTableRow(table);
for(let i = 1; i <=Tabela.length; i++) {
    Tabela.generateItem(tr, `images/0${i}.jpg`);
}