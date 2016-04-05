const Block = require('./block');

class Background extends Block {
  constructor(options) {
    super(options)
    this.velocity = .5

  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  scroll() {
    this.x -= this.velocity;
  }

  update() {
    this.scroll();
  }

  alternateBackgrounds(){
    if(this.x < 0) {
      this.startNextBackground()
    }
    return this;
  }

  startNextBackground(){

  }

}

module.exports = Background;
