let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result;
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    userScore++;
  } else {
    result = "Computer wins!";
    computerScore++;
  }

  document.getElementById(
    "result"
  ).innerText = `You chose ${userChoice}, Computer chose ${computerChoice}. ${result}`;
  document.getElementById("userScore").innerText = userScore;
  document.getElementById("computerScore").innerText = computerScore;
}

document.getElementById("rock").addEventListener("click", () => play("rock"));
document.getElementById("paper").addEventListener("click", () => play("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => play("scissors"));