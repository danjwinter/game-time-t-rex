const Block = require('./block');

class Cactus extends Block {
  constructor(options) {
    super(options)
    this.velocity = 2

  }


  get collissionBoxes() {
    let offSet = 1;
    let leftBoxX = this.x;
    let leftBoxY = this.y;
    let leftBoxWidth = offSet;
    let leftboxHeight = this.height;

    let topBoxX = this.x;
    let topBoxY = this.y;
    let topBoxWidth = this.width;
    let topboxHeight = offSet;

    let leftBox = new Block({x: leftBoxX, y: leftBoxY, width: leftBoxWidth, height: leftboxHeight});
    let topBox = new Block({x: topBoxX, y: topBoxY, width: topBoxWidth, height: topboxHeight});
    return [
      leftBox, topBox
    ]
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
    // if (this.x < 111 && this.x > 49) {
    //   // debugger
    //   if (this.collissionBoxes[0].overlapsWith(dino.collissionBoxes[0]) ||
    //       this.collissionBoxes[0].overlapsWith(dino.collissionBoxes[1]) ||
    //       this.collissionBoxes[1].overlapsWith(dino.collissionBoxes[0]) ||
    //       this.collissionBoxes[1].overlapsWith(dino.collissionBoxes[1])) {
    //         console.log('hit it ')
    //     session.status = false;
    //   }
    //   }
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
