// Data Types variable
let c:any;
let b: string | number 
const a:string ='1';
console.log(a)

// Data Type function

const func =(a:number, b:number):number=>{
    return a+b
}

// or we can define 
type Myfunc = number | string;
const lab:Myfunc = 123;

type func2= (d: number, e: number) => number