(() => {
	interface Xmen {
		nombre: string;
		realName: string;
		mutantPower(id: number): string;
	}
	interface Human {
		age: number;
	}

	class Mutant implements Xmen, Human {
		public age: number;
		public nombre: string;
		public realName: string;
		mutantPower(id: number): string {
			return `${this.nombre} tiene ${id} poder`;
		}
	}
})();
