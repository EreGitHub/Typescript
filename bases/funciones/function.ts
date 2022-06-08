(() => {
	const heroe: string = "Flash";

	function returnName(): string {
		return heroe;
	}

	const activateBatisSignal = (): string => {
		return "Batis Signal Activated";
	};

	console.log(typeof activateBatisSignal);

	const heroeName = returnName();
})();
