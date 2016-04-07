const Collision = require('./collision');
const Renderer = require('./renderer');
const Score = require('./score');
const InitialGameObjects = require('./initial-game-objects');



function updateCactusVelocity(group, cactusVelocity, score) {
  if (score % 10 === 0) {
    for(let i = 0; i < group.length; i++) {
      group[i].velocity = cactusVelocity;
    }
  }
}

class Session extends InitialGameObjects {

  constructor(canvas, scoreboard, start) {
    super();
    this.start = start;
    this.scoreboard = scoreboard;
    this.active = true;
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.height = canvas.height;
    this.width = canvas.width;
    this.score = new Score();
    this.activeBullets = [];
    this.collision = new Collision(this);
    this.renderer = new Renderer(this);
  }

  get movingObjects () {
    return this.cacti.concat(this.ground);
  }

  get cactusVelocity() {
    return 4 + (this.score.currentScore / 25);
  }

  tick() {
    if (this.start) {
      this.renderer.drawStart();
      return this.active = false;
    }
    if (this.active === true) {
      this.play();
    } else {
      this.renderer.drawGameOver();
    }
  }

  play() {
    this.renderer.draw();
    this.collision.detectHit();
    this.update();
  }

  get gameObjects() {
    return this.cacti.concat(this.ground)
                     .concat(this.clouds)
                     .concat(this.activeBullets)
                     .concat(this.score)
                     .concat(this.dino);
  }

  update() {
    updateCactusVelocity(this.movingObjects, this.cactusVelocity, this.score.currentScore);
    for(let i = 0; i < this.gameObjects.length; i++) {
      this.gameObjects[i].update();
    }
  }
}

module.exports = Session;
