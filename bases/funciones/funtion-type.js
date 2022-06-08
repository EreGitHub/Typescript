"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "hola ".concat(name); };
    var saveWorld = function () { return "el mundo esta salvado"; };
    console.log(addNumbers(1, 2));
    // TODO ANY
    // let myFuntion;
    // myFuntion = 10;
    // console.log(myFuntion);
    // myFuntion = addNumbers;
    // console.log(myFuntion(1, 2));
    // myFuntion = greet;
    // console.log(myFuntion("ruben"));
    // myFuntion = saveWorld;
    // console.log(myFuntion());
    // // TODO Function
    // let myFuntion: Function;
    // myFuntion = 10; //NOTE Error
    // console.log(myFuntion);
    // myFuntion = addNumbers; //TODO ok
    // console.log(myFuntion(1, 2));
    // myFuntion = greet; //TODO ok
    // console.log(myFuntion("ruben"));
    // myFuntion = saveWorld; //TODO ok
    // console.log(myFuntion());
    // TODO Function que regresa numero
    var myFuntion;
    myFuntion = 10; //NOTE Error
    console.log(myFuntion);
    myFuntion = addNumbers; //TODO ok
    console.log(myFuntion(1, 2));
    myFuntion = greet; //TODO Error
    console.log(myFuntion("ruben"));
    myFuntion = saveWorld; //TODO Error
    console.log(myFuntion());
})();
