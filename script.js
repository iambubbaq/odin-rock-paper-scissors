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
//return result as a string with choice beating choice
//game funtion to loop for 5 rounds