const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// You can delete this file if you're not using it
exports.onCreateNode = function onCreateNode ({ actions: { createNodeField }, node, getNode }) {
  switch (node.internal.type) {
    case 'MarkdownRemark':
      const slug = createFilePath({
        node,
        getNode,
        basePath: path.resolve('content')
      })
      createNodeField({
        node,
        name: 'slug',
        value: slug
      })
      break;
    default:
      break;
  }
}

exports.createPages = async function createPages({ actions: { createPage }, graphql }) {
  const data = await graphql(`
    {
      posts:allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    .then(result => result.data)

  const blogPostTemplate = path.resolve('src/templates/blog-post.js')

  data.posts.edges.forEach(({ node }) => {
    const { slug } = node.fields
    createPage({
      component: blogPostTemplate,
      path: slug,
      context: {
        slug
      }
    })
  })
}