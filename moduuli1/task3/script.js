const n1 = Number(prompt("Enter first number:"));
const n2 = Number(prompt("Enter second number:"));
const n3 = Number(prompt("Enter third number:"));

const sum = n1 + n2 + n3;
const product = n1 * n2 * n3;
const average = sum / 3;

document.write("Sum: " + sum + "<br>");
document.write("Product: " + product + "<br>");
document.write("Average: " + average);