(() => {
	type Avenger = {
		name: string;
		weapon: string;
	};

	const iroman: Avenger = {
		name: "Ironman",
		weapon: "Mjolnir",
	};

	const capitanAmerica: Avenger = {
		name: "Capitan america",
		weapon: "Escudo",
	};

	const thor: Avenger = {
		name: "Thor",
		weapon: "Mjolnir",
	};
	const avengers: Avenger[] = [iroman, capitanAmerica, thor];
	for (const avenger of avengers) {
		console.log(avenger);
	}
})();
