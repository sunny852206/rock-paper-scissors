let rockPaperScissors = ["rock", "paper", "scissors"];

// generate random selection from 'rock', 'paper' or 'scissors' for computer
function getComputerChoice() {
  let random = Math.floor(Math.random() * rockPaperScissors.length);
  let computerChoice = rockPaperScissors[random];
  console.log("Comp pick: ", computerChoice);
  return computerChoice;
}

// play a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  //   let playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return "Draw, you both picked Rock!";
    } else if (computerSelection == "paper") {
      console.log("You Lose... Paper beats Rock");
      return "Lose";
    } else {
      console.log("win");
      return "You Win! Rock beats Scissors!";
    }
  }

  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "You Win! Paper beats Rock!";
    } else if (computerSelection == "paper") {
      return "Draw, you both picked Paper!";
    } else {
      return "You Lose... Scissors beats Paper";
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "You Lose... Rock beats Scissors";
    } else if (computerSelection == "paper") {
      return "You Win! Scissors beat Paper";
    } else {
      return "Draw, you both picked Scissors!";
    }
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
