import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Emoji = (props) => <span role="img" {...props} style={{ display: 'inline-block', fontSize: 48, margin: '1rem 0.25rem' }}>{props.children}</span>

/* eslint-disable jsx-a11y/accessible-emoji */
function BlogPost({ data }) {
  const [liked, setLiked] = useState(null)
  const { post } = data
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <h3>Did you like this post?</h3>
      {
        liked === null ? (
          <>
            <Emoji aria-label="Yes - I liked this post" onClick={() => setLiked(true)}>👍</Emoji>
            <Emoji aria-label="No - I did not like this post" onClick={() => setLiked(false)}>👎</Emoji>
          </>
        ) : (
          <p>{liked === true ? 'Glad to hear it!' : 'Sorry to hear that!'}</p>
        )
      }
    </Layout>
  )
}

export default BlogPost

export const blogPostQuery = graphql`
  query GetBlogPostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
      }
    }
  }
`
