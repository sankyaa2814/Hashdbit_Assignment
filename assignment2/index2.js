function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return "Error: Division by zero";
            }
            break;

        default:
            return "Invalid operator";
    }

    return result;
}
// Example usage
console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '-')); // 5
console.log(calculate(10, 5, '*')); // 50
console.log(calculate(10, 5, '/')); // 2