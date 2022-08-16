"use strict";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

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

function getWinner(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (playerChoice === computerChoice) {
    return "tie";
  } else if(playerChoice === "rock" && computerChoice === "scissors" ||
            playerChoice === "paper" && computerChoice === "rock" ||
            playerChoice === "scissors" && computerChoice === "paper") {
    return "player";
  } else {
    return "computer";
  }
}

function playRound(e) {
  const playerChoice = capitalizeFirstLetter(this.className);
  const computerChoice = capitalizeFirstLetter(getComputerChoice());
  const winner = getWinner(playerChoice, computerChoice);

  if (winner === "player") {
    playerScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
  
  choices.textContent = `Player: ${playerChoice} | Computer: ${computerChoice}`;
  scores.textContent = `Player ${playerScore} - ${computerScore} Computer`;

  if (playerScore === 5) {
    message.textContent = "Player wins!";
    buttons.forEach((button) => button.disabled = true);
  } else if (computerScore === 5) {
    message.textContent = "Computer wins!";
    buttons.forEach((button) => button.disabled = true);
  }
}

const message = document.querySelector("h2");
const choices = document.querySelector(".choices");
const scores = document.querySelector(".scores");
const buttons = document.querySelectorAll("button");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => button.addEventListener("click", playRound));
