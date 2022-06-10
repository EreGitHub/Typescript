(() => {
	// console.log(a); //NOTE undefined
	// var a = "Ruben";
	let a: string = "ruben";
	const b = {
		a: 1,
		b: 2,
	};
	b.a = 10;

	const d: number = 10;
	if (d > 0) {
		const d: number = 10;
	}

	const getName = (): void => {};
	// getName = () => {};
})();
