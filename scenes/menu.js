var Menu = {
        background : new Image(),
        selects : ["play", "controlls", "options"],
        select : 0,
        clear : false,
        
        hide : function( canvas, ctx )
        {
                ctx.clearRect(0,0, canvas.width, canvas.height);
        },
        
        keyDown : function( e )
        {
                var code = e.keyCode;
                
                if( code == 83 || code == 40 )
                {
                        if( Menu.select == 0 )
                        {
                                Menu.select = 1;
                        } 
                        else if( Menu.select == 1 )
                        {
                                Menu.select = 2;
                        }
                        else if( Menu.select == 2 )
                        {
                                Menu.select = 0;
                        }
                }
                if( code == 87 || code == 38 )
                {
                        if( Menu.select == 0 )
                        {
                                Menu.select = 2;
                        } 
                        else if( Menu.select == 1 )
                        {
                                Menu.select = 0;
                        }
                        else if( Menu.select == 2 )
                        {
                                Menu.select = 1;
                        }
                }
                
                if( code == 13 )
                {
                        if( Menu.select == 0 )
                        {
                                Menu.clear = true;
                                _scene = "level_1";
                        }
                }
        },
        keyUp : function( e )
        {
                var code = e.keyCode;
        },
        main : function( canvas, ctx )
        {
                Menu.background.src = "res/background_1.png";
                ctx.drawImage(Menu.background, 0,0, canvas.width, canvas.height);
                
                Menu.title = new Image();
                Menu.title.src = "res/title_0.png";
                ctx.drawImage(Menu.title, canvas.width/3, 50, 200, 70);
                
                if( Menu.select == 0 )
                {
                        ctx.font = "15px Kiwi";
                        ctx.fillText("play game", canvas.width/2.4, 200);
                }
                else
                {
                        ctx.font = "13px Kiwi";
                        ctx.fillText("play game", canvas.width/2.4, 200);
                }
                
                if( Menu.select == 1 )
                {
                        ctx.font = "15px Kiwi";
                        ctx.fillText("controlls", canvas.width/2.4, 250);
                }
                else
                {
                        ctx.font = "13px Kiwi";
                        ctx.fillText("controlls", canvas.width/2.4, 250);
                }
                
                if( Menu.select == 2 )
                {
                        ctx.font = "15px Kiwi";
                        ctx.fillText("options", canvas.width/2.4, 300);
                }
                else
                {
                        ctx.font = "13px Kiwi";
                        ctx.fillText("options", canvas.width/2.4, 300);
                }
                
                if( Menu.clear == true )
                {
                        Menu.hide(canvas, ctx);
                }
                
                
        }
};
