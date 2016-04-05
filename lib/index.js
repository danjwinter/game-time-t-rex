var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var Dino = require('./dino');
var Cactus = require('./cactus');
var Session = require('./session');
var Bullet = require('./bullet');

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

document.addEventListener('keydown', function(e){
  if (e.keyCode === 13 && session.dino.canShoot()) {
    e.preventDefault();
    let bullet = new Bullet({x: session.dino.x + session.dino.width, y: session.dino.y + (session.dino.height/2), width: 5, height: 5})
    session.bullets.push(bullet)
  }
})

document.addEventListener('keydown', function(e, session){
  if (e.keyCode === 90) {
    e.preventDefault();
    debugger
  }
})
