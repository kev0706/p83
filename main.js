canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent=""
var lastPositionOfMouseX=""
var lastPositionOfMouseY=""
var lastPositionOfTouchX=""
var lastPositionOfTouchY=""
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    widthOfLine=document.getElementById("widthinput").innerHTML.value;
    color=document.getElementById("colorinput");
    var mouseEvent= "mousedown";
}
canvas.addEventListner("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListner("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListner("mousemove", my_mousemove);

function my_mousemove(e){
    mouseEvent="mousemove";

    CurrentPostitionOfMouseX= e.clientX - canvas.offsetLeft;
    CurrentPostitionOfMouseY= e.clientY - canvas.offsetTop;

    if(mouseEvent == mousedown){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.moveTo(lastPositionOfMouseX, lastPositionOfMouseY);
        ctx.lineTo(CurrentPostitionOfMouseX, CurrentPostitionOfMouseY);
        ctx.stroke();
    }
    lastPositionOfMouseX=CurrentPostitionOfMouseX;
    lastPositionOfMouseY=CurrentPostitionOfMouseY;
}