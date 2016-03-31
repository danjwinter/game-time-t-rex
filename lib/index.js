var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var Dino = require('./dino')
var Cactus = require('./cactus')

var dino = new Dino(50, 300, 10, 10);
var cactus = new Cactus()
var cacti  = [];
var cactusInterval = function(interval) {
  setInterval(createCactus(), interval);
};
var createCactus = function() {
  var cactus = new Cactus();
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
  return Math.floor(Math.random() * 2000);
}

requestAnimationFrame(gameLoop);

function gameLoop() {

  context.clearRect(0, 0, canvas.width, canvas.height)
  dino.draw(context);

  cacti.forEach(function (cactus) {
    cactus.update(context);
  })
  createRandomCactus();
  if (dino.isJumping) dino.checkJump();
  if (dino.isFalling) dino.checkFall();
  requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', function(e){
  if (e.keyCode === 32) {
    e.preventDefault();
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
