const Block = require('./block');

class Dino extends Block {
  constructor(options) {
    super(options);
    this.velocity = 0;
  };

  get collissionBoxes() {
    let offSet = 1;
    let rightBoxX = this.x + this.width - offSet;
    let rightBoxY = this.y;
    let rightBoxWidth = offSet;
    let rightboxHeight = this.height;

    let bottomBoxX = this.x;
    let bottomBoxY = this.y + this.height - offSet;
    let bottomBoxWidth = this.width
    let bottomboxHeight = offSet;

    let rightBox = new Block({x: rightBoxX, y: rightBoxY, width: rightBoxWidth, height: rightboxHeight});
    let bottomBox = new Block({x: bottomBoxX, y: bottomBoxY, width: bottomBoxWidth, height: bottomboxHeight});
    return [
      rightBox, bottomBox
    ]
  }

  get isOnGround() {
    return this.y === 225;
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
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    return this;
  }

  jump() {
    if (this.jumpAvailable) {
      this.velocity = -20;
    }
  }

  executeJump() {
    this.y += this.velocity;
    this.velocity++;
  }

  activateGravity() {
    if (this.y < 225) {
      this.y += this.velocity
      this.y = Math.min(this.y, 225)
      this.velocity += .8;
    }
  }
}

module.exports = Dino;
