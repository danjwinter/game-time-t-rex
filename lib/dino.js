const Block = require('./block');

class Dino extends Block {
  constructor(options) {
    super(options);
    // for game start options = {x: 50, y: 300, width: 10, height: 10}
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
      this.y += this.velocity;
      if (this.y > 300) {
        this.y = 300;
      }
      this.velocity += .8;
    }
  }

  canShoot() {
    if (this.isOnGround) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Dino;
