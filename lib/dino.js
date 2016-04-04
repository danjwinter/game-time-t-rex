const Block = require('./block');

class Dino extends Block {
  constructor(options) {
    super(options);
    this.velocity = 0;
  };

  get isOnGround() {
    return this.y === 300;
  }

  get isJumping() {
    return this.velocity < 0;
  }

  get isFalling() {
    return this.velocity > 0 && !this.isOnGround;
  }

  get isAtCrestOfJump() {
    return this.velocity === 0 && !this.isOnGround
  }

  get jumpAvailable() {
    return (this.isOnGround) && !(this.isJumping || this.isFalling);
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  jump() {
    if (this.jumpAvailable) {
      this.velocity = -15;
    }
  }

  executeJump() {
    this.y += this.velocity;
    this.velocity++;
  }

  activateGravity() {
    if (this.y < 300) {
      this.y += this.velocity
      this.y = Math.min(this.y, 300)
      this.velocity += .8;
    }
  }
}

module.exports = Dino;
