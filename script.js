const num = 266219;
let multipl = 1;
let arr = [];

for (let i = 0; i < num.toString().length; i++) { 
    arr = ('' + num).split('');
    multipl *= arr[i];
}

console.log("Результат поциферного умножения =", multipl);

let pow = multipl ** 3;
console.log("Результат возведения в 3 степень полученного ответа =", pow);

console.log("Первые 2 цифры результата =", String(pow).slice(0,2));