"use strict";
(function () {
    var fullName = function (firstName, LastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper)
            return "".concat(firstName, " ").concat(LastName || "(no last name)").toUpperCase();
        else
            return "".concat(firstName, " ").concat(LastName || "(no last name)");
    };
    var name = fullName("Tony", "Star", true);
    // const name = fullName("Tony", "Star");
    console.log({ name: name });
})();
