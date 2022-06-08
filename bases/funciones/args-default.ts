(() => {
	const fullName = (
		firstName: string,
		LastName?: string,
		upper: boolean = false
	): string => {
		if (upper)
			return `${firstName} ${LastName || "(no last name)"}`.toUpperCase();
		else return `${firstName} ${LastName || "(no last name)"}`;
	};

	const name = fullName("Tony", "Star", true);
	// const name = fullName("Tony", "Star");
	console.log({ name });
})();
