import React, { useState } from 'react';
import './Calculator.scss';
import calculate from '../logic/calculate';

function CalculatorBody() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const clickHandler = (item) => {
    const output = calculate({ total, next, operation }, item.target.textContent);
    setNext(output.next);
    setOperation(output.operation);
    setTotal(output.total);
  };
  return (
    <div className="calculator-container">
      <h2 className="calc-output">
        {total}
        {operation}
        {next}
      </h2>
      <div className="calculator-btns-container">
        <div className="btn-container">
          <button type="button" onClick={clickHandler}>AC</button>
          <button type="button" onClick={clickHandler}>+/-</button>
          <button type="button" onClick={clickHandler}>%</button>
          <button type="button" onClick={clickHandler} className="operator">÷</button>
          <button type="button" onClick={clickHandler}>7</button>
          <button type="button" onClick={clickHandler}>8</button>
          <button type="button" onClick={clickHandler}>9</button>
          <button type="button" onClick={clickHandler} className="operator">x</button>
          <button type="button" onClick={clickHandler}>4</button>
          <button type="button" onClick={clickHandler}>5</button>
          <button type="button" onClick={clickHandler}>6</button>
          <button type="button" onClick={clickHandler} className="operator">-</button>
          <button type="button" onClick={clickHandler}>1</button>
          <button type="button" onClick={clickHandler}>2</button>
          <button type="button" onClick={clickHandler}>3</button>
          <button type="button" onClick={clickHandler} className="operator">+</button>
          <button type="button" onClick={clickHandler} className="zero-btn">0</button>
          <button type="button" onClick={clickHandler}>.</button>
          <button type="button" onClick={clickHandler} className="operator">=</button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorBody;
