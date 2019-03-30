// background image: https://i.imgur.com/8WrImnw.png
// bob image: https://i.imgur.com/SL6zT7u.png

// Variables

var Map = {
    viewX: 0,
    viewY: 0,
    tiles: [],
    tilesW: 30,
    tilesH: 30,
    tiles_img: ["","res/tiles_0.png"]
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
         //Map.tiles[a][i] = _tiles[a][i];
        
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
        Player.jump_bol = true;
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
        Player.jump_bol = false;
        Player.jump = 0;
        Player.gravity = true;
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
        if( Player.jump < 10 )
        {
            Player.gravity = false;
            Player.jump += -7;
        } 
        else if( Player.jump >= 10 )
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
        Player.y += 10;
    }
}

function collider( obj1, obj2 )
{
    /*if( ( obj1.x + obj1.width ) >= obj2.x )
    {
        return true;
    }
    else if( obj1.x <= ( obj2.x + obj2.width ) )
    {
        return true;
    }*/
    
    if( ( obj1.y + obj1.height ) >= obj2.y )
    {
        return true;
    }
    /*else if( obj1.y <= ( obj2.y + obj2.height ) )
    {
        return true;
    }*/
    
    return false;
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
            if( Map.tiles[a][i] == 0 )
            {
                //none
            }
            if( Map.tiles[a][i] == 1 )
            {
                tm[a][i].src = "res/tile_1.png";
                ctx.drawImage(tm[a][i], Map.tilesW*i, Map.tilesH*a, Map.tilesW, Map.tilesH);
            }
            
            if( collider(Player.image, tm[a][i]) == true )
            {
                alert("colidiu!");
            }
        }
    }
}

function loop()
{
    requestAnimationFrame(loop, canvas);
    moviment();
    render();
    gravity();
    if( Player.jump_bol == true )
    {
        jump();
    }
}
