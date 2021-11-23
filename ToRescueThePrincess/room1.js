class room1 extends Phaser.Scene {

    constructor() {
        super('room1');
        
        // Put global variable here
    }


    init(data) {
        this.playerPos = data.playerPos;
    
    }

    preload() {
        var map = this.load.tilemapTiledJSON('room1','assets/room1.json')

        this.load.image('dungeonpng', 'assets/dungeon1.png')
         this.load.image('wallpng', 'assets/wall.png')

    }

    create() {
        console.log('*** room1 scene');

        var map = this.make.tilemap({key:'room1'});

        var tileset1= map.addTilesetImage('dungeon','dungeonpng');
    var tileset2= map.addTilesetImage('wall','wallpng');


    let tilesArray = [tileset1,tileset2]
    
    this.floorLayer = map.createLayer('floor',tilesArray,0,0).setScale(2)
    this.decoLayer = map.createLayer('deco',tilesArray,0,0).setScale(2)
    this.wallLayer = map.createLayer('wall',tilesArray,0,0).setScale(2)
    this.deco2Layer = map.createLayer('deco 2',tilesArray,0,0).setScale(2)
    this.doorLayer = map.createLayer('door',tilesArray,0,0).setScale(2)

    this.physics.world.bounds.width = this.floorLayer.width*2;
    this.physics.world.bounds.height = this.floorLayer.height*2;



    // load player into phytsics
    this.player = this.physics.add.sprite(290, 450, 'up').setScale(0.9)
    
    window.player = this.player;

    this.player.setCollideWorldBounds(true); // don't go out of the this.map

    this.wallLayer.setCollisionByExclusion(-1, true);
    this.doorLayer.setCollisionByExclusion(-1, true);

    this.physics.add.collider(this.player,this.wallLayer);
    this.physics.add.collider(this.player,this.doorLayer);


    //  Input Events
    this.cursors = this.input.keyboard.createCursorKeys();

    // make the camera follow the player
    this.cameras.main.startFollow(this.player);
    }

    update() {

        if(
            this.player.x > 284.8 &
            this.player.x < 306.5 &
            this.player.y > 516 &
            this.player.y < 520 
        ){
            this.gameScene();
        }

        if (this.cursors.left.isDown) 
    {
        this.player.setVelocityX(-200);
        this.player.anims.play('left', true);
    } 
    else if (this.cursors.right.isDown)
    {
        this.player.setVelocityX(200);
        this.player.anims.play('right', true);
    }
    else if (this.cursors.up.isDown)
    {
        this.player.setVelocityY(-200);
        this.player.anims.play('up', true);
    }
    else if (this.cursors.down.isDown)
    {
        this.player.setVelocityY(200);
        this.player.anims.play('down', true);
    } else {
        this.player.setVelocity(0);
    }

    }///////// end of update //////////
    
    
    gameScene(player, title){
        console.log("gameScene function");
        let playerPos = {};
        playerPos.x = 890
        playerPos.y = 183
        playerPos.dir = "down"
        this.scene.start("gameScene")
    }

}
