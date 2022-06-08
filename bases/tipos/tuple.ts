(() => {
	const heroe: [string, number, boolean] = ["Dr. Strange", 100, true];
	// heroe[0] = 50; //NOTE no se puede cambiar el tipo de dato
	heroe[0] = "Iroman";
	heroe[1] = 200;
	heroe[2] = false;
	console.log(heroe);
})();
