function readonly(isWritable: boolean = true): Function {
	return function (target: any, propertyKey: string) {
		const descriptor: PropertyDescriptor = {
			get() {
				console.log(this);
				return "Pepe";
			},
			set(this, val) {
				Object.defineProperty(this, propertyKey, {
					value: val,
					writable: !isWritable,
					enumerable: false,
				});
			},
		};
		return descriptor;
	};
}

export class Pokemon {
	// @readonly(false)
	@readonly()
	public api: string = "https://pokemonapi.co";

	constructor(public name: string) {}
}
