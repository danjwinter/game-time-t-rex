var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var Dino = require('./dino');
var Cactus = require('./cactus');
var Session = require('./session');

var session = new Session(canvas);



function game_loop(){
  session.tick()
}
requestAnimationFrame(game_loop);



document.addEventListener('keydown', function(e){
  if (e.keyCode === 32) {
    e.preventDefault();
    session.dino.jump();
  }
})

document.addEventListener('keydown', function(e){
  if (e.keyCode === 31 && session.dino.canShoot()) {
    e.preventDefault();
    let bullet = new Bullet(session.dino.x + session.dino.width, session.dino.y + (session.dino.height/2), 1, 1)
    session.cacti.push(bullet)
  }
})
