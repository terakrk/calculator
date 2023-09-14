'use strict';
let firstNumber = 0;
let secondNumber = 0;
let num1 = 0;
let num2 = 0;
let mathOperator = '';
let answer = 0;



const numberDisplay = document.querySelector('#number-display');

//const firstNumber = document.querySelector('#first-number');

//const secondNumber = document.querySelector('#second-number');

//const arithmeticOperator = document.querySelector('#arithmetic-operator');
    
const numbers = Array.from(document.querySelectorAll('.number'));
    numbers.forEach(number => {
    number.addEventListener('click', e => {
      numberDisplay.textContent+= e.target.id;
      if (mathOperator== null) {
        firstNumber = e.target.id;
      } else {
       secondNumber = e.target.id;
      }
        })
       
        }
    );
const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
       operator.addEventListener('click', e => {
            numberDisplay.textContent += e.target.id;
            operator = e.target.id;
            mathOperator = operator;
        })
    })

const clear = document.querySelector('#clear');
const add = function(num1, num2) {
    answer = parseInt(num1) + parseInt(num2);
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
        let num3 = num1 / num2;
        numberDisplay.textContent = answer;
        return answer;
    }
}

const operate = (num1, operator, num2) => {
    firstNumber = num1;
    secondNumber = num2;
    mathOperator = operator;
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
   equals.addEventListener('click', function () {
    operate(firstNumber, mathOperator, secondNumber);
   });
   clear.addEventListener('click', clearDisplay);