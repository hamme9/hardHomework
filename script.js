'use strict';

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const todayDay = new Date();
console.log(todayDay.getDay());

// for (let key in week) {
//     console.log(week[key]);
// }

week.forEach(function(item, i){
    console.log(item + ' ' + i);
    
    if (i == todayDay.getDay() - 1){
        // week[i].style.fontWeight = 'bold';
        document.body.insertAdjacentHTML("beforeend", "<div><i>" + week[i] + "<i></div>");
    }
});