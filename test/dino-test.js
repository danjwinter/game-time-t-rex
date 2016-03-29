var chai = require('chai');
var assert = chai.assert;

var Dino = require('../lib/dino');

describe("Dino", function(){
  it("starts with a default position", function(){
    var dino = new Dino;
    var defaultX = 50;
    var defaultY = 300;
    var defaultWidth = 10;
    var defaultHeight = 10;
    assert.equal(dino.x, defaultX);
    assert.equal(dino.y, defaultY);
    assert.equal(dino.width, defaultWidth);
    assert.equal(dino.height, defaultHeight);
    assert.equal(dino.jumpAvailable, true);
    assert.equal(dino.isJumping, false);
    assert.equal(dino.isFalling, false);
    assert.equal(dino.fallSpeed, 2);
  });

  // it("can't jump when already jumping")

  it("can jump", function(){
    var dino = new Dino;
    dino.jump();
    assert.equal(dino.isJumping, true);
    assert.equal(dino.jumpSpeed, 15);
    dino.checkJump();
  });
});
