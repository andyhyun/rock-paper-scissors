"use strict";

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "tie";
  } else if(playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "paper") {
    return "player";
  } else {
    return "computer";
  }
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i < 6; i++) {
    let playerSelection = capitalizeFirstLetter(prompt("Rock, paper, or scissors?"));
    let computerSelection = capitalizeFirstLetter(getComputerChoice());

    let winner = playRound(playerSelection, computerSelection);

    if (winner === "player") {
      console.log(`You win round ${i}! ${playerSelection} beats ${computerSelection}`);
      playerScore += 1;
    } else if (winner === "computer") {
      console.log(`You lose round ${i}! ${computerSelection} beats ${playerSelection}`);
      computerScore += 1;
    } else {
      console.log(`Round ${i} is a tie!`);
    }
  }

  if (playerScore > computerScore) {
    console.log(`You won ${playerScore}-${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You lost ${playerScore}-${computerScore}`);
  } else {
    console.log("The result is a tie");
  }
}
