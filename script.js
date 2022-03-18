const buttons = document.querySelectorAll(".number");
const currentValue = document.querySelector(".current-value");
const lastValue = document.querySelector(".last-operation");
const btnsOperators = document.querySelectorAll(".operator");
const btnDelete = document.querySelector(".delete");
const btnClear = document.querySelector(".clear");

let record = "";
let operatorA = "";
let operatorB = "";
let operator = "";
let totalOperation = "";

const operations = {
  add: function add(a, b) {
    totalOperation = a + b;
    record = totalOperation;
    currentValue.textContent = totalOperation;
  },

  subtract: function subtract(a, b) {
    totalOperation = a - b;
    record = totalOperation;
    currentValue.textContent = totalOperation;
  },

  multiply: function multiply(a, b) {
    totalOperation = a * b;
    record = totalOperation;
    currentValue.textContent = totalOperation;
  },

  divide: function divide(a, b) {
    totalOperation = a / b;
    record = totalOperation;
    currentValue.textContent = totalOperation;
  },
};

function displayNumbers() {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      record += e.target.innerText;
      currentValue.textContent = record;
      operatorB = record;
    });
  });
}
displayNumbers();

function eventOperators() {
  btnsOperators.forEach((button) => {
    button.addEventListener("click", (e) => {
      operatorA = record;
      operator = e.target.dataset.value;
      lastValue.textContent = `${operatorA} ${e.target.innerText} `;
      currentValue.textContent = "";
      record = "";
    });
  });
}

eventOperators();

function equal() {
  lastValue.textContent += operatorB;
  operatorA = parseInt(operatorA);
  operatorB = parseInt(operatorB);
  operate(operatorA, operatorB, operator);
}

function operate(a, b, operator) {
  if (operator == "add") {
    operations.add(a, b);
  }
  if (operator == "multiply") {
    operations.multiply(a, b);
  }
  if (operator == "subtract") {
    operations.subtract(a, b);
  }
  if (operator == "divide") {
    operations.divide(a, b);
  }
}

function eventDelete() {
  btnDelete.addEventListener("click", () => {
    let arrRecord = record.split("");
    let newValue = arrRecord.slice(0, -1);
    record = newValue.join("");
    currentValue.textContent = record;
  });
}

eventDelete();

function eventClear() {
  btnClear.addEventListener("click", () => {
    record = "";
    currentValue.textContent = 0;
    lastValue.textContent = 0;
  });
}
eventClear();
