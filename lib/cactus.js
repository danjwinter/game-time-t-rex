const Block = require('./block');

class Cactus extends Block {
  constructor(options) {
    super(options);
    this.velocity = 4;
    this.shot = false;
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  scroll() {
    this.x -= this.velocity;
  }

  update(dino, session) {
    this.scroll();
    this.resurrectWhenOffScreenTo(950)
    this.resurrectWhenShotTo(950)
  }

  resurrect(newPixelLocation){
    this.x = newPixelLocation;
    return this;
  }

  resurrectWhenOffScreenTo(newPixelLocation){
    if(this.x < 0 - this.width) {
      this.resurrect(newPixelLocation)
    }
    return this;
  }

  resurrectWhenShotTo(newPixelLocation) {
    if(this.shot === true) {
      this.resurrect(newPixelLocation)
      this.shot = false;
    }
    return this;
  }
}


module.exports = Cactus;
