const defaultResult = 0;

let currentResult = defaultResult;

// function add(number1, number2) {
//   const result = number1 + number2;
//   return result;
// }
function GetUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, ResultBeforeCalc, calcNumber) {
  const calcDescription = `${ResultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enterNumber = GetUserInput();
  const initialResult = currentResult;
  currentResult = currentResult + parseInt(enterNumber);
  createAndWriteOutput("+", initialResult, enterNumber);
}

function subtract() {
  const enterNumber = GetUserInput();
  const initialResult = currentResult;
  currentResult = currentResult - parseInt(enterNumber);
  createAndWriteOutput("-", initialResult, enterNumber);
}
function multiply() {
  const enterNumber = GetUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * parseInt(enterNumber);
  createAndWriteOutput("*", initialResult, enterNumber);
}

function divide() {
  const enterNumber = GetUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / parseInt(enterNumber);
  createAndWriteOutput("/", initialResult, enterNumber);
}
//currentResult = currentResult + 10 + 10 * 3;

addBtn.addEventListener("click", add);

subtractBtn.addEventListener("click", subtract);

multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

//let calculationDescription = `(${defaultResult} + 10) + 10 * 3`;
// let errorMessage = "An error occurred";
