setInterval(showTime, 1000);
function showTime(){

var date = new Date();
var h = date.getHours(); // 0 - 23
var m = date.getMinutes(); // 0 - 59
var s = date.getSeconds(); // 0 - 59
session="AM";
if(h>12){

    h=h-12;
    session="PM";
}
var time = h + ":" + m + ":" + s+ " "+session ;

document.getElementById("MyClockDisplay").innerText = time;
}    



//showTime();























































