let rockPaperScissors = ["rock", "paper", "scissors"];
let userScore = 0,
  compScore = 0;

// generate random selection from 'rock', 'paper' or 'scissors' for computer
function getComputerChoice() {
  let random = Math.floor(Math.random() * rockPaperScissors.length);
  let computerChoice = rockPaperScissors[random];
  console.log("Comp pick: ", computerChoice);
  return computerChoice;
}

function getUserChoice() {
  let userChoice = prompt("Pick from Rock, Paper or Scissors!").toLowerCase();
  console.log("User pick: ", userChoice);
  return userChoice;
}

// play a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  //   let playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return "Draw, you both picked Rock!";
    } else if (computerSelection == "paper") {
      compScore++;
      return "You Lose... Paper beats Rock";
    } else {
      userScore++;
      return "You Win! Rock beats Scissors!";
    }
  }

  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      userScore++;
      return "You Win! Paper beats Rock!";
    } else if (computerSelection == "paper") {
      return "Draw, you both picked Paper!";
    } else {
      compScore++;
      return "You Lose... Scissors beats Paper";
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      compScore++;
      return "You Lose... Rock beats Scissors";
    } else if (computerSelection == "paper") {
      userScore++;
      return "You Win! Scissors beat Paper";
    } else {
      return "Draw, you both picked Scissors!";
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = getUserChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("user: ", userScore, "comp: ", compScore);
  }

  console.log(gameResult());
}

function gameResult() {
  console.log(
    `The result is: 
        [User] : ${userScore}  
        [Computer] : ${compScore}`
  );

  if (userScore > compScore) {
    return "You Won!!!!!";
  } else if (userScore < compScore) {
    return "You Lost...";
  } else {
    return "That's a draw, try again?";
  }
}

// const playerSelection = getUserChoice();
// const computerSelection = getComputerChoice();
game();
