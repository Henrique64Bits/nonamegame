var Menu = {
        background : new Image(),
        main : function( canvas, ctx )
        {
                Menu.background.src = "res/background_0.png";
                ctx.drawImage(Menu.background, 0,0, canvas.width, canvas.height);
                
                Menu.title = new Image();
                Menu.title.src = "res/title_0.png";
                ctx.drawImage(Menu.title, canvas.width/3, 50, 200, 70);
                
        }
};
