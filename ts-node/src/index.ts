import { genericFn, printObjet } from "./generics/generics";

printObjet(123);
printObjet(new Date());

console.log(genericFn(123));
console.log(genericFn("hola mundo").toFixed(2)); //NOTE error: Type '"hola mundo"' is not assignable to type 'number'.
console.log(genericFn(new Date()).toFixed(2)); //NOTE error: Type 'Date' is not assignable to type 'number'.
