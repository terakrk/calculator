'use strict';
let firstNumber = '';
let secondNumber = '';
let mathOperator = '';




const numberDisplay = document.querySelector('#number-display');

//const firstNumber = document.querySelector('#first-number');

//const secondNumber = document.querySelector('#second-number');

//const arithmeticOperator = document.querySelector('#arithmetic-operator');
    
const numbers = Array.from(document.querySelectorAll('.number'));
    numbers.forEach(number => {
    number.addEventListener('click', e => {
        numberDisplay.textContent += e.target.id;
    if (mathOperator === ''){
        firstNumber += e.target.id;
    } else {
        secondNumber += e.target.id;
    }
});
    });
const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
       operator.addEventListener('click', e => {
            numberDisplay.textContent += e.target.id;
            mathOperator = e.target.id;
        })
    })

const clear = document.querySelector('#clear');
const add = function(num1, num2) {
    num1 = parseInt(firstNumber);
    num2 = parseInt(secondNumber);
   numberDisplay.textContent = num1 + num2;
}

const subtract = function(num1, num2) {
    num1 = parseInt(firstNumber);
    num2 = parseInt(secondNumber);
    if (num2 > num1) {
        numberDisplay.textcontent = num2 - num1;
    } else {
        numberDisplay.textContent = num1 - num2;
    }
}

const multiply = function(num1, num2) {
    num1 = parseInt(firstNumber);
    num2 = parseInt(secondNumber);
    numberDisplay.textContent = num1 * num2;
}

const divide = function(num1, num2) {
    num1 = parseInt(firstNumber);
    num2 = parseInt(secondNumber);
    if (num2 > num1) {
        numberDisplay.textContent = num2 / num1;
    } else {
       numberDisplay.textContent = num1 / num2;
    }
}

const operate = (operator, num1, num2) => {
    operator = mathOperator;
   if (mathOperator === '+') {
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
    const junk = document.querySelector('#number-display')
    junk.textContent= '';
    };

   const equals = document.querySelector('.equals');
   equals.addEventListener('click', function () {
    operate(mathOperator, firstNumber, secondNumber);
   });
   clear.addEventListener('click', clearDisplay);