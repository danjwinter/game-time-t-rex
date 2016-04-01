var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var Dino = require('./dino');
var Cactus = require('./cactus');
var Session = require('./session');

var dino = new Dino({x: 50, y: 300, width: 10, height: 10});
var cacti  = [];
var cactusInterval = function(interval) {
  setInterval(createCactus(), interval);
};
var createCactus = function() {
  var cactus = new Cactus({x: 850, y: 280, width: 10, height: 30});
  cacti.push(cactus)
}

var createRandomCactus = function () {
  var now = Date.now();
  var timeSinceLastCactus = now - timeOfLastCactus;

  if (timeSinceLastCactus > timeUntilNextCactus) {
    createCactus();
    timeOfLastCactus = now;
    timeUntilNextCactus = generateRandomCactusTime();
  }
}

var timeOfLastCactus = Date.now();
var timeUntilNextCactus = generateRandomCactusTime();

function generateRandomCactusTime() {
  return Math.floor(Math.random() * 5000);
}

requestAnimationFrame(gameLoop);

function gameLoop() {

  context.clearRect(0, 0, canvas.width, canvas.height)
  dino.draw(context);

  cacti.forEach(function (cactus) {
    cactus.update(context);
    if (cactus.x < 62 && cactus.x > 45){
      if (dino.overlapsWith(cactus)) {
        console.log('collision!!')
      }

    }
  })
  createRandomCactus();
  if (dino.isFalling || dino.isAtCrestOfJump) dino.activateGravity();
  if (dino.isJumping) dino.executeJump();
  requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', function(e){
  if (e.keyCode === 32) {
    e.preventDefault();
    // debugger
    dino.jump();
  }
})

// Code to force cactus creation, not to be included in development
document.addEventListener('keydown', function(e){
  if (e.keyCode === 13) {
    e.preventDefault();
    cactusInterval(1000);
  }
})
