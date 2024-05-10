import React, { useState } from "react";

function Plusbtn() {
  const [count, setState] = useState(0);

  function increase() {
    setState(count + 1);
  }

  function decrease() {
    setState(count - 1);
  }

  return (
    <div id="plus_and-minuse-container">
      <h1>{count}</h1>
      <div id="plus_and-minuse-btn">
        <button className="btn_plusor_minuse" onClick={increase}>
          +
        </button>
        <button className="btn_plusor_minuse" onClick={decrease}>
          -
        </button>
      </div>
    </div>
  );
}
export default Plusbtn;
