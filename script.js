let computerSelection;
let playerSelection;
let computerWins = 0;
let playerWins = 0;
let round = 0;
let score;

//on click run collectChoices to get computer and player choice
let playerChoice = document.querySelectorAll(".choices > div");
playerChoice.forEach((option) => option.addEventListener("click", playGame));

//getComputerChoice to randomly select Rock, Paper, Or Scissors
function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return computerSelection;
}

//player clicks div to select choice and stores as string
function getPlayerChoice(e) {
  playerSelection = e.currentTarget.textContent.toLowerCase().trim();
  return playerSelection;
}

//on click determine computer choice and player choice
function playGame(e) {
  getComputerChoice();
  getPlayerChoice(e);
  score = playRound(computerSelection, playerSelection);
  toScoreboard();
}

// //create playRound function with two parameters of computerSelection and playerSelection
function playRound(computerSelection, playerSelection) {
  //return result as a string with choice beating choice
  if (computerSelection === playerSelection) {
    playerWins = playerWins + 0;
    computerWins = computerWins + 0;
    round = round + 1;
    return(
      computerSelection +
        " and " +
        playerSelection +
        " are the same! Tied game! " +
        "Computer Wins: " +
        computerWins +
        " Player Wins: " +
        playerWins +
        " Round: " +
        round
    );
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    playerWins = playerWins + 0;
    computerWins = computerWins + 1;
    round = round + 1;
    return(
      computerSelection +
        " beats " +
        playerSelection +
        " you lose! " +
        "Computer Wins: " +
        computerWins +
        " Player Wins: " +
        playerWins +
        " Rounds: " +
        round
    );
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  ) {
    playerWins = playerWins + 1;
    computerWins = computerWins + 0;
    round = round + 1;
    return(
      playerSelection +
        " beats " +
        computerSelection +
        " you win! " +
        "Computer Wins: " +
        computerWins +
        " Player Wins: " +
        playerWins +
        " Rounds: " +
        round
    );
  }
}

//function to add scores to scoreboard
function toScoreboard() {
  let scoreboard = document.querySelector(".scores");
  let scores = document.createElement("p");
  let winner = document.createElement("p");
  let restart = document.createElement("button");
  if (round === 5) {
    if (computerWins > playerWins) {
      scores.textContent = score;
      winner.textContent = "Computer Wins! " + computerWins + " to " + playerWins;
      restart.textContent = "Play Again?"
      restart.addEventListener("click", function(){location.reload()});
      scoreboard.appendChild(scores);
      scoreboard.appendChild(winner);
      scoreboard.appendChild(restart);
    } else {
      scores.textContent = score;
      winner.textContent = "Player Wins! " + playerWins + " to " + computerWins;
      restart.textContent = "Play Again?"
      restart.addEventListener("click", function(){location.reload()});
      scoreboard.appendChild(scores);
      scoreboard.appendChild(winner);
      scoreboard.appendChild(restart);
      
    }
  } else if (round < 6) {
  scores.textContent = score;
  scoreboard.appendChild(scores);
  }
}
