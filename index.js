const numberElements = document.querySelectorAll(".btn-number");
const calculatorDisplayElement = document.querySelector("#calculator-display");

numberElements.forEach((element) =>
  element.addEventListener("click", (event) => {
    calculatorDisplayElement.textContent += event.target.textContent;
  })
);
