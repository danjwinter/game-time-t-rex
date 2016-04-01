const chai = require('chai');
const assert = chai.assert;

const Cactus = require('../lib/cactus');

const options = {x: 50, y: 300, width: 10, height: 15}

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

  it("instantiates with a velocity of 2", function(){
    let cactus = new Cactus(options);

    assert.equal(cactus.velocity, 2);
  });

});
