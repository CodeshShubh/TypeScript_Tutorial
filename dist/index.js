"use strict";
// Data Types variable
// ->normal declaration
let a;
let b;
let c;
const d = 34; // const will must be initilized when we declare const other(let) can be only declare
let e;
//<-------------------------------------------------------------------------------------------------------------------------------------------->
// ->array declaration
let f; // also we can declare like this  let f:string[]
let students = {
    age: 1,
    name: 'shubh',
    gender: 'male'
};
let teacher = {
    age: 2,
    name: 'Salman Khan',
    gender: 'female',
    certificate: false
};
// <-------------------------------------------------------------------------------------------------------------------------------------------->
// -> we can give multiple datatypes to behave like normal js
let a1;
// let b1:string | number | Array<string> | boolean | { [key: string]: any } // -> but not declare array or object like this
let b1;
let f1;
let students1 = {
    age: 'one',
    name: 'shubh',
    gender: false
};
let teacher1 = {
    age: 2,
    name: 'Salman Khan',
    gender: 'female',
    certificate: false
};
const students2 = {
    age: 1,
    name: 'shubh',
    gender: 'male'
};
const teacher2 = {
    age: 2,
    name: 'Karina Kapoor',
    subject: 'Math',
    certificate: true
};
//<-------------------------------------------------------------------------------------------------------------------------------------------->
// normal function declaration
const Render = (a, b) => {
    return a * b;
};
console.log(Render(4, 5));
const Render2 = (a, b) => {
    return String(a * b);
};
const Render3 = (a, b) => {
    return String(a * b);
};
const Render4 = (n, m, l) => {
    if (typeof l === 'undefined')
        return n * m; // by using this error will remove
    return n * m * l; // withour type gaurd here l is showing error undefined
};
Render4(25, 21);
const Render5 = (a, b, c = 20) => {
    return a * b;
};
Render5(10, 20);
// -> OR we can give typer sapartly
const Render6 = (a, b, c) => {
    return a * b;
};
Render6(20, 23);
//<-------------------------------------------------------------------------------------------------------------------------------------------->
// ->Rest Operater
// so basically if we receive multiple value then we can use rest operater which will takes as a array
const func = (...m) => {
    return m;
};
func(1, 2, 3, 4, 5, 6, 7, 8, 9, 34);
const productOne = {
    productName: 'mackbook',
    productPrice: 4000,
    description: 'this is mackbook',
    stock: 4,
    id: 'Unique_id_number'
};
const func1 = (productOne) => {
    //productOne.id = 'other_id' -> so here this will show error because we can not change readonly value
    console.log(productOne);
};
func1(productOne);
const mode = 'dark'; //-> so here we can only acces ligh and dark in mode variable
// ->type never
//-> if we throw error in fuction then it will return never or if we return error it will show error
const fun = () => {
    return Error();
};
const fun2 = () => {
    throw new Error();
};
//<-------------------------------------------------------------------------------------------------------------------------------------------->
// -> Classes in type Script
class Products {
    constructor(productName, stock, mrp, sellingPrice) {
        this.productName = productName;
        this.stock = stock;
        this.mrp = mrp;
        this.sellingPrice = sellingPrice;
    }
    // for getter
    get getmrp() {
        return this.mrp;
    }
    // for setter -> in this will not return anything
    set changeMRP(value) {
        this.mrp = value;
    }
}
class products2 extends Products {
    constructor(description, stock, productName, mrp, sellingPrice) {
        super(productName, stock, mrp, sellingPrice);
        this.description = description;
    }
    get ChangesellingPrice() {
        return this.sellingPrice;
    }
}
const shubh = new products2("This is mackbook", 4, 'Mackbook', 400000, 450000);
console.log(shubh.productName);
console.log(shubh.stock);
console.log(shubh.description);
console.log(shubh.getmrp);
console.log(shubh.ChangesellingPrice);
