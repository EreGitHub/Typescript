"use strict";
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    },
};
var villanos = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true,
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true,
    },
];
var charles = {
    poder: "psiquico",
    estatura: 1.78,
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};
var mystique;
mystique = charles;
mystique = apocalipsis;
(function () {
    var a = 10;
    var b;
    function sayHello(msg) {
        console.log(msg);
    }
})();
(function () {
    var batman = "Bruce";
    var superman = "Clark";
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ["Lex Lutor", 5, true];
    var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    var Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["Aquaman"] = 0] = "Aquaman";
        Fuerza[Fuerza["batman"] = 1] = "batman";
        Fuerza[Fuerza["Flash"] = 5] = "Flash";
        Fuerza[Fuerza["Superman"] = 100] = "Superman";
    })(Fuerza || (Fuerza = {}));
    var fuerzaFlash = Fuerza.Flash;
    var fuerzaSuperman = Fuerza.Superman;
    var fuerzaBatman = Fuerza.batman;
    var fuerzaAcuaman = Fuerza.Aquaman;
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    var poder = "100";
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(function () {
    var fullName = function (firstName, LastName) {
        return "".concat(firstName, " ").concat(LastName || "(no last name)");
    };
    var name = fullName("Tony");
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, LastName) {
        return "".concat(firstName, " ").concat(LastName);
    };
    var name = fullName("Tony", "Stark");
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, LastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper)
            return "".concat(firstName, " ").concat(LastName || "(no last name)").toUpperCase();
        else
            return "".concat(firstName, " ").concat(LastName || "(no last name)");
    };
    var name = fullName("Tony", "Star", true);
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(args.join(" "));
    };
    var superman = fullName("ruben", "rios");
    console.log({ superman: superman });
})();
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
(function () {
    var flash = {
        name: "ruben",
        age: 24,
        powers: ["speed", "fly", "xray"],
    };
    var superman = {
        name: "ruben2",
        age: 20,
        powers: ["speed", "xray"],
    };
    console.log(flash);
})();
(function () {
    var flash = {
        name: "ruben",
        age: 24,
        powers: ["speed", "fly", "xray"],
    };
    var superman = {
        name: "ruben2",
        age: 20,
        powers: ["speed", "xray"],
        getName: function () {
            return this.name;
        },
    };
    console.log(flash);
})();
(function () {
    var myCustomVariable = "ruben";
    console.log(typeof myCustomVariable);
    myCustomVariable = 10;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "ruben3",
        age: 43,
        powers: [1, 2],
    };
    console.log(typeof myCustomVariable);
})();
(function () {
})();
(function () {
    var avenger = 123;
    var exist;
    var power;
    avenger = "Dr. Strange";
    console.log(avenger.charAt(0));
    avenger = 150.1684;
    console.log(avenger.toFixed(2));
    console.log(exist);
    console.log(power);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villanos = ["Omega Rojo", "Dormammu", "Duende Verde"];
    villanos.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isBatman = isBatman ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    var error = function (message) {
        if (false)
            throw new Error(message);
        return 1;
    };
    error("error de prueba");
})();
(function () {
    var avengers = 10;
    var villanos = 20;
    if (avengers < villanos) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("nos salvamos");
    }
    avengers = Number("55A");
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = "batman";
    var linternaVerde = "linterna's  verde";
    var volcanNegro = "heroe volc\u00E1n negro";
    var abc = 123;
    console.log("I'm ".concat(batman, ", ").concat(abc.toString()));
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No esta presente");
})();
(function () {
    var heroe = ["Dr. Strange", 100, true];
    heroe[0] = "Iroman";
    heroe[1] = 200;
    heroe[2] = false;
    console.log(heroe);
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map