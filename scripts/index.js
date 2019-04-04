var canvas = document.querySelector("#game_canvas");
var ctx = canvas.getContext("2d");

var stylew1 = window.getComputedStyle(canvas).width;
var valor1 = parseInt(stylew1.substr(0,stylew1.search("px")));

var stylew2 = window.getComputedStyle(canvas).height;
var valor2 = parseInt(stylew2.substr(0,stylew2.search("px")));

canvas.width = valor1;
canvas.height = valor2;



// Event adapters

//window.addEventListener("keydown", keyDown);
//window.addEventListener("keyup", keyUp);

loop();


// functions basic



function render()
{    
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
     
    if( _scene == "menu" )
    {
         window.addEventListener("keydown", Menu.keyDown);
         window.addEventListener("keyup", Menu.keyUp);
    }
    if( _scene == "level_1" )
    {
         Player.jump();
         Player.gravity();
         Player.moviment();
         Player.update(canvas,ctx);
         window.addEventListener("keydown", Player.keyDown);
         window.addEventListener("keyup", Player.keyUp);
    }
}
