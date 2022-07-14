//////////////////////////////////////////////////////////////////
//Const Defined//
const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];
const string =
    " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";

const first = [
    { uuid: 2, name: "test" },
    { uuid: 5, name: "test5" },
    { uuid: 3, name: "test3" },
];
const second = [
    { uuid: 6, role: "pm" },
    { uuid: 4, role: "engineer" },
    { uuid: 1, role: "manager" },
    { uuid: 2, role: "associate" },
];

///////////////////Q1 Output/////////////////////////////

console.log("Q1");
console.log(itemsObject);
let array1 = double(itemsObject);
console.log(array1);
let array2 = filtered(itemsObject);
console.log(array2);
let sum = totalValue(itemsObject);
console.log(sum);

////////////////Q1 Functions////////////////////////////////////

function double(object) {
    let copy = object.map((o) => ({
        quantity: parseInt(o.quantity * 2),
        price: parseInt(o.price * 2),
    }));
    return copy;
}

function filtered(object) {
    const filteredObjects = object.filter(
        (o) => o.quantity > 2 && o.price > 300
    );
    return filteredObjects;
}

function totalValue(object) {
    let sum = 0;
    for (let i of object) {
        sum += parseInt(i.quantity * i.price);
    }
    return sum;
}

/////////////////Q2 Output///////////////////////////////////

let str = replaced(string);
console.log("Q2");
console.log(str);
console.log("");

////////////////Q2 Functions////////////////////////////////////

function replaced(str) {
    const replaced = str.replace(/[^0-9a-z]/gi, " ");
    return replaced.trim().toLowerCase();
}

//////////////////Q3 Output////////////////////
console.log("Q3");
let arrMerge = merge(first, second);
console.log(arrMerge);

///////
function merge(first, second) {
    let mergedObj = first.reduce((acc, item) => {
        let index = acc.find((i) => i.uuid == item.uuid);
        if (index) {
            Object.assign(index, item);
        } else {
            acc.push(item);
        }
        return acc;
    }, second);

    mergedObj.forEach((item) => {
        if (typeof item.name === "undefined") item.name = null;
        else if (typeof item.role === "undefined") item.role = null;
    });

    return mergedObj.sort((a, b) => a.uuid - b.uuid);
}
