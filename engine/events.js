// inits
var Events = {};
Events.keys = {};

// Adapters

window.addEventListener("keydown", Events.keyPress);
window.addEventListener("keyup", Events.keyReleased);

// API functions

Events.keyPress = function( def )
{
    def.key = event.keyCode;
    def();
}
Events.keyReleased = function( def )
{
    def.key = event.keyCode;
    def();
}

Events.keys.left = function( press, released )
{
    Events.keyPress( function()
    {
        if( this.key == 37 )
        {
            press();
        }
    });
    Events.keyReleased( function()
    {
        if( this.key == 37 )
        {
            released();
        }
    });;
}

Events.keys.up = function( press, released )
{
    Events.keyPress( function()
    {
        if( this.key == 38 )
        {
            press();
        }
    });
    Events.keyReleased( function()
    {
        if( this.key == 38 )
        {
            released();
        }
    });;
}

Events.keys.right = function( press, released )
{
    Events.keyPress( function()
    {
        if( this.key == 39 )
        {
            press();
        }
    });
    Events.keyReleased( function()
    {
        if( this.key == 39 )
        {
            released();
        }
    });;
}

Events.keys.down = function( press, released )
{
    Events.keyPress( function()
    {
        if( this.key == 40 )
        {
            press();
        }
    });
    Events.keyReleased( function()
    {
        if( this.key == 40 )
        {
            released();
        }
    });;
}
