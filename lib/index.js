var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var Dino = require('./dino')
var Cactus = require('./cactus')

var dino = new Dino(50, 300, 10, 10);
var cactus = new Cactus();

requestAnimationFrame(gameLoop);

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  dino.draw(context);
  cactus.draw(context);
cactus.scroll();
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
