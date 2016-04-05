let tickCount = 0;

class Renderer {

  constructor(game) {
    this.cacti = game.cacti;
    this.dino = game.dino;
    this.canvas = game.canvas;
    this.context = game.context;
    this.activeBullets = game.activeBullets;
    this.availableBullets = game.availableBullets;
    this.clouds = game.clouds;
    this.dino1 = game.dino1;
    this.dinoUp = game.dinoUp;
    this.dinoUpImage = game.dinoUp.image;
    this.dinoGroundImage = game.dino.image;
  }

  draw() {
    this.drawDino();
    this.drawCacti();
    this.drawActiveBullets();
    this.drawBkg();
    this.drawAvailableBullets();
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

  drawActiveBullets() {
    var that = this;
    this.activeBullets.forEach(function (bullet) {
      that.drawBullet(bullet);
    })
  }

  drawAvailableBullets() {
    var that = this;
    this.availableBullets.forEach(function (bullet) {
      that.drawBullet(bullet);
    })
  }

  drawBullet(object) {
    this.context.fillRect(object.x, object.y, object.width, object.height);
    return this;
  }

  drawBkg() {
    let that = this;
    this.clouds.forEach(function (pane) {
      that.drawObject(pane)
    })  }

  drawDino() {
    if (this.dino.isOnGround){
      this.dino.image = this.dinoGroundImage
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
      this.dino.image = this.dinoUpImage
      this.drawObject(this.dino);
    }
    return this;
  }

}

module.exports = Renderer;
