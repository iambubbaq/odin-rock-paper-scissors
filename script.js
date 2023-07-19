let computerSelection;
let playerSelection;
let computerWins = 0;
let playerWins = 0;
let round = 0;

//getComputerChoice to randomly select Rock, Paper, Or Scissors
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}
//prompt playerChoice and store as case insensitive
function getPlayerChoice() {
  let playerSelection = prompt("Type Rock, Paper, or Scissors", "Type Choice");
  return playerSelection.toLowerCase();
}
//create playRound function with two parameters of computerSelection and playerSelection

function playRound(computerSelection, playerSelection) {
  //return result as a string with choice beating choice
  computerSelection = getComputerChoice();
  playerSelection = getPlayerChoice();
  if (computerSelection === playerSelection) {
    playerWins = playerWins + 0;
    computerWins = computerWins + 0;
    round = round + 1;
    return (
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
    return (
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
    return (
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
//game funtion to loop for 5 rounds
function game() {
  alert(playRound(computerSelection, playerSelection));
  alert(playRound(computerSelection, playerSelection));
  alert(playRound(computerSelection, playerSelection));
  alert(playRound(computerSelection, playerSelection));
  alert(playRound(computerSelection, playerSelection));
  if (computerWins > playerWins) {
    alert("Computer Wins! " + computerWins + " to " + playerWins);
  } else {
    alert("Player Wins! " + playerWins + " to " + computerWins);
  }
}
game();
