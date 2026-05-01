import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter operator (+, -, *, /): ", (op) => {
    rl.question("Enter second number: ", (num2) => {

      num1 = Number(num1);
      num2 = Number(num2);

      let result;

      if (op === "+") result = num1 + num2;
      else if (op === "-") result = num1 - num2;
      else if (op === "*") result = num1 * num2;
      else if (op === "/") result = num1 / num2;
      else result = "Invalid operator";

      console.log("Result:", result);
      rl.close();
    });
  });
});