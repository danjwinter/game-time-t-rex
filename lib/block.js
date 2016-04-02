const createPoint = require('./create-point');
const blocksOverlap = require('./blocks-overlap');

class Block {

  constructor(options) {
    var options = options || {};
    this.image = options.image
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
  }

  *[Symbol.iterator]() {
    for (let x = this.x; x < this.x + this.width; x++) {
      for (let y = this.y; y < this.y + this.height; y++) {
        yield createPoint(x, y);
      }
    }
  }

  overlapsWith(block2) {
    return blocksOverlap(this, block2);
  }
}

module.exports = Block;
