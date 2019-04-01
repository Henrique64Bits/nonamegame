function keyDown( event )
{
    var code = event.keyCode;
    
    if( code == 37 )
    {
        Player.velX = -10;
        Player.image = GIF();
        Player.image.load = "res/bob/bob_1.gif";
    } else if( code == 39 )
    {
        Player.velX = 10;
        Player.image = GIF();
        Player.image.load = "res/bob/bob_0.gif";
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
        //Player.image.src = "res/bob/bob_1.png";
    } else if( code == 39 )
    {
        Player.velX = 0;
        //Player.image.src = "res/bob/bob_0.png";
    }
    if( code == 38 )
    {
        // pass
    }
}
