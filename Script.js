// Store the current display value
let currentInput = "";

// Reference to the display
const display = document.getElementById("display");

// Select all digit buttons (those without a class, assuming digits only)
const buttons = document.querySelectorAll(".buttons button");

// Loop through each button
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // If it's a digit (0–9), append to input
    if (!button.classList.contains("operator") &&
        !button.classList.contains("clear") &&
        !button.classList.contains("equal")) {
      
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
