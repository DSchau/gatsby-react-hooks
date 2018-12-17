import React, { useState } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

function SecondPage() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <SEO title="Page two" description="The second page, of course!" />
      <p>Hey look, hooks work here too! <span role="img" aria-label="Tada emoji">🎉</span></p>
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
