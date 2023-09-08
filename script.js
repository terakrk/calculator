'use strict';

let firstNumber = 0;
let secondNumber = 0;
const operators = ['+', '-', '*', '/'];


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
