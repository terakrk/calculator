'use strict';
let num = 0;
let firstNumber = [];
let secondNumber = [];
let answer = parseInt();
let mathOperator = '';




const numberDisplay = document.querySelector('#number-display');

//const firstNumber = document.querySelector('#first-number');

//const secondNumber = document.querySelector('#second-number');

//const arithmeticOperator = document.querySelector('#arithmetic-operator');
    
const numbers = Array.from(document.querySelectorAll('.number'));
    numbers.forEach(number => {
    number.addEventListener('click', e => {
     numberDisplay.textContent+= parseInt(e.target.id);
     num = e.target.id;
      if (!mathOperator) {
      firstNumber = parseInt(num);
      } else {
       secondNumber = parseInt(num);
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
    answer = num1 + num2;
   numberDisplay.textContent = answer;
}

const subtract = function(num1, num2) {
    if (num2 > num1) {
        answer = num2 - num1;
        numberDisplay.textContent = answer;
        return answer;
    } else {
        let answer = num1 - num2;
        numberDisplay.textContent = answer;
        return answer;
    }
}

const multiply = function(num1, num2) {
    let answer = num1 * num2;
    numberDisplay.textContent = answer;
    return answer;
}

const divide = function(num1, num2) {
    if (num2 > num1) {
        let answer =  num2 / num1;
        numberDisplay.textContent = answer;
        return answer;
    } else {
        let answer = num1 / num2;
        numberDisplay.textContent = answer;
        return answer;
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