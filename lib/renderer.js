let tickCount = 0;

class Renderer {

  constructor(game) {
    this.cacti = game.cacti;
    this.dino = game.dino;
    this.canvas = game.canvas;
    this.context = game.context;
    this.bullets = game.bullets;
    this.clouds1 = game.clouds1;
    this.dino1 = game.dino1;
  }

  draw() {
    this.drawDino();
    this.drawCacti();
    this.drawBullets();
    this.drawBkg();
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

  drawBullets() {
    var that = this;
    this.bullets.forEach(function (bullet) {
      that.drawBullet(bullet);
    })
  }

  drawBullet(object) {
    this.context.fillRect(object.x, object.y, object.width, object.height);
    return this;
  }

  // draw() {
    // this.drawDino();
    // this.drawCacti();
    // this.drawBkg();
  // }

  drawBkg() {
    this.drawObject(this.clouds1);
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

module.exports = Renderer;
