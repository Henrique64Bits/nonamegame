// background image: https://i.imgur.com/8WrImnw.png

var Player = {
    x: 0,
    y: 0,
    src: "https://i.imgur.com/SL6zT7u.png",
    velX: 0, 
    jump: 0,
    jump_bol: false,
    gravity: true
};
Player.image = new Image();
Player.image.src = Player.src;

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// key adapters

window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);

loop();

// Key controls

function keyDown( event )
{
    var code = event.keyCode;
    
    if( code == 37 )
    {
        Player.velX = 2;
    } else if( code == 38 )
    {
        Player.jump_bol = true;
    } else if( code == 39 )
    {
        Player.velX = -2;
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
    Player.y += Player.jump;
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

function gravity()
{
    if( Player.gravity == true )
    {
        Player.y += 1;
    } 
}

// functions basic

function render()
{
    var img = new Image();
    img.src = "https://i.imgur.com/dUHek7i.png";
    ctx.drawImage(img, 0,0, canvas.width, canvas.height);
    
    ctx.drawImage(Player.image, Player.x, Player.y, 20,70);
}

function loop()
{
    requestAnimationFrame(loop, canvas);
    moviment();
    render();
    jump();
    gravity();
}
