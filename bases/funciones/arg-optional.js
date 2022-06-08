"use strict";
(function () {
    var fullName = function (firstName, LastName) {
        return "".concat(firstName, " ").concat(LastName || "(no last name)");
    };
    var name = fullName("Tony");
    console.log({ name: name });
})();
//# sourceMappingURL=arg-optional.js.map