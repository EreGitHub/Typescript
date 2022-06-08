(() => {
	// let flash: Object = {
	let flash: {
		name: string;
		age?: number;
		powers: number[];
		getName?: () => string;
	} = {
		name: "ruben",
		age: 24,
		powers: ["speed", "fly", "xray"],
	};

	let superman: {
		name: string;
		age?: number;
		powers: string[];
		getName?: () => string;
	} = {
		name: "ruben2",
		age: 20,
		powers: ["speed", "xray"],
	};

	console.log(flash);
})();
