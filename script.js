'use strict';

let num1 = 0;
let num2 = 0;

const numberDisplay = document.querySelector('#number-display');

const firstNumber = document.querySelector('#first-number');

const secondNumber = document.querySelector('#second-number');

const arithmeticOperator = document.querySelector('#arithmetic-operator');
    
const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
    number.addEventListener('click', e => {
        if (!arithmeticOperator) {
            num1 === e.target.id;
            numberDisplay.textContent += e.target.id;
        } else {
            num2 === e.target.id;
            numberDisplay.textContent += e.target.id;
        }
    });
})

const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        operator.addEventListener('click', e => {
            arithmeticOperator += e.target.id;
            operator += e.target.id;
            numberDisplay.textContent += e.target.id;

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
    const junk = document.querySelector('#number-display');
    junk.remove();
    };

   const equals = document.querySelector('.equals');
   equals.addEventListener('click', operate);

   clear.addEventListener('click', clearDisplay);