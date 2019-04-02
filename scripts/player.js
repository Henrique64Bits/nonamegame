var Player = {
        position : [0,0],
        dims : [70,100],
        sprite : new Image(),
        src : [["res/bob/bob_1-2.png", "res/bob/bob_1.png", "res/bob/bob_1-1.png"], ["res/bob/bob_0-2.png", "res/bob/bob_0.png", "res/bob/bob_0-1.png"]],
        src_count : [1,1],
        
        update : function( canvas, ctx )
        {
                Player.sprite.src = Player.src[Player.src_count[0]][Player.src_count[1]];
                ctx.drawImage(Player.sprite, Player.position[0], Player.position[1], Player.dims[0], Player.dims[1]);
        }
}
