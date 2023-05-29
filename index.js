const INITIAL_VALUE = '0';

const operation = {
  firstOperand: INITIAL_VALUE,
  operator: null,
  secondOperand: null,
}

const calculatorDisplayElement = document.querySelector("#calculator-display");
const numberElements = document.querySelectorAll(".num");
const operatorsElements = document.querySelectorAll('.operator');
const floatElement = document.querySelector('.float');
const clearElement = document.querySelector('.clear');

function operate(operation) {
  const { firstOperand, operator, secondOperand } = operation;


  if (!operator || secondOperand === null) {
    return firstOperand;
  }

  const parsedFirstOperand = Number.parseFloat(firstOperand);
  const parseSecondOperand = Number.parseFloat(secondOperand);

  switch (operator) {
    case '+': {
      return parsedFirstOperand + parseSecondOperand;
    }
    case '-': {
      return parsedFirstOperand - parseSecondOperand;
    }
    case '×': {
      return parsedFirstOperand * parseSecondOperand;
    }
    case '÷': {
      return parsedFirstOperand / parseSecondOperand;
    }
    default: {
      throw new Error(`Unrecognized operator: ${operator}`);
    }
  }
}

function resetOperation() {
  operation.firstOperand = INITIAL_VALUE;
  operation.operator = null;
  operation.secondOperand = null;
}

function displayResult(operationResult) {
  calculatorDisplayElement.textContent = operationResult;
}

displayResult(operation.firstOperand);

function updateCalculatorDisplay() {
  const result = operate(operation);

  displayResult(result);

  console.log({ operation });
  return result;
}

clearElement.addEventListener('click', () => {
  resetOperation();
  updateCalculatorDisplay();
})


numberElements.forEach(num => {
  num.addEventListener('click', () => {
    const newNum = num.textContent;

    if (!operation.secondOperand && !operation.operator) {

      if (operation.firstOperand === '0') {
        operation.firstOperand = newNum;
      } else {
        operation.firstOperand += newNum;
      }
      displayResult(operation.firstOperand);
    } else {
      if (!operation.secondOperand) {
        operation.secondOperand = newNum;
      } else {
        operation.secondOperand += newNum;
      }
      displayResult(operation.secondOperand);
    }
  });
});

floatElement.addEventListener('click', () => {
  const { firstOperand, operator, secondOperand } = operation;

  if (operator && !secondOperand) {
    return;
  }

  if (firstOperand && !operator && !firstOperand.includes('.')) {
    operation.firstOperand += '.';
    updateCalculatorDisplay();
    return;
  }

  if (secondOperand && !secondOperand.includes('.')) {
    operation.secondOperand += '.';
    updateCalculatorDisplay();
    return;
  }

});

operatorsElements.forEach(operator => {
  operator.addEventListener('click', () => {

    if (operation.secondOperand) {
      operation.operator = operator.textContent;
      const newFirstOperand = updateCalculatorDisplay();
      operation.firstOperand = newFirstOperand;
      operation.operator = null;
      operation.secondOperand = null;
    } else {
      operation.operator = operator.textContent;
    }
  });
});
