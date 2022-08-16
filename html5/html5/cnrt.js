function logo()
{
var sam=document.getElementById("mycanvas");
var ctx=sam.getContext("2d");
ctx.beginPath();
ctx.arc(300,200,100,0,2*Math.PI);
ctx.fillStyle="pink";
ctx.arc(200,100,50,Math.PI,2*Math.PI);
ctx.fillStyle="blue";
ctx.fill();
}
window.addEventListener("load",logo,false);