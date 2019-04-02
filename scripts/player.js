var Player = {
        position : [0,0],
        dims : [70,100],
        vel : [0,0],
        gravity : true,
        jump : false,
        ground : false,
        sprite : new Image(),
        src : [["res/bob/bob_1-2.png", "res/bob/bob_1.png", "res/bob/bob_1-1.png"], 
               ["res/bob/bob_0-2.png", "res/bob/bob_0.png", "res/bob/bob_0-1.png"]],
        src_count : [1,1],
        
        moviment : function()
        {
                Player.position[0] += Player.vel[0];
                Player.position[1] += Player.vel[1];
        },
        
        jump : function()
        {
                if( Player.jump == true )
                {
                        if( Player.vel[1] > -50 )
                        {
                                Player.gravity = false;
                                Player.vel[1] += -10;
                        }
                        if( Player.vel[1] <= -50 )
                        {
                                Player.jump = false;
                                Player.vel[1] = 0;
                                Player.gravity = true;
                        }
                }
        },
        
        update : function( canvas, ctx )
        {
                Player.sprite.src = Player.src[Player.src_count[0]][Player.src_count[1]];
                ctx.drawImage(Player.sprite, Player.position[0], Player.position[1], Player.dims[0], Player.dims[1]);
        }
}
