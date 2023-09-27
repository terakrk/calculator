'use strict';
let firstNumber = '';
let secondNumber = '';
let mathOperator = '';
let answer = Number();




const numberDisplay = document.querySelector('#number-display');

//const firstNumber = document.querySelector('#first-number');

//const secondNumber = document.querySelector('#second-number');

//const arithmeticOperator = document.querySelector('#arithmetic-operator');
    
const numbers = Array.from(document.querySelectorAll('.number'));
    numbers.forEach(number => {
    number.addEventListener('click', e => {
        numberDisplay.textContent += e.target.id;
    if (!mathOperator){
        firstNumber += e.target.id;
    } else {
        secondNumber += e.target.id;
        document.getElementById('.').disabled = false;
    }
        if(e.target.id ==='.') {
    document.getElementById('.').disabled = true;
});
    });
const operators = Array.from(document.querySelectorAll('.operator'));
    operators.forEach(operator => {
       operator.addEventListener('click', e => {
            numberDisplay.textContent += e.target.id;
            mathOperator = e.target.id;
            mathChain();
        })
    })

const clear = document.querySelector('#clear');
const add = function(num1, num2) {
    num1 = parseFloat(firstNumber);
    num2 = parseFloat(secondNumber);
   numberDisplay.textContent = num1 + num2;
   answer = num1 + num2;
   return answer;
}

const subtract = function(num1, num2) {
    num1 = parseFloat(firstNumber);
    num2 = parseFloat(secondNumber);
    if (num2 > num1) {
        numberDisplay.textcontent = num2 - num1;
        answer = num2 - num1;
    } else {
        numberDisplay.textContent = num1 - num2;
        answer = num1 - num2;
    }
    return answer;
}

const multiply = function(num1, num2) {
    num1 = parseFloat(firstNumber);
    num2 = parseFloat(secondNumber);
    numberDisplay.textContent = num1 * num2;
    answer = num1 * num2;
    return answer;
}

const divide = function(num1, num2) {
    num1 = parseFloat(firstNumber);
    num2 = parseFloat(secondNumber);
    if (num2 > num1) {
        numberDisplay.textContent = num2 / num1;
        answer = num2 / num1;
    } else {
       numberDisplay.textContent = num1 / num2;
       answer = num1 / num2;
    }
    return answer;
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
     firstNumber = '';
     secondNumber = '';
     mathOperator = '';
     answer = '';
    };

   const equals = document.querySelector('.equals');
   equals.addEventListener('click', function () {
    operate(mathOperator, firstNumber, secondNumber);
   });
   clear.addEventListener('click', clearDisplay);

   function mathChain() {
    if(!answer) {
        return firstNumber;
    } else {
        return answer = firstNumber;
    }
   }
