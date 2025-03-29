const display = document.querySelector("#display-text");
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
  if (previousValue === "" || currentOperator === null || currentValue === "") {
    currentOperator = null;
    return;
  }

  const result = operate(previousValue, currentOperator, currentValue);
  currentValue = roundResult(result);
  previousValue = "";
  currentOperator = null;
  isResultCalculated = true;
  updateDisplay();
}

function handleOperator(operator) {
  if (!isResultCalculated) {
    calculateResult();
    isResultCalculated = false;
  }
  currentOperator = operator;
  previousValue = currentValue === "" ? previousValue : currentValue;
  currentValue = isResultCalculated ? currentValue : "";
}

function appendNumber(value) {
  if (isResultCalculated) {
    currentValue = "";
    isResultCalculated = false;
  }
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
  isResultCalculated = false;
  updateDisplay();
}

function deleteLastDigit() {
  currentValue = currentValue.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentValue || "0";
  const length = display.textContent.length;
  display.scrollLeft = display.scrollWidth;

  if (isResultCalculated) {
    display.style.fontSize =
      length > 10 && length <= 20 ? `${480 / length}px` : "48px";
  } else {
    display.style.fontSize = "48px";
  }

  if (length > 10) {
    display.style.marginBottom = "-5px";
  }
}

function isNumOrDecimal(value) {
  return /^[\d.]$/.test(value);
}

function isOperator(value) {
  return ["+", "-", "*", "/"].includes(value);
}

function roundResult(number) {
  if (Math.abs(number) > 1e20 || Math.abs(number) < 1e-6) {
    return Number(number.toPrecision(10)).toString();
  } else {
    return Number(number.toFixed(8)).toString();
  }
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
