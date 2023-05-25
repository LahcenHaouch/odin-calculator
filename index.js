const operation = {
  firstOperand: 0,
  operator: null,
  secondOperand: null,
}

const calculatorDisplayElement = document.querySelector("#calculator-display");
const numberElements = document.querySelectorAll(".num");
const operatorsElements = document.querySelectorAll('.operator');
const floatElement = document.querySelector('.float');

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

function operate(operation) {
  const { firstNumber, operator, secondNumber } = operation;

  if (!operator || !secondNumber) {
    return firstNumber;
  }

  switch (operator) {
    case '+': {
      return add(firstNumber, secondNumber);
    }
    case '-': {
      return substract(firstNumber, secondNumber);
    }
    case '×': {
      return multiply(firstNumber, secondNumber);
    }
    case '÷': {
      return divide(firstNumber, secondNumber);
    }
    default: {
      throw new Error(`Unrecognized operator: ${operator}`);
    }
  }
}

function displayResult(operationResult) {
  calculatorDisplayElement.textContent = operationResult;
}

displayResult(operation.firstOperand);


numberElements.forEach(num => {
  num.addEventListener('click', () => {

    if (!operation.secondOperand) {
      operation.firstOperand += num.textContent;
    } else {
      operation.secondOperand += num.textContent;
    }

    console.log(operate(operation))
    displayResult(operate(operation));
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
