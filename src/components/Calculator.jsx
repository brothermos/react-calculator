import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
   const [inputValue, setInputValue] = useState("0");
    
   const display = (value) => {
      // inputvalue มีค่าเท่ากับ 0 มั้ยถ้า มีให้ ใช้ value
      if (inputValue.toString().charAt(0) === "0") {
         setInputValue(value);
      } else {
         setInputValue(inputValue + value);
      }
   };

   // รีเซ็ตให้ค่าเป็น 0
   const reset = () => {
      setInputValue("0");
   };

   // ฟังก์ชั่นคำนวณ
   const calculate = () => {
      let result = eval(inputValue);
      setInputValue(result);
   };

   return (
      <div className="calculator-container">
         <div className="calculator-display">
            <h1>{inputValue}</h1>
         </div>
         <div className="calculator-button">
            <button className="operator" onClick={() => display("+")}>
               +
            </button>
            <button className="operator" onClick={() => display("-")}>
               -
            </button>
            <button className="operator" onClick={() => display("*")}>
               x
            </button>
            <button className="operator" onClick={() => display("/")}>
               ÷
            </button>
            <button onClick={() => display("7")}>7</button>
            <button onClick={() => display("8")}>8</button>
            <button onClick={() => display("9")}>9</button>
            <button onClick={() => display("4")}>4</button>
            <button onClick={() => display("5")}>5</button>
            <button onClick={() => display("6")}>6</button>
            <button onClick={() => display("1")}>1</button>
            <button onClick={() => display("2")}>2</button>
            <button onClick={() => display("3")}>3</button>
            <button onClick={() => display(".")}>.</button>
            <button onClick={() => display("0")}>0</button>
            <button className="clear-btn" onClick={reset}>
               C
            </button>
            <button className="equal-btn operator" onClick={calculate}>
               =
            </button>
         </div>
      </div>
   );
};

export default Calculator;
