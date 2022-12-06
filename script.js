'use strict';

let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', '<i>Saturday</i>', '<i>Sunday</i>'];
let today = new Date().getDay();
let day = (6 + today) % 7;

week[day] = '<b>' + week[day] + '</b>';
  
document.body.insertAdjacentHTML("beforeend", week.join("<p>"));