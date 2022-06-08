(() => {
	const fullName = (firstName: string, LastName?: string): string => {
		return `${firstName} ${LastName || "(no last name)"}`;
	};

	const name = fullName("Tony");
	console.log({ name });
})();
