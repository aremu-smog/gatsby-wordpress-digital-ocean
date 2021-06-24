/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { slash } = require("gatsby-core-utils")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Blog Posts
  const {
    data: {
      allWpPost: { nodes: allPosts },
    },
  } = await graphql(
    `
      query {
        allWpPost {
          nodes {
            uri
            id
          }
        }
      }
    `
  )

  // Blog Post Single Page
  const postPageTemplate = path.resolve("./src/components/blog/single/index.js")

  allPosts.forEach((post, index) => {
    createPage({
      path: post.uri,
      component: slash(postPageTemplate),
      context: {
        id: post.id,
      },
    })
  })
}
