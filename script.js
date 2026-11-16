
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}


const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const operatorInput = document.getElementById('operator');
const calculateButton = document.getElementById('calculateButton');

const result = document.getElementById('result');
const resultValue = document.getElementById('resultValue');

calculateButton.addEventListener('click', function() {
    const firstNumber = Number(firstNumberInput.value);
    const secondNumber = Number(secondNumberInput.value);
    const operator = operatorInput.value;

    let answer;

    if(operator === '+') {
        answer = add(firstNumber, secondNumber);
    }
    else if(operator === '-') {
        answer = subtract(firstNumber, secondNumber);
    }
    else if(operator === '*') {
        answer = multiply(firstNumber, secondNumber);
    }
    else if(operator === '/') {
        answer = divide(firstNumber, secondNumber);
    }

   resultValue.textContent = answer;
   result.hidden = false;
});