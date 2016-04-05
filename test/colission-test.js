const chai = require('chai');
const assert = chai.assert;

const Dino = require('../lib/dino');
const Cactus = require('../lib/cactus');
const Colission = require('../lib/colission');

describe("Colission", function(){
  it("instantiates with a dino", function(){
    let dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    let cactus = new Cactus({x: 750, y: 300, width: 10, height: 15});
    let colission = new Colission(dino, [cactus]);

    assert.equal(colission.dino, dino);
  });

  it("instantiates with cacti", function(){
    let dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    let cactus = new Cactus({x: 750, y: 300, width: 10, height: 15});
    let colission = new Colission(dino, [cactus]);

    assert.deepEqual(colission.cacti, [cactus]);
  });

  it("instantiates with a cactus", function(){
    let dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    let cactus = new Cactus({x: 750, y: 300, width: 10, height: 15});
    let colission = new Colission(dino, [cactus]);

    assert.equal(colission.cactus, cactus);
  });

  it("can rearrange cacti", function(){
    let dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    let cactus1 = new Cactus({x: 0, y: 300, width: 10, height: 15});
    let cactus2 = new Cactus({x: 750, y: 300, width: 10, height: 15});
    let cacti = [cactus1, cactus2];
    let colission = new Colission(dino, cacti);

    colission.rearrangeCacti();

    assert.deepEqual(colission.cacti, [cactus2, cactus1]);
  });

  it("does not rearrange cacti when the first is not past the dino", function(){
    let dino = new Dino({x: 50, y: 300, width: 10, height: 15});
    let cactus1 = new Cactus({x: 50, y: 300, width: 10, height: 15});
    let cactus2 = new Cactus({x: 750, y: 300, width: 10, height: 15});
    let cacti = [cactus1, cactus2];
    let colission = new Colission(dino, cacti);

    colission.rearrangeCacti();

    assert.deepEqual(colission.cacti, [cactus1, cactus2]);
  })

  it("can determine a bottom right dino hit when true", function(){
    let dino = new Dino({x: 44, y: 295, width: 10, height: 10});
    let cactus = new Cactus({x: 50, y: 300, width: 10, height: 10});
    let cacti = [cactus];
    let colission = new Colission(dino, cacti);


    assert.isTrue(colission.bottomRightDinoHit());
  });

  it("can determine a bottom right dino hit when false", function(){
    let dino = new Dino({x: 44, y: 295, width: 10, height: 10});
    let cactus = new Cactus({x: 150, y: 300, width: 10, height: 10});
    let cacti = [cactus];
    let colission = new Colission(dino, cacti);


    assert.isFalse(colission.bottomRightDinoHit());
  });

  it("can determine a bottom left dino hit when true", function(){
    let dino = new Dino({x: 50, y: 295, width: 10, height: 10});
    let cactus = new Cactus({x: 44, y: 300, width: 10, height: 10});
    let cacti = [cactus];
    let colission = new Colission(dino, cacti);


    assert.isTrue(colission.bottomLeftDinoHit());
  });

  it("can determine a bottom left dino hit when false", function(){
    let dino = new Dino({x: 50, y: 295, width: 10, height: 10});
    let cactus = new Cactus({x: 150, y: 300, width: 10, height: 10});
    let cacti = [cactus];
    let colission = new Colission(dino, cacti);


    assert.isFalse(colission.bottomLeftDinoHit());
  });

  it("can determine a bottom middle dino hit when true", function(){
    let dino = new Dino({x: 50, y: 295, width: 20, height: 10});
    let cactus = new Cactus({x: 55, y: 300, width: 10, height: 10});
    let cacti = [cactus];
    let colission = new Colission(dino, cacti);


    assert.isTrue(colission.bottomMiddleDinoHit());
  });

  it("can determine a bottom middle dino hit when false", function(){
    let dino = new Dino({x: 50, y: 295, width: 20, height: 10});
    let cactus = new Cactus({x: 150, y: 300, width: 10, height: 10});
    let cacti = [cactus];
    let colission = new Colission(dino, cacti);


    assert.isFalse(colission.bottomMiddleDinoHit());
  });

  it("can determine a dino hit when true", function(){
    let dino = new Dino({x: 50, y: 295, width: 20, height: 10});
    let cactus = new Cactus({x: 55, y: 300, width: 10, height: 10});
    let cacti = [cactus];
    let colission = new Colission(dino, cacti);


    assert.isTrue(colission.dinoHit());
  });

  it("can determine a dino hit when false", function(){
    let dino = new Dino({x: 50, y: 295, width: 20, height: 10});
    let cactus = new Cactus({x: 150, y: 300, width: 10, height: 10});
    let cacti = [cactus];
    let colission = new Colission(dino, cacti);


    assert.isFalse(colission.dinoHit());
  });
});
