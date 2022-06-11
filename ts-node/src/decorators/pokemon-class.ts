function CheckValidPokemonId() {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		// console.log({ target, propertyKey, descriptor });
		// descriptor.value = () => {
		// 	console.log("hola mundo");
		// };
		const originalMethod = descriptor.value;
		descriptor.value = (id: number) => {
			if (id < 1 || id > 800) return console.error("id invalido");
			else return originalMethod(id);
		};
	};
}

//NOTE ejecuta en orden secuencial
export class Pokemon {
	public api: string = "https://pokemonapi.co";
	constructor(public name: string) {}

	@CheckValidPokemonId()
	savePokemonToDB(id: number) {
		console.log(`pkemon guardado ${id}`);
	}
}
