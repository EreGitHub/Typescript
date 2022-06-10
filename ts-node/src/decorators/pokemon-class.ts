function printToConsole(constructor: Function) {
	console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
	// return () => console.log("Hello World");
	if (print) return printToConsole; //NOTE aqui le pasamos una referencia
	else return () => {}; //NOTE aqui le pasamos una funcion vacia
};

@printToConsoleConditional(true)
export class Pokemon {
	public api: string = "https://pokemonapi.co";
	constructor(public name: string) {}
}
