const Cactus = require('./cactus')
const Dino = require('./dino')
const Collision = require('./collision')
const Renderer = require('./renderer')
const Score = require('./score')
const Bkg = require('./background')
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
let bkg1 = new Image();
bkg1.src = './images/cloudCanvas1.png'
let bkg2 = new Image();
bkg2.src = './images/cloudCanvas2.png'

var tickCount = 0;

class Session {

  constructor(canvas, context) {
    this.active = true;
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.height = canvas.height;
    this.width = canvas.width;
    this.score = new Score();
    this.dino = new Dino({image: dinoSprite, x: 50, y: 225, width: 60, height: 75});
    this.bullets= [];
    this.dino1 = new Dino({image: dinoSprite1, x: 50, y: 225, width: 60, height: 75});
    this.dinoUp = new Dino({image: dinoJump, x: 50, y: 225, width: 60, height: 75});
    this.clouds1 = new Bkg({image: bkg1, x: 55, y: 0, width: 900, height: 200});
    this.clouds2 = new Bkg({image: bkg2, x: 955, y: 0, width: 900, height: 200});
    this.clouds = [
      new Bkg({image: bkg1, x: 55, y: 0, width: 900, height: 200}),
      new Bkg({image: bkg2, x: 955, y: 0, width: 900, height: 200})
    ];
    this.cacti = [
      new Cactus({image: cactus1, x: 905, y: 250, width: 25, height: 50, velocity: this.cactusVelocity}),
      new Cactus({image: cactus2, x: 1300, y: 258, width: 25, height: 42, velocity: this.cactusVelocity}),
      new Cactus({image: cactus3, x: 1600, y: 220, width: 25, height: 80, velocity: this.cactusVelocity}),
      new Cactus({image: cactus4, x: 1850, y: 235, width: 25, height: 65, velocity: this.cactusVelocity}) //,
      // new Cactus({image: cactus1, x: 2000, y: 253, width: 25, height: 47}),
      // new Cactus({image: cactus2, x: 1350, y: 235, width: 25, height: 65})
    ];
    this.collision = new Collision(this)
    this.renderer = new Renderer(this)
  };

  updateCactusVelocity() {
  for(let i = 0; i < this.cacti.length; i++) {
      this.cacti[i].velocity = this.cactusVelocity;
    }
  }

  get cactusVelocity() {
    return 4 + (this.score.currentScore / 20)
  }

  tick() {

    if (this.active === true) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.score.update()
      $('#score').text(this.score.currentScore)
      if (this.dino.isFalling || this.dino.isAtCrestOfJump) this.dino.activateGravity();
      if (this.dino.isJumping) this.dino.executeJump();
      this.renderer.draw();
      this.collision.detectHit();
      this.update();
      this.updateCactusVelocity();
    } else {
      // show game over screen
    }
  //
  // tick() {
  //   this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  //   if (this.dino.isFalling || this.dino.isAtCrestOfJump) this.dino.activateGravity();
  //   if (this.dino.isJumping) this.dino.executeJump();
  //   this.draw();
  //   this.update();
  }

  update() {
    var that = this;
    this.clouds1.update();
    this.cacti.forEach(function (cactus) {
      cactus.update(that.dino)
    })

    this.clouds.forEach(function (pane) {
      pane.update()
    })

    this.bullets.forEach(function (bullet) {
      bullet.update();
    })
  }

  removeBullet() {
    let spentBullet = this.bullets.shift();
    spentBullet = null;
  }

  draw() {
    this.drawDino();
    this.drawCacti();
    this.drawBkg();
  }

  drawBkg() {
    let that = this;
    this.clouds.forEach(function (pane) {
      that.drawObject(pane)
    })
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

}

module.exports = Session;
