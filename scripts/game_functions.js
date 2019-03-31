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
