(() => {
	// let flash: Object = {
	let flash: { name: string; age?: number; powers: string[] } = {
		name: "ruben",
		age: 24,
		powers: ["speed", "fly", "xray"],
	};

	flash = {
		name: "otro nombre",
		// age: 50,
		powers: ["speed", "fly", "xray"],
		// getNombre() {
		// 	return this.name;
		// },
	};

	console.log(flash);
})();
