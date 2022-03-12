
let nameInp = prompt("İsim ver isim,Örnek: Sefer Kul");

let welcInp = document.querySelector("p#welC");
welcInp.innerHTML=`Merhaba, <b>${nameInp.toUpperCase()}<b>! Hoş geldin`;

let currentT= document.querySelector("#clock");

function upTime(){
    const date= new Date();

    const hour= date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();

    var currentTime= `${hour} : ${minute} : ${seconds} `
    console.log(currentTime)
    currentT.innerHTML=currentTime;
}

setInterval(upTime,1000)