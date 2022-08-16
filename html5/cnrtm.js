function logo()
{
var sam=document.getElementById("mycanvas");
var ctx=sam.getContext("2d");

ctx.font="bold 50px algerian";
ctx.fontStyle="aqua";
ctx.fillText("sameera",100,90);
ctx.rotate(Math.PI/18);
}

window.addEventListener("load",logo,false);