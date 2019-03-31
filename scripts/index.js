var canvas = document.querySelector("#game_canvas");
var ctx = canvas.getContext("2d");

var stylew1 = window.getComputedStyle(canvas).width;
var valor1 = parseInt(stylew1.substr(0,stylew1.search("px")));

var stylew2 = window.getComputedStyle(canvas).height;
var valor2 = parseInt(stylew2.substr(0,stylew2.search("px")));

canvas.width = valor1;
canvas.height = valor2;



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
    img.src = "https://i.imgur.com/dUHek7i.png";
    ctx.drawImage(img, 0,0, canvas.width, canvas.height);
    
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
                
            if( Map.tiles[a][i] == 0 )
            {
                //none
            }
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
    
    var camX = clamp(-Player.x + canvas.width/2, 0, 2000 - canvas.width);
    var camY = clamp(-Player.y + canvas.height/2, -50, 2000 - canvas.height);

    ctx.translate( camX, camY );
}
