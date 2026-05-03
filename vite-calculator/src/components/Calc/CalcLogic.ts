import type { Operation } from "../../types/Calc";

export const add: Operation = (a, b) => a + b;

export const subtract: Operation = (a, b) => a - b;

export const multiply: Operation = (a, b) => a * b;

export const divide: Operation = (a, b) => 
{
  if (b === 0) 
  {
    return NaN; 
  }
  return a / b;
};