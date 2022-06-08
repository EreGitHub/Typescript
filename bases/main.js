"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avenger = {
        nick: "ruben",
        iroman: "pepe",
        vision: "oscar",
        activo: true,
        poder: 100,
    };
    const print = (_a) => {
        var { iroman } = _a, arg = __rest(_a, ["iroman"]);
        console.log(iroman, arg);
    };
    print(avenger);
})();
(() => {
    let a = "ruben";
    const b = {
        a: 1,
        b: 2,
    };
    b.a = 10;
    const getName = () => { };
})();
//# sourceMappingURL=main.js.map