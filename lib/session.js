const Cactus = require('./cactus')
const Dino = require('./dino')

class Session {

  constructor(canvas, context) {
    this.canvas = canvas;
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
      new Cactus({x: 1350, y: 285, width: 10, height: 25})
    ];
  };
  tick() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.dino.draw(this.context);
    if (this.dino.isFalling || this.dino.isAtCrestOfJump) this.dino.activateGravity();
    if (this.dino.isJumping) this.dino.executeJump();
    this.draw();
    this.update();
    requestAnimationFrame(this.tick.bind(this));
  }

  update() {
    this.cacti.forEach(function (cactus) {
      cactus.update()
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
      // debugger
      that.drawObject(cactus)
    })
  }

  drawObject(object) {
    this.context.fillRect(object.x, object.y, object.width, object.height);
    return this;
  }

  // this.canvas.addEventListener('keydown', function(e){
  //   if (e.keyCode === 32) {
  //     e.preventDefault();
  //
  //     this.dino.jump();
  //   }
  // })

}

module.exports = Session;



// var createRandomCactus = function () {
//   var now = Date.now();
//   var timeSinceLastCactus = now - timeOfLastCactus;
//
//   if (timeSinceLastCactus > timeUntilNextCactus) {
//     createCactus();
//     timeOfLastCactus = now;
//     timeUntilNextCactus = generateRandomCactusTime();
//   }
// }

// var createCactus = function() {
//   var cactus = new Cactus({x: 850, y: 280, width: 10, height: 30});
//   cacti.push(cactus)
// }
//
// var timeOfLastCactus = Date.now();
// var timeUntilNextCactus = generateRandomCactusTime();
//
// function generateRandomCactusTime() {
//   return Math.floor(Math.random() * 5000);
// }
