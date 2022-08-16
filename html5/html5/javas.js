function logo()
{
var sam=document.getElementById("mycanvas");
var ctx=sam.getContext("2d");

ctx.font="50px elephant";
ctx.fillStyle="red";
ctx.fillText("sameera",30,100);
ctx.strokeStyle="aqua";
ctx.strokeText("sameera",30,100);

var sai=document.getElementById("mycanvas");
var ctx1=sai.getContext("2d");

ctx1.font="50pt Arial";
ctx1.strokeStyle="green";
ctx.strokeText("sai",50,300);

}
window.addEventListener("load",logo,false);