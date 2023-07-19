//getComputerChoice to randomly select Rock, Paper, Or Scissors
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}
//prompt playerChoice and store as case insensitive
function getPlayerChoice() {
  let playerSelection = prompt("Type Rock, Paper, or Scissors", "Rock");
  return playerSelection.toLowerCase();
}
//create playRound function with two parameters of computerSelection and playerSelection
let computerSelection;
let playerSelection;
function playRound(computerSelection, playerSelection) {
  //return result as a string with choice beating choice
  computerSelection = getComputerChoice();
  playerSelection = getPlayerChoice();
  if (computerSelection === playerSelection) {
    return (
      computerSelection +
      " and " +
      playerSelection +
      " are the same! Tied game!"
    );
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return computerSelection + " beats " + playerSelection + " you lose!";
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  ) {
    return playerSelection + " beats " + computerSelection + " you win!";
  }
  
}
//game funtion to loop for 5 rounds
function game() {
  console.log(playRound(computerSelection, playerSelection));
  console.log(playRound(computerSelection, playerSelection));
  console.log(playRound(computerSelection, playerSelection));
  console.log(playRound(computerSelection, playerSelection));
  console.log(playRound(computerSelection, playerSelection));
}
game();
