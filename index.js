//console.log(document);// HTML document be a JS
//DOM : Document Object Module
//JS is going to take all your elements in your html
//Is gonna turn them into object

// const title = document.getElementById("title")
// title.innerText = "Hi!!!"
// title.style.color = "blue"; 
// console.dir(title);

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();
