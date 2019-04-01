var canvas = document.querySelector("#game_canvas");
var ctx = canvas.getContext("2d");

var stylew1 = window.getComputedStyle(canvas).width;
var valor1 = parseInt(stylew1.substr(0,stylew1.search("px")));

var stylew2 = window.getComputedStyle(canvas).height;
var valor2 = parseInt(stylew2.substr(0,stylew2.search("px")));

canvas.width = valor1;
canvas.height = valor2;

var Background = {
     background : new Image(),
     position : [0,0],
     dims : [0,0]
}
Background.background.src = "res/background_1.png";
Background.dims = [canvas.width, canvas.height];

var Clouds = {
     sprite : [],
     position : [],
     dims : [155, 67]
}


for( a in _tiles )
{
     for( i in _tiles[a] )
     {
          Map.tiles[a] = _tiles[a];
     }
}



// Event adapters

window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);

// sla

loop();


// functions basic

function render()
{
     var img = new Image();
     img.src = "res/background_1.png";
     ctx.drawImage(img, 0,0, canvas.width, canvas.height);
     
     var _clouds = 3;
     
     for( a = 0; a < _clouds; a++ )
     {
          Clouds.position[a] = [];
          Clouds.sprite[a] = new Image();
          Clouds.sprite[a].src = "res/cloud_1.png";
          Clouds.position[a] = [400*a, 100];
          ctx.drawImage(Clouds.sprite[a], Clouds.position[a][0],Clouds.position[a][1], Clouds.dims[0], Clouds.dims[1]);
          Clouds.position[a][0] += -3;
     }
    
     ctx.drawImage(Player.image, Player.x, Player.y, Player.width,Player.height);
    
     var tm = [];
    
     for( a in Map.tiles )
     {
          for( i in Map.tiles[a] )
          {
               tm[a] = [];
               tm[a][i] = new Image();
              
               Map.tiles_x[i] = Map.tilesW*i;
               Map.tiles_y[a] = Map.tilesH*a;
                 
               if( Map.tiles[a][i] == 1 )
               {
                   tm[a][i].src = "res/tile_1.png";
                   ctx.drawImage(tm[a][i], 35*i, 35*a, 35,35);
               }
           
          }
     }
}



function loop()
{
    
    requestAnimationFrame(loop, canvas);
    moviment();
    render();
    
    if( Player.gravity == true )
    {
        gravity();
    }
    
    if( Player.jump_bol == true )
    {
        jump();
    }
    
    colliders();
}
