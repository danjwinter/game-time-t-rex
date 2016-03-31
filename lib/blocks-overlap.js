const pointsEqual = require('./points-equal');

module.exports = (point1, point2) => {
  for (let firstPoint of point1) {
    for (let secondPoint of point2) {
      if (pointsEqual(firstPoint, secondPoint)) {
        return true;
      }
    }
  }
  return false;
};
