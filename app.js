let tg = window.Telegram.WebApp;

tg.expand();

let item = "";

let btn1 = document.getElementById("i-1");
let btn2 = document.getElementById("i-2");
let btn3 = document.getElementById("i-3");
let btn4 = document.getElementById("i-4");
let btn5 = document.getElementById("i-5");
let btn6 = document.getElementById("i-6");

btn1.addEventListener("click", function(){
    item = '1';
    tg.sendData(item);
});

btn2.addEventListener("click", function(){
    item = '2';
    tg.sendData(item);
});

btn3.addEventListener("click", function(){
    item = '3';
    tg.sendData(item);
});

btn4.addEventListener("click", function(){
    item = '4';
    tg.sendData(item);
});

btn5.addEventListener("click", function(){
    item = '5';
    tg.sendData(item);
});

btn6.addEventListener("click", function(){
    item = '6';
    tg.sendData(item);
});