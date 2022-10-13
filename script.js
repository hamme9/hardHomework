'use strict';

const arr = ['  2293', '2111', '6432', '7654', '4312', '9852', '9862'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].trim()[0] == 2 || arr[i].trim()[0] == 4) {
        console.log(arr[i]);
    }
}

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) { //перебираем числа i
  for (let j = 2; j < i; j++) { //перебираем делители числа i
    if (i % j == 0) { //проверяем есть ли делитель у i среди делителей j
        continue nextPrime; //если есть делитель, то начинаем цикл заново
    }
  }

  console.log('Делитель числа', i, '= 1 и', i);
}
