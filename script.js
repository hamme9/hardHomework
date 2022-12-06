'use strict';
const timer = () => {
    let dateNow = new Date()
    const timeToday = document.querySelector('.time-today')
    const timeNow = document.querySelector('.time-now')

    const hoursTest = dateNow.getHours().toString().slice(-1)
    const minutesTest = dateNow.getMinutes().toString().slice(-1)
    const secondsTest = dateNow.getSeconds().toString().slice(-1)

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

    fullDate = dateRu.charAt(0).toUpperCase() + dateRu.slice(1)

    if(hoursTest>= '5' || hoursTest== '0') hours +=  ' часов ';
    if(hoursTest== '1') hours +=  ' час ';
    if(hoursTest>= '2' && hoursTest<= '4') hours +=  ' часа ';

    if(minutesTest>= '5' || minutesTest== '0') minutes += ' минут ';
    if(minutesTest== '1') minutes += ' минута ';
    if(minutesTest>= '2' && minutesTest<= '4') minutes += ' минуты ';

    if(secondsTest>= '5' || secondsTest== '0') seconds += ' секунд ';
    if(secondsTest== '1') seconds += ' секунда ';
    if(secondsTest>= '2' && secondsTest<= '4') seconds += ' секунды ';

    timeToday.textContent = fullDate + ', ' + hours + minutes + seconds

    hours = dateNow.getHours()
    minutes = dateNow.getMinutes()
    seconds = dateNow.getSeconds()

    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    hours = (hours < 10) ? '0' + hours : hours;

    timeNow.textContent = dateNow.toLocaleDateString() + ' - ' + hours + ':' + minutes + ':' + seconds

}
timer()
setInterval(() => {
    timer()
}, 1000);