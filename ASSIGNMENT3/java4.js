let str = "India is my beautiful motherland";

// Convert string to lowercase
str = str.toLowerCase();

let vowels = 0;
let consonants = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= 'a' && ch <= 'z') {
        if ('aeiou'.includes(ch)) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("String:", str);
console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
