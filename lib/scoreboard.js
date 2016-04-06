const Firebase = require("firebase");
const fireDb = new Firebase("https://dino-chrome.firebaseio.com/");

class Scoreboard {

  constructor() {
    this.highScores = [];
    this.fireDb = new Firebase("https://dino-chrome.firebaseio.com/");
    this.scorePending = false;
  }

  get sortedScores() {
    let sorted = this.highScores.sort( (a, b) => {
      return b.score - a.score;
    });
    return sorted;
  }

  constructScoreboard() {
    let that = this;
    fireDb.child('scoreboard').on('value', function(scores) {
      if (scores.val() === null) {
        return
      } else {
        $('#scoreboard').empty();
        that.highScores = scores.val();
        that.highScores.forEach( (record, index) => {
          that.appendFormattedScore(record, index+1);
        });
      }
    });
  }

  addScoreToHighScores(score) {
    this.scorePending = true;
    if (this.sortedScores.length < 5 || score > this.sortedScores[4].score) {
      $('.form').append(`<label>Sweet Dino Jumping Scores! Get Ready to be Famous!</label><input id="name" type="text"></input><input id="submit" class="btn btn-score" type="submit"></input>`);
      $('#submit').on('click', () => {
        this.addScoreToScoreboard(score);
      });
    }
  }

  addScoreToScoreboard(score) {
    this.highScores.push({name: $('#name').val(), score: score});
    fireDb.set({ scoreboard: this.sortedScores.slice(0, 5) });
    $('.form').children().remove();
    this.scorePending = false;
  }

  appendFormattedScore(record, index) {
    $('#scoreboard').append(
      `<tr>
      <td>${index}.</td>
      <td>${record.name}</td>
      <td>${record.score}</td>
      </td>`
    );
  }

}

module.exports = Scoreboard;
