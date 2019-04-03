var Menu = {
        background : new Image(),
        
        keyDown : function( e )
        {
                var code = e.keyCode;
                
                alert("tecla : "+code);
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
                
                ctx.font = "15px Kiwi";
                ctx.fillText("play game", canvas.width/2.4, 200);
                
        }
};
