const operation = [];

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function substract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

const calculatorDisplayElement = document.querySelector("#calculator-display");
const numberElements = document.querySelectorAll(".num");
const operatorsElements = document.querySelectorAll('.operator');

numberElements.forEach(num => {
  num.addEventListener('click', () => {
    const lastElementIndex = result.length - 1;

    if (lastElementIndex < 0) {
      result.push(num.textContent);
      displayResult();
      return;
    }

    if (result[lastElementIndex]?.operator) {
      result.push(num.textContent);
    } else {
      result[lastElementIndex] += num.textContent;
    }
    displayResult();
  });
});

operatorsElements.forEach(operator => {
  operator.addEventListener('click', () => {
    const lastElementIndex = result.length - 1;

    if (lastElementIndex < 0) {
      return;
    }

    const operatorToAdd = { operator: operator.textContent };

    if (result[lastElementIndex]?.operator) {
      result[lastElementIndex] = operatorToAdd;
    } else {
      result.push(operatorToAdd);
    }
    displayResult();
  });
});


function displayResult() {
  calculatorDisplayElement.textContent = result.map(element => {
    if (element.operator) {
      return element.operator;
    }
    return element;
  }).join('');
}
