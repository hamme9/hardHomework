'use strict';

let argumentOne = "  Привет";
let argumentTwo = 12;
let argumentThree = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

const myFunc = function(arg) {
    if (typeof arg !== 'string') {
        console.log("В качестве аргумента передана не строка!");
        return;
    }
    let result = arg.trim();
    return result.length > 30 ? result.slice(0, 30) + '...' : result;
};

console.log(myFunc(argumentOne));
console.log(myFunc(argumentTwo));
console.log(myFunc(argumentThree));