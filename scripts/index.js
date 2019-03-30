// background image: https://i.imgur.com/8WrImnw.png
// bob image: https://i.imgur.com/SL6zT7u.png

// Variables

var Map = {
    viewX: 0,
    viewY: 0,
    tiles: [],
    tilesW: 0,
    tilesH: 0,
    tiles_img: ["","res/tiles_0.png"]
}

var Player = {
    x: 100,
    y: 70,
    src: "res/Bob.png",
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
         Map.tiles[a][i] = _tiles[a][i];
         Map.tilesW = canvas.width/i;
         Map.tilesH = canvas.height/a;
        
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
        Player.velX = -2;
    } else if( code == 38 )
    {
        Player.jump_bol = true;
    } else if( code == 39 )
    {
        Player.velX = 2;
    }
}

function keyUp( event )
{
    var code = event.keyCode;
    
    if( code == 37 )
    {
        Player.velX = 0;
    } else if( code == 38 )
    {
        Player.jump_bol = false;
    } else if( code == 39 )
    {
        Player.velX = 0;
    }
}








// mechanics functions

function moviment()
{
    Player.x += Player.velX;
    //Player.y += Player.jump;
}

function jump()
{
    if( Player.jump_bol != true && Player.gravity != false )
    {
        Player.jump_bol = true;
        Player.gravity = false;
        
        if( Player.jump < 10 )
        {
            Player.jump += 1;
        } 
        else if( Player.jump >= 10 )
        {
            Player.jump_bol = false;
            Player.jump = 0;
            Player.gravity = true;
        }
    }
}
/*
function gravity()
{
    if( Player.gravity == true )
    {
        Player.y += 1;
    } 
}
*/

// functions basic

function render()
{
    var img = new Image();
    img.src = "https://i.imgur.com/dUHek7i.png";
    ctx.drawImage(img, 0,0, canvas.width, canvas.height);
    
    ctx.drawImage(Player.image, Player.x, Player.y, 30,70);
    
    var tm = [];
    
    for( a in Map.tiles )
    {
        for( i in Map.tiles[a] )
        {
            tm[a] = [];
            tm[a][i] = new Image();
            if( Map.tiles[a][i] == 0 )
            {
                //none
            }
            if( Map.tiles[a][i] == 1 )
            {
                tm[a][i].src = "res/tile_0.png";
                ctx.drawImage(tm[a][i], 50*i, 50*a, 50, 50);
            }
        }
    }
}

function loop()
{
    requestAnimationFrame(loop, canvas);
    moviment();
    render();
    jump();
    //gravity();
}
