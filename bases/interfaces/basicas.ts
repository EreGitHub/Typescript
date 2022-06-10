(() => {
	interface Heroe {
		name: string;
		age?: number;
		powers: string[];
		getName?: () => string;
	}

	let flash: Heroe = {
		name: "ruben",
		age: 24,
		powers: ["speed", "fly", "xray"],
	};

	let superman: Heroe = {
		name: "ruben2",
		age: 20,
		powers: ["speed", "xray"],
		getName() {
			return this.name;
		},
	};

	console.log(flash);
})();
