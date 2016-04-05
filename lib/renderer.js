class Renderer {

  constructor(game) {
    this.cacti = game.cacti;
    this.dino = game.dino;
    this.canvas = game.canvas;
    this.context = game.context;
    this.bullets = game.bullets;
  }

  draw() {
    this.drawDino();
    this.drawCacti();
    this.drawBullets();
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
}

module.exports = Renderer;
