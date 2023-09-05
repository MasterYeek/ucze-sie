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

function add() {
  const enterNumber = GetUserInput();
  const initialResult = currentResult;
  currentResult += enterNumber;
  // currentResult = currentResult + parseInt(enterNumber);
  createAndWriteOutput("+", initialResult, enterNumber);
  writeToLog("ADD", initialResult, enterNumber, currentResult);
}

function subtract() {
  const enterNumber = GetUserInput();
  const initialResult = currentResult;
  currentResult -= enterNumber;
  // currentResult = currentResult - parseInt(enterNumber);
  createAndWriteOutput("-", initialResult, enterNumber);
  writeToLog("Subtract", initialResult, enterNumber, currentResult);
}
function multiply() {
  const enterNumber = GetUserInput();
  const initialResult = currentResult;
  currentResult *= enterNumber;
  //currentResult = currentResult * parseInt(enterNumber);
  createAndWriteOutput("*", initialResult, enterNumber);
  writeToLog("Multiply", initialResult, enterNumber, currentResult);
}

function divide() {
  const enterNumber = GetUserInput();
  const initialResult = currentResult;
  // currentResult = currentResult / parseInt(enterNumber); SAME
  currentResult /= enterNumber;
  createAndWriteOutput("/", initialResult, enterNumber);
  writeToLog("Divide", initialResult, enterNumber, currentResult);
}
//currentResult = currentResult + 10 + 10 * 3;

addBtn.addEventListener("click", add);

subtractBtn.addEventListener("click", subtract);

multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

//let calculationDescription = `(${defaultResult} + 10) + 10 * 3`;
// let errorMessage = "An error occurred";
