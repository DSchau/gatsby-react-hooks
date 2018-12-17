import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Counter from '../components/counter'
import SEO from '../components/seo'

function IndexPage({ data }) {
  const [name, setName] = useState('1234')
  return (
    <Layout>
      <SEO description="Gatsby + Hooks: a perfect pairing!" title="React Hooks + Gatsby" />
      <h1>Hi people</h1>
      <input value={name} onChange={ev => setName(ev.target.value)} />
      <p>Welcome to your new Gatsby site, {name}</p>
      <p>Now go build something great, please.</p>
      <Counter />
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <h1>Blog Posts</h1>
      <ul>
        {data.posts.edges.map(({ node }) => (
          <li key={node.fields.slug}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    posts: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
