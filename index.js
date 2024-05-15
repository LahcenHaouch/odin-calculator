const INITIAL_VALUE = "0";

const operation = {
  firstOperand: INITIAL_VALUE,
  operator: null,
  secondOperand: null,
};

const calculatorDisplayElement = document.querySelector("#calculator-display");
const numberElements = document.querySelectorAll(".num");
const operatorsElements = document.querySelectorAll(".operator");
const floatElement = document.querySelector(".float");
const equalElement = document.querySelector(".equal");
const clearElement = document.querySelector(".clear");

function operate(operation) {
  const { firstOperand, operator, secondOperand } = operation;

  if (!operator || secondOperand === null) {
    return firstOperand;
  }

  const parsedFirstOperand = Number.parseFloat(firstOperand);
  const parseSecondOperand = Number.parseFloat(secondOperand);

  switch (operator) {
    case "+": {
      return parsedFirstOperand + parseSecondOperand;
    }
    case "-": {
      return parsedFirstOperand - parseSecondOperand;
    }
    case "×": {
      return parsedFirstOperand * parseSecondOperand;
    }
    case "÷": {
      if (parseSecondOperand === 0) {
        throw new Error("no no no ;)");
      }
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

function calculateAndDisplay() {
  try {
    operation.firstOperand = operate(operation);
    operation.operator = null;
    operation.secondOperand = null;

    displayResult(operation.firstOperand);
  } catch (error) {
    displayResult(error.message);
    resetOperation();
  }
}

clearElement.addEventListener("click", () => {
  resetOperation();
  displayResult(operation.firstOperand);
});

numberElements.forEach((num) => {
  num.addEventListener("click", () => {
    const newNum = num.textContent;

    if (operation.secondOperand === null) {
      if (!operation.operator) {
        if (operation.firstOperand === INITIAL_VALUE) {
          operation.firstOperand = newNum;
        } else {
          operation.firstOperand += newNum;
        }
        displayResult(operation.firstOperand);
      } else {
        operation.secondOperand = newNum;
        displayResult(operation.secondOperand);
      }
    } else {
      operation.secondOperand += newNum;
      displayResult(operation.secondOperand);
    }
  });
});

operatorsElements.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operation.secondOperand === null) {
      operation.operator = operator.textContent;
      return;
    } else {
      calculateAndDisplay();
      operation.operator = operator.textContent;
    }
  });
});

floatElement.addEventListener("click", () => {
  const { firstOperand, operator, secondOperand } = operation;

  if (operator && !secondOperand) {
    return;
  }

  if (firstOperand && !operator && !firstOperand.includes(".")) {
    operation.firstOperand += ".";
    displayResult(operation.firstOperand);
    return;
  }

  if (secondOperand && !secondOperand.includes(".")) {
    operation.secondOperand += ".";
    displayResult(operation.secondOperand);
  }
});

equalElement.addEventListener("click", () => {
  const { operator, secondOperand } = operation;

  if (!secondOperand || !operator) {
    return;
  }

  calculateAndDisplay();
});
