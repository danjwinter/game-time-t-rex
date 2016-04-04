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

  update(dino) {
    this.scroll();
    this.resurrectWhenOffScreenTo(950)
    // if (this.x < 111 && this.x > 49) {
    //   if (this.overlapsWith(dino)) {
    //     console.log('hit that shit')
    //   }
    // }
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
}


module.exports = Cactus;
