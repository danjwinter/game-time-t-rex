const chai = require('chai');
const assert = chai.assert;

const Block = require('../lib/block');
const options = {x: 1, y: 2, width: 3, height: 4};

describe('Block', () => {
  it('instantiates with an x', () => {
    const block = new Block(options);

    assert.equal(block.x, 1);
  });

  it('instantiates with an y', () => {
    const block = new Block(options);
    assert.equal(block.y, 2);
  });

  it('instantiates with an width', () => {
    const block = new Block(options);
    assert.equal(block.width, 3);
  });

  it('instantiates with an height', () => {
    const block = new Block(options);
    assert.equal(block.height, 4);
  });

  it('iterates over all points', () => {
    const block = new Block({x: 0, y: 0, width: 2, height: 2});
    const points = [...block];

    assert.equal(points.length, 4);
  });

  it('can tell if it overlaps with another block', () => {
    const block1 = new Block({x: 0, y: 0, width: 10, height: 10});
    const block2 = new Block({x: 5, y: 5, width: 10, height: 10});

    assert.isTrue(block1.overlapsWith(block2));
  })

  it('can tell if it is not overlapping with another block', () => {
    const block1 = new Block({x: 0, y: 0, width: 10, height: 10});
    const block2 = new Block({x: 50, y: 50, width: 10, height: 10});

    assert.isFalse(block1.overlapsWith(block2));
  })

});
