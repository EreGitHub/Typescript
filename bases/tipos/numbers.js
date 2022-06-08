"use strict";
(function () {
    var avengers = 10;
    var villanos = 20;
    if (avengers < villanos) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("nos salvamos");
    }
    // avengers = 123;
    // avengers = Number("55");
    avengers = Number("55A"); //NOTE NaN es considerado como numero en js
    console.log({ avengers: avengers });
})();
