'use strict';

let lang = prompt("Укажите язык: ru/en");
const   eng = ['Monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        rus = ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница','суббота', 'воскресенье'];

if (lang == 'ru') {
    console.log(rus);
} else if (lang == 'en') {
    console.log(eng);
} else {
    console.log("Упс, что-то пошло не по плану(");
}

switch (lang) {
    case 'ru':
        console.log(rus);
        break;
    case 'en':
        console.log(eng);
        break;
    default:
        console.log("Упс, что-то пошло не по плану(");
}

let arr = {
    'ru': rus,
    'en': eng,
};
console.log(arr[lang]);

let namePerson = prompt("Укажите свое имя: ");

// Сделал ненужную переменную result, потому что без нее валидатор ругается 
let result = (namePerson == 'Артем') ? console.log("Директор") :
(namePerson == 'Александр') ? console.log("Преподаватель") : 
console.log("Студент");
