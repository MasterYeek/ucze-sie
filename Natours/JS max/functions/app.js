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
    return;
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
const getWinner = (cChoice, pChoice = default_User_Choice) =>
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
  let winner;
  if (playerChoice) {
    winner = getWinner(ComputerChoice, playerChoice);
  } else {
    winner = getWinner(ComputerChoice, playerChoice);
  }
  let message = `You picked ${
    playerChoice || default_User_Choice
  }, computer picked ${ComputerChoice} therefore you `;
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

// not related to game

const sumUp = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
    sum += validateNumber(num);
  }
  resultHandler(sum, "The result after adding all numbers is ");
};
//Same

const subtractUp = function (resultHandler, ...numbers) {
  let sum = 0;
  for (const num of numbers) {
    // dont use that
    sum -= num;
  }
  resultHandler(sum);
};
const showResult = (messagetText, result) => {
  alert(messagetText + " " + result);
};

sumUp(
  showResult.bind(this, " the result after adding all the numbers is:"),
  "ADD",
  5,
  10,
  -3,
  6,
  10
);
sumUp(
  showResult.bind(this, " the result after addaing all the numbers is:"),
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);
subtractUp(showResult, "SUBTRACT", 10, 15, 20);
