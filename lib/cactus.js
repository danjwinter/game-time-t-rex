function Cactus(options) {
  var options = options || {};
  this.x = options.x || 450;
  this.y = options.y || 260;
  this.width = options.width || 10;
  this.height = options.height || 40;
}

Cactus.prototype.draw = function(context) {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
}

Cactus.prototype.scroll = function(velocity) {
  this.velocity = velocity || 2;
  this.x -= this.velocity;
}

Cactus.prototype.update = function(){

}



module.exports = Cactus;
