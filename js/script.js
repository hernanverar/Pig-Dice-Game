//Create random number generator from 1-6; should return random number//
//passed// 

function Players(name, score, roundPool) {
    this.name = name;
    this.score = score;
    this.roundPool = [];
}


let player1 = new Players("Erik");
let player2 = new Players("Brandon");
let activePlayer = 0;
let currentPlayer = 0;
let keepScore = [0, 0];


// let playerRoll = 0;
Players.prototype.rollDice = function () {
    let roll = Math.floor(Math.random() * 6) + 1;
    this.roundPool.push(roll);
    return roll;
}

function keepRolling() {
    keepScore[currentPlayer] += currentPlayer;
    currentPlayer = (currentPlayer + 1) % 2;
}
function endTurn() {
    if (keepScore[currentPlayer] >= 100) {
        return ('Player' + currentPlayer + "wins!");
    }

    Player.prototype.takeTurn = function () {
        let turnScore = 0;
        let roll = this.rollDice();
        while (roll !== 1) {
            turnScore += roll;
            roll = this.rollDice();
        }
        this.score += turnScore;
    }


    keepRolling.addEventListener("click", function () {
        playerRoll = Math.floor(Math.random() * 6) + 1;
        if (playerRoll !== 1) {
            currentPlayer += playerRoll;
            document.getElementById(`$play1 && Play2`);
        }
    });
}
