let canvas = document.getElementById('canvas');
let Session = require('./session');
let Scoreboard = require('./scoreboard');
let $ = require('jquery');

canvas.click();

let scoreboard1 = new Scoreboard();
scoreboard1.constructScoreboard();
let session = new Session(canvas, scoreboard1, {start: true, mute: false});
let mute = false;
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

$('#mute-btn').on('click', function(){
    session.backgroundSong.volume = 0.0;
    session.fatality.volume = 0.0;
    session.dino.jumpSound.volume = 0.0;
    session.dino.gunshotSound.volume = 0.0;
    session.dino.dryGunshotSound.volume = 0.0;
    mute = true;
    $(this).toggle();
    $('#unmute-btn').toggle();
});

$('#unmute-btn').on('click', function(){
    session.backgroundSong.volume = 0.2;
    session.fatality.volume = 0.15;
    session.dino.jumpSound.volume = 0.1;
    session.dino.gunshotSound.volume = 0.3;
    session.dino.dryGunshotSound.volume = 0.8;
    mute = false;
    $(this).toggle();
    $('#mute-btn').toggle();
});

document.addEventListener('keydown', function(e){
  if (e.keyCode === 83 && !scoreboard1.scorePending && session.active === false) {
    session.fatality.pause();
    session.fatality.currentTime = 0;
    session = new Session(canvas, scoreboard1, {start: false, mute: mute});
  }
});

document.addEventListener('keydown', function(e){
  if (e.keyCode === 13 && session.active === true && session.dino.canShoot()) {
    e.preventDefault();
    session.dino.shoot.call(session);
  }
});
