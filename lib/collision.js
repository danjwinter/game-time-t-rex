class Collision {

  constructor(game) {
    this.game = game;
    this.dino = game.dino;
    this.cacti = game.cacti;
    this.activeBullets = game.activeBullets;
    this.scoreboard = game.scoreboard;
  }

  get closestCactus() {
    let closest = this.cacti[0];
    for (let i = 0; i < this.cacti.length; i++) {
      if (this.cacti[i].x + this.cacti[i].width > this.dino.x) {
        let tmp = this.cacti[i];
        if (tmp.x < closest.x) { closest = tmp;}
      }
    }
    return closest;
  }

  detectHit() {
    if (this.closestCactus.x <= this.dino.x + this.dino.width) {
      if (this.dinoHitCactus()) {
        this.game.active = false;
        this.scoreboard.addScoreToHighScores(this.game.score.currentScore);
      }
    }
    if (this.bulletHitCactus()) {
      this.closestCactus.shot = true;
      this.removeBullet();
    }
  }

  bulletHitCactus() {
    for (var i = 0; i < this.activeBullets.length; i++) {
      let bullet = this.activeBullets[i];
      if (bullet.x + bullet.width > this.closestCactus.x &&
         (bullet.y > this.closestCactus.y || bullet.y + bullet.height > this.closestCactus.y)) {
          return true;
        } else {
          return false;
        }
      }
    }

    removeBullet() {
      let spentBullet = this.game.activeBullets.shift();
      spentBullet = null;
    }

  dinoHitCactus() {
    return this.bottomRightDinoHit() ||
           this.bottomMiddleDinoHit() ||
           this.bottomLeftDinoHit();
  }

  bottomRightDinoHit() {
    return this.dino.bottomRight.x > this.closestCactus.x &&
           this.dino.bottomRight.x < this.closestCactus.x + this.closestCactus.width &&
           this.dino.bottomRight.y > this.closestCactus.y;
  }

  bottomMiddleDinoHit() {
    return this.dino.bottomMiddle.x > this.closestCactus.x &&
           this.dino.bottomMiddle.x < this.closestCactus.x + this.closestCactus.width &&
           this.dino.bottomMiddle.y > this.closestCactus.y;
  }

  bottomLeftDinoHit() {
    return this.dino.bottomLeft.x > this.closestCactus.x &&
           this.dino.bottomLeft.x < this.closestCactus.x + this.closestCactus.width &&
           this.dino.bottomLeft.y > this.closestCactus.y;
  }
}

module.exports = Collision;
