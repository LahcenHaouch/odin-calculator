const result = [];

const numberElements = document.querySelectorAll(".num");
const calculatorDisplayElement = document.querySelector("#calculator-display");

const operationsElements = document.querySelectorAll('.operation');

numberElements.forEach(num => {
  num.addEventListener('click', () => {
    const lastElementIndex = result.length - 1;

    if (lastElementIndex < 0) {
      result.push(num.textContent);
      displayResult();
      return;
    }

    if (result[lastElementIndex]?.operation) {
      result.push(num.textContent);
    } else {
      result[lastElementIndex] += num.textContent;
    }
    displayResult();
  })
})

operationsElements.forEach(operation => {
  operation.addEventListener('click', () => {
    const lastElementIndex = result.length - 1;

    if (lastElementIndex < 0) {
      return;
    }

    const operationToAdd = { operation: operation.textContent };

    if (result[lastElementIndex]?.operation) {
      result[lastElementIndex] = operationToAdd;
    } else {
      result.push(operationToAdd);
    }
    displayResult();
  })
})


function displayResult() {
  calculatorDisplayElement.textContent = result.map(element => {
    if (element.operation) {
      return element.operation;
    }
    return element;
  }).join('');
}
