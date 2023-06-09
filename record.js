class KadenGame extends Phaser.Scene {
    constructor() {
        super('KadenGame');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('Mac1', 'Mac1.png');
    }
    create(){
        this.graphics = this.add.graphics();
// add shapes
this.graphics.fillStyle(0xff9900, 1); //color, opacity
this.graphics.fillCircle(100,100,50);   //x, y, radius
this.graphics.fillTriangle(250, 50, 200, 150, 300, 150); //x1, y1, x2, y2, x3, y3
this.graphics.fillEllipse(450, 100, 200, 100, 16);   // x, y, width, height, smoothness
//add lines
this.graphics.lineStyle(5, 0x000000, 1);    //linewidth, color, opacity
this.graphics.lineBetween(100,100,250,100); //x1, y1, x2, y2
this.graphics.lineStyle(5, 0x000000, 0.5);
this.graphics.lineBetween(250,100,450,100); 
// add gradiant shapes
// topleftcolor, toprightcolor, bottomleftcolor, bottomrightcolor, topleftopacity, toprightopacity, bottomleftopacity, bottomrightopacity 
this.graphics.fillGradientStyle(0xff0000, 0xffff00, 0xffff00,0xffff00, 1, 1, 0.1, 0.1); 
this.graphics.fillRect(600,50,150,100); //x1,y1, width, height
//create text object
this.textObject = this.add.text(
    0, //x
    500,//y
    "hello world!", //text
    {
        font: "40px Arial",
        color: "#ff7700",
    } //style
);
//create image object 
this.imageObject = this.add.image(
    400,//x
    250,//y
    'Mac1',//imagename
)
this.imageObject.setScale(0.2) //resize
// Add tweens
this.tweens.add({
    targets: this.textObject,
    alpha:-1,
    x:500,
    y:-300,
    duration: 5000,
    ease: 'Linear',
    repeat: -1,
});
this.tweens.add({
    targets: this.imageObject,
    x:500,
    y:500,
    duration: 5000,
    ease: 'Linear',
    repeat: -1,
});
    }
    update(){}
    
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0xA020F0,
    scene: [KadenGame],
}

let game = new Phaser.Game(config);