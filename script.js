const calculatorButtons = document.querySelector("#calculator-buttons");
const mainDisplay = document.querySelector("#main-display");
const referenceDisplay = document.querySelector("#reference-display");

calculatorButtons.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) return;

  const button = e.target;
  switch (button.id) {
    case "clear-btn":
      mainDisplay.textContent = "0";
      break;

    case "delete-btn":
      mainDisplay.textContent =
        mainDisplay.textContent.length > 1
          ? mainDisplay.textContent.slice(0, -1)
          : "0";
      break;

    case ".":
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      if (button.id === "." && mainDisplay.textContent.includes(".")) return;
      if (mainDisplay.textContent === "0") {
        mainDisplay.textContent = button.id === "." ? "0" : "";
      }
      mainDisplay.textContent += button.id;
      break;

    case "+":
      console.log(button.id);
      break;
    case "-":
      console.log(button.id);
      break;
    case "*":
      console.log(button.id);
      break;
    case "/":
      console.log(button.id);
      break;
    case "=":
      console.log(button.id);
      break;

    default:
      console.log("Error");
      break;
  }
});

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
