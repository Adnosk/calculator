let displayValue = 0;
let firstValue = false;
let secondValue = false;
let selectedOperator = false;
let hasDecimalPoint = false;
let operatorClicked = false;

const display = document.querySelector('#number');
const buttons = document.querySelectorAll('.nums');
const clear = document.querySelector('#clear');
const operators = document.querySelectorAll('.operator');

buttons.forEach(pressingNums);

operators.forEach(operator => {
    operator.addEventListener('click', selectOperator);
});

// AC button logic to clear the stored value
clear.addEventListener('click', clear => {
    displayValue = 0;
    firstValue = false;
    secondValue = false;
    hasDecimalPoint = false;
    updateDisplay();
    deselectOperator();
});

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
    const result = Number(roundToTwo(operator(a, b)));
    if (isNaN(result)) {
        return 'Ooops stop it!';
    } else {
        return result;
    }
};

// display the stored value on the display
function updateDisplay() {
    display.innerHTML = displayValue;
};

// pressing buttons and displaying the numbers on the display, checks for decimal

function pressingNums(button) {
    button.addEventListener('click', () => {
        operatorClicked = false;
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
};

function selectOperator(e) {
    if (operatorClicked && e.target.innerHTML !== '=') {
        return;
    }

    operatorClicked = true;
    deselectOperator(e);
    hasDecimalPoint = false;
    e.target.classList.add('active');
    if (e.target.innerHTML === '+') {
        calculateChain(add);
    } else if (e.target.innerHTML === '−') {
        calculateChain(subtract);
    } else if (e.target.innerHTML === 'x') {
        calculateChain(multiply);
    } else if (e.target.innerHTML === '/') {
        calculateChain(divide);
    } else if (e.target.innerHTML === '=' && firstValue) {
        calculateEquals();
        deselectOperator();
        operatorClicked = false;
    };
};

function changeToSecondValue() {
    firstValue = Number(displayValue);
    displayValue = 0;
};

function calculateChain(calculationType) {
    if (firstValue) {
        calculateEquals();
        selectedOperator = calculationType;
    } else {
        selectedOperator = calculationType;
        changeToSecondValue();
    };
};

function calculateEquals() {
    secondValue = Number(displayValue);
    displayValue = operate(selectedOperator, firstValue, secondValue);
    updateDisplay();
    firstValue = Number(displayValue);
    displayValue = 0;
};

function deselectOperator() {
    operators.forEach(op => {
        op.classList.remove('active');
    });
};

function roundToTwo(num) {
    return +(Math.round(num + "e+5") + "e-5");
};