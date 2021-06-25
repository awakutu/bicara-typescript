/* eslint-disable no-console */
// Javascritp Data Types

/********** Javascript Types ***********/
let a;                  // undefined
// console.log(typeof(a));

let b:boolean;
b = true;           // boolean
// console.log(typeof(b));

let c:number;
c = 1;             // number
// console.log(typeof(c));

let d: string;
d = "hello";        // string
// console.log(typeof(d));

let e:bigint;
e = 100n;           // big int (starting ES2020)
// console.log(typeof(e));

let f:symbol ;
f = Symbol("Sym");  // symbol  (starting ES2015)
// console.log(typeof(f));

let g: () => void ;
g= function () {   // function
  return null;
};
// console.log(typeof(g));

let h:null;
h = null;           // null ( special primitive )
// console.log(typeof(h)); //object

let i:Record<string,unknown>;
i = {};             // Object Literal
// console.log(typeof(i));

let j:[];
j = [];             // array
// console.log(typeof(j)); //object 

class Product {
  // class
  //...
}
let k:unknown;
k = new Product();
// console.log(typeof(k)); //object

/********** Why is it call dynamic type / weekly typed ? ***********/

// 1. No Declaration. Type automatically set based on value at runtime
// 2. Re-Assign
// 3. with dynamic type comes great responsiblity

let l: any;
l = 77;
l = "Tujub Tujuh";
l = [7, 17, 77];
// Any kurang dianjurkan karena tipe datanya bakal dinamis