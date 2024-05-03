function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

var num1;
var num2;
var operator;
var operatorPressed = true;

function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            console.log("Invalid operator.");
    }
}

const buttons = document.querySelectorAll('.calculator-button');
var displayValue;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const display = document.querySelector('#display');
        if(operatorPressed == true) {
            display.innerHTML = '';
            operatorPressed = false;
        }
        if(isNaN(button.innerHTML)) {
            console.log('operator ' + operator);
            operatorPressed = true;
            if(button.innerHTML.trim() == '=') {
                console.log('= pressed');
                num2 = parseInt(display.innerHTML.trim());
                console.log(num1 + operator + num2);
                display.innerHTML = operate(num1, num2, operator);
                num1 = parseInt(display.innerHTML);
                operatorPressed = false;
            } else if(button.innerHTML.trim() == 'C') {
                num1 = 0;
                num2 = 0;
                operator = '';
                display.innerHTML = '0';
            } else {
                num1 = parseInt(display.innerHTML.trim());
                operator = button.innerHTML.trim();
            }
        }else{
            display.innerHTML.trim();
            display.innerHTML += button.textContent.trim();
            displayValue = display.innerHTML;
        }
    });
});
