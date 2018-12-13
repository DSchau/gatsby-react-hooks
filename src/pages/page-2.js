import React, { useState } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

function SecondPage() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <p>Hey look, hooks are broken here!</p>
      <div>
        <p>
          <b>Count: {count}</b>
        </p>
        <button onClick={() => setCount(count + 1)}> +1</button>
        <button onClick={() => setCount(count - 1)}> -1</button>
      </div>
      <br />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage