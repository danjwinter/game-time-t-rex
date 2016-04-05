const Cactus = require('./cactus')
const Dino = require('./dino')
let dinoSprite = new Image();
dinoSprite.src = './images/runDino1.png'
let dinoSprite1 = new Image();
dinoSprite1.src = './images/runDino2.png'
let dinoJump = new Image();
dinoJump.src = './images/jump1.png'
let cactus1 = new Image();
cactus1.src = './images/cactus1.png'
let cactus2 = new Image();
cactus2.src = './images/cactus2.png'
let cactus3 = new Image();
cactus3.src = './images/cactus3.png'
let cactus4 = new Image();
cactus4.src = './images/cactus4.png'
var tickCount = 0;

class Session {

  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.height = canvas.height;
    this.width = canvas.width;
    this.dino = new Dino({image: dinoSprite, x: 50, y: 225, width: 60, height: 75});
    this.dino1 = new Dino({image: dinoSprite1, x: 50, y: 225, width: 60, height: 75});
    this.dinoUp = new Dino({image: dinoJump, x: 50, y: 225, width: 60, height: 75});
    this.cacti = [
      new Cactus({image: cactus1, x: 905, y: 250, width: 25, height: 50}),
      new Cactus({image: cactus2, x: 1200, y: 258, width: 25, height: 42}),
      new Cactus({image: cactus3, x: 1500, y: 220, width: 25, height: 80}),
      new Cactus({image: cactus4, x: 1700, y: 235, width: 25, height: 65}),
      new Cactus({image: cactus1, x: 2000, y: 253, width: 25, height: 47}),
      new Cactus({image: cactus2, x: 1350, y: 235, width: 25, height: 65})
    ];
  };

  tick() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    if (this.dino.isFalling || this.dino.isAtCrestOfJump) this.dino.activateGravity();
    if (this.dino.isJumping) this.dino.executeJump();
    this.draw();
    this.update();
  }

  update() {
    var that = this;
    this.cacti.forEach(function (cactus) {
      cactus.update(that.dino)
    })
  }

  draw() {
    this.drawDino();
    this.drawCacti();
  }

  drawDino() {
    if (this.dino.isOnGround){
      if (tickCount <= 6){
        this.drawObject(this.dino);
        tickCount++;
      } else if (tickCount > 6){
        this.drawObject(this.dino1);
        tickCount++;
        if (tickCount > 13){
          tickCount = 0;
        }
      }
    } else {
      this.drawObject(this.dino);
    }
    return this;
  }

  drawCacti() {
    let that = this;
    this.cacti.forEach(function (cactus) {
      that.drawObject(cactus)
    })
  }

  drawObject(object) {
    this.context.drawImage(object.image, object.x, object.y, object.width, object.height);
    return this;
  }

}

module.exports = Session;
