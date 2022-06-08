"use strict";
(function () {
    var heroe = "Flash";
    function returnName() {
        return heroe;
    }
    var activateBatisSignal = function () {
        return "Batis Signal Activated";
    };
    console.log(typeof activateBatisSignal);
    var heroeName = returnName();
})();
