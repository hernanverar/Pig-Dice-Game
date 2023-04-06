//Create random number generator from 1-6; should return random number//
//passed//

function Players(diceRoll) {
    this.diceRoll = diceRoll
    this.score = 0;
    this.roundPool = [];
}

let player1 = new Players(true);
let player2 = new Players(false);

Players.prototype.rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

function playersTurn() {
    let roll = this.diceRoll();
    while (roll !== 1) {
    turnScore += roll;
    roll = this.rollDice();
    }
    this.score += turnScore;
}

function changeTurn() {
    if (player1.diceRoll == true) {
        players = player1;
    } else player2.diceRoll == false; {
        players = player2;
    }
}
console.log(playersTurn);


function endTurn() {
    if (keepScore[currentPlayer] >= 100) {
    return "Player" + currentPlayer + "wins!";
    }
}
