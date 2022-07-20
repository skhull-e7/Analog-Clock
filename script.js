let date = new Date();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSecond = date.getSeconds();

let x = currentSecond * 6;
let y = currentMinute * 6 + ((6/60)*currentSecond);
var z = currentHour * 30 + ((30/60)*currentMinute + (((30/60)/60)*currentSecond));

setInterval(function () {
    x += 6/100;
    y += (6/100/60);
    z += (6/100/60/12);
    document.querySelector(".secondLine").style.transform = "rotate(" + x + "deg)";
    document.querySelector(".minuteLine").style.transform = "rotate(" + y + "deg)";
    document.querySelector(".hourLine").style.transform = "rotate(" + z + "deg)";}, 10);

window.addEventListener("focus", function () {
  window.location.reload();
});