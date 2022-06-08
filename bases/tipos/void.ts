(() => {
	function callBatman(): void {
		// return 1; //NOTE void can't return a value
		return;
	}

	const callSuperman = (): void => {
		return;
	};

	const a = callBatman();
	console.log(a);
})();
