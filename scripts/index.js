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
}

function keyUp( event )
{
    var code = event.keyCode;
}

function moviment()
{
    
}

// functions basic

function render()
{
    var img = new Image();
    img.src = "https://i.imgur.com/dUHek7i.png";
    ctx.drawImage(img, 0,0, canvas.width, canvas.height);
}

function loop()
{
    requestAnimationFrame(loop, canvas);
    moviment();
    render();
}