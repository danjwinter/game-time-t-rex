let canvas = document.getElementById('canvas');
// let context = canvas.getContext('2d');
// let Dino = require('./dino');
// let Cactus = require('./cactus');
let Session = require('./session');
// let Bullet = require('./bullet');
let Scoreboard = require('./scoreboard');

canvas.click();


let scoreboard1 = new Scoreboard();
scoreboard1.constructScoreboard();
let session = new Session(canvas, scoreboard1, true);

function game_loop(){
  session.tick();
  requestAnimationFrame(game_loop);
}
requestAnimationFrame(game_loop);

document.addEventListener('keydown', function(e){
  if (e.keyCode === 32) {
    if (session.active === true) {
      e.preventDefault();
      session.dino.jump();
    }
  }
});

document.addEventListener('keydown', function(e){
  if (e.keyCode === 83 && !scoreboard1.scorePending && session.active === false) {
    session = new Session(canvas, scoreboard1);
  }
});

document.addEventListener('keydown', function(e){
  if (e.keyCode === 13 && session.active === true && session.dino.canShoot()) {
    if (session.availableBullets.length === 0) {
      return;
    }
    e.preventDefault();

    let bullet = session.availableBullets.shift();
    bullet.x = session.dino.x + session.dino.width;
    bullet.y = session.dino.y + (session.dino.height/2.5);
    // let bullet = new Bullet({x: session.dino.x + session.dino.width, y: session.dino.y + (session.dino.height/2), width: 5, height: 5})
    session.activeBullets.push(bullet);
  }
});
