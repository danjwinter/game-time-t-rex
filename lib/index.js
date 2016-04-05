var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var Dino = require('./dino');
var Cactus = require('./cactus');
var Session = require('./session');

var session = new Session(canvas);



function game_loop(){
  session.tick()
  requestAnimationFrame(game_loop);
}
requestAnimationFrame(game_loop);



document.addEventListener('keydown', function(e){
  if (e.keyCode === 32) {
    e.preventDefault();
    if (session.active === true) {
      session.dino.jump();
    } else {
      session = new Session(canvas)
    }
  }
})
