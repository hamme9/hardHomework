'use strict';

let lang = prompt("Укажите язык: ru/en");

if (lang == 'ru') {
    console.log("Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
} else if (lang == 'en') {
    console.log("Monday, tuesday, wednesday, thursday, friday, saturday, sunday");
} else {
    console.log("Упс, что-то пошло не по плану(");
}

switch (lang) {
    case 'ru':
        console.log("Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
        break;
    case 'en':
        console.log("Monday, tuesday, wednesday, thursday, friday, saturday, sunday");
        break;
    default:
        console.log("Упс, что-то пошло не по плану(");
}


let arr = {
    'ru':['Понедельник', 'вторник', 'среда', 'четверг', 'пятница','суббота', 'воскресенье'],
    'en':['Monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
};
console.log(arr[lang]);

let namePerson = prompt("Укажите свое имя: ");


// Сделал ненужную переменную result, потому что без нее валидатор ругается 
let result = (namePerson == 'Артем') ? console.log("Директор") :
(namePerson == 'Александр') ? console.log("Преподаватель") : 
console.log("Студент");
