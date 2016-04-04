const Cactus = require('./cactus')
const Dino = require('./dino')
let dinoSprite = new Image();
dinoSprite.src = './images/trex.png'
let cactus1 = new Image();
cactus1.src = './images/cactus1.png'
let cactus2 = new Image();
cactus2.src = './images/cactus2.png'
let cactus3 = new Image();
cactus3.src = './images/cactus3.png'
let cactus4 = new Image();
cactus4.src = './images/cactus4.png'


class Session {

  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.height = canvas.height;
    this.width = canvas.width;
    this.dino = new Dino({image: dinoSprite, x: 50, y: 225, width: 60, height: 75});
    this.cacti = [
      new Cactus({image: cactus1, x: 905, y: 220, width: 40, height: 70}),
      new Cactus({image: cactus2, x: 1200, y: 220, width: 40, height: 50}),
      new Cactus({image: cactus3, x: 1500, y: 230, width: 40, height: 90}),
      new Cactus({image: cactus4, x: 1700, y: 220, width: 40, height: 75}),
      new Cactus({image: cactus1, x: 2000, y: 235, width: 40, height: 65}),
      new Cactus({image: cactus2, x: 1350, y: 225, width: 40, height: 80})
    ];
  };
  tick() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.dino.draw(this.context);
    if (this.dino.isFalling || this.dino.isAtCrestOfJump) this.dino.activateGravity();
    if (this.dino.isJumping) this.dino.executeJump();
    this.draw();
    this.update()
    requestAnimationFrame(this.tick.bind(this));
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
    this.drawObject(this.dino);
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
