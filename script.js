'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num[0] != ' ' && num.slice(-1) != ' ' && num >= 0;
};

let a;
let b;

while (!isNumber(a)) {
    a = prompt("Введите что-то");
    console.log("a =", a);
}
