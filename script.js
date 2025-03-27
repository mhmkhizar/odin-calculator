const mainDisplay = document.querySelector("#main-display");
const referenceDisplay = document.querySelector("#reference-display");
const calculatorButtons = document.querySelector("#calculator-buttons");

let currentValue = "";
let previousValue = "";
let currentOperator = null;
let isResultCalculated = false;

calculatorButtons.addEventListener("click", handleButtonClick);

function handleButtonClick(e) {
  if (!e.target.classList.contains("btn")) return;

  const buttonValue = e.target.id;
  switch (true) {
    case buttonValue === "clear-btn":
      resetCalculator();
      break;
    case buttonValue === "delete-btn":
      deleteLastDigit();
      break;
    case isNumOrDecimal(buttonValue):
      appendNumber(buttonValue);
      break;
    case isOperator(buttonValue):
      handleOperator(buttonValue);
      break;
    case buttonValue === "=":
      calculateResult();
      break;
    default:
      return "Error";
  }
}

function calculateResult() {
  if (currentValue === "" || previousValue === "") return;
  const result = operate(previousValue, currentOperator, currentValue);
  isResultCalculated = true;
  currentValue = result.toString();
  updateDisplay();
}

function handleOperator(operator) {
  if (!isResultCalculated) {
    calculateResult();
    isResultCalculated = false;
  }
  currentOperator = operator;
  previousValue = currentValue === "" ? previousValue : currentValue;
  currentValue = previousValue === "" ? currentValue : "";
}

function appendNumber(value) {
  if (currentValue.includes(".") && value === ".") return;
  if (currentValue === "" || currentValue === "0")
    currentValue = value === "." ? "0" : "";
  currentValue += value;
  updateDisplay();
}

function resetCalculator() {
  currentValue = "";
  previousValue = "";
  currentOperator = null;
  updateDisplay();
}

function deleteLastDigit() {
  currentValue = currentValue.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  mainDisplay.textContent = currentValue || "0";
  if (mainDisplay.textContent.length > 10)
    mainDisplay.style.fontSize = `${
      (278 / mainDisplay.textContent.length) * 1.73
    }px`;
}

function isNumOrDecimal(value) {
  return /^[\d.]$/.test(value);
}

function isOperator(value) {
  return ["+", "-", "*", "/"].includes(value);
}

function operate(a, operator, b) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Error";
  }
}
