const chai = require('chai');
const assert = chai.assert;

const Dino = require('../lib/dino');
const Cactus = require('../lib/cactus');
const Collision = require('../lib/collision');

describe("Collision", function(){
  it("instantiates with a dino", function(){
    let dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    let cactus = new Cactus({x: 750, y: 300, width: 10, height: 15});
    let collision = new Collision(dino, [cactus]);

    assert.equal(collision.dino, dino);
  });

  it("instantiates with cacti", function(){
    let dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    let cactus = new Cactus({x: 750, y: 300, width: 10, height: 15});
    let collision = new Collision(dino, [cactus]);

    assert.deepEqual(collision.cacti, [cactus]);
  });

  it("instantiates with a cactus", function(){
    let dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    let cactus = new Cactus({x: 750, y: 300, width: 10, height: 15});
    let collision = new Collision(dino, [cactus]);

    assert.equal(collision.cactus, cactus);
  });

  it("can rearrange cacti", function(){
    let dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    let cactus1 = new Cactus({x: 0, y: 300, width: 10, height: 15});
    let cactus2 = new Cactus({x: 750, y: 300, width: 10, height: 15});
    let cacti = [cactus1, cactus2];
    let collision = new Collision(dino, cacti);

    collision.rearrangeCacti();

    assert.deepEqual(collision.cacti, [cactus2, cactus1]);
  });

  it("does not rearrange cacti when the first is not past the dino", function(){
    let dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    let cactus1 = new Cactus({x: 50, y: 300, width: 10, height: 15});
    let cactus2 = new Cactus({x: 750, y: 300, width: 10, height: 15});
    let cacti = [cactus1, cactus2];
    let collision = new Collision(dino, cacti);

    collision.rearrangeCacti();

    assert.deepEqual(collision.cacti, [cactus1, cactus2]);
  })

  it("can determine a bottom right dino hit when true", function(){
    let dino = new Dino({x: 44, y: 295, width: 10, height: 10});
    let cactus = new Cactus({x: 50, y: 300, width: 10, height: 10});
    let cacti = [cactus];
    let collision = new Collision(dino, cacti);


    assert.isTrue(collision.bottomRightDinoHit());
  });

  it("can determine a bottom right dino hit when false", function(){
    let dino = new Dino({x: 44, y: 295, width: 10, height: 10});
    let cactus = new Cactus({x: 150, y: 300, width: 10, height: 10});
    let cacti = [cactus];
    let collision = new Collision(dino, cacti);


    assert.isFalse(collision.bottomRightDinoHit());
  });

  it("can determine a bottom left dino hit when true", function(){
    let dino = new Dino({x: 50, y: 295, width: 10, height: 10});
    let cactus = new Cactus({x: 44, y: 300, width: 10, height: 10});
    let cacti = [cactus];
    let collision = new Collision(dino, cacti);


    assert.isTrue(collision.bottomLeftDinoHit());
  });

  it("can determine a bottom left dino hit when false", function(){
    let dino = new Dino({x: 50, y: 295, width: 10, height: 10});
    let cactus = new Cactus({x: 150, y: 300, width: 10, height: 10});
    let cacti = [cactus];
    let collision = new Collision(dino, cacti);


    assert.isFalse(collision.bottomLeftDinoHit());
  });

  it("can determine a bottom middle dino hit when true", function(){
    let dino = new Dino({x: 50, y: 295, width: 20, height: 10});
    let cactus = new Cactus({x: 55, y: 300, width: 10, height: 10});
    let cacti = [cactus];
    let collision = new Collision(dino, cacti);


    assert.isTrue(collision.bottomMiddleDinoHit());
  });

  it("can determine a bottom middle dino hit when false", function(){
    let dino = new Dino({x: 50, y: 295, width: 20, height: 10});
    let cactus = new Cactus({x: 150, y: 300, width: 10, height: 10});
    let cacti = [cactus];
    let collision = new Collision(dino, cacti);


    assert.isFalse(collision.bottomMiddleDinoHit());
  });

  it("can determine a dino hit when true", function(){
    let dino = new Dino({x: 50, y: 295, width: 20, height: 10});
    let cactus = new Cactus({x: 55, y: 300, width: 10, height: 10});
    let cacti = [cactus];
    let collision = new Collision(dino, cacti);


    assert.isTrue(collision.dinoHit());
  });

  it("can determine a dino hit when false", function(){
    let dino = new Dino({x: 50, y: 295, width: 20, height: 10});
    let cactus = new Cactus({x: 150, y: 300, width: 10, height: 10});
    let cacti = [cactus];
    let collision = new Collision(dino, cacti);


    assert.isFalse(collision.dinoHit());
  });
});
