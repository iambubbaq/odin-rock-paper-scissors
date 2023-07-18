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
let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
function playRound(computerSelection,playerSelection) {
    //return result as a string with choice beating choice
    if (computerSelection === playerSelection) {
        return computerSelection + " and " + playerSelection + " are the same! Tied game!";
    } 
    else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")) {
        return computerSelection + " beats " + playerSelection + " you lose!";
    } 
    else if ((computerSelection === "rock" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "rock")) {
        return playerSelection + " beats " + computerSelection + " you win!";
    };

}


//game funtion to loop for 5 rounds