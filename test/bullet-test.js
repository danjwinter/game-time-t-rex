const chai = require('chai');
const assert = chai.assert;

const Bullet = require('../lib/bullet');

const options = {x: 50, y: 300, width: 1, height: 1}

describe("Bullet", function(){
  it("instantiates with an x", function(){
    let bullet = new Bullet(options);

    assert.equal(bullet.x, 50);
  });

  it("instantiates with an y", function(){
    let bullet = new Bullet(options);

    assert.equal(bullet.y, 300);
  });

  it("instantiates with an height", function(){
    let bullet = new Bullet(options);

    assert.equal(bullet.height, 1);
  });

  it("instantiates with an width", function(){
    let bullet = new Bullet(options);

    assert.equal(bullet.width, 1);
  });

  it("instantiates with a velocity of 3", function(){
    let bullet = new Bullet(options);

    assert.equal(bullet.velocity, 3);
  });

  it("can scroll to the right based on its velocity", function(){
    let bullet = new Bullet(options);
    let originalX = bullet.x;

    bullet.scroll();

    assert.equal(bullet.x, originalX + 1)

  })
});
