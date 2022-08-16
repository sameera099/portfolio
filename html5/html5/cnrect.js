function logo()
{
var sam=document.getElementById("mycanvas");
var ctx=sam.getContext("2d");

ctx.fillStyle="aqua";
ctx.fillRect(10,10,200,100);

ctx.strokeStyle="yellow";
ctx.strokeRect(10,10,200,100);
 ctx.clearRect(20,20,150,80);
}
window.addEventListener("load",logo,false);