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

		get FullName() {
			return `${this.name} - ${this.realName}`;
		}

		set FullName(name: string) {
			if (name.length < 3) throw new Error("El nombre es muy corto");
			this.name = name;
		}
	}

	const wolverine = new Xmen("Wolverine", "Logan", true);
	console.log(wolverine.FullName);
	wolverine.FullName = "Logan";
	console.log(wolverine.FullName);
})();
