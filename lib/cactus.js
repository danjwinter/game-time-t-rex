function Cactus(options) {
  var options = options || {};
  this.x = options.x || 950;
  this.y = options.y || 270;
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

Cactus.prototype.update = function(context){
  this.draw(context);
  this.scroll();
}



Cactus.prototype.createCactus = function() {
  var cactus = new Cactus();
  cacti.push(cactus)
}


module.exports = Cactus;
