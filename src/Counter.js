import React, { useState, Fragment } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (aumentar) => {
    if (aumentar) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <Fragment>
      <div className="btn-container">
        <button className="btn" onClick={() => handleClick(true)}>
          Aumentar
        </button>
        <button className="btn" onClick={() => handleClick(false)}>
          Disminuir
        </button>
      </div>
      <p>Nuestro contador es {count}</p>
    </Fragment>
  );
};

export default Counter;
