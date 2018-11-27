import React, { useState } from 'react'

function Counter() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        <b>Count: {value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
}

export default Counter