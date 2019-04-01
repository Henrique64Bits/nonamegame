function keyDown( event )
{
    var code = event.keyCode;
    
    if( code == 37 )
    {
        Player.velX = -10;
        Player.runLeft = true;
    } else if( code == 39 )
    {
        Player.velX = 10;
        Player.runRight = true;
    }
    if( code == 38 )
    {
        Player.jump_bol = true;
    }
}

function keyUp( event )
{
    var code = event.keyCode;
    
    if( code == 37 )
    {
        Player.velX = 0;
        Player.runLeft = false;
    } else if( code == 39 )
    {
        Player.velX = 0;
        Player.runRight = false;
    }
    if( code == 38 )
    {
        // pass
    }
}
