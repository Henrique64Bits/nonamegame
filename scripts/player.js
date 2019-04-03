var Player = {
        _position : [0,0],
        _dims : [70,100],
        _vel : [0,0],
        _gravity : true,
        _jump : false,
        _ground : false,
        _sprite : new Image(),
        _src : [["res/bob/bob_1-2.png", "res/bob/bob_1.png", "res/bob/bob_1-1.png"], 
               ["res/bob/bob_0-2.png", "res/bob/bob_0.png", "res/bob/bob_0-1.png"]],
        _src_count : [1,1],
        
        moviment : function()
        {
                Player._position[0] += Player._vel[0];
                Player._position[1] += Player._vel[1];
        },
        
        gravity : function()
        {
                if( Player._gravity == true )
                {
                        Player._vel[1] += 10;
                }
        },
        
        jump : function()
        {
                if( Player._jump == true )
                {
                        if( Player._vel[1] > -50 )
                        {
                                Player._gravity = false;
                                Player._vel[1] += -10;
                        }
                        if( Player._vel[1] <= -50 )
                        {
                                Player._jump = false;
                                Player._vel[1] = 0;
                                Player._gravity = true;
                        }
                }
        },
        
        update : function( canvas, ctx )
        {
                Player._sprite.src = Player._src[Player._src_count[0]][Player._src_count[1]];
                ctx.drawImage(Player._sprite, Player._position[0], Player._position[1], Player._dims[0], Player._dims[1]);
        }
}
