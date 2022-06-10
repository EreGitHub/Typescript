import { genericFn, genericFnArrow, printObjet } from "./generics/generics";
import { Hero } from "./interfaces/Hero";
import { Villain } from "./interfaces/Villain";

const deadpool = {
	name: "Deadpool",
	realName: "Wade Wilson",
	dangerLevel: 130, //NOTE comentar
};

console.log(genericFnArrow<Hero>(deadpool).realName);
console.log(genericFnArrow<Villain>(deadpool).dangerLevel);
