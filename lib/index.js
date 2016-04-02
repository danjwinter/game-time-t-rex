var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var Dino = require('./dino');
var Cactus = require('./cactus');
var Session = require('./session');

// var session = new Session(canvas);
//
// requestAnimationFrame(session.tick)
//

function starter(){
  // const session = new Session(canvas, context)
  // debugger
  window.addEventListener('keydown', function(e){
    if (e.keyCode === 32) {
      e.preventDefault();

      session.dino.jump();
    }
  })
  // debugger
  // session.tick()
  requestAnimationFrame(session.tick.bind(session))
}
requestAnimationFrame(starter);



// document.addEventListener('keydown', function(e){
//   if (e.keyCode === 32) {
//     e.preventDefault();
//     // debugger
//     session.dino.jump();
//   }
// })

// Code to force cactus creation, not to be included in development
// document.addEventListener('keydown', function(e){
//   if (e.keyCode === 13) {
//     e.preventDefault();
//     cactusInterval(1000);
//   }
// })
