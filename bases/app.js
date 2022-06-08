"use strict";
(function () {
    //NOTE: funcion anonima auto invocada para evitar conflictos con el scope global
    var a = 10; //NOTE no podemos cambiar el valor de una constante
    var b; //NOTE podemos cambiar el valor de una variable
    function sayHello(msg) {
        console.log(msg);
    }
})();
