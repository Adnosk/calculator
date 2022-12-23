function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    return operator(a, b);
}

let displayValue = 0;
const display = document.querySelector('#number');

// display the stored value on the display
function updateDisplay() {
    display.innerHTML = displayValue;
};

// pressing buttons and displaying the numbers on the display
const buttons = document.querySelectorAll('.nums');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (displayValue == 0 && button.textContent !== '.') {
            displayValue = button.textContent;
        } else {
            displayValue = `${displayValue}${button.textContent}`;
        }
        updateDisplay();
    });
});

// AC button logic to clear the stored value
const clear = document.querySelector('#clear');
clear.addEventListener('click', clear => {
    displayValue = 0;
    updateDisplay();
});