"use strict";
(function () {
    // // NOTE "ANY"
    // let avenger: any = 123;
    // // const exist; //NOTE error una constante tiene que esta inicializada
    // let exist;
    // let power;
    // avenger = "Dr. Strange";
    // console.log(avenger.charAt(0)); //NOTE no tengo el auto completado al ser any
    // avenger = 150.1684;
    // console.log(avenger.toFixed(2));
    // console.log(exist);
    // console.log(power);
    // // NOTE "NUMBER"
    // let avenger: number = 123;
    // let exist;
    // let power;
    // avenger = "Dr. Strange"; //NOTE error no se puede asignar un string a un numero
    // console.log(avenger.charAt(0)); //NOTE charAt() no funciona con un string
    // avenger = 150.1684;
    // console.log(avenger.toFixed(2));
    // console.log(exist);
    // console.log(power);
    // // NOTE "STRING"
    // let avenger: string = 123; //NOTE no se puede asignar un numeros a un string
    // let exist;
    // let power;
    // avenger = "Dr. Strange";
    // console.log(avenger.charAt(0));
    // avenger = 150.1684; //NOTE error no se puede asignar un numero a un string
    // console.log(avenger.toFixed(2)); //NOTE toFixed() no funciona con un string
    // console.log(exist);
    // console.log(power);
    // NOTE Casting "as"
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
