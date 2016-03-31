// var chai = require('chai');
// var assert = chai.assert;
//
// var Dino = require('../lib/dino');
//
// describe("Dino", function(){
//   it("starts with a default position", function(){
//     var dino = new Dino();
//     var defaultX = 50;
//     var defaultY = 300;
//     var defaultWidth = 10;
//     var defaultHeight = 10;
//     assert.equal(dino.x, defaultX);
//     assert.equal(dino.y, defaultY);
//     assert.equal(dino.width, defaultWidth);
//     assert.equal(dino.height, defaultHeight);
//     assert.equal(dino.jumpAvailable, true);
//     assert.equal(dino.isJumping, false);
//     assert.equal(dino.isFalling, false);
//   });
//
//
//   it("can jump", function(){
//     var dino = new Dino();
//     dino.jump();
//     assert.equal(dino.isJumping, true);
//     assert.equal(dino.jumpSpeed, 15);
//     assert.equal(dino.jumpAvailable, false);
//   });
//
//   it("continues to ascend from jump until speed its 0", function(){
//     var dino = new Dino;
//     var originalY = dino.y;
//     dino.jump();
//     var originalJumpSpeed = dino.jumpSpeed;
//     dino.checkJump();
//     assert.notEqual(dino.y, originalY);
//     assert.equal(dino.y, originalY - dino.jumpSpeed - 1);
//     assert.equal(dino.jumpSpeed, originalJumpSpeed - 1);
//     do {
//       dino.checkJump();
//     } while (dino.jumpSpeed !== 0);
//     assert.equal(dino.isJumping, false);
//     assert.equal(dino.isFalling, true);
//     assert.equal(dino.fallSpeed, 1);
//   })
//
//   it("falls back to original position after jumping", function(){
//     var dino = new Dino();
//     dino.jump();
//     do {
//       dino.checkJump();
//     } while (dino.jumpSpeed !== 0);
//     var crestY = dino.y;
//     dino.checkFall();
//
//     assert.equal(dino.y, crestY + dino.fallSpeed - .8);
//     assert.equal(dino.fallSpeed, 1.8);
//
//     do {
//       dino.checkFall();
//     } while (dino.fallSpeed > 0);
//
//     assert.equal(dino.y, 300);
//     assert.equal(dino.isFalling, false);
//     assert.equal(dino.fallSpeed, 0);
//     assert.equal(dino.jumpAvailable, true)
//   })
//
//   it("stops falling at original y coordinates", function(){
//     var dino = new Dino();
//     dino.jump();
//     dino.stopFall();
//
//     assert.equal(dino.isFalling, false);
//     assert.equal(dino.fallSpeed, 0);
//     assert.equal(dino.jumpAvailable, true);
//   });
//
//   it("can't jump when already jumping", function(){
//     var dino = new Dino();
//     dino.jump();
//     var originalJumpSpeed = dino.jumpSpeed;
//     assert.equal(dino.jumpAvailable, false);
//     assert.equal(originalJumpSpeed, 15);
//     dino.checkJump();
//     assert.equal(dino.jumpSpeed, 14);
//     dino.jump();
//     assert.notEqual(dino.jumpSpeed, 15)
//   })
// });
