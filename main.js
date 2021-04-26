
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
    
canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;

var color = document.getElementById("input_color").value;
var width_of_line = document.getElementById("width_of_line").value;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    mouseEvent="mouseDown";

}
canvas.addEventListener("mouseLeave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseLeave";

}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseUP";

}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();

        ctx.strokeStyle = document.getElementById("input_color").value;
        console.log("ctx.strokeStyle =" + ctx.strokeStyle);

        ctx.lineWidth = document.getElementById("width_of_line").value;
        console.log("ctx.lineWidth =" + ctx.lineWidth);

        console.log("last position of x and y coordenates = ");
        console.log("x =" + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current position of x and y coordenates = ");
        console.log("x =" + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);

        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}

function colur()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
