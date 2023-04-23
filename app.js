tg = window.Telegram.WebApp;

tg.expand();
let data = "";

let btn1 = document.getElementById("item-1");

btn1.addEventListener("click", function(){
   data = "1";
   tg.sendData(data);
});

