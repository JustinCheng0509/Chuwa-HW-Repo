import { tableInfo, list, dropDownList } from "./data.js";

//console.log(tableInfo);
function createTable() {
    const table = document.getElementById("table");
    let tblRow = document.createElement("tr");
    //insert table header
    for (const items of tableInfo.tableHeader) {
        const tblHeader = document.createElement("th");
        tblHeader.textContent = items;
        tblRow.appendChild(tblHeader);
    }
    table.appendChild(tblRow);
    //insert table data
    for (const items of tableInfo.tableContent) {
        let tblRow = document.createElement("tr");
        for (const data of Object.values(items)) {
            const tblData = document.createElement("td");
            tblData.textContent = data;
            tblRow.appendChild(tblData);
        }
        table.appendChild(tblRow);
    }
}

function createList() {
    const ol = document.getElementById("ol");
    const ul = document.getElementById("ul");
    for (const items of list) {
        const olitems = document.createElement("li");
        const ulitems = document.createElement("li");
        olitems.textContent = items;
        ulitems.textContent = items;
        ul.appendChild(ulitems);
        ol.appendChild(olitems);
    }
}

function createDropdown() {
    const dropdown = document.getElementById("dropdown");
    for (const items of dropDownList) {
        const cities = document.createElement("option");
        cities.textContent = items.content;
        cities.value = items.value;
        dropdown.appendChild(cities);
    }
}

createTable();
createList();
createDropdown();
