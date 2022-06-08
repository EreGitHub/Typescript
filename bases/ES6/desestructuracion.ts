(() => {
	type Avenger = {
		nick: string;
		iroman: string;
		vision: string;
		activo: boolean;
		poder: number;
	};
	const avenger: Avenger = {
		nick: "ruben",
		iroman: "pepe",
		vision: "oscar",
		activo: true,
		poder: 100,
	};

	// const { nick, iroman, vision, activo, poder } = avenger;
	// console.log(poder.toFixed(2), vision.toUpperCase());

	const print = ({ iroman, ...arg }: Avenger) => {
		console.log(iroman, arg);
	};
	print(avenger);

	const avengersArr: string[] = ["capitan america", "ironman", "hulk", "thor"];
	// const iroman = avengersArr[1];
	const [, , , p4] = avengersArr;
	console.log(p4);
})();
