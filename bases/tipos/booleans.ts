(() => {
	let isSuperman: boolean = true;
	let isBatman: boolean = false;

	// isSuperman = true && false; //NOTE -> false
	// isSuperman = true && true; //NOTE -> true
	isBatman = isBatman ? true : false;
	console.log({ isSuperman });
})();
