(() => {
	class Avenger {
		constructor(public name: string, public realName: String) {
			console.log("contructor avenger llamado");
		}

		protected getFullName(): string {
			return `${this.name} ${this.realName}`;
		}
	}

	class Xmen extends Avenger {
		constructor(name: string, realName: String, public isMutante: boolean) {
			super(name, realName);
			console.log("constructor xmen llamado");
		}
		getFullNameDesdeXmen(): string {
			return this.getFullName();
		}
	}

	const wolverine = new Xmen("Wolverine", "Logan", true);
	console.log(wolverine);
	console.log(wolverine.getFullNameDesdeXmen());

	const nuevoAvenger = new Avenger("Ironman", "Tony Stark");
	// nuevoAvenger.getFullName(); //NOTE no accesibles por que es protected
})();
