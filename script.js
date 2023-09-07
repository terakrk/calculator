'use strict';

let num1;
let num2;
let operator;

function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
   if (num2 > num1) {
    let result = num2 - num1;
    return result;
   } else {
    let result = num1 - num2;
    return result;
   }
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    if (num2 > num1) {
        let result =  num2 / num1;
        return result;
    } else {
        let result = num1 / num2;
        return result;
    }
}
