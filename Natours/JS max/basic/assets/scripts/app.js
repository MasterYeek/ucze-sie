const defaultResult = 2;

let currentResult = defaultResult;

// function add(number1, number2) {
//   const result = number1 + number2;
//   return result;
// }

function add() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, "");
}
currentResult = add(1, 2);
add(5, 5);

//currentResult = currentResult + 10 + 10 * 3;

addBtn.addEventListener("click", add);

//let calculationDescription = `(${defaultResult} + 10) + 10 * 3`;
// let errorMessage = "An error occurred";
