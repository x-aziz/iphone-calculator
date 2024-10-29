const display = document.querySelector("#display");
function appendToDisplay(value) {
  // Prevent multiple dots in the same number
  if (value === '.') {
    const parts = display.value.split(/[\+\-\*\/]/);
    const currentPart = parts[parts.length - 1];
    if (currentPart.includes('.')) {
      return;
    }
  }
  // Prevent adding an operator right after another operator
  const lastChar = display.value.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(value)) {
    return;
  }
  // Prevent starting with an operator
  if (display.value === '' && ['+', '-', '*', '/'].includes(value)) {
    return;
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error".toLocaleUpperCase;
  }
}
