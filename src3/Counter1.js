import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter1() {
  const initialCount = 1;
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
		<br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}

export default Counter1;
