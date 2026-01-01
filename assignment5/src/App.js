import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleOperation = (op) => {
    const a = Number(num1);
    const b = Number(num2);

    switch (op) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "%":
        b === 0 ? setResult("Error") : setResult(a % b);
        break;
      default:
        setResult("Invalid");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {result !== "" ? result : "0"}
      </div>

      <div className="inputs">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
        />
      </div>

      <div className="buttons">
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>×</button>
        <button onClick={() => handleOperation("%")}>%</button>
      </div>
    </div>
  );
}

export default Calculator;
