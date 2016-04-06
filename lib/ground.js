const Block = require('./block');

class Ground extends Block {
  constructor(options) {
    super(options);
    this.velocity = options.velocity;

  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  scroll() {
    this.x -= this.velocity;
    // console.log("ground", this.velocity);
  }

  update() {
    this.scroll();
    this.alternateGroundImage();
  }

  alternateGroundImage(){
    if(this.x + this.width < 0) {
      this.startNextImage();
    }
    return this;
  }

  startNextImage(){
    this.x = 900;
    return this;
  }

}

module.exports = Ground;
