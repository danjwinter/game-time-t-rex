const Block = require('./block');
let dryGunshot = new Audio();
dryGunshot.src = './sounds/dry-fire-gunshot.mp3';
let gunshot = new Audio();
gunshot.src = './sounds/shotgun-firing.mp3';
let jumpSound = new Audio();
jumpSound.src = './sounds/mario-jump-sound.mp3';

class Dino extends Block {
  constructor(options, game) {
    super(options);
    this.velocity = 0;
    this.game = game;
  }

  get bottomRight() {
    let x = this.x + this.width;
    let y = this.y + this.height;
    return {x: x, y: y};
  }

  get bottomMiddle() {
    let x = this.x + (this.width / 2);
    let y = this.y + this.height;
    return {x: x, y: y};
  }

  get bottomLeft() {
    let x = this.x + (this.width / 5);
    let y = this.y + this.height;
    return {x: x, y: y};
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
    return this.velocity === 0 && !this.isOnGround;
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
      jumpSound.play();
    }
  }

  executeJump() {
    this.y += this.velocity;
    this.velocity++;
  }

  activateGravity() {
    if (this.y < 225) {
      this.y += this.velocity;
      this.y = Math.min(this.y, 225);
      this.velocity += 0.8;
    }
  }

  canShoot() {
    if (this.isOnGround) {
      return true;
    } else {
      return false;
    }
  }

  shoot() {
    if (this.availableBullets.length > 0) {
      let bullet = this.availableBullets.shift();
      bullet.x = this.dino.x + this.dino.width;
      bullet.y = this.dino.y + (this.dino.height/2.5);
      this.activeBullets.push(bullet);
      gunshot.play();
    }
    else {
      dryGunshot.play();
    }
  }

  update() {
    if (this.isFalling || this.isAtCrestOfJump) {this.activateGravity();}
    if (this.isJumping) {this.executeJump();}
  }
}

module.exports = Dino;
