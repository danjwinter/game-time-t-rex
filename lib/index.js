let canvas = document.getElementById('canvas');
let Session = require('./session');
let Scoreboard = require('./scoreboard');
let marioRemix = new Audio();
marioRemix.src = './sounds/mario-remix.mp3';

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
    session.fatality.pause();
    session.fatality.currentTime = 0;
    session = new Session(canvas, scoreboard1);
  }
});

document.addEventListener('keydown', function(e){
  if (e.keyCode === 13 && session.active === true && session.dino.canShoot()) {
    e.preventDefault();
    session.dino.shoot.call(session);
  }
});
