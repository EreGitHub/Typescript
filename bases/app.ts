(() => {
	//NOTE: funcion anonima auto invocada para evitar conflictos con el scope global
	const a: number = 10; //NOTE no podemos cambiar el valor de una constante
	let b: string; //NOTE podemos cambiar el valor de una variable

	function sayHello(msg: string) {
		console.log(msg);
	}
})();
