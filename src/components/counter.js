import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(10)
  return (
    <div>
      <p>
        <b>Count: {count}</b>
      </p>
      <button onClick={() => setCount(count + 1)}> +1</button>
      <button onClick={() => setCount(count - 1)}> -1</button>
    </div>
  );
}

export default Counter