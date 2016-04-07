class Score {

  constructor(){
    this.frameCount = 0;
  }

  update() {
    if (this.frameCount === 0) {debugger}
    this.frameCount++;
  }

  get currentScore() {
    return Math.floor(this.frameCount / 40);
  }

}


module.exports = Score;
