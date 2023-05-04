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
                2300,//x
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
    scene: [Menu],
}

let game = new Phaser.Game(config);