import { useState } from "react";
import "./Calc.css";
import {
  add,
  subtract,
  multiply,
  divide,
} from "./CalcLogic";
import type { Operation } from "../../types/Calc";

const Calc = () => 
{
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleOperation = (operation: Operation) => 
  {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    const res = operation(a, b);

    if (isNaN(res)) setResult(null);
    else setResult(res);
  };

  const handleReset = () => 
  {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    <div className="calculator">
      <h1 style={{ textAlign: "center" }}>Mini Calculator</h1>
      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons">
        <button onClick={() => handleOperation(add)}>+</button>
        <button onClick={() => handleOperation(subtract)}>-</button>
        <button onClick={() => handleOperation(multiply)}>*</button>
        <button onClick={() => handleOperation(divide)}>/</button>
      </div>

      <div className="result">
        Result: {result !== null ? result : "-"}
      </div>

      <div>
        <button className="reset-button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Calc;