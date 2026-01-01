function repeatedDigitSum(num) {
    while (num >= 10) { // repeat until number is single-digit
        let sum = 0;
        while (num > 0) {
            sum += num % 10; // add last digit
            num = Math.floor(num / 10); // remove last digit
        }
        num = sum;
    }
    return num;
}

// Example usage
console.log(repeatedDigitSum(456)); // 6
console.log(repeatedDigitSum(98765)); // 8
