class Background {
  constructor(options) {
    var options = options || {};
    this.image = options.image
    this.x = options.x;
    this.y = options.y;
    this.width = 0;
    this.height = 0;
    this.speed = 0;
  };

  draw(context) {
    return this;
  }


}

module.exports = Background;
