var Map = {
                viewX           : 0,
                viewY           : 0,
                tiles           : [],
                tilesW          : 35,
                tilesH          : 35,
                tiles_img       : ["","res/tiles_0.png"],
                tiles_x         : [],
                tiles_y         : [],
                mapW            : 2000,
                mapH            : 1000
}

var Tiles = {
                tiles_x         : [],
                tiles_y         : [],
                tiles_img       : [],
                tiles_w         : [],
                tiles_h         : []
}

var Blocks = [
                {
                                sprite : "",
                                dims : []
                },
                {
                                sprite : "res/tile_1.png",
                                dims : [30, 30]
                }
];

for( a in Tiles.tiles_img )
{
                Tiles.tiles_img[a] = [];
                Tiles.tiles_x[a] = [];
                Tiles.tiles_y[a] = [];
                Tiles.tiles_w[a] = [];
                Tiles.tiles_h[a] = [];
}

var Player = {
                x: 100,
                y: 70,
                width: 30,
                height: 70,
                src: [["res/bob/bob_0-1.png","res/bob/bob_0.png","res/bob/bob_0-2"], ["res/bob/bob_1-1.png","res/bob/bob_1.png","res/bob/bob_1-2"]],
                velX: 0,
                jump: 0,
                jump_bol: false,
                gravity: true,
                ground: false,
                runLeft: false, runRight: false,
                src_count: [0, 1]
};
Player.image = new Image();
Player.image.src = Player.src[Player.src_count[0]][Player.src_count[1]];
