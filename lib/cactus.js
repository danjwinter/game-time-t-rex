const Block = require('./block');

class Cactus extends Block {
  constructor(options) {
    super(options)
    this.velocity = 2

  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  scroll() {
    this.x -= this.velocity;
  }

  update(context) {
    this.draw(context);
    this.scroll();
  }

  resurrect(newPixelLocation){
    this.x = newPixelLocation;
  }
}


module.exports = Cactus;
