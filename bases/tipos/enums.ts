(() => {
	enum AudioLevel {
		min = 1, // 0
		medium, // 1
		max = 10, // 2
	}

	let currentAudio = AudioLevel.max;
	// let currentAudio = 10;
	// let currentAudio = "10";

	console.log(currentAudio);
	console.log(AudioLevel);
})();
