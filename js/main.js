let choices = ["rock", "paper", "scissors"];

const computerSelection = computerPlay();

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// use function game() to go five rounds of RPS
//keep track of wins and losses for each round
//after 5 rounds played, report winner or loser in console

function game() {
  let count = 0;
  let win = 0;
  for (let i = 0; i < 5; i++) {
    const playerPrompt = prompt("Rock, Paper, or Scissors?");
    let playerSelection = playerPrompt.toLowerCase();
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    alert(roundResult);
    if (!roundResult) {
      i--;
      alert("Please choose either rock, paper, or scissors!");
    } else if (roundResult.charAt(4) === "w") {
      count++;
      win++;
    } else if (roundResult.charAt(4) === "l") {
      count--;
    }
  }
  let winOrLoss;
  if (count >= 1) {
    winOrLoss = "YOU WON!";
  } else if (count === 0) {
    winOrLoss = "YOU TIED!";
  } else {
    winOrLoss = "YOU LOST!";
  }
  return `${winOrLoss} You won ${win} of 5.`;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors.";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a tie!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats paper.";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a tie!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats paper.";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It's a tie!";
  }
}

console.log(game());
