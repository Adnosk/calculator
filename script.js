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
let firstValue = false;
let secondValue = false;
let selectedOperator = false;
let hasDecimalPoint = false;
const display = document.querySelector('#number');

// display the stored value on the display
function updateDisplay() {
    display.innerHTML = displayValue;
};



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
    firstValue = false;
    secondValue = false;
    hasDecimalPoint = false;
    updateDisplay();
    deselectOperator();
});

function selectOperator(e) {
    deselectOperator(e);
    hasDecimalPoint = false;
    e.target.classList.add('active');
    if (e.target.innerHTML === '+') {
        if (firstValue) {
            secondValue = Number(displayValue);
            displayValue = operate(selectedOperator, firstValue, secondValue);
            updateDisplay();
            firstValue = Number(displayValue);
            displayValue = 0;
            selectedOperator = add;
        } else {
            selectedOperator = add;
            changeToSecondValue();
        };
    } else if (e.target.innerHTML === '−') {


        

        if (firstValue) {
            secondValue = Number(displayValue);
            displayValue = operate(selectedOperator, firstValue, secondValue);
            updateDisplay();
            firstValue = Number(displayValue);
            displayValue = false;
            selectedOperator = subtract;
        } else {
            selectedOperator = subtract;
            changeToSecondValue();
        };


    } else if (e.target.innerHTML === 'x') {
        if (firstValue) {
            secondValue = Number(displayValue);
            displayValue = operate(selectedOperator, firstValue, secondValue);
            updateDisplay();
            firstValue = Number(displayValue);
            displayValue = false;
            selectedOperator = multiply;
        } else {
            selectedOperator = multiply;
            changeToSecondValue();
        };
    } else if (e.target.innerHTML === '/') {
        if (firstValue) {
            secondValue = Number(displayValue);
            displayValue = operate(selectedOperator, firstValue, secondValue);
            updateDisplay();
            firstValue = Number(displayValue);
            displayValue = false;
            selectedOperator = divide;
        } else {
            selectedOperator = divide;
            changeToSecondValue();
        };
    } else if (e.target.innerHTML === '=' && firstValue) {
        secondValue = Number(displayValue);
            displayValue = operate(selectedOperator, firstValue, secondValue);
        updateDisplay();
        firstValue = Number(displayValue);
        displayValue = false;
        deselectOperator();
    };
};

function changeToSecondValue() {
    firstValue = Number(displayValue);
    displayValue = 0;
};

function deselectOperator() {
    operators.forEach(op => {
        op.classList.remove('active');
    });
};

const operators = document.querySelectorAll('.operator');

operators.forEach(operator => {
    operator.addEventListener('click', selectOperator);
});