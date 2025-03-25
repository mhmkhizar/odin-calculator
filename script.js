const calculatorButtons = document.querySelector("#calculator-buttons");
const operationTextPara = document.querySelector("#operation-text");
const resultTextPara = document.querySelector("#result-text");

calculatorButtons.addEventListener("click", (e) => {
  const button = e.target;

  if (
    button.id === "calculator-buttons" ||
    button.id === "control-buttons" ||
    button.id === "operation-buttons"
  ) {
    return;
  }

  switch (button.id) {
    case "clear-btn":
      resultTextPara.textContent = "0";
      break;
    case "delete-btn":
      if (resultTextPara.textContent.length > 1) {
        resultTextPara.textContent = resultTextPara.textContent.slice(0, -1);
      } else {
        resultTextPara.textContent = "0";
      }
      break;

    case ".":
      if (resultTextPara.textContent.includes(".")) return;
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
      if (resultTextPara.textContent === "0") {
        resultTextPara.textContent = button.id === "." ? "0" : "";
      }
      resultTextPara.textContent += button.id;
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
