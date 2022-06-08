(() => {
	const fullName = (firstName: string, LastName: string | boolean): string => {
		// if (!firstName) throw new Error("Nombre requerido");
		return `${firstName} ${LastName}`;
	};
	// let noName: any;
	// const name = fullName(noName, "Stark");

	const name = fullName("Tony", "Stark");
	console.log({ name });
})();
