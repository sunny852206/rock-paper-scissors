let rockPaperScissors = ["rock", "paper", "scissors"];
let userScore = 0,
  compScore = 0;

// generate random selection from 'rock', 'paper' or 'scissors' for computer
function getComputerChoice() {
  let random = Math.floor(Math.random() * rockPaperScissors.length);
  let computerChoice = rockPaperScissors[random];
  return computerChoice;
}

// function getUserChoice() {
//   let userChoice = prompt("Pick from Rock, Paper or Scissors!").toLowerCase();
//   console.log("User pick: ", userChoice);
//   return userChoice;
// }

// play a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  console.log(
    "[User pick]:",
    playerSelection,
    " [Comp pick]:",
    computerSelection
  );

  //   let playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      message.textContent = "Draw, you both picked Rock!";
    } else if (computerSelection == "paper") {
      cScore.textContent = ++compScore;
      message.textContent = "You Lose... Paper beats Rock";
    } else {
      pScore.textContent = ++userScore;
      message.textContent = "You Win! Rock beats Scissors!";
    }
  }

  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      pScore.textContent = ++userScore;
      message.textContent = "You Win! Paper beats Rock!";
    } else if (computerSelection == "paper") {
      message.textContent = "Draw, you both picked Paper!";
    } else {
      cScore.textContent = ++compScore;
      message.textContent = "You Lose... Scissors beats Paper";
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      cScore.textContent = ++compScore;
      message.textContent = "You Lose... Rock beats Scissors";
    } else if (computerSelection == "paper") {
      pScore.textContent = ++userScore;
      message.textContent = "You Win! Scissors beat Paper";
    } else {
      message.textContent = "Draw, you both picked Scissors!";
    }
  }

  console.log(gameResult());
}

// start the game
function game() {
  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = getUserChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("user: ", userScore, "comp: ", compScore);
  }

  console.log(gameResult());
}

// show game result after the game
function gameResult() {
  console.log(
    `The result is: 
        [User] : ${userScore}  
        [Computer] : ${compScore}`
  );
  gameOver = false;
  if (userScore == 5 || compScore == 5) {
    gameOver = true;
  }
  if (gameOver) {
    if (userScore > compScore) {
      message.style.color = "red";
      message.textContent = "The winner is.... YOU!";
    } else {
      message.style.color = "red";
      message.textContent = "The winner is.... COMPUTER...";
    }
  }
}

// get User Choice
function clickBtn(e) {
  let userChoice = this.value;
  playRound(userChoice, getComputerChoice());
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", clickBtn);
});

// display result
const pScore = document.querySelector(".userScore");
pScore.textContent = userScore;
const cScore = document.querySelector(".comScore");
cScore.textContent = compScore;
const message = document.querySelector(".message");

// const playerSelection = getUserChoice();
// const computerSelection = getComputerChoice();
// game();
