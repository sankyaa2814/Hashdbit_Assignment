// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  // Theme state
  const [theme, setTheme] = useState("dark");

  // Toggle function
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Arrays & Objects
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
  const numbers = [1, 2, 3, 4, 5];
  const person = { name: "Sanket", age: 25, occupation: "Developer" };

  // Functions
  const getSecondFruit = () => fruits[1];
  const pushAndPop = (arr) => {
    arr.push("New Element");
    arr.pop();
    return arr;
  };
  const squareNumbers = (arr) => arr.map((num) => num * num);
  const filterOddNumbers = (arr) => arr.filter((num) => num % 2 !== 0);
  const greetPerson = (obj) =>
    `Hello, my name is ${obj.name}, I am ${obj.age} years old and I work as a ${obj.occupation}.`;
  const rectangleArea = (rect) => rect.width * rect.height;
  const getObjectKeys = (obj) => Object.keys(obj);
  const mergeObjects = (obj1, obj2) => Object.assign({}, obj1, obj2);
  const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className={`container ${theme}`}>
      <h1>JS Practice 1 – Delta 🎬✨</h1>

      {/* Theme Toggle Button */}
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          Switch to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>

      <div className="output">
        <h2>Second Fruit</h2>
        <p>{getSecondFruit()}</p>
      </div>

      <div className="output">
        <h2>Push & Pop</h2>
        <p>{pushAndPop(["A", "B", "C"]).join(", ")}</p>
      </div>

      <div className="output">
        <h2>Squared Numbers</h2>
        <p>{squareNumbers(numbers).join(", ")}</p>
      </div>

      <div className="output">
        <h2>Odd Numbers</h2>
        <p>{filterOddNumbers(numbers).join(", ")}</p>
      </div>

      <div className="output">
        <h2>Greeting</h2>
        <p>{greetPerson(person)}</p>
      </div>

      <div className="output">
        <h2>Rectangle Area</h2>
        <p>{rectangleArea({ width: 10, height: 5 })}</p>
      </div>

      <div className="output">
        <h2>Object Keys</h2>
        <p>{getObjectKeys(person).join(", ")}</p>
      </div>

      <div className="output">
        <h2>Merged Objects</h2>
        <p>{JSON.stringify(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }))}</p>
      </div>

      <div className="output">
        <h2>Sum of Numbers</h2>
        <p>{sumArray(numbers)}</p>
      </div>
    </div>
  );
}

export default App;
