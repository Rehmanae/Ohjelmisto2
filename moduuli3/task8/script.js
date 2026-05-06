const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const operation = document.querySelector("#operation");
const button = document.querySelector("#btn");
const result = document.querySelector("#result");

button.addEventListener("click", function() {
  const a = Number(num1.value);
  const b = Number(num2.value);

  let answer;

  if (operation.value === "add") {
    answer = a + b;
  } else if (operation.value === "sub") {
    answer = a - b;
  } else if (operation.value === "mul") {
    answer = a * b;
  } else if (operation.value === "div") {
    answer = a / b;
  }

  result.innerHTML = answer;
});
