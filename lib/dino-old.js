function Dino(options) {
  var options = options || {};
  this.x = options.x || 50;
  this.y = options.y || 300;
  this.width = options.width || 10;
  this.height = options.height || 10;
  this.velocity = 0;
  // this.isJumping = false;
  // this.isFalling = false;
}

Dino.prototype.jumpAvailable = function () {
  // return !(this.isJumping || this.isFalling) && this.y === 300;
  return ()
}

Dino.prototype.draw = function (context) {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Dino.prototype.jump = function () {
  if (this.jumpAvailable() && !this.isJumping){
    this.isJumping = true;
    this.jumpSpeed = 15;
  }
};

Dino.prototype.checkJump = function() {
  this.y -= this.jumpSpeed;
  this.jumpSpeed--;
  if (this.jumpSpeed === 0) {
    this.isJumping = false;
    this.isFalling = true;
    this.fallSpeed = 1;
  }
};

Dino.prototype.checkFall = function() {
  if (this.y < 300) {
// refactor
    this.y += this.fallSpeed;
    if (this.y > 300){
      this.y = 300;
    };
    this.fallSpeed += .8;
  } else {
    this.stopFall();
  }
};

Dino.prototype.stopFall = function() {
  this.isFalling = false;
  this.fallSpeed = 0;
};

module.exports = Dino;
