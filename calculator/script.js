const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}