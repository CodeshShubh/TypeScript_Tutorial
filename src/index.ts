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









//<-------------------------------------------------------------------------------------------------------------------------------------------->
// normal function declaration
const Render = (a:number,b:number):number => { // const Render = (varibale_datatype , varible_datatype):return_value_datatype =>{ return a*b}
   return a*b
}
console.log(Render(4,5))



// using type
type func = (a:number , b:number)=>string;

const Render2:func = (a,b) => {
  return String(a*b)
}



// make optional
type func2 = (a:number , b:number , c?:number)=>string;

const Render3:func2 = (a,b) => {
  return String(a*b)
}


// type gaurd 
// -> if user use c but not pass value pass value in function so l will show undefined so we use typeGaurd ->

type func3 = (a:number, b:number, c?:number)=>number;

const Render4:func3 =(n,m,l)=>{
    if(typeof l === 'undefined') return n*m; // by using this error will remove
    return n*m*l; // withour type gaurd here l is showing error undefined
}
Render4(25, 21)

// -> OR we can  give l default value

type func4 = (a:number, b:number, c?:number)=>number

const Render5:func4 = (a, b, c=20) =>{ // -> here we give c default value
   return a*b
}
Render5(10, 20)


// -> OR we can give typer sapartly

const Render6 = (a:number , b:number, c?:number)=>{
    return a*b
}
Render6(20, 23)





//<-------------------------------------------------------------------------------------------------------------------------------------------->
// ->Rest Operater
// so basically if we receive multiple value then we can use rest operater which will takes as a array

 const func = (...m:number[])=>{
     return m
 }
 func(1,2,3,4,5,6,7,8,9,34)





 //<-------------------------------------------------------------------------------------------------------------------------------------------->
 // -> Objects in functions and readonly

 interface Product {
    productName:string,
    productPrice:number,
    description:string,
    stock:number,
    readonly id:string, //-> here we can not change value further when we use it
 }

 const productOne:Product = {
     productName:'mackbook',
     productPrice:4000,
     description:'this is mackbook',
     stock:4,
     id: 'Unique_id_number'
 }

type myfunc = (product:Product)=>void
 const func1:myfunc = (productOne)=>{
     //productOne.id = 'other_id' -> so here this will show error because we can not change readonly value
    console.log(productOne)
 }

 func1(productOne)



 //<-------------------------------------------------------------------------------------------------------------------------------------------->
//   -> type never
//  -> theamMode

type theamMode = 'light' |'dark'

const mode:theamMode = 'dark' //-> so here we can only acces ligh and dark in mode variable


// ->type never
//-> if we throw error in fuction then it will return never or if we return error it will show error

const fun = ()=>{  // -> this will return error but
    return Error()
}

const fun2 = ():never=>{  // -> this will return never so we can already define it
    throw new Error()
}
 



 //<-------------------------------------------------------------------------------------------------------------------------------------------->
// -> Classes in type Script

class Products{
    constructor(public productName:string, public stock:number,  private mrp:number , protected readonly sellingPrice:number){}
    // for getter
       get getmrp():number{
        return this.mrp
    }
    // for setter -> in this will not return anything
    set changeMRP(value:number){
        this.mrp=value
    }

}

class products2 extends Products{
         description:String

    constructor(description:string, stock:number, productName:string, mrp:number, sellingPrice:number){
           super(productName, stock, mrp ,sellingPrice)
           this.description=description
    }
    get ChangesellingPrice():number{
        return this.sellingPrice
    }

    
}

const shubh = new products2("This is mackbook", 4, 'Mackbook', 400000, 450000)

console.log(shubh.productName)
console.log(shubh.stock)
console.log(shubh.description)
console.log(shubh.getmrp)
console.log(shubh.ChangesellingPrice)



// interface using class ->

interface student{
     name:string,
     age:number,
     email:string,
}

interface GiveId {
    getId : ()=>string;
}

class Students implements student, GiveId {  // here we use implements insted of extends to include type 
     constructor(public name:string, public age:number , public email:string) {}
     getId(): string {
        return `${this.name}-${this.age}`;
    }
}

const student = new Students('shubh', 43 , 'a@gmail.com')