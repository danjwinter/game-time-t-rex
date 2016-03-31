const chai = require('chai');
const assert = chai.assert;

const pointsEqual = require('../lib/points-equal');
const createPoint = require('../lib/create-point');

describe("pointsEqual", () => {
  it("returns true if points are equal", () => {
    let point1 = createPoint(1, 1);
    let point2 = createPoint(1, 1);

    assert.isTrue(pointsEqual(point1, point2));
  });

  it("returns false if points are not equal", () => {
    let point1 = createPoint(1, 1);
    let point2 = createPoint(10, 10);

    assert.isFalse(pointsEqual(point1, point2));
  });

});
