'use strict';

const arr = ['  2293', '2111', '6432', '7654', '4312', '9852', '9862'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].trim()[0] == 2 || arr[i].trim()[0] == 4) {
        console.log(arr[i]);
    }
}

let n = 100;

for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) { // проверка, делится ли число без остатка на j
        if (i % j === 0) { 
            isPrime = false; 
            break; // если нет, то проверяем следующее
        } 
    }
    if (isPrime) {
        console.log(i);
    }
}