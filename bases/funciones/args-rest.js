"use strict";
(function () {
    var fullName = function (firstName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(args.join(" "));
    };
    var superman = fullName("ruben", "rios");
    console.log({ superman: superman });
})();
//# sourceMappingURL=args-rest.js.map