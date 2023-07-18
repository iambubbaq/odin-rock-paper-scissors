//getComputerChoice to randomly select Rock, Paper, Or Scissors
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}
//create playRound function with two parameters of computerSelection and playerSelection
//prompt playerChoice and store as case insensitive
//return result as a string with choice beating choice
//game funtion to loop for 5 rounds