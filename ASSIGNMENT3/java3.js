let string = 'INDIA';

// Convert string to array
let arr = string.split('');

// Remove 'IA' and insert 'ONESIA'
arr.splice(2, 3, 'O', 'N', 'E', 'S', 'I', 'A');

// Convert back to string
let output = arr.join('');

console.log(output); // INDONESIA
