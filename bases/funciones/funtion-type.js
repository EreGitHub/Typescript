"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "hola ".concat(name); };
    var saveWorld = function () { return "el mundo esta salvado"; };
    console.log(addNumbers(1, 2));
    var myFuntion;
    myFuntion = 10;
    console.log(myFuntion);
    myFuntion = addNumbers;
    console.log(myFuntion(1, 2));
    myFuntion = greet;
    console.log(myFuntion("ruben"));
    myFuntion = saveWorld;
    console.log(myFuntion());
})();
//# sourceMappingURL=funtion-type.js.map