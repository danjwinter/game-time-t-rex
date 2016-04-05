class Score {

  constructor(startTime){
    this.frameCount = 0
  }

  update() {
    this.frameCount++;
  }

  get currentScore() {
    return Math.floor(this.frameCount / 40)
  }

}


module.exports = Score;
