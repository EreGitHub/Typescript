(() => {
	class Avenger {
		static avgage: number = 40;
		constructor(
			private name: string,
			public team: string,
			public realName?: string
		) {}
	}

	const antman: Avenger = new Avenger("Antman", "Capitan");
	console.log(antman);
	console.log(Avenger.avgage);
})();
