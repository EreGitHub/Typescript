import { genericFn, genericFnArrow, printObjet } from "./generics/generics";

// printObjet(123);
// printObjet(new Date());

const name: string = "Ruben";
console.log(genericFn(123));
// console.log(genericFn(name).toFixed(2)); //NOTE toFixed(2) is a method of string
// console.log(genericFn(new Date()).toFixed(2)); //NOTE toFixed(2) is a method of Date
console.log(genericFn(name).toUpperCase());
console.log(genericFn(new Date()).getDate());

console.log(genericFnArrow(1111));
console.log(genericFnArrow(name).toUpperCase());
console.log(genericFnArrow(new Date()).getDate());
