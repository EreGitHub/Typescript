"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    // isSuperman = true && false; //NOTE -> false
    // isSuperman = true && true; //NOTE -> true
    isBatman = isBatman ? true : false;
    console.log({ isSuperman });
})();
