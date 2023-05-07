let operation = prompt("Введіть операцію (add, sub, mult, div):");
let num1 = Number(prompt("Введіть перше число:"));
let num2 = Number(prompt("Введіть друге число:"));
let result;

switch (operation) {
  case "add":
    result = num1 + num2;
    alert(`${num1} + ${num2} = ${result}`);
    break;
  case "sub":
    result = num1 - num2;
    alert(`${num1} - ${num2} = ${result}`);
    break;
  case "mult":
    result = num1 * num2;
    alert(`${num1} * ${num2} = ${result}`);
    break;
  case "div":
    if (num2 !== 0) {
      result = num1 / num2;
      alert(`${num1} / ${num2} = ${result}`);
    } else {
      alert("Ділення на нуль неможливе!");
    }
    break;
  default:
    alert("Ви ввели некоректні значення!");
}
