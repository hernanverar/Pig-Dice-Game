// Business Logic

function Players(diceRoll) {
    this.diceRoll = diceRoll
    this.keepscore = 0;
    this.roundPool = 0;
}

let player1 = new Players(true);
let player2 = new Players(false);

Players.prototype.rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

function playersTurn() {
    let  players;
    if (player1.diceRoll == true) {
        players = player1;
    } else if (player2.diceRoll == true) {
        players = player2
    }
    return players;
}


function gameRules() {
    let roll = diceRoll();
    let Players = playersTurn
    while (roll !== 1) {
    turnScore += roll;
    roll = diceRoll();
    }
    return Players;
}

function changeTurn() {
    if (player1.diceRoll == true) {
        player1.diceRoll = false;
        player2.diceRoll = true;
    } else {player1.diceRoll = true; 
        player2.diceRoll =false;
    }
}

function endTurn() {
    if (keepScore[currentPlayer] >= 100) {
    return "Player" + currentPlayer + "wins!";
    }
}

// UI Loogic

    window.addEventListener("load", function ()  {
        document.getElementById("btn-roll").addEventListener("click", playersTurn());
    });