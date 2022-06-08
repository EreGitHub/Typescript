"use strict";
(function () {
    var isSuperman = true;
    var isBatman = false;
    // isSuperman = true && false; //NOTE -> false
    // isSuperman = true && true; //NOTE -> true
    isBatman = isBatman ? true : false;
    console.log({ isSuperman: isSuperman });
})();
