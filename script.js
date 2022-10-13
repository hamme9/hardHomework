'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num[0] != ' ' && String(num).slice(-1) != ' ' && num >= 0;
};

let a;
let b;

while (!isNumber(a)) {
    a = prompt("Введите что-то");
    a = String(a);
    console.log("a =", a);
}
