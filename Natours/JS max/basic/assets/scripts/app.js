const defaultResult = 0;

let logEntries = [];

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

function writeToLog(
  operationIndentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIndentifier,
    prevResult: prevResult,
    numberAdded: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enterNumber = GetUserInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enterNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enterNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enterNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enterNumber;
    mathOperator = "/";
  }
  // currentResult = currentResult + parseInt(enterNumber);
  createAndWriteOutput(mathOperator, initialResult, enterNumber);
  writeToLog(calculationType, initialResult, enterNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}
function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}
//currentResult = currentResult + 10 + 10 * 3;

addBtn.addEventListener("click", add);

subtractBtn.addEventListener("click", subtract);

multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

//let calculationDescription = `(${defaultResult} + 10) + 10 * 3`;
// let errorMessage = "An error occurred";
