'use strict';
let num1;
let num2;
let mathOperator;


const numberDisplay = document.querySelector('#number-display');

//const firstNumber = document.querySelector('#first-number');

//const secondNumber = document.querySelector('#second-number');

//const arithmeticOperator = document.querySelector('#arithmetic-operator');
    
const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
    number.addEventListener('click', e => {
      numberDisplay.textContent += e.target.id;
      if (mathOperator == null) {
         num1 = e.target.id;
      } else {
        num2 = e.target.id;
      }
        })
       
        }
    );
const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        operator.addEventListener('click', e => {
            numberDisplay.textContent += e.target.id;
            mathOperator = e.target.id;
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