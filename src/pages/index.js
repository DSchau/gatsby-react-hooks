import React, { useState } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Counter from '../components/counter'

function IndexPage() {
  const [name, setName] = useState('1234')
  return (
    <Layout>
    <h1>Hi people</h1>
    <input value={name} onChange={ev => setName(ev.target.value)} />
    <p>Welcome to your new Gatsby site, {name}</p>
    <p>Now go build something great.</p>
    <Counter />
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  )
}

export default IndexPage
