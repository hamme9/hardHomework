'use strict';

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const todayDay = new Date();

week.forEach(function(item, i){
    if (i == todayDay.getDay() - 1 && item == 'Saturday' || todayDay.getDay() == 0 && item == 'Sunday') {
        document.body.insertAdjacentHTML("beforeend", "<div><b><i>" + week[i] + "</i></b></div>");
    }  else if (item == 'Saturday' || item == 'Sunday') {
        document.body.insertAdjacentHTML("beforeend", "<div><i>" + week[i] + "</i></div>");
    }else if (i == todayDay.getDay() - 1){
        document.body.insertAdjacentHTML("beforeend", "<div><b>" + week[i] + "</b></div>");
    } else {
        document.body.insertAdjacentHTML("beforeend", "<div>" + week[i] + "</div>");
    }
});