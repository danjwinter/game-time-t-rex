class Colission {

  constructor(dino, cacti) {
    this.dino = dino;
    this.cacti = cacti;
  }

  get cactus() {
    return this.cacti[0]
  }

  rearrangeCacti(){
    let cactus = this.cacti[0];
    if (cactus.x + cactus.width < this.dino.x) {
      this.cacti.shift();
      this.cacti.push(cactus);
    }
  }

  dinoHit() {
    this.rearrangeCacti();
    return this.bottomRightDinoHit() ||
           this.bottomMiddleDinoHit() ||
           this.bottomLeftDinoHit()
  }

  bottomRightDinoHit() {
    return this.dino.bottomRight.x > this.cactus.x &&
           this.dino.bottomRight.x < this.cactus.x + this.cactus.width &&
           this.dino.bottomRight.y > this.cactus.y
  }

  bottomMiddleDinoHit() {
    return this.dino.bottomMiddle.x > this.cactus.x &&
           this.dino.bottomMiddle.x < this.cactus.x + this.cactus.width &&
           this.dino.bottomMiddle.y > this.cactus.y
  }

  bottomLeftDinoHit() {
    return this.dino.bottomLeft.x > this.cactus.x &&
           this.dino.bottomLeft.x < this.cactus.x + this.cactus.width &&
           this.dino.bottomLeft.y > this.cactus.y
  }
}

module.exports = Colission;
