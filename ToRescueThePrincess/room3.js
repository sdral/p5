class room3 extends Phaser.Scene {

    constructor() {
        super('room3');
        
        // Put global variable here
    }


    init(data) {
    
    }

    preload() {
        var map = this.load.tilemapTiledJSON('room3','assets/room1.json')

        this.load.image('dungeonpng', 'assets/dungeon1.png')
         this.load.image('wallpng', 'assets/wall.png')

    }

    create() {
        console.log('*** room3 scene');

        var map = this.make.tilemap({key:'room3'});

        var tileset1= map.addTilesetImage('dungeon','dungeonpng');
    var tileset2= map.addTilesetImage('wall','wallpng');


    let tilesArray = [tileset1,tileset2]
        
    }

    update() {

    }

    

}
