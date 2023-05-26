const operation = {
  firstOperand: '0',
  operator: null,
  secondOperand: null,
}

const calculatorDisplayElement = document.querySelector("#calculator-display");
const numberElements = document.querySelectorAll(".num");
const operatorsElements = document.querySelectorAll('.operator');
const floatElement = document.querySelector('.float');

function add(firstOperand, secondOperator) {
  return firstOperand + secondOperator;
}

function substract(firstOperand, secondOperator) {
  return firstOperand - secondOperator;
}

function multiply(firstOperand, secondOperator) {
  return firstOperand * secondOperator;
}

function divide(firstOperand, secondOperator) {
  return firstOperand / secondOperator;
}

function operate(operation) {
  const { firstOperand, operator, setcondOperand } = operation;


  if (!operator || !secondOperator) {
    return firstOperand;
  }

  const parsedFirstOperand = Number.parseFloat(firstOperand);
  const parseSecondOperand = Number.parseFloat(setcondOperand);

  switch (operator) {
    case '+': {
      return add(parsedFirstOperand, parseSecondOperand);
    }
    case '-': {
      return substract(parsedFirstOperand, parseSecondOperand);
    }
    case '×': {
      return multiply(parsedFirstOperand, parseSecondOperand);
    }
    case '÷': {
      return divide(parsedFirstOperand, parseSecondOperand);
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
    const newNum = num.textContent;

    if (!operation.secondOperand) {

      if (operation.firstOperand === '0') {
        operation.firstOperand = newNum;
      } else {
        operation.firstOperand += newNum;
      }
    } else {
      if (operation.secondOperand === '0') {
        operation.secondOperand = newNum;
      } else {
        operation.secondOperand += newNum;
      }
    }

    console.log({ operation })
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
