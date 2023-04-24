"use strict";
// Getting Buttons Variables //

const btnAllClear = document.querySelector("#allclear");
const btnClear = document.querySelector("#clear");
const digits = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const resultDisplay = document.querySelector(".result-display");
const operationDisplay = document.querySelector(".operation-display");
const btnPlusMinus = document.querySelector(".plus-minus");
const btnFloat = document.querySelector(".float");

/// GLOBAL VARIABLES ///
let currentNumber = 0;
let previousNumber = 0;
let result = "";
let operationStr = "";
let oneTimeClick = false;
let currentOperator = "";

// FUNCTIONS //

// Basic math operations
const add = (a, b) => a + b;
const subtract = (a, b) => b - a;
const multiply = (a, b) => a * b;
const divide = (a, b) => (a === 0 ? alert("You can't divide for 0!!!") : b / a);
const percent = (a, b) => (a * b) / 100;

const operate = function (operator, a, b) {
  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "x":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    case "%":
      result = percent(a, b);
      break;
    default:
      result = currentNumber;
      resultDisplay.textContent = Number(result);
  }
};

const resetOperations = function () {
  operationDisplay.textContent = "";
  operationStr = "";
  currentNumber = previousNumber = 0;
};

// Updating the operation display
const updateOperationDisplay = function (operator) {
  if (!oneTimeClick) {
    oneTimeClick = true;
    if (currentOperator === "=") {
      resetOperations();
    } else {
      previousNumber = result;
      operationDisplay.textContent = operationStr +=
        Number(currentNumber) + `${operator}`;
    }
    resultDisplay.textContent = result;
  } else if (
    operationStr.slice(-1) !== operator &&
    operationStr.slice(-1) !== ""
  ) {
    if (operator === "=") {
      resetOperations();
    } else {
      operationDisplay.textContent = operationStr =
        operationStr.slice(0, -1) + operator;
    }
    currentOperator = operationStr.slice(-1);
  }
};

const resettingDisplay = function () {
  result.toString().includes(".")
    ? (resultDisplay.textContent = Number(result).toFixed(1))
    : (resultDisplay.textContent = result);
  currentNumber = "";
};

// EVENTS //

// => Getting a number to operate //
digits.forEach((num) => {
  num.addEventListener("click", () => {
    resultDisplay.textContent = currentNumber = Number(
      currentNumber + num.textContent
    );
    operate(currentOperator, currentNumber, previousNumber);
    oneTimeClick = false;
  });
});

// => Operator buttons //
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    currentOperator = operator.textContent;
    updateOperationDisplay(currentOperator);
    resettingDisplay();
  });
});

// => All clear button //
btnAllClear.addEventListener("click", () => {
  operationDisplay.textContent =
    resultDisplay.textContent =
    operationStr =
    result =
    currentNumber =
      "";
  oneTimeClick = false;
});

// => Clear button //
btnClear.addEventListener("click", () => {
  currentNumber = `${currentNumber}`;
  resultDisplay.textContent = currentNumber = currentNumber.slice(0, -1);
});

// => Plus/Minus Button
btnPlusMinus.addEventListener("click", () => {
  currentNumber = currentNumber * -1;
  resultDisplay.textContent = currentNumber;
});

// => Float Button //
btnFloat.addEventListener("click", () => {
  currentNumber = currentNumber.toString();
  console.log(typeof currentNumber);
  if (currentNumber.includes(".")) {
    return currentNumber;
  } else {
    resultDisplay.textContent = currentNumber = currentNumber + ".";
  }
});
