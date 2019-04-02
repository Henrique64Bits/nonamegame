var Player = {
        position : [0,0],
        dims : [70,100],
        sprite : new Image(),
        
        update : function( canvas, ctx )
        {
                Player.sprite.src = "res/bob/bob_0.png";
                ctx.drawImage(Player.sprite, Player.position[0], Player.position[1], Player.dims[0], Player.dims[1]);
        }
}
