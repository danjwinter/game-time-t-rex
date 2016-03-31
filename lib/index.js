var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var Dino = require('./dino')
// var CactusRenderer = require('./cactus-renderer')
var Cactus = require('./cactus')

var dino = new Dino(50, 300, 10, 10);
// var cactusRenderer = new CactusRenderer()
var cactus = new Cactus()
var cacti  = [];
var cactusInterval = function(interval) {
  setInterval(createCactus(), interval);
};
var createCactus = function() {
  var cactus = new Cactus();
  cacti.push(cactus)
}

requestAnimationFrame(gameLoop);

function gameLoop() {

  context.clearRect(0, 0, canvas.width, canvas.height)
  dino.draw(context);
  // cactusRenderer.populate(1000);
  // cactusRenderer.update();
  // cactus.populate(1000);
  cacti.forEach(function (cactus) {
    cactus.update(context);
  })
  // cactus.createCactus();
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

document.addEventListener('keydown', function(e){
  if (e.keyCode === 13) {
    e.preventDefault();
    cactusInterval(1000);
  }
})
