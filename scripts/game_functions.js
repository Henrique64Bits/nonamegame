function moviment()
{
    Player.x += Player.velX;
    Player.y = Player.y+Player.jump;
}

function jump()
{
    if( Player.jump_bol == true && Player.ground != false )
    {   
        if( Player.jump > -50 )
        {
            Player.gravity = false;
            Player.jump += -10;
        }
        if( Player.jump <= -50 )
        {
            Player.jump_bol = false;
            Player.jump = 0;
            Player.gravity = true;
        }
    }
}


function gravity()
{
    if( Player.gravity == true )
    {
        Player.y += 20;
    }
}

function colliders()
{
    for( a in Map.tiles_x )
    {
        for( i in Map.tiles_y )
        {  
            if( Map.tiles[i][a] != 0 )
            {
                if( Player.y + Player.height  > Map.tiles_y[i] && Player.y < Map.tiles_y[i]+35  &&  Player.x + Player.width  >= Map.tiles_x[a]  &&  Player.x <  Map.tiles_x[a] + 35 )
                {
                    Player.y = ( (Map.tiles_y[i] - Player.height) );
                    Player.ground = true;
                }
            }
        }
    }
}
