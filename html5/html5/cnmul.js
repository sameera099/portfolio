function logo()
{
var sam=document.getElementById("mycanvas");
var ctx=sam.getContext("2d");
var display=ctx.createLinearGradient(0,100,500,0);

display.addColorStop(.0,"blue");
display.addColorStop(.25,"yellow");
display.addColorStop(.5,"pink");
display.addColorStop(.75,"red");
display.addColorStop(1,"black");
ctx.fillStyle=display;
ctx.font="50pt elephant";
ctx.fillText("sameera",50,200);


}
window.addEventListener("load",logo,false);