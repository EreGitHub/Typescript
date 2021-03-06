(() => {
	type Heroe = {
		name: string;
		age?: number;
		powers: number[];
		getName?: () => string;
	};

	let myCustomVariable: string | number | Heroe = "ruben";

	console.log(typeof myCustomVariable);

	myCustomVariable = 10;
	console.log(typeof myCustomVariable);

	myCustomVariable = {
		name: "ruben3",
		age: 43,
		powers: [1, 2],
	};
	console.log(typeof myCustomVariable);
})();
