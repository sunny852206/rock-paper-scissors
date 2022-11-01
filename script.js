let rockPaperScissors = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let random = Math.floor(Math.random() * rockPaperScissors.length);
  let computerChoice = rockPaperScissors[random];
  console.log(computerChoice);
  return computerChoice;
}
