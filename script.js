'use strict';


const timeToday = document.querySelector('.time-today')
const timeNow = document.querySelector('.time-now')

const hoursTest = ['час','часа','часов']
const minutesTest = ['минута','минуты','минут']
const secondsTest = ['секунда','секунды','секунд']

const timer = () => {
    let dateNow = new Date()
    let fullDate
    let hours = dateNow.getHours()
    let minutes = dateNow.getMinutes()
    let seconds = dateNow.getSeconds()

    const options = { 
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    }
    
    const dateRu = dateNow.toLocaleString('ru-RU', options);

    fullDate = (dateRu.charAt(0).toUpperCase() + dateRu.slice(1)).replace(/г.$/gm, 'год')

    timeToday.textContent = fullDate + ', ' + addEnd(hours, hoursTest, hours) + ' ' + addEnd(minutes, minutesTest, minutes) + ' ' + addEnd(seconds, secondsTest, seconds)

    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    hours = (hours < 10) ? '0' + hours : hours;

    timeNow.textContent = dateNow.toLocaleDateString() + ' - ' + hours + ':' + minutes + ':' + seconds

}

const addEnd = (num, arr, time) => {
    num = Math.abs(num) % 100; 
    let count = num % 10;
    if(num > 10 && num < 20) return time + ' ' + arr[2]; 
    if(count > 1 && count < 5) return time + ' ' + arr[1];
    if(count == 1) return time + ' ' + arr[0]; 
    return time + ' ' + arr[2];
}

timer()
setInterval(() => {
    timer()
}, 1000);