// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(number1, operator, number2) {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            // if(number2 === 0){
            //     return "Error: Division by zero"
            // }
            return number2 !== 0 ? number1/number2 : "Error: Division by zero"
        default:
            return "Error: Invalid operation";
    }
}

const result = calculator(4, "*", 10);
console.log(result);