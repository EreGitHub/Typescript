"use strict";
(function () {
    // let flash: Object = {
    var flash = {
        name: "ruben",
        age: 24,
        powers: ["speed", "fly", "xray"],
    };
    flash = {
        name: "otro nombre",
        // age: 50,
        powers: ["speed", "fly", "xray"],
        getName: function () {
            return this.name;
        },
    };
    console.log(flash);
})();
