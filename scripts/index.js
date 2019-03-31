// Variables

var Map = {
    viewX: 0,
    viewY: 0,
    tiles: [],
    tilesW: 30,
    tilesH: 30,
    tiles_img: ["","res/tiles_0.png"],
    tiles_x: [],
    tiles_y: []
}

var Player = {
    x: 100,
    y: 70,
    width: 30,
    height: 70,
    src: "res/bob_0.png",
    velX: 0, 
    jump: 0,
    jump_bol: false,
    gravity: true
};
Player.image = new Image();
Player.image.src = Player.src;





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

function keyDown( event )
{
    var code = event.keyCode;
    
    if( code == 37 )
    {
        Player.velX = -7;
    } else if( code == 39 )
    {
        Player.velX = 7;
    }
    if( code == 38 )
    {
        if( Player.jump > -20 )
        {
            Player.jump_bol = true;3
            
            if( Player.jump <= -20 )
            {
                Player.jump_bol = false;
                Player.jump = 0;
                Player.gravity = true;
            }
        }
        if( Player.jump <= -20 )
        {
            Player.jump_bol = false;
            Player.gravity = true;
            Player.jump = 0;
        }
    }
}

function keyUp( event )
{
    var code = event.keyCode;
    
    if( code == 37 )
    {
        Player.velX = 0;
    } else if( code == 39 )
    {
        Player.velX = 0;
    }
    if( code == 38 )
    {
        //Player.jump_bol = false;
        //Player.jump = 0;
        //Player.gravity = true;
    }
}








// mechanics functions

function moviment()
{
    Player.x += Player.velX;
    Player.y = Player.y+Player.jump;
}

function jump()
{
    if( Player.jump_bol == true )
    {   
        if( Player.jump > -20 )
        {
            Player.gravity = false;
            Player.jump += -10;
            
            if( Player.jump <= -20 )
            {
                Player.jump_bol = false;
                Player.gravity = true;
                Player.jump = 0;
            }
        }
        if( Player.jump <= -20 )
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
                ctx.drawImage(tm[a][i], Map.tilesW*i, Map.tilesH*a, Map.tilesW, Map.tilesH);
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
                if( Player.y + Player.height  > Map.tiles_y[i] && Player.y < Map.tiles_y[i]+Map.tilesH  &&  Player.x + Player.width  >= Map.tiles_x[a]  &&  Player.x <  Map.tiles_x[a] + Map.tilesW )
                {
                    Player.y = ( (Map.tiles_y[i] - Player.height) );
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
