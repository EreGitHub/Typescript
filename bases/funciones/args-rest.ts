(() => {
	const fullName = (firstName: string, ...args: string[]): string => {
		return `${firstName} ${args.join(" ")}`;
	};
	// const superman = fullName("ruben", "rios", "ortega", "sin barrio");
	const superman = fullName("ruben", "rios");

	console.log({ superman });
})();
