function keyDown( event )
{
    var code = event.keyCode;
    
    if( code == 37 )
    {
        Player.velX = -10;
        PLayer.running = true;
    } else if( code == 39 )
    {
        Player.velX = 10;
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
        Player.running = false;
    } else if( code == 39 )
    {
        Player.velX = 0;
    }
    if( code == 38 )
    {
        // pass
    }
}
