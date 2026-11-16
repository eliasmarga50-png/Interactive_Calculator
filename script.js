
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

const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const operatorInput = document.getElementById("operator");
const calculateButton = document.getElementById("calculateButton");
const clearButton = document.getElementById("clearButton");
const result = document.getElementById("result");
const resultValue = document.getElementById("resultValue");

calculateButton.addEventListener("click", function() {
    const firstValue = firstNumberInput.value;
    const secondValue = secondNumberInput.value;
    const operator = operatorInput.value;

    if (firstValue === "" || secondValue === "") {
        alert("Please enter both numbers.");
        return;
    }

    if (operator === "") {
        alert("Please select an operator.");
        return;
    }

    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);

    let answer;

    if (operator === "+") {
        answer = add(firstNumber, secondNumber);
    } else if (operator === "-") {
        answer = subtract(firstNumber, secondNumber);
    } else if (operator === "*") {
        answer = multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        if (secondNumber === 0) {
            alert("Cannot divide by zero.");
            return;
        }

        answer = divide(firstNumber, secondNumber);
    }

    resultValue.textContent = answer;
    result.hidden = false;
});

clearButton.addEventListener("click", function() {
    firstNumberInput.value = "";
    secondNumberInput.value = "";
    operatorInput.value = "";

    resultValue.textContent = "";
    result.hidden = true;
});
