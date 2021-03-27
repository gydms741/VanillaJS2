// setInterval을 통해 실시간으로 변화하는 시간을 볼 수 있음.

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours<10 ? `0${hours}`: hours} : ${
        minutes<10 ? `0${minutes}` : minutes} : ${
        seconds<10 ? `0${seconds}` : seconds}`
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();