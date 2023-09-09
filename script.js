'use strict';

const display = document.querySelector('#display');

const firstNumber = document.createElement('span');
firstNumber.classList.add('first-number');
display.appendChild(firstNumber);

const secondNumber = document.createElement('span');
    secondNumber.classList.add('second-number');
    display.appendChild(secondNumber);

const arithmeticOperator = document.createElement('span');
    arithmeticOperator.classList.add('operator');
    display.appendChild(arithmeticOperator);
    
const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
    number.addEventListener('click', e => {
        if (!arithmeticOperator) {
            firstNumber.textContent = e.target.id;
        } else {
            secondNumber.textContent = e.target.id;
        }
    })
})

const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        operator.addEventListener('click', e => {
           arithmeticOperator.textContent = e.target.id;
        })
    })

const clear = document.querySelector('#clear');
const add = function(num1, num2) {
    let result = num1 + num2;
    return result;
}

const subtract = function(num1, num2) {
    if (num2 > num1) {
        let result = num2 - num1;
        return result;
    } else {
        let result = num1 - num2;
        return result;
    }
}

const multiply = function(num1, num2) {
    let result = num1 * num2;
    return result;
}

const divide = function(num1, num2) {
    if (num2 > num1) {
        let result =  num2 / num1;
        return result;
    } else {
        let result = num1 / num2;
        return result;
    }
}

const operate = (num1, operator, num2) => {
   if (operator === '+') {
    return add(num1, num2);
   } else if (operator === '-') {
    return subtract(num1, num2);
   } else if (operator === '*') {
    return multiply(num1, num2); 
    } else if (operator === '/') {
        return divide(num1, num2);
    } else {
        return 'Invalid Operation';
    }
   };

   const clearDisplay = function() {
        const junk = document.querySelectorAll('span');
        const junkArray= [...junk];
        junkArray.forEach(span => {
            span.remove();
        });
    };
   const equals = document.querySelector('.equals');
   equals.addEventListener('click', operate);

   clear.addEventListener('click', clearDisplay);