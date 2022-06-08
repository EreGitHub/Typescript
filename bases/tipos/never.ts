(() => {
	// const error = (message: string): never => {
	// 	// throw new Error(message);
	// 	if (false) throw new Error(message); //NOTE esta funcion si tiene un return de tipo vod, entonces es un error
	// };

	const error = (message: string): never | number => {
		// throw new Error(message);
		if (false) throw new Error(message);
		return 1;
	};

	error("error de prueba");
})();
