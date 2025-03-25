function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  return Number(a) / Number(b);
}

function operate(operandA, operator, operandB) {
  switch (operator) {
    case "+":
      return add(operandA, operandB);
    case "-":
      return subtract(operandA, operandB);
    case "*":
      return multiply(operandA, operandB);
    case "/":
      return divide(operandA, operandB);
    default:
      return "Invalid Operator";
  }
}

const num1 = "4";
const operation = "+";
const num2 = "2";

console.log(operate(num1, operation, num2));
