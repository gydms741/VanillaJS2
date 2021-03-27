// localStorage에 정보를 저장할 수 있음.

const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function askForName(){
    form.classList.add(SHOWING_CN);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //Someone is not
        askForName();
    }else{
        //Someone is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();