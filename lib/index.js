var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var Dino = require('./dino')

var dino = new Dino(50, 300, 10, 10);

requestAnimationFrame(gameLoop);

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  dino.draw(context);
  if (dino.isJumping) dino.checkJump();
  if (dino.isFalling) dino.checkFall();
  requestAnimationFrame(gameLoop);
}
document.addEventListener('keydown', function(e){
  if (e.keyCode === 32) {
    dino.jump();
  }
})
