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
