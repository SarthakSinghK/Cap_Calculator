let value = "";
let operator = null;
let firstOperand = null;

function input(number) {
  value += number;
  updateDisplay();
}

function setOperation(op) {
  console.time(); // Start timer  
  if (value === "") return;
  if (firstOperand === null) {
    firstOperand = parseFloat(value);
  } else if (operator) {
    firstOperand = performCalculation(
      firstOperand,
      parseFloat(value),
      operator
    );
  }
  operator = op;
  value = "";
  console.timeEnd();
}

function calculateResult() {
  if (operator === null || value === "") return;

  let secondOperand = parseFloat(value);
  value = performCalculation(firstOperand, secondOperand, operator);
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
  }
}

function updateDisplay() {
  document.getElementById("display").value = value;
}

function clearDisplay() {
  value = "";
  operator = null;
  firstOperand = null;
  updateDisplay();
}





// function myFunction() {
//   console.time("myFunction"); // Start timer
//   // Your function logic here
//   console.log("Running myFunction...");
//   console.timeEnd("myFunction"); // End timer and log time taken
// }

// myFunction();