"use strict";
(function () {
    var fullName = function (firstName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(args.join(" "));
    };
    // const superman = fullName("ruben", "rios", "ortega", "sin barrio");
    var superman = fullName("ruben", "rios");
    console.log({ superman: superman });
})();
