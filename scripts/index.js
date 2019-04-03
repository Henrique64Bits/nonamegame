var canvas = document.querySelector("#game_canvas");
var ctx = canvas.getContext("2d");

var stylew1 = window.getComputedStyle(canvas).width;
var valor1 = parseInt(stylew1.substr(0,stylew1.search("px")));

var stylew2 = window.getComputedStyle(canvas).height;
var valor2 = parseInt(stylew2.substr(0,stylew2.search("px")));

var _scene = "menu";

canvas.width = valor1;
canvas.height = valor2;



// Event adapters

window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);


Level_1.main(canvas, ctx);
loop();


// functions basic



function render()
{
     var img = new Image();
     img.src = "res/background_1.png";
     ctx.drawImage(img, 0,0, canvas.width, canvas.height);
     
     if( _scene == "menu" )
     {
          Menu.main(canvas, ctx);
     }
     if( _scene == "level_1" )
     {
          Level_1.loop(canvas, ctx);
     }
}



function loop()
{
    requestAnimationFrame(loop, canvas);
    render();
}
