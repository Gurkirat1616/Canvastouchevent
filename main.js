canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var last_position_of_X,last_position_of_Y;

var width=screen.width;

var new_width=screen.width-70;

var new_height=screen.height-300;

if (width<992)
{
    document.getElementById("mycanvas").width=new_width;
    document.getElementById("mycanvas").height=new_height;
    document.body.style.overflow="hidden";
}






canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
    console.log("mytouchstart");
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_position_of_X=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_Y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=2;
    ctx.moveTo(last_position_of_X,last_position_of_Y);
    ctx.lineTo(current_position_of_X,current_position_of_Y);
    ctx.stroke();
    last_position_of_X=current_position_of_X;
    last_position_of_Y=current_position_of_Y
    }