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
let firstValue = 0;
let secondValue = false;
const display = document.querySelector('#number');

// display the stored value on the display
function updateDisplay() {
    display.innerHTML = displayValue;
};

let hasDecimalPoint = false;

// pressing buttons and displaying the numbers on the display, checks for decimal
const buttons = document.querySelectorAll('.nums');
buttons.forEach(pressingNums);

function pressingNums(button) {
    button.addEventListener('click', () => {
        if (button.textContent === '.') {
            if (!hasDecimalPoint) {
                displayValue = `${displayValue}${button.textContent}`;
                hasDecimalPoint = true;
            }
        } else {
            if (displayValue == 0) {
                displayValue = button.textContent;
            } else {
                displayValue = `${displayValue}${button.textContent}`;
            }
        }
        updateDisplay();
    });
}

// AC button logic to clear the stored value
const clear = document.querySelector('#clear');
clear.addEventListener('click', clear => {
    displayValue = 0;
    hasDecimalPoint = false;
    updateDisplay();
    deselectOperator();
});

function selectOperator(e) {
    deselectOperator(e);
    e.target.classList.add('active');
    if (e.target.innerHTML === '+') {
        // addition
        changeToSecondValue();

    } else if (e.target.innerHTML === '-') {
        // subtract
        changeToSecondValue();
    } else if (e.target.innerHTML === 'x') {
        // multiply
        changeToSecondValue();
    } else if (e.target.innerHTML === '/') {
        // division
        changeToSecondValue();
    } else if (e.target.innerHTML === '=') {
        // equals to
        secondValue = displayValue;
    }
};

function changeToSecondValue() {
    firstValue = displayValue;
    displayValue = 0;
}

function deselectOperator() {
    operators.forEach(op => {
        op.classList.remove('active');
    });
};

const operators = document.querySelectorAll('.operator');

operators.forEach(operator => {
    operator.addEventListener('click', selectOperator);
});

