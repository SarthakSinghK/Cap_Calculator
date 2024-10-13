let currentInput = "";
let operator = null;
let firstOperand = null;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(op) {
  if (currentInput === "") return;

  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
  } else if (operator) {
    firstOperand = performCalculation(
      firstOperand,
      parseFloat(currentInput),
      operator
    );
  }

  operator = op;
  currentInput = "";
}

function clearDisplay() {
  currentInput = "";
  operator = null;
  firstOperand = null;
  updateDisplay();
}

function calculateResult() {
  if (operator === null || currentInput === "") return;

  let secondOperand = parseFloat(currentInput);
  currentInput = performCalculation(
    firstOperand,
    secondOperand,
    operator
  ).toString();
  operator = null;
  firstOperand = null;
  updateDisplay();
}

function performCalculation(first, second, op) {
  switch (op) {
    case "+":
      return first + second;
    case "-":
      return first - second;
    case "*":
      return first * second;
    case "/":
      return first / second;
    default:
      return second;
  }
}

function updateDisplay() {
  document.getElementById("display").value = currentInput;
}
