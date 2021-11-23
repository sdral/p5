
class gameScene extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'gameScene' });
    }

    preload() {

        var map = this.load.tilemapTiledJSON('world','assets/world.json')

        //this.load.image("cloud", "assets/Street32x32.png");


         this.load.image('dungeonpng', 'assets/dungeon1.png')
         this.load.image('wallpng', 'assets/wall.png')


        // // chars
        this.load.atlas('left', 'assets/knight_walk_left.png', 'assets/knight_walk_left.json');
        this.load.atlas('right', 'assets/knight_walk_right.png', 'assets/knight_walk_right.json');
        this.load.atlas('up', 'assets/knight_walk_up.png', 'assets/knight_walk_up.json');
        this.load.atlas('down', 'assets/knight_walk_down.png', 'assets/knight_walk_down.json');




    } // end of preload //

    create (){

    console.log("world map")

   var map = this.make.tilemap({key:'world'});


    var tileset1= map.addTilesetImage('dungeon','dungeonpng');
    var tileset2= map.addTilesetImage('wall','wallpng');


    let tilesArray = [tileset1,tileset2]

    this.bgLayer = map.createLayer('bg',tilesArray,0,0).setScale(2)
    this.floorLayer = map.createLayer('floor',tilesArray,0,0).setScale(2)
    this.wallLayer = map.createLayer('wall',tilesArray,0,0).setScale(2)
    this.decoLayer = map.createLayer('deco',tilesArray,0,0).setScale(2)
    this.deco2Layer = map.createLayer('deco 2',tilesArray,0,0).setScale(2)
    this.doorLayer = map.createLayer('door',tilesArray,0,0).setScale(2)
   

    this.anims.create({ 
        key: 'left', 
       frames: [ 
           { key: 'left', frame: 'knight_14' },
           { key: 'left', frame: 'knight_15' }, 
           { key: 'left', frame: 'knight_16' },         
           { key: 'left', frame: 'knight_17' },
           { key: 'left', frame: 'knight_18' },
           { key: 'left', frame: 'knight_19' },
           { key: 'left', frame: 'knight_20' },        
           { key: 'left', frame: 'knight_21' },
           { key: 'left', frame: 'knight_22' },
           { key: 'left', frame: 'knight_23' },
           { key: 'left', frame: 'knight_24' },
           { key: 'left', frame: 'knight_25' },
           { key: 'left', frame: 'knight_26' },
               
       ],
               frameRate: 10,
               repeat: -1
           });

       this.anims.create({ 
        key: 'right', 
       frames: [ 
           { key: 'right', frame: 'knight_01' },
           { key: 'right', frame: 'knight_02' }, 
           { key: 'right', frame: 'knight_03' },         
           { key: 'right', frame: 'knight_04' },
           { key: 'right', frame: 'knight_05' },
           { key: 'right', frame: 'knight_06' },
           { key: 'right', frame: 'knight_07' },        
           { key: 'right', frame: 'knight_08' },
           { key: 'right', frame: 'knight_09' },
           { key: 'right', frame: 'knight_10' },
           { key: 'right', frame: 'knight_11' },
           { key: 'right', frame: 'knight_12' },
           { key: 'right', frame: 'knight_13' },
               
       ],
               frameRate: 10,
               repeat: -1
           });

       this.anims.create({ 
        key: 'up', 
       frames: [ 
           { key: 'up', frame: 'knight_34' },
           { key: 'up', frame: 'knight_35' }, 
           { key: 'up', frame: 'knight_36' },         
           { key: 'up', frame: 'knight_37' },
           { key: 'up', frame: 'knight_38' },
           { key: 'up', frame: 'knight_39' },
           { key: 'up', frame: 'knight_40' },        
           
               
       ],
               frameRate: 10,
               repeat: -1
           });

       this.anims.create({ 
        key: 'down', 
       frames: [ 
           { key: 'down', frame: 'knight_27' },
           { key: 'down', frame: 'knight_28' }, 
           { key: 'down', frame: 'knight_29' },         
           { key: 'down', frame: 'knight_30' },
           { key: 'down', frame: 'knight_31' },
           { key: 'down', frame: 'knight_32' },
           { key: 'down', frame: 'knight_33' },        
           
               
       ],
               frameRate: 10,
               repeat: -1
           });

       
    this.physics.world.bounds.width = this.bgLayer.width*2;
    this.physics.world.bounds.height = this.bgLayer.height*2;



    // load player into phytsics
    this.player = this.physics.add.sprite(30, 260, 'right').setScale(0.9)
    
    window.player = this.player;

    this.player.setCollideWorldBounds(true); // don't go out of the this.map

    this.wallLayer.setCollisionByExclusion(-1, true);

    this.physics.add.collider(this.player,this.wallLayer);


    //  Input Events
    this.cursors = this.input.keyboard.createCursorKeys();

    // make the camera follow the player
    this.cameras.main.startFollow(this.player);


    } // end of create //

    update () {

    if(
        this.player.x > 870 &
        this.player.x < 928 &
        this.player.y > 183 &
        this.player.y < 187 
    ){
        this.room1();
    }

    else if(
        this.player.x > 806 &
        this.player.x < 863 &
        this.player.y > 439 &
        this.player.y < 446
    ){
        this.room2();
    }

    else if(
        this.player.x > 196 &
        this.player.x < 250 &
        this.player.y > 727 &
        this.player.y < 740
    ){
        this.room3();
    }

    else if(
        this.player.x > 773 &
        this.player.x < 830 &
        this.player.y > 855 &
        this.player.y < 868
    ){
        this.room4();
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


    } // end of update // 

    
    room1(player, title){
        console.log("room1 function");
        let playerPos = {};
        playerPos.x = 890
        playerPos.y = 183
        playerPos.dir = "down"

        this.scene.start("room1")
    }

    room2(player, title){
        console.log("room2 function");
    }

    room3(player, title){
        console.log("room3 function");
    }

    room4(player, title){
        console.log("room4 function");
    }


}