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
    this.active = true;
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.height = canvas.height;
    this.width = canvas.width;
    this.dino = new Dino({image: dinoSprite, x: 50, y: 225, width: 60, height: 75});
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

    if (this.active === true) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      if (this.dino.isFalling || this.dino.isAtCrestOfJump) this.dino.activateGravity();
      if (this.dino.isJumping) this.dino.executeJump();
      this.draw();
      this.rearrangeCacti();
      this.checkForColissionPointColission()
      // this.checkForCactusDinoColission();
      this.update();
    } else {
      console.log('game over');
    }
  }

  update() {

    var that = this;
    this.cacti.forEach(function (cactus) {
      cactus.update(that.dino, that);
    })
  }

  draw() {
    //dino.draw(); ???
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

  checkForColissionPointColission(){
    let cactus = this.cacti[0];
    let bottomRightDot = {x: this.dino.x + this.dino.width, y: this.dino.y + this.dino.height}
    let bottomMiddleDot = {x: this.dino.x + (this.dino.width / 2), y: this.dino.y + this.dino.height}
    let bottomLeftDot = {x: this.dino.x, y: this.dino.y + this.dino.height}
    if ((bottomRightDot.x > cactus.x && bottomRightDot.x < cactus.x + cactus.width &&
         bottomRightDot.y > cactus.y) ||
         (bottomMiddleDot.x > cactus.x && bottomMiddleDot.x < cactus.x + cactus.width &&
              bottomMiddleDot.y > cactus.y) ||
         (bottomLeftDot.x > cactus.x && bottomLeftDot.x < cactus.x + cactus.width &&
              bottomLeftDot.y > cactus.y))
        {
           this.active = false
         }
  }

  checkBottomRight() {

  }

  rearrangeCacti(){
    let cactus = this.cacti[0];
    if (cactus.x + cactus.width < this.dino.x) {
      this.cacti.shift();
      this.cacti.push(cactus);
    }
  }

  checkForCactusDinoColission() {
    this.checkForCactusColission(this.dino)
  }

  checkForCactusColission(otherObject){
    let cactus = this.cacti[0];
    if (cactus.x < 111 && cactus.x > 49) {
      if (cactus.collissionBoxes[0].overlapsWith(otherObject.collissionBoxes[0]) ||
          cactus.collissionBoxes[0].overlapsWith(otherObject.collissionBoxes[1]) ||
          cactus.collissionBoxes[1].overlapsWith(otherObject.collissionBoxes[0]) ||
          cactus.collissionBoxes[1].overlapsWith(otherObject.collissionBoxes[1])) {
            console.log('hit it ')
        this.active = false;
      }
    }
  }
}

module.exports = Session;
