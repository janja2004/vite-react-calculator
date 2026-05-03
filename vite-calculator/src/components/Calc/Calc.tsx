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

  const parseNumbers = (): [number, number] => 
  {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) 
    {
      throw new Error("Please enter valid numbers in both fields.");
    }

    return [a, b];
  };

  const handleOperation = (operation: Operation) => 
  {
    const [a, b] = parseNumbers();
    const res = operation(a, b);
    setResult(res);
  };

  const handleReset = () => 
  {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    <div className="calculator">
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