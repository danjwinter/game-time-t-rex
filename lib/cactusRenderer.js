var Cactus = require('./cactus')
function CactusRenderer() {
  this.cacti = []
}

CactusRenderer.prototype.populate = function(interval) {
  setInterval(createCactus, interval);
};

CactusRenderer.prototype.createCactus = function() {
  var cactus = new Cactus();
  cacti.push(cactus)
}

CactusRenderer.prototype.update = function() {
  cacti.forEach(cactus){
    cactus.update();
  }
}
