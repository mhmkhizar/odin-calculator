const mainDisplay = document.querySelector("#main-display");
const calculatorButtons = document.querySelector("#calculator-buttons");

calculatorButtons.addEventListener("click", handleButtonClick);

function handleButtonClick(e) {
  if (!e.target.classList.contains("btn")) return console.log("hd");

  const buttonId = e.target.id;
  switch (true) {
    case buttonId === "clear-btn":
      break;
    case buttonId === "delete-btn":
      break;
    case isNumOrDecimal(buttonId):
      break;
    case isOperator(buttonId):
      break;
    default:
      return "Error";
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
      return "Invalid Operator";
  }
}
