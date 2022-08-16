function logo()
{
var sai=document.getElementById("mycanvas");
var ctx=sai.getContext("2d");
ctx.shadowOffsetX=14;
ctxshadowOffsetY=14;
ctx.shadowBlur=6;
ctx.shadowColor="aqua";
ctx.font="50pt algerian";
ctx.fillStyle="yellow";
ctx.fillText("sameera",30,200);
}
window.addEventListener("load",logo,false);