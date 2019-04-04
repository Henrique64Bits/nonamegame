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
                        [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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
                 Level_1.map.clouds.sprite[0] = new Image();
                 Level_1.map.clouds.sprite[0].src = "res/cloud_1.png";
                 Level_1.map.clouds.position[0] = [160+(230*0), 150];
                
                 Level_1.map.clouds.sprite[1] = new Image();
                 Level_1.map.clouds.sprite[1].src = "res/cloud_1.png";
                 Level_1.map.clouds.position[1] = [160+(230*1), 150];
                
                 Level_1.map.clouds.sprite[2] = new Image();
                 Level_1.map.clouds.sprite[2].src = "res/cloud_1.png";
                 Level_1.map.clouds.position[2] = [160+(230*2), 150];
                
                 Level_1.map.clouds.sprite[3] = new Image();
                 Level_1.map.clouds.sprite[3].src = "res/cloud_1.png";
                 Level_1.map.clouds.position[3] = [160+(230*3), 150];
        },
        loop : function( canvas, ctx )
        {
                Level_1.map.background.src = "res/background_1.png";
                ctx.drawImage(Level_1.map.background, 0,0, canvas.width, canvas.height);
                
                Player.update(canvas,ctx);
                Player.gravity();
                Player.jump();
                Player.moviment();
                
                for( a = 0; a < 3; a++  )
                {
                        Level_1.map.clouds.position[a][0] += -3;
                        ctx.drawImage(Level_1.map.clouds.sprite[a], Level_1.map.clouds.position[a][0], Level_1.map.clouds.position[a][1], Level_1.map.clouds.dims[a][0], Level_1.map.clouds.dims[a][1]);
                        
                        if( Level_1.map.clouds.position[a][0] <= -190 )
                        {
                                Level_1.map.clouds.position[a][0] = (Level_1.map.clouds.position[a][0]*3+canvas.width) + (canvas.width+200);
                        }
                }
                
                for( y in Level_1.map.tiles )
                {
                        for( x in Level_1.map.tiles[y] )
                        {
                                if( Level_1.map.tiles[y][x] == 1 )
                                {
                                        var tm = new Image();
                                        tm.src = "res/tile_1.png";
                                        ctx.drawImage(tm, 30*x,30*y, 30,30);
                                }
                        }
                }
        }
}
