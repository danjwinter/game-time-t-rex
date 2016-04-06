const Firebase = require("firebase");
const fireDb = new Firebase("https://dino-chrome.firebaseio.com/");

class Scoreboard {

  constructor() {
    this.highScores = []
  }

  get sortedScores() {
    let sorted = this.highScores.sort( (a, b) => {
      return b.score - a.score;
    });
    return sorted;
  }

  constructScoreboard() {
    fireDb.child('scoreboard').on('value', function(scores) {
      $('#scoreboard').empty();
      this.highScores = sortScores(scores.val());
      this.highScores.forEach( (record, index) => {
        this.appendFormattedScore(record, index+1);
      })
    })
  }

  addScoreToHighScores(score) {
    if (score > sortedScores[4].score) {
      $('.form').append(`<label>Sweet Dino Jumping Scores! Get Ready to be Famous!</label><input id="name" type="text"></input><input id="submit" class="btn btn-danger btn-lg" type="submit"></input>`)
      $('#submit').on('click', () => {
        this.addScoreToScoreboard(score);
      });
    }
  }

  addScoreToScoreboard(score) {
    sortedScores.push({name: $('#name').val(), score: score});
    fireDb.set({ scoreboard: this.sortedScores.slice(0, 5) });
    $('.form').children().remove();
  }

  appendFormattedScore(record, index) {
    $('#scoreboard').append(
      `<tr>
      <td>${index}.</td>
      <td>${record.name}</td>
      <td>${record.score}</td>
      </td>`
    )
  }

}

const populateScoreboard = () => {
}

const addScore = (score) => {
}

const updateScoreboard = (score) => {
}

const appendScore = (record, index) => {
}

const sortScores = (scores) => {

}

module.exports = { addScore: addScore, populateScoreboard: populateScoreboard };
