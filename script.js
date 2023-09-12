'use strict';
let num1 = 0;
let num2 = 0;
let mathOperator = '';
let num3 = 0;


const numberDisplay = document.querySelector('#number-display');

//const firstNumber = document.querySelector('#first-number');

//const secondNumber = document.querySelector('#second-number');

//const arithmeticOperator = document.querySelector('#arithmetic-operator');
    
const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
    number.addEventListener('click', e => {
      numberDisplay.textContent += e.target.id;
      if (mathOperator== null) {
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
            operator = e.target.id;
        })
    })

const clear = document.querySelector('#clear');
const add = function(num1, num2) {
    let num3 = num1 + num2;
   numberDisplay.textContent = num3;
    return num3;
}

const subtract = function(num1, num2) {
    if (num2 > num1) {
        let num3 = num2 - num1;
        numberDisplay.textContent = num3;
        return num3;
    } else {
        let num3 = num1 - num2;
        numberDisplay.textContent = num3;
        return num3;
    }
}

const multiply = function(num1, num2) {
    let num3 = num1 * num2;
    numberDisplay.textContent = num3;
    return num3;
}

const divide = function(num1, num2) {
    if (num2 > num1) {
        let num3 =  num2 / num1;
        numberDisplay.textContent = num3;
        return num3;
    } else {
        let num3 = num1 / num2;
        numberDisplay.textContent = num3;
        return num3;
    }
}

const operate = (num1, mathOperator, num2) => {
   if (mathOperator === '+') {
    return add(num1, num2);
   } else if (mathOperator === '-') {
    return subtract(num1, num2);
   } else if (mathOperator === '*') {
    return multiply(num1, num2); 
    } else if (mathOperator === '/') {
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
   equals.addEventListener('click', operate());
   clear.addEventListener('click', clearDisplay);