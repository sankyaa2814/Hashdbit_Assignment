function countWords(paragraph) {
    // Remove extra spaces and split by one or more spaces
    const words = paragraph.trim().split(/\s+/);
    return words.length;
}

// Example usage
let paragraph = "India is a beautiful country with diverse culture.";
console.log(countWords(paragraph)); // 8
