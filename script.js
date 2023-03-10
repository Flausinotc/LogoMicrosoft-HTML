const display = document.querySelector('.display');

function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const expression = display.value;

  try {
    const result = eval(expression);
    display.value = result;
  } catch (error) {
    alert('Erro na expressão');
  }
}