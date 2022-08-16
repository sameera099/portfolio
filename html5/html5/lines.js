function logo()
{
var sai=document.getElementById("mycanvas");
var ctx=sai.getContext("2d");
ctx.beginPath();
ctx.moveTo(300,300);
ctx.lineTo(200,150);
ctx.lineTo(150,200);
ctx.lineTo(300,300);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50,100);
ctx.lineTo(100,100);
ctx.lineTo(300,100);
ctx.lineTo(100,300);
ctx.lineTo(50,100);
ctx.closePath();
ctx.stroke();
}
window.addEventListener("load",logo,false);