(() => {
	let avengers: number = 10;
	const villanos: number = 20;

	if (avengers < villanos) {
		console.log("Estamos en problemas");
	} else {
		console.log("nos salvamos");
	}

	// avengers = 123;
	// avengers = Number("55");
	avengers = Number("55A"); //NOTE NaN es considerado como numero en js
	console.log({ avengers });
})();
