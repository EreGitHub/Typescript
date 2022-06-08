"use strict";
(() => {
    //NOTE: funcion anonima auto invocada para evitar conflictos con el scope global
    const a = 10; //NOTE no podemos cambiar el valor de una constante
    let b; //NOTE podemos cambiar el valor de una variable
    function sayHello(msg) {
        console.log(msg);
    }
})();
