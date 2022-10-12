'use strict';

let argumentOne = "  Привет";
let argumentTwo = 12;
let argumentThree = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

const myFunc = function(arg) {
    if (typeof arg !== 'string') {
        return "В качестве аргумента передана не строка!";
    } else if (typeof arg === "string" && arg.length <= 30) {
        return arg.trim();
    } else if (arg.length > 30) {
        return arg.slice(0, 30) + '...';
    }
};

console.log(myFunc(argumentOne));
console.log(myFunc(argumentTwo));
console.log(myFunc(argumentThree));