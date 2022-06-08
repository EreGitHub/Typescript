"use strict";
(function () {
    var flash = {
        name: "ruben",
        age: 24,
        powers: ["speed", "fly", "xray"],
    };
    // flash = { name2: "otro nombre" }; //NOTE error, crear un nuevo tipo
    flash = {
        name: "otro nombre",
        age: 50,
        powers: ["speed", "fly", "xray"],
        getNombre: function () {
            return this.name;
        },
    };
    console.log(flash);
})();
