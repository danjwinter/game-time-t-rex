const Cactus = require('./cactus')
const Dino = require('./dino')
var dinoSprite = new Image();
dinoSprite.src = 'lib/trex.png';

class Session {

  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.height = canvas.height;
    this.width = canvas.width;
    // this.dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    this.dino = new Dino({image: dinoSprite, x: 50, y: 300, width: 50, height: 50});
    this.cacti = [
      new Cactus({image: 'cactus1.png', x: 905, y: 280, width: 10, height: 30}),
      new Cactus({image: 'cactus2.png', x: 1100, y: 290, width: 10, height: 20}),
      new Cactus({image: 'cactus3.png', x: 1500, y: 290, width: 10, height: 20}),
      new Cactus({image: 'cactus4.png', x: 1700, y: 270, width: 10, height: 40}),
      new Cactus({image: 'cactus5.png', x: 2000, y: 275, width: 10, height: 35}),
    ];
  };

  tick() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.dino.draw(this.context);
    if (this.dino.isFalling || this.dino.isAtCrestOfJump) this.dino.activateGravity();
    if (this.dino.isJumping) this.dino.executeJump();
    this.draw();
    requestAnimationFrame(this.tick.bind(this));
  }

  draw() {
    this.drawDino();
    // this.drawCacti();
  }

  drawDino() {
    // this.drawObject(this.dino);
    this.context.drawImage(this.dino.image, this.dino.x, this.dino.y, this.dino.width, this.dino.height)
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
