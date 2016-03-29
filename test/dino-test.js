var chai = require('chai');
var assert = chai.assert;

var Dino = require('../lib/dino');

describe("Dino", function(){
  it("starts with a default position", function(){
    var dino = new Dino();
    var defaultX = 50;
    var defaultY = 300;
    var defaultWidth = 10;
    var defaultHeight = 10;
    assert.equal(dino.x, defaultX);
    assert.equal(dino.y, defaultY);
    assert.equal(dino.width, defaultWidth);
    assert.equal(dino.height, defaultHeight);
  });

  it("can jump", function(){
    // var dino = new Dino();
    // dino.jump();
    // var jumpXPosition = 200;
    // assert.equal(dino.y, jumpXPosition);
  });
});
