"use strict";

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      return "";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if(playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "paper") {
    return `You win, ${playerSelection} beats ${computerSelection}!`;
  } else {
    return `You lose, ${computerSelection} beats ${playerSelection}.`;
  }
}
