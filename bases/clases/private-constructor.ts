(() => {
	class Apocalipsis {
		static instance: Apocalipsis;
		private constructor(public name: string) {}

		static callInstance(): Apocalipsis {
			if (!Apocalipsis.instance) {
				Apocalipsis.instance = new Apocalipsis("Apocalipsis");
			}
			return Apocalipsis.instance;
		}

		changeName(newName: string): void {
			this.name = newName;
		}
	}

	const apocalipsis1 = Apocalipsis.callInstance();
	const apocalipsis2 = Apocalipsis.callInstance();
	const apocalipsis3 = Apocalipsis.callInstance();
	console.log(apocalipsis1);
	console.log(apocalipsis2);
	console.log(apocalipsis3);
	apocalipsis1.changeName("Pepe");
	console.log(apocalipsis1);
	console.log(apocalipsis2);
	console.log(apocalipsis3);
})();
