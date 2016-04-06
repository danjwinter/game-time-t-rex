const chai = require('chai');
const assert = chai.assert;

const Cactus = require('../lib/cactus');

const options = {x: 50, y: 300, width: 10, height: 15, velocity: 4};

describe("Cactus", function(){
  it("instantiates with an x", function(){
    let cactus = new Cactus(options);

    assert.equal(cactus.x, 50);
  });

  it("instantiates with an y", function(){
    let cactus = new Cactus(options);

    assert.equal(cactus.y, 300);
  });

  it("instantiates with an height", function(){
    let cactus = new Cactus(options);

    assert.equal(cactus.height, 15);
  });

  it("instantiates with an width", function(){
    let cactus = new Cactus(options);

    assert.equal(cactus.width, 10);
  });

  it("instantiates with a velocity of 4", function(){
    let cactus = new Cactus(options);

    assert.equal(cactus.velocity, 4);
  });

  it("can resurrect itself off to the right of the canvas width", function() {
    let cactus = new Cactus(options);

    cactus.resurrect(950);

    assert.equal(cactus.x, 950)
  });

  it("resurrects itself when it is off the canvas to the left", function() {
    let cactus = new Cactus(options);
    cactus.x = 0 - cactus.width - 1

    cactus.resurrectWhenOffScreenTo(950);

    assert.equal(cactus.x, 950)
  });

  it("does not resurrect itself when it is on screen", function() {
    let cactus = new Cactus(options);
    cactus.x = 50

    cactus.resurrectWhenOffScreenTo(950);

    assert.equal(cactus.x, 50)
  });

  it("does not resurrect itself when it is off screen to the right", function() {
    let cactus = new Cactus(options);
    cactus.x = 950

    cactus.resurrectWhenOffScreenTo(2050);

    assert.equal(cactus.x, 950)
  });

});
