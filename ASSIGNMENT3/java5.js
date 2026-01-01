function correctfn(sentence, wrongWord, correctWord) {
    // Use global flag 'g' to replace all occurrences
    const regex = new RegExp(wrongWord, 'g');
    return sentence.replace(regex, correctWord);
}

// Example usage
let sentence = "I love my Inida very much.";
let corrected = correctfn(sentence, "Inida", "India");

console.log(corrected); // I love my India very much.
