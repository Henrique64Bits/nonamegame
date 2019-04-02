var Level_1 = {
        map : {
                background : new Image(),
                x : 0, y : 0,
                width : 900, height : 200,
                tiles : [],
                clouds : {
                        sprite : [],
                        position : [],
                        dims : [195, 87]
                }
        },
        main : function( canvas, ctx )
        {
                Level_1.map.background.src = "res/background_1.png";
                ctx.drawImage(Level_1.map.background, 0,0, canvas.width, canvas.height);
                
                var _clouds = 4;
                
                for( a = 0; a < _clouds; a++ )
                {
                        Level_1.map.clouds.sprite[a] = new Image();
                        Level_1.map.clouds.sprite[a].src = "res/cloud_1.png";
                        Level_1.map.clouds.position[a] = [160+(230*a), 150];
                }
        },
        loop : function( canvas, ctx )
        {
                for( a in Level_1.map.clouds.position )
                {
                        Level_1.map.clouds.position[a][0] += -3;
                        
                        if( Level_1.map.clouds.position[a][0] <= -190 )
                        {
                                Level_1.map.clouds.position[a][0] = (Level_1.map.clouds.position[a][0]*3+canvas.width) + (canvas.width+200);
                        }
                }
        }
}
