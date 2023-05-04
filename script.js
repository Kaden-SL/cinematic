class Intro extends Phaser.Scene {
    constructor() {
        super({ key: 'introscene' });
 
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('Logo', 'Logo.png');
    }
    create(){


this.imageObject = this.add.image(
    1000,//x
    600,//y
    'Logo',//imagename
)
this.imageObject.setScale(0.8) //resize
this.cameras.main.fadeIn(3000)
this.time.addEvent({
    delay: 3000,
    loop: false,
    callback: () => {
        this.textObject = this.add.text(
            900, //x
            800,//y
            "Click to continue", //text
            {
                font: "bold 20px Arial",
                color: "#000000",
            });
        this.tweens.add({
                targets: this.textObject,
                alpha:{ from: 0, to: 1 },
                duration: 5000,
                ease: 'linear'
            });
    }
})

this.input.once('pointerdown', function ()
        {
            this.scene.start('animated');

        }, this);

    }

    
}

class Animated extends Phaser.Scene {
    constructor() {
        super({ key: 'animated' });
        
    }
    preload(){
        this.load.path = './assets/';
        this.load.video('video', 'introvid 1.mp4');
    }
    create(){
        this.video = this.add.video(1000, 600, 'video');
        this.video.setScale(0.8)
        this.video.play();
        this.time.addEvent({
            delay:5000,
        callback: () => {
            this.cameras.main.fadeOut(3000)
            }
            
        })
        this.time.addEvent({
            delay:8000,
        callback: () => {
            this.scene.start('textsplash');
            }
            
        })


    }

    
}
class Textsplash extends Phaser.Scene {
    constructor() {
        super({ key: 'textsplash' });    
    }
    preload(){
        this.load.path = './assets/';
        this.load.audio('Somewhere',['somewhere.mp3']);
        this.load.audio('warehouse',['warehouse.mp3']);
    }
    create(){
        this.cameras.main.setBackgroundColor('#000000')
        this.textObject = this.add.text(
            300, //x
            100,//y
            "SOMEWHERE", //text
            {
                font: "bold 80px Arial",
                color: "#FFFFFF",
            });
        this.audio1= this.sound.add('Somewhere',{ loop: false });
        this.audio1.play()
        this.tweens.add({
            targets: this.textObject,
            alpha:{ from: 0, to: 1 },
            duration: 5000,
            ease: 'linear'
        });
        this.time.addEvent({
            delay: 4000,
            loop: false,
            callback: () => {
                this.textObject2 = this.add.text(
                    1000, //x
                    600,//y
                    "IN AN ABANDONED WAREHOUSE", //text
                    {
                        font: "bold 80px Arial",
                        color: "#FFFFFF",
                    });
                this.tweens.add({
                    targets: this.textObject2,
                    alpha:{ from: 0, to: 1 },
                    duration: 5000,
                    ease: 'linear'
                });
                this.audio1= this.sound.add('warehouse',{ loop: false });
                this.audio1.play()
            }
        })
        this.time.addEvent({
            delay:7000,
        callback: () => {
            this.scene.start('backhouse');
            }
            
        })
    }

    
}
class BackHouse extends Phaser.Scene {
    constructor() {
        super({ key: 'backhouse' });    
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('stage', 'Stage.png');
        this.load.audio('only',['only.mp3']);
        this.load.audio('reign',['reign.mp3']);
    }
    create(){
        this.background = this.add.image(
            950,
            550,
            'stage',//imagename
        )
        
        this.textObject = this.add.text(
            300, //x
            300,//y
            "ONLY 1 BEATBOX BOX-FOLDER", //text
            {
                font: "bold 80px Arial",
            });
        this.audio1= this.sound.add('only',{ loop: false });
        this.audio1.play()
        this.tweens.add({
            targets: this.textObject,
            alpha:{ from: 0, to: 1 },
            duration: 5000,
            ease: 'linear'
        });
        this.time.addEvent({
            delay: 4000,
            loop: false,
            callback: () => {
                this.textObject2 = this.add.text(
                    1000, //x
                    600,//y
                    "WILL REIGN SUPREME", //text
                    {
                        font: "bold 80px Arial",
                    });
                this.tweens.add({
                    targets: this.textObject2,
                    alpha:{ from: 0, to: 1 },
                    duration: 5000,
                    ease: 'linear'
                });
                this.audio1= this.sound.add('reign',{ loop: false });
                this.audio1.play()
            }
        })
        this.time.addEvent({
            delay: 6000,
            loop: false,
            callback: () => {
                this.scene.start('menu');
            }
        })
    }
  
}
class Menu extends Phaser.Scene {
    constructor() {
        super({ key: 'menu' });    
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('Cube', 'cube.png');
        this.load.audio('Music',['music.mp3']);
    }
    create(){
        this.audio1= this.sound.add('Music',{ loop: true });
        this.audio1.play()
        this.cameras.main.setBackgroundColor('#964B00')
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0x808080, 1);
        this.graphics.fillRoundedRect(0, 0, 1980, 200, 32);
        this.graphics2 = this.add.graphics();
        this.graphics2.fillStyle(0x808080, 1);
        this.graphics2.fillRoundedRect(0, 1080, 1980, 200, 32);
        
        this.textObject2 = this.add.text(
            -1000, //x
            200,//y
            "BEAT FOLDIN", //text
            {
                font: "bold 150px Arial",
            });
         this.textObject = this.add.text(
                -1000, //x
                400,//y
                ["•PLAY","•SETTINGS","•CREDITS","•QUIT"], //text
                {
                    font: "bold 120px Arial",
            });
            this.imageObject = this.add.image(
                2800,//x
                600,//y
                'Cube',//imagename
            )
            this.imageObject.setScale(1.2);
        this.tweens.add({
                targets: this.textObject2,
                x: 50,
                duration: 2000,
                repeat: 0,
                hold: 500,
                ease: 'cubic.in'
            });
        this.tweens.add({
                targets: this.textObject,
                x: 100,
                duration: 2000,
                repeat: 0,
                hold: 500,
                ease: 'cubic.in'
            });
        this.tweens.add({
                targets: this.imageObject,
                x: 1500,
                duration: 2000,
                repeat: 0,
                hold: 500,
                ease: 'cubic.in'
            });
            

    }
  
}
let config = {
    type: Phaser.WEBGL,
    width: 3000,
    height: 3000,
    backgroundColor: 0xFFFFFF,
    scene: [Intro,Animated,Textsplash,BackHouse,Menu],
}

let game = new Phaser.Game(config);