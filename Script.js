let currentInput = "";
let firstNumber = null;
let secondNumber = null;
let currentOperator = null;

 const display = document.getElementById("display");
 const buttons = document.querySelectorAll(".buttons button");

// Your basic math operations (make sure you already have these):
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return b === 0 ? "Can't divide by 0" : a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
}

// Add click listeners
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // Handle digit input
    if (!isNaN(value)) {
      currentInput += value;
      display.textContent = currentInput;
    }

    // Handle operator input
    else if (button.classList.contains("operator")) {
      if (currentInput === "") return; // Don't allow operator first
      firstNumber = currentInput;
      currentOperator = value;
      currentInput = ""; // Clear input for next number
    }

    // Handle equal (=) button
    else if (button.classList.contains("equal")) {
      if (firstNumber === null || currentInput === "") return;
      secondNumber = currentInput;
      const result = operate(currentOperator, firstNumber, secondNumber);
      display.textContent = result;
      // Reset so you can do a new operation
      currentInput = result.toString();
      firstNumber = null;
      secondNumber = null;
      currentOperator = null;
    }

    // Handle clear button
    else if (button.classList.contains("clear")) {
      currentInput = "";
      firstNumber = null;
      secondNumber = null;
      currentOperator = null;
      display.textContent = "";
    }
  });
});

