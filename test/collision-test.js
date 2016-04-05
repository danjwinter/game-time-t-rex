const chai = require('chai');
const assert = chai.assert;

const Dino = require('../lib/dino');
const Cactus = require('../lib/cactus');
const Bullet = require('../lib/bullet');
const Collision = require('../lib/collision');

describe("Collision", function(){
  it("instantiates with a dino", function(){
    let session = {};
    session.dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    session.cacti = [new Cactus({x: 750, y: 300, width: 10, height: 15})];
    let collision = new Collision(session);

    assert.equal(collision.dino, session.dino);
  });

  it("instantiates with cacti", function(){

    let session = {};
    session.dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    session.cacti = [new Cactus({x: 750, y: 300, width: 10, height: 15})];
    let collision = new Collision(session);

    assert.deepEqual(collision.cacti, session.cacti);
  });

  it("instantiates with a cactus", function(){
    let session = {};
    session.dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    session.cacti = [new Cactus({x: 750, y: 300, width: 10, height: 15})];
    let collision = new Collision(session);

    assert.equal(collision.cactus, session.cacti[0]);
  });

  it("can rearrange cacti", function(){
    let session = {};
    session.dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    let cactus1 = new Cactus({x: 0, y: 300, width: 10, height: 15});
    let cactus2 = new Cactus({x: 750, y: 300, width: 10, height: 15});
    session.cacti = [cactus1, cactus2];
    let collision = new Collision(session);

    collision.rearrangeCactiWhenPastDino();

    assert.deepEqual(collision.cacti, [cactus2, cactus1]);
  });

  it("does not rearrange cacti when the first is not past the dino", function(){
    let session = {};
    session.dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    let cactus1 = new Cactus({x: 50, y: 300, width: 10, height: 15});
    let cactus2 = new Cactus({x: 750, y: 300, width: 10, height: 15});
    session.cacti = [cactus1, cactus2];
    let collision = new Collision(session);

    collision.rearrangeCactiWhenPastDino();

    assert.deepEqual(collision.cacti, [cactus1, cactus2]);
  });

  it("can determine a bottom right dino hit when true", function(){
    let session = {};
    session.dino = new Dino({x: 44, y: 295, width: 10, height: 10});
    let cactus = new Cactus({x: 50, y: 300, width: 10, height: 10});
    session.cacti = [cactus];
    let collision = new Collision(session);

    assert.isTrue(collision.bottomRightDinoHit());
  });

  it("can determine a bottom right dino hit when false", function(){
    let session = {};
    session.dino = new Dino({x: 44, y: 295, width: 10, height: 10});
    let cactus = new Cactus({x: 150, y: 300, width: 10, height: 10});
    session.cacti = [cactus];
    let collision = new Collision(session);

    assert.isFalse(collision.bottomRightDinoHit());
  });

  it("can determine a bottom left dino hit when true", function(){
    let session = {};
    session.dino = new Dino({x: 50, y: 295, width: 10, height: 10});
    let cactus = new Cactus({x: 44, y: 300, width: 10, height: 10});
    session.cacti = [cactus];
    let collision = new Collision(session);

    assert.isTrue(collision.bottomLeftDinoHit());
  });

  it("can determine a bottom left dino hit when false", function(){
    let session = {};
    session.dino = new Dino({x: 50, y: 295, width: 10, height: 10});
    let cactus = new Cactus({x: 150, y: 300, width: 10, height: 10});
    session.cacti = [cactus];
    let collision = new Collision(session);

    assert.isFalse(collision.bottomLeftDinoHit());
  });

  it("can determine a bottom middle dino hit when true", function(){
    let session = {};
    session.dino = new Dino({x: 50, y: 295, width: 20, height: 10});
    let cactus = new Cactus({x: 55, y: 300, width: 10, height: 10});
    session.cacti = [cactus];
    let collision = new Collision(session);

    assert.isTrue(collision.bottomMiddleDinoHit());
  });

  it("can determine a bottom middle dino hit when false", function(){
    let session = {};
    session.dino = new Dino({x: 50, y: 295, width: 20, height: 10});
    let cactus = new Cactus({x: 150, y: 300, width: 10, height: 10});
    session.cacti = [cactus];
    let collision = new Collision(session);

    assert.isFalse(collision.bottomMiddleDinoHit());
  });

  it("can determine a dino hit when true", function(){
    let session = {};
    session.dino = new Dino({x: 50, y: 295, width: 20, height: 10});
    let cactus = new Cactus({x: 55, y: 300, width: 10, height: 10});
    session.cacti = [cactus];
    let collision = new Collision(session);

    assert.isTrue(collision.dinoHitCactus());
  });

  it("can determine a dino hit when false", function(){
    let session = {};
    session.dino = new Dino({x: 50, y: 295, width: 20, height: 10});
    let cactus = new Cactus({x: 150, y: 300, width: 10, height: 10});
    session.cacti = [cactus];
    let collision = new Collision(session);

    assert.isFalse(collision.dinoHitCactus());
  });

  it("can determine a bullet hit when true", function(){
    let session = {};
    let bullet = new Bullet({x: 51, y: 300, width: 4, height: 4});
    let cactus = new Cactus({x: 54, y: 300, width: 10, height: 10});
    session.cacti = [cactus];
    session.bullets = [bullet]
    let collision = new Collision(session);

    assert.isTrue(collision.bulletHitCactus());
  });

  it("can determine a bullet hit when false", function(){
    let session = {};
    let bullet = new Bullet({x: 51, y: 300, width: 4, height: 4});
    let cactus = new Cactus({x: 154, y: 300, width: 10, height: 10});
    session.cacti = [cactus];
    session.bullets = [bullet]
    let collision = new Collision(session);

    assert.isFalse(collision.bulletHitCactus());
  });

  // test detectHit()

});
