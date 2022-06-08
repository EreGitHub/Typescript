(() => {
	const addNumbers = (a: number, b: number): number => a + b;
	const greet = (name: string): string => `hola ${name}`;
	const saveWorld = () => `el mundo esta salvado`;
	console.log(addNumbers(1, 2));

	// TODO ANY
	// let myFuntion;
	// myFuntion = 10;
	// console.log(myFuntion);

	// myFuntion = addNumbers;
	// console.log(myFuntion(1, 2));

	// myFuntion = greet;
	// console.log(myFuntion("ruben"));

	// myFuntion = saveWorld;
	// console.log(myFuntion());

	// // TODO Function
	// let myFuntion: Function;
	// myFuntion = 10; //NOTE Error
	// console.log(myFuntion);

	// myFuntion = addNumbers; //TODO ok
	// console.log(myFuntion(1, 2));

	// myFuntion = greet; //TODO ok
	// console.log(myFuntion("ruben"));

	// myFuntion = saveWorld; //TODO ok
	// console.log(myFuntion());

	// TODO Function que regresa numero
	let myFuntion: (y: number, z: number) => number;
	myFuntion = 10; //NOTE Error
	console.log(myFuntion);

	myFuntion = addNumbers; //TODO ok
	console.log(myFuntion(1, 2));

	myFuntion = greet; //TODO Error
	console.log(myFuntion("ruben"));

	myFuntion = saveWorld; //TODO Error
	console.log(myFuntion());
})();
