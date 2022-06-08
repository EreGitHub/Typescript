"use strict";
(function () {
    var fullName = function (firstName, LastName) {
        // if (!firstName) throw new Error("Nombre requerido");
        return "".concat(firstName, " ").concat(LastName);
    };
    // let noName: any;
    // const name = fullName(noName, "Stark");
    var name = fullName("Tony", "Stark");
    console.log({ name: name });
})();
