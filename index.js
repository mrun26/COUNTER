let h1 = document.querySelector("h1");

let inc = document.querySelector(".inc");
let dnc = document.querySelector(".dnc");
let reset = document.querySelector(".reset");
let movement = document.querySelector(".movement")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let input = document.querySelector("input")

let count = 0;

input.onclick = function(event){
    console.log(event.target.value)
    event.target.value = "Mrunmayee"
    event.target.style.backgroundColor = 'pink';
}

function incHandler() {
    count = count+1;
    h1.textContent = count;
}
function dncHandler() {
    count = count-1;
    h1.textContent = count;
}
function resetHandler() {
    count = 0;
    h1.textContent = count;
}
function mouseMoveHandler() {
    one.textContent = event.screenX;
    two.innerText = event.screenY;
    three.innerText = event.clientX;
    four.innerText = event.clientY; 
}

inc.addEventListener("click",incHandler);
dnc.addEventListener("click",dncHandler);
reset.addEventListener("click",resetHandler);
movement.addEventListener("mousemove",mouseMoveHandler );
