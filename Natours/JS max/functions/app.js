const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const default_User_Choice = ROCK;
const result_Draw = "DRAW";
const result_Player_win = "Player Wins";
const result_Computer_Win = "Computer Wins";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${default_User_Choice}  for You`);
    return default_User_Choice;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

//Example

// const add = (a, b) => a + b;
// const add2 = function (a, b) {
//   return a + b;

// Arrow Function
const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? result_Draw
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? result_Player_win
    : result_Computer_Win;

// Normal function
// const getWinner = function (cChoice, pChoice) {
//   if (cChoice === pChoice) {
//     return result_Draw;
//   } else if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === Paper && pChoice === SCISSORS) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
//   ) {
//     return result_Player_win;
//   } else {
//     return result_Computer_Win;
//   }
// };
startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting..");
  const playerChoice = getPlayerChoice();
  const ComputerChoice = getComputerChoice();
  const winner = getWinner(ComputerChoice, playerChoice);
  let message = `You picked ${playerChoice}, computer picked ${ComputerChoice} therefore you `;
  if (winner === result_Draw) {
    message = message + "had a draw";
  } else if (winner === result_Player_win) {
    message = message + "won";
  } else {
    message = message + "lose";
  }
  alert(message);
  gameIsRunning = false;
});

// function startGame() {
//   console.log("Game is starting...");
// }

//Anonymous function

// function in objects = Method
// const person = {
//   welcome: function welcome() {
//     console.log("hello");
//   },
// };

// person.welcome();
