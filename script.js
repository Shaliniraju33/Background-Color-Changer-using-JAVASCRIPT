let my_body = document.querySelector("#my_body");
let btnRed = document.querySelector("#btn-red");
let btnYellow = document.querySelector("#btn-yellow");
let btnBlue = document.querySelector("#btn-blue");
let btnGreen = document.querySelector("#btn-green");
let btnReset = document.querySelector("#btn-reset");

btnRed.addEventListener('click',function(){
    my_body.style.background="red";
});
btnYellow.addEventListener('click',function(){
    my_body.style.background="yellow";
});
btnBlue.addEventListener('click',function(){
    my_body.style.background="blue";
});
btnGreen.addEventListener('click',function(){
    my_body.style.background="green";
});
btnReset.addEventListener('click',function(){
    my_body.style.background="white";
});
