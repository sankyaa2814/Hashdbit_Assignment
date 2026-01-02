// ======================================
//Variable Declaration using let, const, and var
// ======================================

function variableDeclarations() {
  var x = 10;      // function scoped
  let y = 20;      // block scoped
  const z = 30;    // block scoped, cannot be reassigned
  console.log("Program 1 Output:");
  console.log(x, y, z);
}

variableDeclarations();
// ======================================
// 2️⃣ Array of Fruits & Return Second Fruit
// ======================================

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit() {
  return fruits[1];
}
console.log("Program 2 Output:");


console.log(getSecondFruit());
// ======================================
// 3.Add & Remove Element using push() and pop()
// ======================================

function modifyArray(arr) {
  arr.push("New Item"); // adds element at end
  arr.pop();            // removes last element
  return arr;
}
console.log("Program 3 Output:");

console.log(modifyArray(["A", "B", "C"]));
// ======================================
// 4️⃣ Square Numbers using map()
// ======================================

const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
  return arr.map(num => num * num);
}
console.log("Program 4 Output:");
console.log(squareNumbers(numbers));
// ======================================
// 5️⃣ Filter Odd Numbers using filter()
// ======================================

function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log("Program 5 Output:");
console.log(getOddNumbers([1, 2, 3, 4, 5, 6]));
// ======================================
// 6️⃣ Object & Greeting Message
// ======================================

const person = {
  name: "Atharva",
  age: 21,
  occupation: "Computer Engineering Student"
};

function greetPerson(obj) {
  console.log("Program 6 Output:");
  console.log(
    `Hello, my name is ${obj.name}. I am ${obj.age} years old and I am a ${obj.occupation}.`
  );
}

greetPerson(person);
// ======================================
// 7️⃣ Calculate Area of Rectangle
// ======================================

function calculateArea(rectangle) {
  return rectangle.width * rectangle.height;
}
console.log("Program 8 Output:");
console.log(calculateArea({ width: 10, height: 5 }));
// ======================================
// 8️⃣ Get Object Keys using Object.keys()
// ======================================

function getObjectKeys(obj) {
  return Object.keys(obj);
}

console.log(getObjectKeys({ name: "John", age: 25, city: "Mumbai" }));
// ======================================
// 9️⃣ Merge Two Objects using Object.assign()
// ======================================

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log("Program 9 Output:");
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));
// ======================================
// 🔟 Calculate Sum using reduce()
// ======================================

function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}
console.log("Program 10 Output:");
console.log(sumArray([10, 20, 30, 40]));