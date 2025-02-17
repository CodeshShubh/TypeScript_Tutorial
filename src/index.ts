// Data Types variable
// ->normal declaration
let a:any;
let b:string;
let c:number;
const d:number = 34; // const will must be initilized when we declare const other(let) can be only declare
let e:boolean;


//<-------------------------------------------------------------------------------------------------------------------------------------------->




// ->array declaration
let f:Array<string>; // also we can declare like this  let f:string[]




//<-------------------------------------------------------------------------------------------------------------------------------------------->




// -> object declartion
// let g:{age:number , name:string, certificate:boolean} = {
//     age:1,
//     name:'shubh',
//     certificate:false
// }

// -> in above we declare object but this makes things bigger when we tring to make bigger object
// --> so we use type alyesis
type obj = {
    age:number,
    name:string,
    certificate?:boolean, // by (?) we can make it optional it will not nessarery when we decalate object
    gender:string
}

let students:obj = { // here we dont initilized certicate
    age:1,
    name:'shubh',
    gender:'male'
}

let teacher:obj = {
    age:2,
    name:'Salman Khan',
    gender:'female',
    certificate:false
}




// <-------------------------------------------------------------------------------------------------------------------------------------------->





// -> we can give multiple datatypes to behave like normal js

let a1:any;
// let b1:string | number | Array<string> | boolean | { [key: string]: any } // -> but not declare array or object like this
let b1:string | number | boolean

let f1:Array<string | number | boolean>; 

// -> type aylessis
type obj1 = {
    age:number | string,
    name:string | number,
    certificate?:boolean | number, // by (?) we can make it optional it will not nessarery when we decalate object
    gender:string | boolean
}

let students1:obj1 = { // here we dont initilized certicate
    age: 'one',
    name:'shubh',
    gender:false
}

let teacher1:obj = {
    age:2,
    name:'Salman Khan',
    gender:'female',
    certificate:false
}





// <-------------------------------------------------------------------------------------------------------------------------------------------->






// -> interface ( by this we can inherti as a property and can add more property for other object using type)

interface obj2 {
    age:number,
    name:string,
    certificate:boolean,
}

type obj3 = {
    age:number ,
    name:string ,
    certificate?:boolean , 
}

interface Myobj extends obj3 { // here we can inherit type using interface
    gender:string
}
interface Myobj2 extends obj2 { // here we inherit interface using iterface
    subject:string
}


const students2:Myobj = { // this is inherit  type  by using interface
  age:1,
  name:'shubh',
  gender:'male'
}

const teacher2:Myobj2 = { // this is inherit interface using interface
    age:2,
    name:'Karina Kapoor',
    subject:'Math',
    certificate:true
}












