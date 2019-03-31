var canvas = document.querySelector("#game_canvas");
var ctx = canvas.getContext("2d");

var stylew1 = window.getComputedStyle(canvas).width;
var valor1 = parseInt(stylew1.substr(0,stylew1.search("px")));

var stylew2 = window.getComputedStyle(canvas).height;
var valor2 = parseInt(stylew2.substr(0,stylew2.search("px")));

canvas.width = valor1;
canvas.height = valor2;


var viewport = {
     screen      : [0,0],
     startTile   : [0,0],
     endTile     : [0,0],
     offset      : [0,0],
     update      : function( px, py )
     {
          this.offset[0] = Math.floor((this.screen[0]/2) - px);
          this.offset[1] = Math.floor((this.screen[1]/2) - py);
          
          var tile = [
               Math.floor(px/tileW),
               Math.floor(py/tileH)
          ];
          
          this.startTile[0] = tile[0] - 1 -
               Math.ceil((this.screen[0]/2) / tileW);
          this.startTile[1] = tile[1] - 1 -
               Math.ceil((this.screen[1]/2) / tileH);
          
          if( this.startTile[0] < 0 )
          {
               this.startTile[0] = 0;
          }
          if( this.startTile[1] < 0 ) 
          {
               this.startTile[1] = 0;
          }
          
          this.endTile[0] = tile[0] + 1 +
               Math.ceil((this.screen[0]/2) / tileW);
          this.endTile[1] = tile[1] + 1 +
               Math.ceil((this.screen[1]/2) / tileH);
               
          if( this.endTile[0] >= mapW )
          {
               this.endTile[0] = mapW - 1;
          }
          if( this.endTile[1] >= mapH )
          {
               this.endTile[1] = mapH - 1;
          }
     }
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
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
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
    
    var camX = clamp(-Player.x + canvas.width/2, 0, 700 - canvas.width);
    var camY = clamp(-Player.y + canvas.height/2, 0, 600 - canvas.height);

    ctx.translate( Player.x, Player.y );
}

function clamp( value, min, max )
{
    if( value < min ) 
    {
        return min;
    }
    else if ( value > max ) 
    {
        return max;
    }
    return value;
}
