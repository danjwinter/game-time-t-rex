const Cactus = require('./cactus')
const Dino = require('./dino')

class Session {

  constructor(canvas) {
    this.context = canvas.getContext('2d');
    this.height = canvas.height;
    this.width = canvas.width;
    this.dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    this.cacti = [
      new Cactus({x: 905, y: 280, width: 10, height: 30}),
      new Cactus({x: 1100, y: 290, width: 10, height: 20}),
      new Cactus({x: 1500, y: 290, width: 10, height: 20}),
      new Cactus({x: 1700, y: 270, width: 10, height: 40}),
      new Cactus({x: 2000, y: 275, width: 10, height: 35}),
      new Cactus({x: 1350, y: 285, width: 10, height: 25}),
    ];
  };

  tick() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.dino.draw(context);
  }

  draw() {
    drawDino();
    drawCacti();
  }

  drawDino() {
    drawObject(this.dino);
    return this;
  }

  drawCacti() {
    this.cacti.forEach(function (cactus) {
      drawObject(cactus)
    })
  }

  drawObject(object) {
    context.fillRect(object.x, object.y, object.width, object.height);
    return this;
  }

}

module.exports = Session;
