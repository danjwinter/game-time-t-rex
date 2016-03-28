var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function Dino(x, y, width, height) {
  this.x = x
  this.y = y
  this.width = width
  this.height = height
}

Dino.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this
};

Dino.prototype.jump = function () {
  if (this.y > 200) {
    context.fillRect(this.x, this.y--, this.width, this.height);
  }
  if (this.y < 200 ) {
    context.fillRect(this.x, this.y++, this.width, this.height);
  }
  return this
};

var dino = new Dino(50, 300, 10, 10);

requestAnimationFrame(gameLoop);

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  dino.draw();
  dino.jump();
  requestAnimationFrame(gameLoop);
}
