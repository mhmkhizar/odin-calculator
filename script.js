const mainDisplay = document.querySelector("#main-display");
const calculatorButtons = document.querySelector("#calculator-buttons");

let currentValue = "";
let currentOperator = null;

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
      break;
    default:
      return "Error";
  }
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
  updateDisplay();
}

function deleteLastDigit() {
  currentValue = currentValue.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  mainDisplay.textContent = currentValue || "0";
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
      return "Invalid Operator";
  }
}
