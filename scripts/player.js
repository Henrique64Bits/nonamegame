var Player = {
        _position : [0,0],
        _dims : [30,70],
        _vel : [0,0],
        _gravity : true,
        _jump : false,
        _ground : false,
        _sprite : new Image(),
        _src : [["res/bob/bob_1-2.png", "res/bob/bob_1.png", "res/bob/bob_1-1.png"], 
               ["res/bob/bob_0-2.png", "res/bob/bob_0.png", "res/bob/bob_0-1.png"]],
        _src_count : [1,1],
        
        colliders : function( tl )
        {
                for( y in tl )
                {
                        for( x in tl[y] )
                        {
                                var i = tl[y][x]
                                if( i == 1 )
                                {
                                        var pBottom = Player._position[1] + Player._dims[1];
                                        var pTop = Player._position[1];
                                        var pRight = Player._position[0] + Player._dims[0];
                                        var pLeft = Player._position[0];
                                        
                                        var bBottom = (30*y) + Blocks[i].dims[1];
                                        var bRight = (30*x) + Blocks[i].dims[0];
                                        var bLeft = 30*x;
                                        var bTop = 30*y;
                                        
                                        if( pBottom >= bTop && pRight > bLeft && pLeft < bRight && pBottom < bBottom )
                                        {
                                                Player._position[1] = bTop-Player._dims[1];
                                        }
                                        else
                                        {
                                                if( Player._jump == true )
                                                {
                                                        Player._jump = false;
                                                        Player._vel[1] = 0;
                                                        Player._gravity = true;
                                                }
                                        }
                                }
                        }
                }
        },
        
        keyDown : function( e )
        {
                var code  = e.keyCode;
                
                if( code == 65 || code == 37 )
                {
                        Player._vel[0] = -10;
                }
                else if( code == 68 || code == 39 )
                {
                        Player._vel[0] = 10;
                }
                
                if( code == 87 || code == 38 )
                {
                        Player._jump = true;
                }
        },
        keyUp : function( e )
        {
                var code = e.keyCode;
                
                if( code == 65 || code == 37 )
                {
                        Player._vel[0] = 0;
                }
                else if( code == 68 || code == 39 )
                {
                        Player._vel[0] = 0;
                }
        },
        
        moviment : function()
        {
                Player._position[0] += Player._vel[0];
                Player._position[1] += Player._vel[1];
        },
        
        gravity : function()
        {
                if( Player._gravity == true )
                {
                        Player._vel[1] = 5;
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
                                Player._vel[1] = 0;
                                Player._jump = false;
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
