let value = "";
let operator = null;
let firstOp = null;

function disp() {
   let a = document.getElementById("rat");
   a.select();
    let b = a.value;

    let c = document.getElementById("out");
    c.textContent=b.toUpperCase()
}
const input = (number) => {
  console.time(input);
  value += number;
  display();
  console.timeEnd(input);
};

const display = () => {
  document.getElementById("rat").value = value;
}

const calcu = (first, second, op) => {
  console.time(calcu);
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
  console.timeEnd(calcu);
};

const setop = (op) => {
  console.time(setop);
  if (value == "") return;
  if (firstOp === null) {
    firstOp = parseFloat(value);
  } else if (operator) {
    firstOp = calcu(firstOp, parseFloat(value), operator).tostring();
  }
  operator = op;
  value = "";
  console.timeEnd(setop);
};

const result = () => {
  if (operator === null || value === "") return;
  console.time(result);
  let secondOP = parseFloat(value);
  value = calcu(firstOp, secondOP, operator);
  operator = null;
  firstOp = null;
  display();
  console.timeEnd(result);
};

const capC = () => {
    firstOp = null
    operator = null
    value = ""
    display()
}