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



// Key controls







// mechanics functions

function moviment()
{
    Player.x += Player.velX;
    Player.y = Player.y+Player.jump;
}

function jump()
{
    if( Player.jump_bol == true && Player.ground != false )
    {   
        if( Player.jump > -50 )
        {
            Player.gravity = false;
            Player.jump += -10;
        }
        if( Player.jump <= -50 )
        {
            Player.jump_bol = false;
            Player.jump = 0;
            Player.gravity = true;
        }
    }
}


function gravity()
{
    if( Player.gravity == true )
    {
        Player.y += 20;
    }
}



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

function colliders()
{
    for( a in Map.tiles_x )
    {
        for( i in Map.tiles_y )
        {  
            if( Map.tiles[i][a] != 0 )
            {
                if( Player.y + Player.height  > Map.tiles_y[i] && Player.y < Map.tiles_y[i]+35  &&  Player.x + Player.width  >= Map.tiles_x[a]  &&  Player.x <  Map.tiles_x[a] + 35 )
                {
                    Player.y = ( (Map.tiles_y[i] - Player.height) );
                    Player.ground = true;
                }
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
