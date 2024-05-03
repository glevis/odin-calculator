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
            operatorPressed = true;
        }else{
            display.innerHTML.trim();
            display.innerHTML += button.textContent.trim();
            displayValue = display.innerHTML;
        }
    });
});
