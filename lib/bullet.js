const Block = require('./block');

class Bullet extends Block {
  constructor(options) {
    super(options)
    this.velocity = 2

  }

  update() {
    this.scroll();
  }

  scroll() {
    this.x = this.x + 1;
  }
}

  module.exports = Bullet;
