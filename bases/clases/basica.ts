(() => {
	class Avenger {
		static avgage: number = 40;
		static getAvgAge() {
			return this.name;
		}

		constructor(
			private name: string,
			private team: string,
			public realName?: string
		) {}

		// private bio(): string {
		public bio(): string {
			return `${this.name} (${this.team})!!!`;
		}
	}

	const antman: Avenger = new Avenger("Antman", "Capitan");
	console.log(antman);
	console.log(Avenger.avgage);

	console.log(antman.bio());

	console.log(Avenger.getAvgAge());
})();
