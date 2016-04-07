const Dino = require('./dino');
const Collision = require('./collision');
const Renderer = require('./renderer');
const Score = require('./score');
const Images = require('./imageRepo');
const InitialGameObjects = require('./initial-game-objects');



function updateCactusVelocity(group, cactusVelocity, score) {
  if (score % 10 === 0) {
    for(let i = 0; i < group.length; i++) {
      group[i].velocity = cactusVelocity;
    }
  }
}

class Session {

  constructor(canvas, scoreboard, start) {
    this.start = start;
    this.scoreboard = scoreboard;
    this.active = true;
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.height = canvas.height;
    this.width = canvas.width;
    this.score = new Score();
    this.activeBullets = [];
    this.availableBullets = InitialGameObjects.bullets;
    this.dino = new Dino({image: Images.dinoSprite, x: 50, y: 225, width: 60, height: 75});
    this.dino1 = new Dino({image: Images.dinoSprite1, x: 50, y: 225, width: 60, height: 75});
    this.dinoUp = new Dino({image: Images.dinoJump, x: 50, y: 225, width: 60, height: 75});
    this.clouds = InitialGameObjects.clouds;
    this.cacti = InitialGameObjects.cacti;
    this.ground = InitialGameObjects.ground;
    this.collision = new Collision(this);
    this.renderer = new Renderer(this, Images);
  }

  get movingObjects () {
    return this.cacti.concat(this.ground);
  }

  get cactusVelocity() {
    return 4 + (this.score.currentScore / 20);
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
    updateCactusVelocity(this.movingObjects, this.cactusVelocity);
    for(let i = 0; i < this.gameObjects.length; i++) {
      this.gameObjects[i].update();
    }
  }
}

module.exports = Session;
