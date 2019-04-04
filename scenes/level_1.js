var Level_1 = {
        map : {
                background : new Image(),
                x : 0, y : 0,
                width : 900, height : 200,
                clouds : {
                        _clouds : 4,
                        sprite : [],
                        position : [],
                        dims : [195, 87]
                },
                
                tiles : [
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                ]
        },
        
        keyDown : function( e )
        {
                var code = e.keyCode;
                Player.keyDown(e);
        },
        keyUp : function( e )
        {
                var code = e.keyCode;
                Player.keyUp(e);
        },
        
        main : function( canvas, ctx )
        {
        },
        loop : function( canvas, ctx )
        {
                Level_1.map.background.src = "res/background_1.png";
                ctx.drawImage(Level_1.map.background, 0,0, canvas.width, canvas.height);
                
                Player.update(canvas,ctx);
                Player.gravity();
                Player.jump();
                Player.moviment();

                var tm = new Image();
                tm.src = "https://raw.githubusercontent.com/Henrique64Bits/nonamegame/master/res/tile_1.png";
                
                for( y = 0; y < 8; y++ )
                {
                        for( x in Level_1.map.tiles[y] )
                        {
                                if( Level_1.map.tiles[y][x] == 1 )
                                {
                                        ctx.drawImage(tm, 50*x, 50*y, 50,50);
                                }
                        }
                }
                
        }
}
