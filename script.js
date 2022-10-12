'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && String(num).trim() != '0';
};

let a;
let b;

while (!isNumber(a)) {
    a = prompt("Введите что-то");
    a = String(a).trim();
    a = +a;
    console.log("a =", a);
}
