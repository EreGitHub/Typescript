"use strict";
(function () {
    // const error = (message: string): never => {
    // 	// throw new Error(message);
    // 	if (false) throw new Error(message); //NOTE esta funcion si tiene un return de tipo vod, entonces es un error
    // };
    var error = function (message) {
        // throw new Error(message);
        if (false)
            throw new Error(message);
        return 1;
    };
    error("error de prueba");
})();
