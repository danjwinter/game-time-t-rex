const chai = require('chai');
const assert = chai.assert;

const Block = require('../lib/block');
const blocksOverlap = require('../lib/blocks-overlap');

describe('blocksOverlap', () => {
  it('returns true if they overlap', () => {
    let block1 = new Block({x: 0, y: 0, width: 10, height: 10});
    let block2 = new Block({x: 5, y: 5, width: 10, height: 10});

    // assert.isTrue(blocksOverlap(block1, block2));
  });

  it('returns false if they overlap', () => {
    let block1 = new Block({x: 0, y: 0, width: 10, height: 10});
    let block2 = new Block({x: 50, y: 50, width: 10, height: 10});

    // assert.isFalse(blocksOverlap(block1, block2));
  });

});
