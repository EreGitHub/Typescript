(() => {
	abstract class Mutante {
		constructor(public name: string, public realName: string) {}
	}

	class Xmen extends Mutante {
		salvarMunto() {
			return `mundo a salvo`;
		}
	}

	class Villan extends Mutante {
		conquistarMundo() {
			return `mundo conquistado`;
		}
	}

	// const wolverine: Mutante = new Mutante("Wolverine", "Logan"); //NOTE una clase abstracta no se puede NEW
	const wolverine: Xmen = new Xmen("Wolverine", "Logan");
	console.log(wolverine);
	console.log(wolverine.salvarMunto());

	const magneto: Villan = new Villan("Magneto", "magnus");
	console.log(magneto);
	console.log(magneto.conquistarMundo());

	const printName = (caracter: Mutante) => {
		console.log(caracter.name);
	};
	printName(wolverine);
	printName(magneto);
})();
